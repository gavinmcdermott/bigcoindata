//  var SidebarMenuEffects = (function() {

//     // http://coveroverflow.com/a/11381730/989439
//     function mobilecheck() {
//         var check = false;
//         (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
//         return check;
//     }

//     function init() {

//         var container = document.getElementById( 'window-container' ),
//             // event type (if mobile use touch events)
//             eventtype = mobilecheck() ? 'touchstart' : 'click',
//             resetMenu = function() {
//                 $(container).removeClass('app-main-menu-container-open');
//             },
//             bodyClickFn = function(evt) {
//                 if( !$(evt.target).hasClass( 'app-main-menu-container' ) ) {
//                     resetMenu();
//                     document.removeEventListener( eventtype, bodyClickFn );
//                 }
//             };

//         var buttons = $('.btn-menu');

//         $(buttons).each( function( el, i ) {
//             var effect = $(i).attr('data-effect');

//             i.addEventListener( eventtype, function( ev ) {
//                 ev.stopPropagation();
//                 ev.preventDefault();
//                 container.className = 'window-container'; // clear
//                 $(container).addClass( effect );
//                 setTimeout( function() {
//                     $(container).addClass( 'app-main-menu-container-open' );
//                 }, 25 );
//                 document.addEventListener( eventtype, bodyClickFn );
//             });
//         } );

//     }

//     init();

// })();


$(function() {
    // var a = $.ajax('https://api.coindesk.com/v1/bpi/historical/close.json', function(){console.log('test');});

    var menuClosed = false;

    $('#app-menu').click(function() {
        if (menuClosed) {
            $('.expand-width').addClass('shrink-width').removeClass('expand-width');
            $('.expand-width').addClass('shrink-width').removeClass('expand-width');

            $('.sliding-title').css('left', '80px');
            $('.main-content-container').css('left', '0px');
            menuClosed = false;
        } else {
            $('.mcb-slider').removeClass('shrink-width').addClass('expand-width');
            $('.mch-slider').removeClass('shrink-width').addClass('expand-width');

            $('.sliding-title').css('left', '20px');
            $('.main-content-container').css('left', '230px');
            menuClosed = true;
        }

    });

  var chart = AmCharts.makeChart("dashboard-chart", {
        "type": "serial",
        "pathToImages": '',
        "dataProvider": [{
            "year": "1950",
            "value": -0.307
        }, {
            "year": "1951",
            "value": -0.168
        }, {
            "year": "1952",
            "value": -0.073
        }, {
            "year": "1953",
            "value": -0.027
        }, {
            "year": "1954",
            "value": -0.251
        }, {
            "year": "1955",
            "value": -0.281
        }, {
            "year": "1956",
            "value": -0.348
        }, {
            "year": "1957",
            "value": -0.074
        }, {
            "year": "1958",
            "value": -0.011
        }, {
            "year": "1959",
            "value": -0.074
        }, {
            "year": "1960",
            "value": -0.124
        }, {
            "year": "1961",
            "value": -0.024
        }, {
            "year": "1962",
            "value": -0.022
        }, {
            "year": "1963",
            "value": 0
        }, {
            "year": "1964",
            "value": -0.296
        }, {
            "year": "1965",
            "value": -0.217
        }, {
            "year": "1966",
            "value": -0.147
        }, {
            "year": "1967",
            "value": -0.15
        }, {
            "year": "1968",
            "value": -0.16
        }, {
            "year": "1969",
            "value": -0.011
        }, {
            "year": "1970",
            "value": -0.068
        }, {
            "year": "1971",
            "value": -0.19
        }, {
            "year": "1972",
            "value": -0.056
        }, {
            "year": "1973",
            "value": 0.077
        }, {
            "year": "1974",
            "value": -0.213
        }, {
            "year": "1975",
            "value": -0.17
        }, {
            "year": "1976",
            "value": -0.254
        }, {
            "year": "1977",
            "value": 0.019
        }, {
            "year": "1978",
            "value": -0.063
        }, {
            "year": "1979",
            "value": 0.05
        }, {
            "year": "1980",
            "value": 0.077
        }, {
            "year": "1981",
            "value": 0.12
        }, {
            "year": "1982",
            "value": 0.011
        }, {
            "year": "1983",
            "value": 0.177
        }, {
            "year": "1984",
            "value": -0.021
        }, {
            "year": "1985",
            "value": -0.037
        }, {
            "year": "1986",
            "value": 0.03
        }, {
            "year": "1987",
            "value": 0.179
        }, {
            "year": "1988",
            "value": 0.18
        }, {
            "year": "1989",
            "value": 0.104
        }, {
            "year": "1990",
            "value": 0.255
        }, {
            "year": "1991",
            "value": 0.21
        }, {
            "year": "1992",
            "value": 0.065
        }, {
            "year": "1993",
            "value": 0.11
        }, {
            "year": "1994",
            "value": 0.172
        }, {
            "year": "1995",
            "value": 0.269
        }, {
            "year": "1996",
            "value": 0.141
        }, {
            "year": "1997",
            "value": 0.353
        }, {
            "year": "1998",
            "value": 0.548
        }, {
            "year": "1999",
            "value": 0.298
        }, {
            "year": "2000",
            "value": 0.267
        }, {
            "year": "2001",
            "value": 0.411
        }, {
            "year": "2002",
            "value": 0.462
        }, {
            "year": "2003",
            "value": 0.47
        }, {
            "year": "2004",
            "value": 0.445
        }, {
            "year": "2005",
            "value": 0.47
        }],
        "valueAxes": [{
            "axisAlpha": 0,
            "axisColor": '#798286',
            "inside": true,
            "position": "left",
            "ignoreAxisWidth": true,
            "gridAlpha": 0.2,
            "gridColor": '#798286',
            "dashLength": 4,
            "color": "#798286"
        }],
        "graphs": [{
            "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
            "bullet": "round",
            "bulletSize": 2,
            "lineColor": "#54BB87",
            // "lineColor": "#00AFDF",
            "lineThickness": 3,
            "negativeLineColor": "#F96B5C",
            "type": "smoothedLine",
            "valueField": "value",
            "fillAlphas": 0.3,
            "fillColorsField": "lineColor"
        }],
        // SCROLL BAR ON TOP
        // "chartScrollbar": {},
        "chartCursor": {
            "categoryBalloonDateFormat": "YYYY",
            "cursorAlpha": .5,
            "cursorPosition": "mouse",
            "cursorColor": "#798286"
        },
        "dataDateFormat": "YYYY",
        "categoryField": "year",
        "categoryAxis": {
            "minPeriod": "YYYY",
            "parseDates": true,
            "minorGridAlpha": 0,
            "minorGridEnabled": false,
            "axisAlpha": 0,
            "gridAlpha": 0,
            "tickLength": 0,
            "color": "#798286",
            "gridColor": '#798286'
            // "inside": true,
            // "offset": 22.2
        },
        "borderAlpha": 0,
        "marginLeft": 0,
        "marginRight": 0,
        "marginTop": 0,
        "panEventsEnabled": true,
        "autoMargins": true,
        "autoMarginOffset": 0
        // "sequencedAnimation": true,
        // "startDuration": 0.6
        // "startEffect": 'bounce'
    });


});