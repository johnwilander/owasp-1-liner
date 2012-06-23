/**
 * Created by @johnwilander 2011-09-10
 */
Ext.define('ONELINERS.model.Profile', {

    extend: 'Ext.data.Model',
    fields: [
        { name: 'nickName', type: 'string' },
        { name: 'realName', type: 'string' },
        { name: 'webPage', type: 'string' },
        { name: 'tagLine', type: 'string' }
    ]
});