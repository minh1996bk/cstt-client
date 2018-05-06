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

  'post /result': 'RuleController.run',
  'get /expert' : {action: 'expert-page'},

  'post /rule' : 'RuleController.create',

  //socket

  'get /findEvent' : 'EventsController.socketFindEvent',
  'get /findResult': 'ResultController.socketFindResult',
  'get /rules' : async function(req, res) {
      // let rules = await Rule.find({}).populate('results').populate('events');
      rules = [
        {
          id: 1,
          result: {
            name: "sau cuon la"
          },
          events: [
            {
              id: 1,
              name: 'la bi cuong'
            },
            {
              id: 2,
              name: 'co sau'
            }
          ]
        }
      ]
      res.view('pages/rules', {
        rules: rules
      });
  },
  'get /events' : async function(req, res) {
      // let events = await Events.find({});
      let events = [
        {
          id: 1,
          name: 'la vang',
          results: [
            {
              id: 1,
              name: 'sau cuon la',
            },
            {
              id: 2,
              name: 'kho van'
            }
          ]
        }
      ]
      res.view('pages/events', {
        events: events
      })
  },
  'get /results' : async function(req, res) {
      // let results = await Result.find({});
      results = [
        {
          id: 1,
          name: 'sau cuon la',
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
          solution: 'phun thuoc',
        },
        {
          id: 2,
          name: 'kho la',
          solution: 'chiu'
        }
      ]
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
  }
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
