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

  'post /capNhatContent' : 'ResultController.capNhatContent',

  'get /expert' : {action: 'expert-page'},

  'post /rule' : 'RuleController.create',
  'get /result/:id' : 'ResultController.get',
  'post /updateBenh': 'ResultController.updateBenh',
  'post /updateGiong': 'ResultController.updateGiong',
  //socket

  'get /findEvent' : 'EventsController.socketFindEvent',
  'get /findResult': 'ResultController.socketFindResult',
  //expert
  'get /expert' : {
    view: 'pages/expert',
  },

  //benh lua
  'get /benh' : 'ResultController.getBenh',
  'get /benhs' : 'ResultController.getBenhs',
  'get /luatBenhs' : 'RuleController.getLuatBenhs',
  'get /quanlybenh' : 'RuleController.quanlybenh',
  'get /themluatbenh' : {
    view: 'pages/themluatbenh'
  },
  'post /taoluatbenh' : 'RuleController.taoluatbenh',
  'post /chuandoanbenh': 'RuleController.chuanDoanBenh',
  // chon giong
  'get /giong' : 'ResultController.getGiong',
  'get /giongs' : 'ResultController.getGiongs',
  'get /luatGiongs' : 'RuleController.getLuatGiongs',
  'get /quanlygiong' : 'RuleController.quanlygiong',
  'get /themluatgiong' : {
    view: 'pages/themluatgiong'
  },
  'post /taoluatgiong' : 'RuleController.taoluatgiong',
  'post /chongionglua': 'RuleController.chonGiongLua',
  'get /nextRule' : 'RuleController.getNext',
  // su kien moi
  'get /quanlysukienmoi' : 'FactController.quanlysukienmoi',
  'get /suKienMois' : 'FactController.getSuKienMois',
  //upload image
  'post /uploadImage' : 'ResultController.addImgToResult',
  'post /themSuKienChoLuat' : 'RuleController.themSuKienChoLuat',

  //update fact contact
  'post /updateFactContact' : 'FactController.updateFactContact',
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
