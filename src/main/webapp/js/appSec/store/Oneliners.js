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
            create: 'ws/securish/oneliners', // ?paramToken=' + Ext.util.Cookies.get("cookieToken"),
            read: 'ws/securish/oneliners/20',
            update: 'ws/securish/oneliners' // ?paramToken=' + Ext.util.Cookies.get("cookieToken")
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
                    msg: "Your 1-liner was not accepted",
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        },
        extraParams: {
            paramToken: Ext.util.Cookies.get("cookieToken")
        },
        disableCaching: true
    },
    sorters: [{
        property : 'id',
        direction: 'DESC'
    }]
});