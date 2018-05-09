module.exports = {
    socketFindResult: async function(req, res) {
        
        let type = req.body.type;

        let results = await Result.find({
            where: {
                name: {
                    contains: req.body.result
                },
                type: type
            }
        })
        sails.sockets.broadcast(sails.sockets.getId(req), 'findResult', results);
        res.ok();
    },
    get: async function(req, res) {
        let result = await Result.findOne({id: req.params.id});
        let formattedSolution = result.solution.split('+').join('\n');
        result.solution = formattedSolution;
        res.json({
          result: result
        })
    },
    updateBenh: async function(req, res) {
        req.file('img').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/images')
        },async function (err, uploadedFiles) {
            if (err) return res.serverError(err);
          
            if (uploadedFiles[0]) {
                let fd = uploadedFiles[0].fd;
                let url = '/images/' + fd.substring(fd.length - 40);
                
                await Result.update({id: req.body.id})
                .set({
                    name: req.body.name,
                    solution: req.body.solution.split('\n').join('+'),
                });
                let newUrl = await Url.create({
                    value: url,
                }).fetch();

                await Result.addToCollection(req.body.id, 'urls').members([newUrl.id]);
            } else {
                await Result.update({id: req.body.id})
                .set({
                    name: req.body.name,
                    solution: req.body.solution.split('\n').join('+'),

                })
            }
            res.ok()
        });
        
        
    },
    updateGiong: async function(req, res) {
        req.file('img').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/images')
        },async function (err, uploadedFiles) {
            if (err) return res.serverError(err);
          
            if (uploadedFiles[0]) {
                let fd = uploadedFiles[0].fd;
                let url = '/images/' + fd.substring(fd.length - 40);
                await Result.update({id: req.body.id})
                .set({
                    name: req.body.name,
                    solution: req.body.solution.split('\n').join('+'),
                });
                let newUrl = await Url.create({
                    value: url,
                }).fetch();

                await Result.addToCollection(req.body.id, 'urls').members([newUrl.id]);
            } else {
                await Result.update({id: req.body.id})
                .set({
                    name: req.body.name,
                    solution: req.body.solution.split('\n').join('+'),
                })
            }
            res.ok()
        });
        
    }
}