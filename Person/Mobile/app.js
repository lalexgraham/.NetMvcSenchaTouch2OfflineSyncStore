
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
	name: 'MyApp',
	models: [
      	'PersonModel'
    ],
    views: [
        'MyTabPanel'
    ],
    stores: [
       'MyStore'
    ],
    controllers: [
        'MyController'
    ],
	
    launch: function() {
		/*var offlineSyncStore = Ext.create('Ext.ux.OfflineSyncStore', {
                model: 'MyApp.model.PersonModel',

                localProxy: {
                    type: 'localstorage',
                    id: 'offline-sync-store'
                },

                serverProxy: {
                    type: 'ajax',
                    api: {
                        read: '../Person',
                        create: '../Person/Create'
                    },
                    reader: {
                        type: 'json',
                        rootProperty: 'rows'
                    },
                    writer: {
                        allowSingle: false
                    }
                }
            });
*/
           Ext.create('MyApp.view.MyTabPanel', { fullscreen: true });
    }

});
