/**
 * Created by @johnwilander 2011-08-25
 */
Ext.define('ONELINERS.model.Oneliner', {

    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'nickName', type: 'string' },
        { name: 'oneLiner', type: 'string' },
        { name: 'timestamp', type: 'date' }
    ]
});