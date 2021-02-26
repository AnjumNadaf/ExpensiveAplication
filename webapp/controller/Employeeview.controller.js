sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("expensesapplication.controller.EmployeeView", {
			onInit: function () {
                this.oRouter = new sap.ui.core.UIComponent.getRouterFor(this);

				this.oRouter.attachRoutePatternMatched(this.onGetEmpData,this);


				


			},

			onGetEmpData:function(oEvent){
		     	debugger;
				 var id = oEvent.getParameter("arguments").empdd;
				 //id=id.replace('"','')
				 var oJSONModel = new JSONModel();
				var that=this
				var oModel1 = this.getOwnerComponent().getModel("myModel1").getProperty("/ZADMIN_C_VIEW");

				


				oModel1.forEach((element ,index)=> {
					if(id===element.Empid){
						oJSONModel.setData({
							ZADMIN_C_VIEW:element
						})
						debugger;
						this.getOwnerComponent().setModel(oJSONModel,"myModel2");
						this.getView().byId("ObjectPageLayout").bindElement("myModel2>/ZADMIN_C_VIEW");
						// var id3 = "Fragmentid3"
						// sap.ui.core.Fragment.byId(id3, "textid").getText();

					}
				});

				
				// var sURL = "/sap/opu/odata/sap/ZADMIN_C_VIEW_CDS";
				// var oModel = this.getOwnerComponent().getModel();
				// // new sap.ui.model.odata.ODataModel(sURL,true);
				// oModel.read('/ZADMIN_C_VIEW ('+ id +')',{
				// 	success:function(data){
				// 	 oJSONModel.setData({
				// 	   ZADMIN_C_VIEW2:data.results
				// 	 });
				// 	 that.getOwnerComponent().setModel(oJSONModel,"myModel2");
				// 	 that.getView().byId("ObjectPageLayout").bindElement("myModel2>/ZADMIN_C_VIEW2/0");

					
				// console.log(data.results);
				// 	},
				// 	error:function(e){
				// 		console.log(e)
				// 	}

				// })
debugger;
				var oJSONModel2 = new JSONModel();
				var that=this;
				  var sURL2 = "/sap/opu/odata/sap/ZEXPENSES_C_VIEW_CDS/";
				  var oModel2 = new sap.ui.model.odata.ODataModel(sURL2,true);
				  oModel2.read("/ZEXPENSES_C_VIEW",{
					 success:function(data){
					  oJSONModel2.setData({
						 Expenses2:data.results
					  });
					  console.log(data.results);
					
					  that.getOwnerComponent().setModel(oJSONModel2,"myModelE");
					//   var datatable =  that.getOwnerComponent().setModel(oJSONModel2,"myModelE");
					//   that.empSelected();
					 //  console.log(datatable);
					 }
				 });
                     
				 debugger;
				 var earry = []
				 var oModelE = this.getOwnerComponent().getModel("myModelE").getProperty("/Expenses2");
				 oModelE.forEach((element,index) => {
					if (element.Empid===id) {
						earry.push(element)
						this.getOwnerComponent().setModel(new JSONModel({Expenses3:earry}),"myModel7");

					}
				});
 

				
				


			},
			onNext:function(){
				debugger;
				this.oRouter.navTo("RouteView1");
			},

			// onRequest:function(){
			// 	debugger;
			// 	var id = Math.floor((Math.random() * 100000) + 1);
			// 	var empid = this.getView().byId("empID").getValue();
			// 	var expnsmonth = this.getView().byId("months").getSelectedItem().getText();
			// 	var expenses = this.getView().byId("expenses").getValue();
			// 	var approved = "Approved";
			// 	var rejected = "Rejected";
			// 	var expnsyear = this.getView().byId("Expnsyear").getValue();
			// 	var reason = this.getView().byId("reasonI").getValue();

			// 	var Payload = {}

			// 	Payload.Id = Math.floor((Math.random() * 100000) + 1);;
			// 	Payload.Empid = empid
			// 	Payload.Expnsmonth = expnsmonth
			// 	Payload.Expenses = expenses
			// 	Payload.Approved = "Approved"
			// 	Payload.Rejected = "Rejected"
			// 	Payload.Expnsyear =  expnsyear
			// 	Payload.Reason =  reason

			// 	var oModel = this.getView().getModel("ZEXPENSES_C_VIEW_CDS");
            //     oModel.create('/ZEXPENSES_C_VIEW', Payload,{
            //         method:"POST",
            //         success:function(oData){
            //          sap.m.MessageBox.success("Expenses Has been Sent!");
            //         },
            //         error:function(e){
            //             console.log(e);
            //             sap.m.MessageBox.error("Expenses Not Sent!");
            //         }
            //     })

				

			// },
			
			onRequest:function(){
                debugger;
                
               
                
				var id = Math.floor((Math.random() * 100000) + 1);
				
				var empid = this.getView().byId("empID").getValue();
				var expnsmonth = this.getView().byId("months").getSelectedItem().getText();
				var expenses = this.getView().byId("expenses").getValue();
				var approved = "Approved";
				var rejected = "Rejected";
				var expnsyear = this.getView().byId("Expnsyear").getValue();
				var reason = this.getView().byId("reasonI").getValue();

                 var strng= id.toString(); 
				 if(   expenses == "" &&  expnsyear == ""  &&  reason == ""){


					this.getView().byId("expenses").setValueState(sap.ui.core.ValueState.Error);
                    this.getView().byId("expenses").setValueStateText("Please Enter Expenses");

					this.getView().byId("Expnsyear").setValueState(sap.ui.core.ValueState.Error);
                    this.getView().byId("Expnsyear").setValueStateText("Please Enter Expenses Year");

					this.getView().byId("reasonI").setValueState(sap.ui.core.ValueState.Error);
                    this.getView().byId("reasonI").setValueStateText("Please Enter Reason of expenses");
                } else if(expenses == ""){
					this.getView().byId("expenses").setValueState(sap.ui.core.ValueState.Error);
                    this.getView().byId("expenses").setValueStateText("Please Enter Expenses");
				}
				
				else if (expnsyear == ""){
					this.getView().byId("Expnsyear").setValueState(sap.ui.core.ValueState.Error);
                    this.getView().byId("Expnsyear").setValueStateText("Please Enter Expenses Year");	
				}else if(reason == ""){
                    this.getView().byId("reasonI").setValueState(sap.ui.core.ValueState.Error);
                    this.getView().byId("reasonI").setValueStateText("Please Enter Reason of expenses");
				}

                else{

                    

					this.getView().byId("months").setValueState(sap.ui.core.ValueState.None);
                   
					this.getView().byId("expenses").setValueState(sap.ui.core.ValueState.None);
                    
					this.getView().byId("Expnsyear").setValueState(sap.ui.core.ValueState.None);

					this.getView().byId("reasonI").setValueState(sap.ui.core.ValueState.None);

                var payload = {
                    Id:strng,
                    Empid:empid,
                    Expnsmonth: expnsmonth,
                    Expenses:expenses,
                    Approved:approved,
                    Rejected:rejected,
                    Expnsyear:expnsyear,
                    Reason:reason
                }
                    debugger
                //var myModel = sap.ui.getCore().getModel("myModel1");
                var oModel = this.getOwnerComponent().getModel("ZEXPENSES_C_VIEW_CDS");
                oModel.create('/ZEXPENSES_C_VIEW', payload,{
                    method:"POST",
                    success:function(oData){
						// alert("Suceess");
						debugger
                     sap.m.MessageBox.success("Expenses has been Sent!");
                    

                    },
                    error:function(){
                        console.log("Error");
                        sap.m.MessageBox.error("Not Sent!");
                    }
                })

			}


            },

			changeReason:function(){
				debugger;
				var name = this.getView().byId("reasonI").getValue();
               
                if (name =="") {
                 
                 
                  this.getView().byId("reasonI").setValueState(sap.ui.core.ValueState.Error);
                this.getView().byId("reasonI").setValueStateText("Please Enter Reason of Exoenses");
            }
              else {
                 
                  this.getView().byId("reasonI").setValueState(sap.ui.core.ValueState.None);
            }


			},

			chnageExpensesyear:function(){
				debugger;
				var name = this.getView().byId("Expnsyear").getValue();
               
                if (name =="") {
                 
                 
                  this.getView().byId("Expnsyear").setValueState(sap.ui.core.ValueState.Error);
                this.getView().byId("Expnsyear").setValueStateText("Please Enter Expenses Year");
            }
              else {
                 
                  this.getView().byId("Expnsyear").setValueState(sap.ui.core.ValueState.None);
            }


			},
			chnageExpenses:function(){
				debugger;
				var name = this.getView().byId("expenses").getValue();
               
                if (name =="") {
                 
                 
                  this.getView().byId("expenses").setValueState(sap.ui.core.ValueState.Error);
                this.getView().byId("expenses").setValueStateText("Please Enter Expenses");
            }
              else {
                 
                  this.getView().byId("expenses").setValueState(sap.ui.core.ValueState.None);
            }

			},


			onConfirm:function(oEvent){
				debugger;

				if(!this._oDialog3){
					var id3 = "Fragmentid3"
					this._oDialog3 = new sap.ui.xmlfragment(id3,"expensesapplication.view.ConfirmMessage",this);
					this.getView().addDependent(this._oDialog3);
					// this.getView().addDependent(this._oDialog2);
				}

				this._oDialog3.open();
             
				




			},

			onConfirmClose:function(){
				debugger;
				this._oDialog3.close();
			}

			
		});
	});
