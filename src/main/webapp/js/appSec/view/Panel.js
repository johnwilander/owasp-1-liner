/**
 * Created by @johnwilander 2011-08-25
 */
Ext.define('ONELINERS.view.Panel', {
    extend: 'Ext.tree.Panel',
    title: "Online Users",
    alias : 'widget.friendlist',
    store: 'Friends',
    rootVisible:false,
    lines:false,
    autoScroll:true,
    tools:[
        {
            type: "refresh",
            handler: function(e, d) {
                a.setLoading(true, a.body);
                var b = a.getRootNode();
                b.collapseChildren(true, false);
                Ext.Function.defer(function() {
                    a.setLoading(false);
                    b.expand(true, true)
                }, 1000)
            }
        }
    ]
});