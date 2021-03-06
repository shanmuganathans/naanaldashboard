/**
 * Created by Raja on 6/29/2016.
 */
(function () {
  'use strict';

  angular
    .module('horizon.dashboard.identity.workflow.edit-users', [])
    .config(config)
    .constant('horizon.dashboard.identity.workflow.edit-users.modal-spec', {
      backdrop: 'static',
      size: 'lg',
      controller: 'ModalContainerController',
      template: '<wizard class="wizard" ng-controller="EditUsersWizardController"></wizard>'
    })
    
  config.$inject = [
    '$provide',
    '$windowProvider'
  ];

  /**
   * @name config
   * @param {Object} $provide
   * @param {Object} $windowProvider
   * @description Base path for the edit-users code
   * @returns {undefined} No return value
   */
  function config($provide, $windowProvider) {
    var path = $windowProvider.$get().STATIC_URL + 'dashboard/identity/workflow/edit-users/';
    $provide.constant('horizon.dashboard.identity.workflow.edit-users.basePath', path);
  }

})();
