(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[6660],{

/***/ 4298:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e, t) {
     true ? module.exports = t(__webpack_require__(2978)) : 0;
}(this, function(e) {
    "use strict";
    function t(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    var a = t(e), d = {
        name: "sv-fi",
        weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
        weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
        weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekStart: 1,
        yearStart: 4,
        ordinal: function(e) {
            var t = e % 10;
            return "[" + e + (1 === t || 2 === t ? "a" : "e") + "]";
        },
        formats: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY, [kl.] HH.mm",
            LLLL: "dddd, D. MMMM YYYY, [kl.] HH.mm",
            l: "D.M.YYYY",
            ll: "D. MMM YYYY",
            lll: "D. MMM YYYY, [kl.] HH.mm",
            llll: "ddd, D. MMM YYYY, [kl.] HH.mm"
        },
        relativeTime: {
            future: "om %s",
            past: "för %s sedan",
            s: "några sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en månad",
            MM: "%d månader",
            y: "ett år",
            yy: "%d år"
        }
    };
    return a.default.locale(d, null, !0), d;
});


/***/ })

}]);
//# sourceMappingURL=sv-fi-js.js.map