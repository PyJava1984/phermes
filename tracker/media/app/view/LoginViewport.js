Ext.require([
    'Tracker.view.form.LoginForm',
    'Tracker.view.form.RegisterForm',
    ]);

Ext.define('Tracker.view.LoginViewport', {
    extend : 'Ext.container.Viewport',

    layout : {
        type : 'border',
        padding : 5
    },
    items : [
    {
        region : 'north',
        bodyPadding : 10,
        border : false,
        frame : true
    },
    {
        region : 'south',
        bodyPadding : 10,
        border : false,
        frame : true
    },
    {
        region : 'center',
        border : false,
        styleHtmlContent : true,
        styleHtmlCls : 'bg-img',
        contentEl: 'description'
    },
    {
        region : 'east',
        width : 400,
        border : false,
        frame : true,
        layout : {
            type : 'vbox',
            padding : 5,
            align : 'stretch'
        },
        items : [
        {
            xtype : 'loginform',
            style : 'margin-bottom:5px;'
        },
        {
            xtype : 'registerform'
        }
        ]
    }
    ]
});