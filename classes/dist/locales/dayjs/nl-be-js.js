(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[9109],{

/***/ 2424:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e, a) {
     true ? module.exports = a(__webpack_require__(2978)) : 0;
}(this, function(e) {
    "use strict";
    function a(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    var n = a(e), d = {
        name: "nl-be",
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        weekStart: 1,
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        ordinal: function(e) {
            return e;
        },
        formats: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar"
        }
    };
    return n.default.locale(d, null, !0), d;
});


/***/ })

}]);
//# sourceMappingURL=nl-be-js.js.map