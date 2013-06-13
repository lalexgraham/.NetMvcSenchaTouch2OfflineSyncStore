Ext.define('MyApp.view.MyTabPanel', {
    extend: 'Ext.tab.Panel',
    config: {
        items: [
            {
                xtype: 'container',
                title: 'Enter Data',
                items: [
                    {
                        xtype: 'fieldset',
                        height: 700,
                        width:400,
                        title: 'Enter Name',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'FirstName',
                                id: 'FirstName'
                            },
                            {
                                xtype: 'textfield',
                                label: 'LastName',
                                id: 'LastName'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Email',
                                id: 'Email'
                            },
                            {
                                xtype: 'button',
                                id: 'saveButton',
                                text: 'Save'
                            }
                        ]
                    }
                ]
            },{
                xtype: 'container',
                title: 'View Data',
			    scrollable: true,
				items: [
					{xtype: 'button',
					text: 'Sync Data',
					id: 'syncButton',
					width: 400
					},
                     {xtype: 'list',
                    	height: 700,
							width: 400,
							modal: false,
							itemTpl: [
								'{FirstName} {LastName} '
							],
							id: 'myList',
							onItemDisclosure: function (list, record) {
								/*	console.log('Deleting '+ list.data.Surname + ' from local storage');
									var localStorage = Ext.StoreMgr.get('MyStore'); 
									var r = localStorage.findRecord('ID',list.data.ID); 
									localStorage.remove(r); 
									localStorage.sync();
									Ext.Msg.alert('Deleted', list.data.Forename + ' ' + list.data.Surname, Ext.emptyFn);*/
							}		
					}
                    
                ]
            }
        ]
    }

});