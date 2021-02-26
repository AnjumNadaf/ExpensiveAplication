sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("expensesapplication.controller.chartView", {
			onInit: function () {

                this.oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
				debugger;
				var oJSONModel9 = new JSONModel();

				var that=this;
				that.getOwnerComponent().setModel(oJSONModel9,"myModel9");
				  var sURL9 = "/sap/opu/odata/sap/ZEXPENSES_C_VIEW_CDS/";
				  var oModel9 = new sap.ui.model.odata.ODataModel(sURL9,true);
				  oModel9.read("/ZEXPENSES_C_VIEW",{
					 success:function(data){
					  oJSONModel9.setData({
						 Expenses9:data.results
						
					  });
					  console.log(data.results);
					  debugger
					  that.getOwnerComponent().setModel(oJSONModel9,"myModel9");
					//   alert("Success")
					//   var datatable =  that.getOwnerComponent().setModel(oJSONModel2,"myModel4");
					//   that.empSelected();
					 //  console.log(datatable);
					 },error:function(){
						 alert("Error");
					 }
				 });
				
				
			},
			onChange3:function(oEvent){
                debugger;
                var stateOfText = oEvent.getSource().getState();
                if(stateOfText == false){
                    this.getView().byId("idVizFrameL").setVisible(false);
                    this.getView().byId("idVizFrameB").setVisible(true);
                }else if(stateOfText == true){
                    this.getView().byId("idVizFrameL").setVisible(true);
                    this.getView().byId("idVizFrameB").setVisible(false);
                }

            },

			onLogout:function(){
				debugger;
				this.oRouter.navTo("RouteView1");

			}
		});
	});
