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
    addImgToResult: async function(req, res) {
        req.file('img').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/images')
        },async function (err, uploadedFiles) {
            if (err) return res.serverError(err);
    
            if (uploadedFiles[0]) {
                let fd = uploadedFiles[0].fd;
                let url = '/images/' + fd.substring(fd.length - 40);
                let newUrl = await Url.create({
                    value: url,
                }).fetch();

                await Result.addToCollection(req.body.resultId, 'urls').members([newUrl.id]);
                res.json({
                    success: true,
                    url: url
                })
            } else {
                return res.json({
                    success: false
                })
            }    
        });
    },
    capNhatContent: async function(req, res) {
        await Result.update({id: req.body.resultId})
        .set({
            solution: req.body.solution
        })
        return res.json({
            success: true
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
        
    },
    getBenhs: async function(req, res) {
        let benhs = await Result.getBenhs();
        return res.json({
            success: true,
            benhs: benhs
        })
    },
    getGiongs: async function(req, res) {
        let giongs = await Result.getGiongs();
        return res.json({
            success: true,
            giongs: giongs
        })
    },
    getBenh: async function(req, res) {
        let benh = await Result.findOne({
            id: req.query.id,
            type: 'benh',
        }).populate('events').populate('urls').populate('rules');
        benh.urls = benh.urls.map(url => url.value);
        benh.events = benh.events.map(event => event.name);
        benh.ruleCount = benh.rules.length;
        delete benh.rules;
        return res.json({
            success: true,
            benh: benh,
        })
    },
    getGiong: async function(req ,res) {
        let giong = await Result.findOne({
            id: req.query.id,
            type: 'giong',
        }).populate('events').populate('urls');
        giong.urls = giong.urls.map(url => url.value);
        giong.events = giong.events.map(event => event.name);
      
        return res.json({
            success: true,
            giong: giong,
        })
    }
}