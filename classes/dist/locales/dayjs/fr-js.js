(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[8431],{

/***/ 2154:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e, n) {
     true ? module.exports = n(__webpack_require__(2978)) : 0;
}(this, function(e) {
    "use strict";
    function n(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    var t = n(e), i = {
        name: "fr",
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        weekStart: 1,
        yearStart: 4,
        formats: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        ordinal: function(e) {
            return "" + e + (1 === e ? "er" : "");
        }
    };
    return t.default.locale(i, null, !0), i;
});


/***/ })

}]);
//# sourceMappingURL=fr-js.js.map