YUI.add("aui-loader", function(Y, NAME) {
/* This file is auto-generated by (yogi loader --expand --js js/aui-loader.js --json js/aui-loader.json --mix --name aui-loader --start ../ --yes) */

/**
 * YUI 3 module metadata
 * @module loader
 * @submodule loader-yui3
 */
YUI.Env[Y.version].modules = YUI.Env[Y.version].modules || {};
Y.mix(YUI.Env[Y.version].modules, {
    "aui-ace-editor": {
        "requires": [
            "aui-node",
            "aui-component"
        ]
    },
    "aui-aria": {
        "requires": [
            "plugin",
            "aui-component"
        ]
    },
    "aui-arraysort": {
        "requires": [
            "arraysort"
        ]
    },
    "aui-audio": {
        "requires": [
            "aui-node",
            "aui-component",
            "querystring-stringify-simple"
        ]
    },
    "aui-base": {
        "use": [
            "oop",
            "yui-throttle",
            "aui-classnamemanager",
            "aui-debounce",
            "aui-base-core",
            "aui-base-lang",
            "aui-node-base"
        ]
    },
    "aui-base-core": {},
    "aui-base-lang": {},
    "aui-carousel": {
        "requires": [
            "anim",
            "node-event-delegate",
            "aui-component"
        ],
        "skinnable": true
    },
    "aui-char-counter": {
        "requires": [
            "aui-node",
            "aui-event-input",
            "aui-component"
        ]
    },
    "aui-classnamemanager": {
        "requires": [
            "classnamemanager"
        ]
    },
    "aui-component": {
        "requires": [
            "aui-classnamemanager",
            "base-build",
            "widget-base"
        ]
    },
    "aui-datatype": {
        "requires": [
            "datatype"
        ]
    },
    "aui-debounce": {},
    "aui-event": {
        "use": [
            "aui-event-base",
            "aui-event-delegate-change",
            "aui-event-delegate-submit"
        ]
    },
    "aui-event-base": {
        "requires": [
            "event-base"
        ]
    },
    "aui-event-delegate-change": {
        "requires": [
            "aui-event-base",
            "event-delegate",
            "event-synthetic"
        ]
    },
    "aui-event-delegate-submit": {
        "requires": [
            "aui-event-base",
            "event-delegate",
            "event-synthetic"
        ]
    },
    "aui-event-input": {
        "condition": {
            "name": "aui-event-input",
            "test": function (A) {
    var supportsDOMEvent  = A.supportsDOMEvent,
        testFeature = A.Features.test,
        addFeature = A.Features.add;

    if (testFeature('event', 'input') === undefined) {
        addFeature('event', 'input', {
            test: function() {
                return supportsDOMEvent(document.createElement('textarea'), 'input');
            }
        });
    }

    return !testFeature('event', 'input');
},
            "trigger": "aui-event"
        },
        "requires": [
            "aui-event-base",
            "event-delegate",
            "event-synthetic"
        ]
    },
    "aui-form-validator": {
        "requires": [
            "escape",
            "selector-css3",
            "node-event-delegate",
            "aui-node",
            "aui-component",
            "aui-event-input"
        ]
    },
    "aui-image-cropper": {
        "requires": [
            "resize-base",
            "resize-constrain",
            "dd-constrain",
            "aui-node-base",
            "aui-component"
        ],
        "skinnable": true
    },
    "aui-io": {
        "use": [
            "aui-io-request"
        ]
    },
    "aui-io-request": {
        "requires": [
            "io-base",
            "json",
            "plugin",
            "querystring-stringify",
            "aui-component"
        ]
    },
    "aui-messaging": {
        "requires": [
            "querystring",
            "aui-timer"
        ]
    },
    "aui-node": {
        "use": [
            "aui-node-base"
        ]
    },
    "aui-node-base": {
        "requires": [
            "node-base",
            "node-style",
            "array-extras",
            "aui-base-lang",
            "aui-classnamemanager",
            "aui-debounce"
        ]
    },
    "aui-node-html5": {
        "condition": {
            "name": "aui-node-html5",
            "trigger": "aui-node",
            "ua": "ie"
        },
        "requires": [
            "collection",
            "aui-node-base"
        ]
    },
    "aui-pagination": {
        "requires": [
            "node-event-delegate",
            "aui-node",
            "aui-component",
            "widget-htmlparser"
        ]
    },
    "aui-progressbar": {
        "requires": [
            "aui-node",
            "aui-component",
            "aui-aria"
        ]
    },
    "aui-rating": {
        "use": [
            "aui-rating-base",
            "aui-rating-thumb"
        ]
    },
    "aui-rating-base": {
        "requires": [
            "widget-htmlparser",
            "widget-uievents",
            "aui-component",
            "aui-node-base"
        ],
        "skinnable": true
    },
    "aui-rating-thumb": {
        "requires": [
            "aui-rating-base"
        ]
    },
    "aui-search": {
        "use": [
            "aui-search-tst"
        ]
    },
    "aui-search-tst": {
        "requires": [
            "aui-component"
        ]
    },
    "aui-selector": {
        "requires": [
            "selector-css3",
            "aui-classnamemanager"
        ]
    },
    "aui-sortable": {
        "use": [
            "aui-sortable-layout",
            "aui-sortable-list"
        ]
    },
    "aui-sortable-layout": {
        "requires": [
            "dd-delegate",
            "dd-drag",
            "dd-drop",
            "dd-proxy",
            "aui-node",
            "aui-component"
        ],
        "skinnable": true
    },
    "aui-sortable-list": {
        "requires": [
            "dd-drag",
            "dd-drop",
            "dd-proxy",
            "aui-node",
            "aui-component"
        ]
    },
    "aui-timer": {
        "requires": [
            "oop"
        ]
    },
    "aui-toggler": {
        "use": [
            "aui-toggler-base",
            "aui-toggler-delegate"
        ]
    },
    "aui-toggler-base": {
        "requires": [
            "transition",
            "aui-node",
            "aui-component"
        ],
        "skinnable": true
    },
    "aui-toggler-delegate": {
        "requires": [
            "node-event-delegate",
            "aui-toggler-base"
        ]
    },
    "aui-tree": {
        "use": [
            "aui-tree-data",
            "aui-tree-io",
            "aui-tree-node",
            "aui-tree-paginator",
            "aui-tree-view"
        ]
    },
    "aui-tree-data": {
        "requires": [
            "aui-base-core",
            "aui-base-lang",
            "aui-node-base",
            "aui-timer",
            "aui-component"
        ]
    },
    "aui-tree-io": {
        "requires": [
            "aui-component",
            "aui-io"
        ]
    },
    "aui-tree-node": {
        "requires": [
            "json",
            "querystring-stringify",
            "aui-tree-data",
            "aui-tree-io",
            "aui-tree-paginator"
        ]
    },
    "aui-tree-paginator": {
        "requires": [
            "yui-base"
        ]
    },
    "aui-tree-view": {
        "requires": [
            "dd-delegate",
            "dd-proxy",
            "aui-tree-node",
            "aui-tree-paginator",
            "aui-tree-io"
        ],
        "skinnable": true
    },
    "aui-video": {
        "requires": [
            "querystring-stringify-simple",
            "aui-node",
            "aui-component",
            "aui-debounce"
        ]
    },
    "aui-viewport": {
        "requires": [
            "aui-node",
            "aui-component"
        ]
    }
});
YUI.Env[Y.version].md5 = 'aee5506267327c40f18d5e40d2fab10a';

});