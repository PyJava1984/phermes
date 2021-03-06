/**
 * @class Tracker.view.map.MPMenuBar
 * @extends Ext.toolbar.Toolbar
 *
 Class for display menu bar

 * @constructor
 * @param {Object} config The config object
 */
Ext.define('Tracker.view.map.MPMenuBar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.mpmenubar',
    dock: 'top',
    padding: '0 0 5 0',
    enableOverflow: true,
    items: [
    // FIXME bug with url
    '->',
    {
        text: 'Logout',
        href: '/logout/',
        tooltip: 'Logout from system',
        iconCls: 'logout'
    },
    {
        text: 'Help',
        iconCls: 'help',
        menu: {
            items: [
            {
                text: 'Wiki',
                href: 'https://github.com/LiveStalker/phermes/wiki/',
                tooltip: 'Read pHermes Wiki',
                iconCls: 'wiki'
            },
            {
                text: 'Source',
                href: 'https://github.com/LiveStalker/phermes/',
                tooltip: 'Get source',
                iconCls: 'source'
            },
            // TODO form for features request
            {
                text: 'Features request & Bugs report',
                href: 'https://github.com/LiveStalker/phermes/issues',
                iconCls: 'bug'
            },
            '-',
            {
                text: 'About pHermes',
                iconCls: 'world'
            }
            ]
            }
    }
    ]
}
);