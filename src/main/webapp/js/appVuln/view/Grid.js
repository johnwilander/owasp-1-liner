/**
 * Created by @johnwilander 2011-08-25
 */
Ext.define('ONELINERS.view.Grid' , {

    extend: 'Ext.grid.Panel',
    alias : 'widget.onelinerlist',
    title : '1-Liners',
    store: 'Oneliners',

    tbar: [
        { xtype: 'textfield', itemId: 'textfield'
//            , listeners: {
//                specialkey: function(field, event) {
//                    if (event.getKey() == event.ENTER) {
//                        Ext.ComponentQuery.query('#shootButton')[0].fireEvent('click');
//                    }
//                }
//            }
        },
        { xtype: 'button', itemId: 'shootButton', text: 'Shoot', action: 'shoot', scale: 'small', tabIndex: 1 },
    ],

    columns: [{
        header: 'Nick',
        dataIndex: 'nickName'
    },{
        header: '1-Liner',
        dataIndex: 'oneLiner',
        flex: 1
    }]

//    initEvents: function() {
//        var me = this;
//        me.callParent();
//        me.keyNav = Ext.create('Ext.util.KeyNav', 'extOneLiner', {
//            "enter" : function(e){
//                console.log("Enter pressed");
//            },
//            scope : this
//        });
//    }
});
