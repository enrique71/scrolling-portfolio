// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

    $(document).ready(function() {
        $('#fullpage').fullpage({
            anchors: ['Manifoldesign', 'Beds', 'Tables', 'Cabinetry'],
            menu: '#menu',
            sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', '#DA239F'],
            css3: true,
            scrollingSpeed: 550,
            loopBottom: true,
            paddingTop: '50px',
            fitToSectionDelay: 250,
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['Home','Beds','Tables','Cabinetry']
        });
    });
