/**
 * Created by @johnwilander 2011-08-25
 */
Ext.define('ONELINERS.store.Oneliners', {

    extend: 'Ext.data.Store',
    model: 'ONELINERS.model.Oneliner',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        api: {
            create: 'ws/vulnerable/oneliners',
            read: 'ws/vulnerable/oneliners/20',
            update: 'ws/vulnerable/oneliners'
        },
        reader: {
            type: 'json',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message',
            root: 'oneLiner'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            root: 'oneLiner'
        },
        listeners: {
            exception: function(proxy, response, operation){
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    },
    sorters: [{
        property : 'id',
        direction: 'DESC'
    }]
});