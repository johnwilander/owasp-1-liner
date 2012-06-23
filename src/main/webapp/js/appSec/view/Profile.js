/**
 * Created by @johnwilander 2011-09-10
 */
Ext.define('ONELINERS.view.Profile', {
    extend: 'Ext.form.Panel',
    alias : 'widget.onelinerprofile',
    title : '1-Liners Profile',

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    defaults: {
        anchor: '80%'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'Real Name',
        name: 'realName',
        allowBlank: false
    },{
        fieldLabel: 'Location',
        name: 'location',
        allowBlank: false
    },{
        fieldLabel: 'Web Page',
        name: 'webPage',
        allowBlank: false
    },{
        fieldLabel: 'Bio',
        name: 'bio',
        allowBlank: false
    }],

    // Reset and Submit buttons
    buttons: [{
        text: 'Reset',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }, {
        text: 'Submit',
        formBind: true, //only enabled once the form is valid
        disabled: true,
        handler: function() {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                form.submit({
                    success: function(form, action) {
                        Ext.Msg.alert('Success', action.result.msg);
                    },
                    failure: function(form, action) {
                        Ext.Msg.alert('Failed', action.result.msg);
                    }
                });
            }
        }
    }]
});