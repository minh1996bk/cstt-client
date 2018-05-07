/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/home'
  },

  'post /disease': 'RuleController.run',
  'post /planting' : 'RuleController.run',
  'get /expert' : {action: 'expert-page'},

  'post /rule' : 'RuleController.create',
  'get /result/:id' : async function(req, res) {
    let result = await Result.findOne({id: req.params.id});
    res.json({
      result: result
    })
  },
  'post /updateResult': async function(req, res) {
    await Result.update({id: req.body.id})
    .set({
      name: req.body.name,
      solution: req.body.solution,
    })
    res.ok();
  },
  //socket

  'get /findEvent' : 'EventsController.socketFindEvent',
  'get /findResult': 'ResultController.socketFindResult',
  'get /rules' : async function(req, res) {
      let rules = await Rule.find({}).populate('result').populate('events');
      
      res.view('pages/rules', {
        rules: rules
      });
  },
  'get /events' : async function(req, res) {
      let events = await Events.find({});
 
      res.view('pages/events', {
        events: events
      })
  },
  'get /results' : async function(req, res) {
      let results = await Result.find({});
      
      res.view('pages/results', {
        results: results
      });
  },
  'get /facts' : async function(req, res) {
      // let facts = await Fact.find({}).populate('events');
      let facts = [
        {
          id: 1,
          events: [
            {
              id: 1,
              name: 'la bi cuong'
            },
            {
              id: 2,
              name: 'co sau'
            }
          ],
          newevent: 'la no bi gi ay',
          contact: '09039023392'
        }
      ]
      res.view('pages/facts', {
        facts: facts
      });
  },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝



  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
