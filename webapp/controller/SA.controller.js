sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel,Fragment) {
		"use strict";

		return Controller.extend("expensesapplication.controller.SA", {
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
                     }
                 });



                 var oJSONModel2 = new JSONModel();
               var that=this;
                 var sURL2 = "/sap/opu/odata/sap/ZEXPENSES_C_VIEW_CDS/";
                 var oModel2 = new sap.ui.model.odata.ODataModel(sURL2,true);
                 oModel2.read("/ZEXPENSES_C_VIEW",{
                    success:function(data){
                     oJSONModel2.setData({
                        Expenses:data.results
                     });
                     console.log(data.results);
                     debugger
                     that.getOwnerComponent().setModel(oJSONModel2,"myModel4");
                     var datatable =  that.getOwnerComponent().setModel(oJSONModel2,"myModel4");
                     debugger;
                     that.empSelected();
                    //  console.log(datatable);
                    }
                });
                 debugger;
               
                
                },

            onBackLogin:function(){
                debugger;
              this.oRouter.navTo("RouteView1");
            },
            onExpense:function(){
                debugger;
                this.oRouter.navTo("RouteView1");
            },
            onOpenFragment:function(oEvent){
                debugger;
                
             if(!this._oDialog){
                var frgaId = "openFrag";
                this._oDialog =  sap.ui.xmlfragment(frgaId,"expensesapplication.view.CreateNewdata", this);
               
             }

             this._oDialog.open();


            },
            onClose:function(){
                debugger;
                this._oDialog.close();
            },
          
            onSubmit:function(){
                debugger;
                var sFragmentId = "openFrag";
                var sControlId = "input01";
               
                var oID = sap.ui.core.Fragment.byId(sFragmentId, sControlId).getValue(); 
                var Name = sap.ui.core.Fragment.byId(sFragmentId,"input02").getValue();
                var Lname = sap.ui.core.Fragment.byId(sFragmentId,"input03").getValue();
                var Designation1 = sap.ui.core.Fragment.byId(sFragmentId,"input04").getValue();
                var password = sap.ui.core.Fragment.byId(sFragmentId,"input05").getValue();
                var email = sap.ui.core.Fragment.byId(sFragmentId,"input06").getValue();
                var adress = sap.ui.core.Fragment.byId(sFragmentId,"input07").getValue();
                var age = sap.ui.core.Fragment.byId(sFragmentId,"input08").getValue();
                var contactno = sap.ui.core.Fragment.byId(sFragmentId,"input09").getValue();

                var nameV = /^[A-Z]{1}[a-z]+/;

                if(oID == "" &&  Name == "" &&  Lname == "" &&  Designation1 == "" &&  password == ""  &&  email == "" && adress == "" && age == "" && contactno == ""){
                    sap.ui.core.Fragment.byId(sFragmentId,"input01").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input01").setValueStateText("Please Enter Employee Id");
                    
                    
                    sap.ui.core.Fragment.byId(sFragmentId,"input02").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input02").setValueStateText("Please Enter Name");
                    
                    sap.ui.core.Fragment.byId(sFragmentId,"input03").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input03").setValueStateText("Please Enter Last Name");
    
                    sap.ui.core.Fragment.byId(sFragmentId,"input04").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input04").setValueStateText("Please Enter Designation");
                    
                    sap.ui.core.Fragment.byId(sFragmentId,"input05").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input05").setValueStateText("Please Enter Password");
                    
                    sap.ui.core.Fragment.byId(sFragmentId,"input06").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input06").setValueStateText("Please Enter  Email");

                    sap.ui.core.Fragment.byId(sFragmentId,"input07").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input07").setValueStateText("Please Enter Adress");

                    sap.ui.core.Fragment.byId(sFragmentId,"input08").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input08").setValueStateText("Please Enter  Age");

                    sap.ui.core.Fragment.byId(sFragmentId,"input09").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input09").setValueStateText("Please Enter Contact No");


                } 


              
                else if ( oID == "") {

                    sap.ui.core.Fragment.byId(sFragmentId,"input01").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input01").setValueStateText("Please Enter Employee Id");
    
                    
                } 
                
                 else if ( Name == "") {
    
                   

                    sap.ui.core.Fragment.byId(sFragmentId,"input02").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input02").setValueStateText("Please Enter Name");
    
                }else if ( Lname  == "") {

                    sap.ui.core.Fragment.byId(sFragmentId,"input03").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input03").setValueStateText("Please Enter Last Name");
    
                    
    
                }
                else if ( Designation1 == "") {
    

                    sap.ui.core.Fragment.byId(sFragmentId,"input04").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input04").setValueStateText("Please Enter Designation");
                   
    
                }
                else if ( password == "") {
    
                    

                    sap.ui.core.Fragment.byId(sFragmentId,"input05").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input05").setValueStateText("Please Enter Password");
    
                }
                else if ( email == "") {
    
                    sap.ui.core.Fragment.byId(sFragmentId,"input06").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input06").setValueStateText("Please Enter  Email");

                    
    
                }else if ( adress == "") {
    
                    

                    
                    sap.ui.core.Fragment.byId(sFragmentId,"input07").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input07").setValueStateText("Please Enter Adress");
    
                }
                else if ( age == "") {
    
                    
                    sap.ui.core.Fragment.byId(sFragmentId,"input08").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input08").setValueStateText("Please Enter  Age");

                    
    
                }
                else if ( contactno == "") {
    
                    
                    

                    sap.ui.core.Fragment.byId(sFragmentId,"input09").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input09").setValueStateText("Please Enter Contact No");


                    
    
                }
               
    



                else{

                    sap.ui.core.Fragment.byId(sFragmentId,"input01").setValueState(sap.ui.core.ValueState.None);
                    
                    
                    
                    sap.ui.core.Fragment.byId(sFragmentId,"input02").setValueState(sap.ui.core.ValueState.None);
                    
                    sap.ui.core.Fragment.byId(sFragmentId,"input03").setValueState(sap.ui.core.ValueState.None);
    
                    sap.ui.core.Fragment.byId(sFragmentId,"input04").setValueState(sap.ui.core.ValueState.None);
                    
                    sap.ui.core.Fragment.byId(sFragmentId,"input05").setValueState(sap.ui.core.ValueState.None);
                    
                    sap.ui.core.Fragment.byId(sFragmentId,"input06").setValueState(sap.ui.core.ValueState.None);

                    sap.ui.core.Fragment.byId(sFragmentId,"input07").setValueState(sap.ui.core.ValueState.None);

                    sap.ui.core.Fragment.byId(sFragmentId,"input08").setValueState(sap.ui.core.ValueState.None);

                    sap.ui.core.Fragment.byId(sFragmentId,"input09").setValueState(sap.ui.core.ValueState.None);

                var payload = {
                    Empid:oID,
                    Empfirstname:Name,
                    Emplastname:Lname,
                    Designation:Designation1,
                    Accept:"No Notification",
                    Password:password,
                    Email:email,
                    Adress:adress,
                    Age:age,
                    Contactno:contactno



                }

                //var myModel = sap.ui.getCore().getModel("myModel1");
                var oModel = this.getOwnerComponent().getModel();
                var that = this
                oModel.create('/ZADMIN_C_VIEW', payload,{
                    method:"POST",
                    success:function(oData){
                     sap.m.MessageBox.success("New Data Has been Created");
                     that._oDialog.close();
                     var oList = that.getView().byId("idList");
                     var oBinding = oList.getBinding("items");
                     oBinding.refresh(true);
                     debugger;
                     that.onInit();

                    },
                    error:function(){
                        console.log("Error");
                        sap.m.MessageBox.error("New Entry Not Created");
                    }
                });
                sap.ui.core.Fragment.byId(sFragmentId,"input01").setValue("");
                    

                sap.ui.core.Fragment.byId(sFragmentId,"input02").setValue("");
                    
                sap.ui.core.Fragment.byId(sFragmentId,"input03").setValue("");

                sap.ui.core.Fragment.byId(sFragmentId,"input04").setValue("");
                
                sap.ui.core.Fragment.byId(sFragmentId,"input05").setValue("");
                
                sap.ui.core.Fragment.byId(sFragmentId,"input06").setValue("");

                sap.ui.core.Fragment.byId(sFragmentId,"input07").setValue("");

                sap.ui.core.Fragment.byId(sFragmentId,"input08").setValue("");

                sap.ui.core.Fragment.byId(sFragmentId,"input09").setValue("");



                var afilters = [];
			 var oList = this.getView().byId("idList");
             var oBinding = oList.getBinding("items");
			 oBinding.refresh(true);
    

            }



            },

            changeId:function(){
                debugger;
                var sFragmentId = "openFrag";
                var name = sap.ui.core.Fragment.byId(sFragmentId,"input01").getValue();
               
                if (name =="") {
                 
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input01").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input01").setValueStateText("Please Enter Employee Id");
            }
              else {
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input01").setValueState(sap.ui.core.ValueState.None);
            }
            },
            changeName:function(){
                debugger;
                var sFragmentId = "openFrag";
                var name = sap.ui.core.Fragment.byId(sFragmentId,"input02").getValue();
               
                if (name =="") {
                 
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input02").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input02").setValueStateText("Please Enter Employee Name");
            }
              else {
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input02").setValueState(sap.ui.core.ValueState.None);
            }
            },

            changeLastName:function(){
                debugger;
                var sFragmentId = "openFrag";
                var name = sap.ui.core.Fragment.byId(sFragmentId,"input03").getValue();
               
                if (name =="") {
                 
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input03").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input03").setValueStateText("Please Enter Employee LastName");
            }
              else {
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input03").setValueState(sap.ui.core.ValueState.None);
            }
            },

            changeDesignation:function(){
                debugger;
                var sFragmentId = "openFrag";
                var name = sap.ui.core.Fragment.byId(sFragmentId,"input04").getValue();
               
                if (name =="") {
                 
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input04").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input04").setValueStateText("Please Enter Employee Designation");
            }
              else {
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input04").setValueState(sap.ui.core.ValueState.None);
            }
            },

            changePassword:function(){
                debugger;
                var sFragmentId = "openFrag";
                var name = sap.ui.core.Fragment.byId(sFragmentId,"input05").getValue();
               
                if (name =="") {
                 
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input05").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input05").setValueStateText("Please Enter Password");
            }
              else {
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input05").setValueState(sap.ui.core.ValueState.None);
            }
            },

            changeEmail:function(){
                debugger;
                var sFragmentId = "openFrag";
                var name = sap.ui.core.Fragment.byId(sFragmentId,"input06").getValue();
               
                if (name =="") {
                 
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input06").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input06").setValueStateText("Please Enter Email");
            }
              else {
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input06").setValueState(sap.ui.core.ValueState.None);
            }
            },
            changeAdress:function(){
                debugger;
                var sFragmentId = "openFrag";
                var name = sap.ui.core.Fragment.byId(sFragmentId,"input07").getValue();
               
                if (name =="") {
                 
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input07").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input07").setValueStateText("Please Enter Adress");
            }
              else {
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input07").setValueState(sap.ui.core.ValueState.None);
            }
            },
            changeAge:function(){
                debugger;
                var sFragmentId = "openFrag";
                var name = sap.ui.core.Fragment.byId(sFragmentId,"input08").getValue();
               
                if (name =="") {
                 
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input08").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input08").setValueStateText("Please Enter Age");
            }
              else {
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input08").setValueState(sap.ui.core.ValueState.None);
            }
            },

            changeContactNo:function(){
                debugger;
                var sFragmentId = "openFrag";
                var name = sap.ui.core.Fragment.byId(sFragmentId,"input09").getValue();
               
                if (name =="") {
                 
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input09").setValueState(sap.ui.core.ValueState.Error);
                    sap.ui.core.Fragment.byId(sFragmentId,"input09").setValueStateText("Please Enter Contact No");
            }
              else {
                 
                  sap.ui.core.Fragment.byId(sFragmentId,"input09").setValueState(sap.ui.core.ValueState.None);
            }
            },





            onSearch: function (oEvent) {
                debugger;
    
                var searchstr = oEvent.getParameter("query");
                if (!searchstr) {
                    searchstr = oEvent.getParameter("newValue");
                }
    
                var oFilterName = new sap.ui.model.Filter("Empid",
                    sap.ui.model.FilterOperator.Contains, searchstr);
    
                var oFilterType = new sap.ui.model.Filter("Empfirstname",
                    sap.ui.model.FilterOperator.Contains, searchstr);
    
                var oFilter = new sap.ui.model.Filter({
                    filters: [oFilterType, oFilterName],
                    and: false
                });
    
                var aFilter = [oFilter];
    
                var oList = this.getView().byId("idList");
                oList.getBinding("items").filter(aFilter);
    
            },

            // onOpenNoti:function(oEvent){
            //     debugger;

            //     if(!this._oDialog2){
            //         var id = "FragmentId2"
            //         this._oDialog2 = new sap.ui.xmlfragment(id,"expensesapplication.view.notification",this);
            //         this.getView().addDependent(this._oDialog2);
            //     }

            //     this._oDialog2.open();
            // },
            // onClose2:function(){
            //     debugger;
            //     this._oDialog2.close();
            // },

            onOpenNoti: function () {
                debugger;
                var oView = this.getView();
    
                if (!this.byId("msgL")) {
                    Fragment.load({
                        id: oView.getId(),
                        name: "expensesapplication.view.notification",
                        controller: this
    
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                    debugger;
                    this.onInit();
                } else {
                    this.byId("msgL").open();
                    this.onInit();
                }
    
            },
            onClose2: function () {
                debugger;
                this.getView().byId("msgL").close();
    
            },

            onAfterRendring:function(){
                debugger;
                var dataA = this.getOwnerComponent().getModel("myModel4").getProperty("/Expenses");
                console.log(dataA);
            },
            empSelected:function(oEvent){
                    debugger
                    if(oEvent==undefined){
                       var id="EMP101"
                    }else{

                        var id= oEvent.getParameter("listItem").mProperties.intro;
                    }
                    var eArray=[]
                    var oModel=    this.getOwnerComponent().getModel("myModel4").getProperty("/Expenses");
                    oModel.forEach((element,index) => {
                        if (element.Empid===id) {
                            eArray.push(element)
                            this.getOwnerComponent().setModel(new JSONModel({Expenses:eArray}),"myModel6");
                        }
                    });
            },

            onAcceptPress:function(oEvent){
              debugger;
                    //  var id=oEvent.getSource().oParent.mAggregations.cells[0].mProperties.text;
                     var empid = oEvent.getSource().oParent.mAggregations.cells[0].mProperties.text;
                     debugger;
                     oEvent.getSource().oParent.mAggregations.cells[3].mProperties.enabled=false
                      //debugger
                     
                      var approved = "Approved";
                      var oModel1=this.getOwnerComponent().getModel("myModel1").getProperty("/ZADMIN_C_VIEW");
                    //   var Payload = null;
                       for (var i=0; i<oModel1.length; i++){
                            if(oModel1[i].Empid == empid){
                            var empid1 = empid;
                            var empfirstname = oModel1[i].Empfirstname;
                            var emplastname = oModel1[i].Emplastname;
                            var adress = oModel1[i].Adress;
                            var designation = oModel1[i].Designation;
                            var password = oModel1[i].Password;
                            var email = oModel1[i].Email;
                            var contactno = oModel1[i].Contactno;
                            var age = oModel1[i].Age;
                            var accept = approved
                            
                            }

                       }

                    //   oModel1.forEach((element)=>{
                    //       if(element.Empid=empid){
                    //         //   Payload=element
                    //         //   Payload.Accept=approved
                    //         var empid1 = empid;
                    //         var empfirstname = element.Empfirstname;
                    //         var emplastname = element.Emplastname;
                    //         var adress = element.Adress;
                    //         var designation = element.Designation;
                    //         var password = element.Password;
                    //         var email = element.Email;
                    //         var contactno = element.Contactno;
                    //         var age = element.Age;
                    //         var accept = element.Accept
                            
                    //       }
                    //   });

                     var Payload = {
                         Empid:empid1,
                         Accept:accept,
                         Empfirstname:empfirstname,
                         Emplastname:emplastname,
                         Adress:adress,
                         Designation:designation,
                         Password:password,
                         Email:email,
                         Contactno:contactno,
                         Age: age
                        }
                      
                      var sURL3 = "/sap/opu/odata/sap/ZADMIN_C_VIEW_CDS/";
                      var oModel3 = new sap.ui.model.odata.ODataModel(sURL3,true);
                  
                  oModel3.update("/ZADMIN_C_VIEW('" + empid + "')", Payload, {
                      method: "PUT",
                      success: function (odata, Response) {
                  
                       if (odata !== "" || odata !== undefined) {
                              sap.m.MessageBox.success(" Approved successfully!");
                                  
                          } else {
                                  sap.m.MessageBox.error("Error!");
                                 }
                              // alert("Success");
                  
                      },
                          error: function (cc, vv) {
                  
                          }
                  
                      });

                     
                      //    var oTable = this.getView().byId('idListItem');
                    //    var aItems = oTable.getItems();
                    //    var aArray = [];
  
                    //     for(var i=0,len=aItems.length;i<len;i++){
                    //     aArray.push(aItems[i].getAggregation("cells")[0].getProperty("text"));
                    //  }
                  
                  
//     var oModel=this.getOwnerComponent().getModel("myModel4").getProperty("/Expenses");
//     var payLoad=null
//     oModel.forEach((element)=>{
//         if(element.Id=id){
//             payLoad=element
//             payLoad.Approved=approved
//         }
//     });


//         var sURL2 = "/sap/opu/odata/sap/ZEXPENSES_C_VIEW_CDS/";
//         var oModel2 = new sap.ui.model.odata.ODataModel(sURL2,true);

// oModel2.update("/ZEXPENSES_C_VIEW('" + id + "')", payLoad, {
//     method: "PUT",
//     success: function (odata, Response) {

//      if (odata !== "" || odata !== undefined) {
//             sap.m.MessageBox.success(" Approved successfully.");
                
//         } else {
//                 sap.m.MessageBox.error("Error!");
//                }
//             // alert("Success");

//     },
//         error: function (cc, vv) {

//         }

//     });
    


   
            },

            onRejectPress:function(oEvent){
                debugger;

                // var id=oEvent.getSource().oParent.mAggregations.cells[0].mProperties.text;
                var empid = oEvent.getSource().oParent.mAggregations.cells[0].mProperties.text;
                //debugger
               
                var approved = "Your Expenses Rejected";

                var oModel1=this.getOwnerComponent().getModel("myModel1").getProperty("/ZADMIN_C_VIEW");
                oEvent.getSource().oParent.mAggregations.cells[4].mProperties.enabled=false
                var Payload = null;
                oModel1.forEach((element)=>{
                    if(element.Empid=empid){
                        Payload=element
                        Payload.Accept=approved
                    }
                });
                
                var sURL3 = "/sap/opu/odata/sap/ZADMIN_C_VIEW_CDS/";
                var oModel3 = new sap.ui.model.odata.ODataModel(sURL3,true);
            
            oModel3.update("/ZADMIN_C_VIEW('" + empid + "')", Payload, {
                method: "PUT",
                success: function (odata, Response) {
            
                 if (odata !== "" || odata !== undefined) {
                        sap.m.MessageBox.success("Rejected!");
                            
                    } else {
                            sap.m.MessageBox.error("Error!");
                           }
                        // alert("Success");
            
                },
                    error: function (cc, vv) {
            
                    }
            
                });
                // var oModel=this.getOwnerComponent().getModel("myModel4").getProperty("/Expenses");
                // var payLoad=null
                // oModel.forEach((element)=>{
                //     if(element.Id=id){
                //         payLoad=element
                //         payLoad.Rejected=approved
                //     }
                // });
            
            
            //         var sURL2 = "/sap/opu/odata/sap/ZEXPENSES_C_VIEW_CDS/";
            //         var oModel2 = new sap.ui.model.odata.ODataModel(sURL2,true);
            
            // oModel2.update("/ZEXPENSES_C_VIEW('" + id + "')", payLoad, {
            //     method: "PUT",
            //     success: function (odata, Response) {
            
            //      if (odata !== "" || odata !== undefined) {
            //             sap.m.MessageBox.success(" Approved successfully.");
                            
            //         } else {
            //                 sap.m.MessageBox.error("Error!");
            //                }
            //             // alert("Success");
            
            //     },
            //         error: function (cc, vv) {
            
            //         }
            
            //     });
            //     oEvent.getSource().oParent.mAggregations.cells[5].mProperties.enabled=false

            },

            onChange:function(oEvent){
                debugger;
                var stateOfText = oEvent.getSource().getState();
                if(stateOfText == false){
                    this.getView().byId("idVizFrame").setVisible(false);
                    this.getView().byId("idVizFrame3").setVisible(true);
                }else if(stateOfText == true){
                    this.getView().byId("idVizFrame").setVisible(true);
                    this.getView().byId("idVizFrame3").setVisible(false);
                }

            },
            onNext:function(){
                debugger;
                this.oRouter.navTo("RouteView2");

            }
			

		});
	});
