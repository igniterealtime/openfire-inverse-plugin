(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[7003],{

/***/ 3426:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(d, e) {
     true ? module.exports = e(__webpack_require__(2978)) : 0;
}(this, function(d) {
    "use strict";
    function e(d) {
        return d && "object" == typeof d && "default" in d ? d : {
            default: d
        };
    }
    var _ = e(d), a = {
        name: "cy",
        weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
        months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
        weekStart: 1,
        weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
        monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
        weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
        ordinal: function(d) {
            return d;
        },
        formats: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        relativeTime: {
            future: "mewn %s",
            past: "%s yn ôl",
            s: "ychydig eiliadau",
            m: "munud",
            mm: "%d munud",
            h: "awr",
            hh: "%d awr",
            d: "diwrnod",
            dd: "%d diwrnod",
            M: "mis",
            MM: "%d mis",
            y: "blwyddyn",
            yy: "%d flynedd"
        }
    };
    return _.default.locale(a, null, !0), a;
});


/***/ })

}]);
//# sourceMappingURL=cy-js.js.map