/**
 * Created by @johnwilander 2011-09-10
 */
Ext.define('ONELINERS.model.Friend', {

    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'nickName', type: 'string' }
    ]
});