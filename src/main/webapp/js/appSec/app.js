/**
 * Created by @johnwilander 2011-08-25
 */
Ext.Loader.setConfig({
    enabled: true
});

Ext.onReady(function() {
    Ext.application({

        appFolder: "js/appSec",
        name: 'ONELINERS',
        autoCreateViewport: false,
        controllers: ['Oneliners'],

        launch: function() {
            console.log("Launched");
        }
    });
});
