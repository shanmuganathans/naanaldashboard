 /*
 * Copyright 2016 Naanal technologies Pvt Limited
 * (c) Copyright 2015 ThoughtWorks Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function () {
  'use strict';

  /**
   * @ngdoc controller
   * @name RallyTestMaketestController
   * @description
   * The `RallyTestMaketestController` controller provides functions for
   * configuring the Scenarios step of the Launch Instance Wizard.
   *
   */
  angular
    .module('horizon.dashboard.overview.workflow.rally-test')
    .controller('RallyTestMaketestController', RallyTestMaketestController);

  RallyTestMaketestController.$inject = [
    '$scope',
    'RallyTestModel'
  ];

  function RallyTestMaketestController($scope,RallyTestModel) {
    var ctrl = this;
   ctrl.runTest = runTest;
//   ctrl.viewhtml = viewhtml;
   function runTest(){
    $scope.model.runRally();
   }
/**   function viewhtml () {
    $scope.model.viewhtml();
   }**/
  }
})();
