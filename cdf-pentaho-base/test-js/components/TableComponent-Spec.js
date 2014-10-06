/*!
 * Copyright 2002 - 2014 Webdetails, a Pentaho company.  All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to  http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or  implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

define(["cdf/Dashboard", "cdf/components/TableComponent"],
  function(Dashboard, TableComponent) {

  /**
   * ## The Table Component
   */
  describe("The Table Component #", function() {

    var myDashboard = new Dashboard();

    myDashboard.init();

    var tableComponent = new TableComponent(myDashboard, {
      name: "tableComponent",
      type: "tableComponent",
      htmlObject: 'sampleObject',
      executeAtStart: true
    });

    myDashboard.addComponent(tableComponent);

    /**
     * ## The Table Component # Update Called
     */
    it("Update Called", function(done) {
      spyOn(tableComponent, 'update').and.callThrough();
      myDashboard.update(tableComponent);
      setTimeout(function() {
        expect(tableComponent.update).toHaveBeenCalled();
        done();
      }, 100);
    });
  });
});