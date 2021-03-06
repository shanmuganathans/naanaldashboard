/*
 *    (c) Copyright 2016 Rackspace US, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function() {
  'use strict';

  describe('horizon.dashboard.virtual.containers.containerRoute constant', function () {
    var baseRoute, containerRoute;

    beforeEach(module('horizon.dashboard.virtual.containers'));
    beforeEach(inject(function ($injector) {
      baseRoute = $injector.get('horizon.dashboard.virtual.containers.baseRoute');
      containerRoute = $injector.get('horizon.dashboard.virtual.containers.containerRoute');
    }));

    it('should define routes', function () {
      expect(baseRoute).toBeDefined();
      expect(containerRoute).toBeDefined();
    });
  });
})();
