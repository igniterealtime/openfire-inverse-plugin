(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[2384],{

/***/ 6977:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(Y, M) {
     true ? module.exports = M(__webpack_require__(2978)) : 0;
}(this, function(Y) {
    "use strict";
    function M(Y) {
        return Y && "object" == typeof Y && "default" in Y ? Y : {
            default: Y
        };
    }
    var d = M(Y), e = {
        s: "מספר שניות",
        ss: "%d שניות",
        m: "דקה",
        mm: "%d דקות",
        h: "שעה",
        hh: "%d שעות",
        hh2: "שעתיים",
        d: "יום",
        dd: "%d ימים",
        dd2: "יומיים",
        M: "חודש",
        MM: "%d חודשים",
        MM2: "חודשיים",
        y: "שנה",
        yy: "%d שנים",
        yy2: "שנתיים"
    };
    function _(Y, M, d) {
        return (e[d + (2 === Y ? "2" : "")] || e[d]).replace("%d", Y);
    }
    var l = {
        name: "he",
        weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
        weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
        weekdaysMin: "א׳_ב׳_ג׳_ד׳_ה׳_ו_ש׳".split("_"),
        months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
        monthsShort: "ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ".split("_"),
        relativeTime: {
            future: "בעוד %s",
            past: "לפני %s",
            s: _,
            m: _,
            mm: _,
            h: _,
            hh: _,
            d: _,
            dd: _,
            M: _,
            MM: _,
            y: _,
            yy: _
        },
        ordinal: function(Y) {
            return Y;
        },
        format: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [ב]MMMM YYYY",
            LLL: "D [ב]MMMM YYYY HH:mm",
            LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        formats: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [ב]MMMM YYYY",
            LLL: "D [ב]MMMM YYYY HH:mm",
            LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        }
    };
    return d.default.locale(l, null, !0), l;
});


/***/ })

}]);
//# sourceMappingURL=he-js.js.map