/**
 * Created by @johnwilander 2011-09-10
 */
Ext.define('ONELINERS.store.Friends', {

    extend: 'Ext.data.TreeStore',
    root:{
        text:"Online",
        expanded:true,
        children:[
            {
                text:"Friends",
                expanded:true,
                children:[
                    {
                        text:"Petter",
                        iconCls:"user",
                        leaf:true
                    },
                    {
                        text:"Kent",
                        iconCls:"user",
                        leaf:true
                    },
                    {
                        text:"Mattias",
                        iconCls:"user",
                        leaf:true
                    },
                    {
                        text:"Mats",
                        iconCls:"user",
                        leaf:true
                    },
                    {
                        text:"Fredric",
                        iconCls:"user",
                        leaf:true
                    }
                ]},
            {
                text:"Family",
                expanded:true,
                children:[
                    {
                        text:"Johanna",
                        iconCls:"user-girl",
                        leaf:true
                    },
                    {
                        text:"June",
                        iconCls:"user-kid",
                        leaf:true
                    }
                ]
            }
        ]
    }
    /*
     model: 'ONELINERS.model.Friend',
     autoLoad: true,
     autoSync: true,

     proxy: {
     type: 'ajax',
     api: {
     create: 'ws/friends',
     read: 'ws/friends/20',
     update: 'ws/friends'
     //                destroy: ''
     },
     reader: {
     type: 'json',
     totalProperty: 'total',
     successProperty: 'success',
     messageProperty: 'message',
     root: 'friend'
     },
     writer: {
     type: 'json',
     writeAllFields: false,
     //            allowSingle: false
     root: 'friend'
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
     }
     */
});