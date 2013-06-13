Ext.define('MyApp.store.MyStore', {
    extend: 'Ext.ux.OfflineSyncStore',
    config: {
        model: 'MyApp.model.PersonModel',
        storeId: 'MyStore',
        autoServerSync: false,
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
    }	
});