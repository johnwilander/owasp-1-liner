/**
 * Created by @johnwilander 2011-08-25
 */
Ext.define('ONELINERS.controller.Oneliners', {

    extend: 'Ext.app.Controller',

    models: ['Oneliner'],
    stores: ['Oneliners', 'Friends'],
    views: ['Panel', 'Grid'],  // 'Profile'

    init: function() {
        console.log("Controller init");

        this.control({
            'onelinerlist button[action=shoot]': {
                click: this.shoot
            },
            'onelinerlist textfield': {
                specialkey: function(field, event) {
                    if (event.getKey() == event.ENTER) {
                        this.shoot();
                    }
                }
            }
        });

        var viewPort = Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [{
                region: 'north',
                html: '<div><h1 class="x-panel-header" style="float: left">OWASP 1-Liner VULNERABLE</h1><h1 id="loggedInAs" class="x-panel-header" style="float: right; padding-right: 1em">Logged in as ' + Ext.util.Cookies.get("nickNameVulnerable") + '</h1></div>',
                autoHeight: true,
                border: false,
                margins: '0 0 5 0'
            }, {
                region: 'west',
                collapsible: true,
                collapsed: true,
                title: 'Menu',
                width: 80
            }, {
                region: 'east',
                title: 'Friends',
                collapsible: true,
                split: true,
                width: 100,
                xtype: 'friendlist'
            }, {
                region: 'center',
                xtype: 'onelinerlist'
            }]
        })

//            profilePanel = Ext.create('Ext.panel.Panel', {
//                layout: 'fit',
//                height: 300,
//                width: 500,
//
//                items: {
//                    xtype: 'onelinerprofile'
//                }
//            });
//
//        viewPort.add(profilePanel);
    },

    wrapLinks: function(oneLiner) {
        if(!oneLiner) { return "noodlin' the interwebz"; }
        var tokens = oneLiner.split(" "), len = tokens.length, token, i;
        for (i=0; i<len; i++) {
            token = tokens[i];
            if(token.length > 12 && (token.substring(0, 7) === "http://" || token.substring(0, 8) === "https://")) {
                tokens[i] = "<a href='" + token + "' target='_blank'>" + (token.length > 25 ? token.substring(0, 24) + "..." : token) + "</a>";
            }
        }
        return tokens.join(" ");
    },

    shoot: function() {
        var textfield   = Ext.ComponentQuery.query('#textfield')[0],     // ComponentQuery getting form, child of window
            value = textfield.value;
        this.insertOneLiner(this.wrapLinks(value));
        textfield.setValue("");
    },

    update: function() {
        var store = Ext.data.StoreManager.lookup('Oneliners');
        store.load();
    },

    insertOneLiner: function(oneLinerStr) {
        var oneLiner = ONELINERS.model.Oneliner.create({  // Ext.create?
            "nickName": Ext.util.Cookies.get("nickNameVulnerable"),
            "oneLiner": Ext.util.Format.stripScripts(oneLinerStr),
            "timestamp": new Date()
        } /* ID value here will not create a phantom */ ),
            store = Ext.data.StoreManager.lookup('Oneliners');

        store.insert(0, [oneLiner]);
    }
});

var pollNumberOfOneliners = function() {
    Ext.Ajax.request({
        url: 'ws/vulnerable/oneliners/size',
        success: function(response){
            var responseJson = Ext.JSON.decode(response.responseText, true),
                  store = Ext.data.StoreManager.lookup('Oneliners');
            if(store.getTotalCount() != responseJson.size) {
                console.log("Diff in numbers of one liners. Total db size == " + responseJson.size);

                Ext.ComponentQuery.query('onelinerlist button[action=shoot]');
                store.load();
            } else {
                console.log("No change in one liners");
            }
        }
    });
};

var pollUserName = function() {
    Ext.core.DomHelper.overwrite(Ext.getDom("loggedInAs"), "Logged in as " + Ext.util.Cookies.get("nickNameVulnerable"));
}

window.setInterval(pollNumberOfOneliners, 2000);

window.setInterval(pollUserName, 5000);