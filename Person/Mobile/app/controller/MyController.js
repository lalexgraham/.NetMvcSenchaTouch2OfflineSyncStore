Ext.define('MyApp.controller.MyController', {
    extend: 'Ext.app.Controller',
    config: {
        views: [
            'MyTabPanel'
        ],
        refs: {
            saveButton: 'button[id=saveButton]',
            syncButton: 'button[id=syncButton]'
        },
        control: {
            saveButton: {
                tap: 'saveData'
            },
            syncButton: {
                tap: 'syncData'
            }
        }
    },
    launch: function () {

        console.log('launch()');
        var offlineSyncStore = Ext.getStore('MyStore');

        offlineSyncStore.loadServer(function () {
            offlineSyncStore.sync();
            offlineSyncStore.syncServer();
        });

        //load store into list
        var myList = Ext.getCmp('myList');
        myList.setStore(offlineSyncStore);
        myList.refresh();
    },
    saveData: function()	{
	
        console.log('saveData()');
        var offlineSyncStore = Ext.getStore('MyStore');

        var person = Ext.create('MyApp.model.PersonModel', {
            FirstName: Ext.getCmp('FirstName').getValue(),
            LastName: Ext.getCmp('LastName').getValue(),
            Email: Ext.getCmp('Email').getValue()
        });

        offlineSyncStore.add(person);

        offlineSyncStore.sync();

        Ext.Msg.alert('Saved', Ext.getCmp('FirstName').getValue() + ' ' + Ext.getCmp('LastName').getValue(), Ext.emptyFn);
        Ext.getCmp('FirstName').setValue('');
        Ext.getCmp('LastName').setValue('');
        Ext.getCmp('Email').setValue('');
       

    },
    syncData: function() {
        console.log('syncData()');
        var offlineSyncStore = Ext.getStore('MyStore');
        offlineSyncStore.syncServer();
        Ext.Msg.alert('Data Sync Complete');
    }
});