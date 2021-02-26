sap.ui.define([
	"sap/ui/core/mvc/Controller",
	
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel,MessageBox) {
		"use strict";

		return Controller.extend("expensesapplication.controller.Login", {
			onInit: function () {
				debugger;
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				
				
                var oJSONModel = new JSONModel();
                 this.getOwnerComponent().setModel(oJSONModel,"myModel1");
                 var sURL = "/sap/opu/odata/sap/ZADMIN_C_VIEW_CDS/";
                 var oModel = new sap.ui.model.odata.ODataModel(sURL,true);
                 oModel.read("/ZADMIN_C_VIEW",{
                     success:function(data){
                      oJSONModel.setData({
                        ZADMIN_C_VIEW:data.results
                      });
					  console.log(data.results)
                     },
					 error:function(error){
						 console.log(error)
					 }
                 })
                
			},

			onLogin:function(){
				debugger;

                var name = this.getView().byId("inputid1").getValue();
				var password = this.getView().byId("inputid2").getValue();

				if(name == "" && password ==""){
                    this.getView().byId("inputid1").setValueState(sap.ui.core.ValueState.Error);
					this.getView().byId("inputid1").setValueStateText("Please Enter Id");

					this.getView().byId("inputid2").setValueState(sap.ui.core.ValueState.Error);
                    this.getView().byId("inputid2").setValueStateText("Please Enter Password");


				}
				else if(name == ""){
					this.getView().byId("inputid1").setValueState(sap.ui.core.ValueState.Error);
					this.getView().byId("inputid1").setValueStateText("Please Enter Employee Id");
				}else if(password ==""){

					this.getView().byId("inputid2").setValueState(sap.ui.core.ValueState.Error);
                    this.getView().byId("inputid2").setValueStateText("Please Enter Employee Password");
				}
				
				
				
				else{

                    this.getView().byId("inputid1").setValueState(sap.ui.core.ValueState.None);

					this.getView().byId("inputid2").setValueState(sap.ui.core.ValueState.None);

				
				
				
				var oModel1 = this.getOwnerComponent().getModel("myModel1").getProperty("/ZADMIN_C_VIEW");


				if(name == "admin" && password == "admin" ){
					this.oRouter.navTo("RouteView3");
				}else{

					oModel1.forEach((element ,index)=> {
						if(name==element.Empfirstname && password == element.Password){
							var id = element.Empid;

						   this.oRouter.navTo("RouteView4",{
							   empdd:id
						   });
	
						}
					});
					
				}
				

			}
				
				


			},

			changeName1:function(){
				debugger;
				var name = this.getView().byId("inputid1").getValue();
               
                if (name =="") {
                 
                 
                  this.getView().byId("inputid1").setValueState(sap.ui.core.ValueState.Error);
                this.getView().byId("inputid1").setValueStateText("Please Enter Id");
            }
              else {
                 
                  this.getView().byId("inputid1").setValueState(sap.ui.core.ValueState.None);
            }


			},

			changeName2:function(){
				debugger;

				var name = this.getView().byId("inputid2").getValue();
               
                if (name =="") {
                 
                 
                  this.getView().byId("inputid2").setValueState(sap.ui.core.ValueState.Error);
                this.getView().byId("inputid2").setValueStateText("Please Enter Password");
            }
              else {
                 
                  this.getView().byId("inputid2").setValueState(sap.ui.core.ValueState.None);
            }


			}


		});
	});
