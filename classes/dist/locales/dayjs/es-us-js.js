(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[4182],{

/***/ 3679:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e, s) {
     true ? module.exports = s(__webpack_require__(2978)) : 0;
}(this, function(e) {
    "use strict";
    function s(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    var o = s(e), d = {
        name: "es-us",
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
        },
        ordinal: function(e) {
            return e + "º";
        },
        formats: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "MM/DD/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
        }
    };
    return o.default.locale(d, null, !0), d;
});


/***/ })

}]);
//# sourceMappingURL=es-us-js.js.map