(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[6343],{

/***/ 3858:
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
    var i = t(e);
    function a(e) {
        return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
    }
    function n(e, t, i) {
        var n = e + " ";
        switch(i){
            case "m":
                return t ? "minuta" : "minutę";
            case "mm":
                return n + (a(e) ? "minuty" : "minut");
            case "h":
                return t ? "godzina" : "godzinę";
            case "hh":
                return n + (a(e) ? "godziny" : "godzin");
            case "MM":
                return n + (a(e) ? "miesiące" : "miesięcy");
            case "yy":
                return n + (a(e) ? "lata" : "lat");
        }
    }
    var r = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), _ = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), s = /D MMMM/, d = function(e, t) {
        return s.test(t) ? r[e.month()] : _[e.month()];
    };
    d.s = _, d.f = r;
    var o = {
        name: "pl",
        weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
        weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
        weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
        months: d,
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
        ordinal: function(e) {
            return e + ".";
        },
        weekStart: 1,
        yearStart: 4,
        relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: "1 dzień",
            dd: "%d dni",
            M: "miesiąc",
            MM: n,
            y: "rok",
            yy: n
        },
        formats: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        }
    };
    return i.default.locale(o, null, !0), o;
});


/***/ })

}]);
//# sourceMappingURL=pl-js.js.map