/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/
  RuleController: {
    run: 'Rule/for-run',
    create: 'Rule/for-create',
    gets: 'Rule/for-gets',
  },
  EventsController: {
    socketFindEvent: 'Events/for-socket-find-event',
    
  },
  ResultController: {
    get:'Result/for-get',
    update: 'Result/for-update',
    socketFindResult: 'Result/for-socket-find-result',
  }

};
