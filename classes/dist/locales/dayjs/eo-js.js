(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[8031],{

/***/ 1174:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e, o) {
     true ? module.exports = o(__webpack_require__(2978)) : 0;
}(this, function(e) {
    "use strict";
    function o(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    var a = o(e), t = {
        name: "eo",
        weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
        months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
        weekStart: 1,
        weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
        weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
        ordinal: function(e) {
            return e;
        },
        formats: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D[-a de] MMMM, YYYY",
            LLL: "D[-a de] MMMM, YYYY HH:mm",
            LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
        },
        relativeTime: {
            future: "post %s",
            past: "antaŭ %s",
            s: "sekundoj",
            m: "minuto",
            mm: "%d minutoj",
            h: "horo",
            hh: "%d horoj",
            d: "tago",
            dd: "%d tagoj",
            M: "monato",
            MM: "%d monatoj",
            y: "jaro",
            yy: "%d jaroj"
        }
    };
    return a.default.locale(t, null, !0), t;
});


/***/ })

}]);
//# sourceMappingURL=eo-js.js.map