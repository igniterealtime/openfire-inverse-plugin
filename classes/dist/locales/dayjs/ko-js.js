(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[8789],{

/***/ 3116:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e, _) {
     true ? module.exports = _(__webpack_require__(2978)) : 0;
}(this, function(e) {
    "use strict";
    function _(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    var d = _(e), t = {
        name: "ko",
        weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
        weekdaysShort: "일_월_화_수_목_금_토".split("_"),
        weekdaysMin: "일_월_화_수_목_금_토".split("_"),
        months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        ordinal: function(e) {
            return e + "일";
        },
        formats: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY년 MMMM D일",
            LLL: "YYYY년 MMMM D일 A h:mm",
            LLLL: "YYYY년 MMMM D일 dddd A h:mm",
            l: "YYYY.MM.DD.",
            ll: "YYYY년 MMMM D일",
            lll: "YYYY년 MMMM D일 A h:mm",
            llll: "YYYY년 MMMM D일 dddd A h:mm"
        },
        meridiem: function(e) {
            return e < 12 ? "오전" : "오후";
        },
        relativeTime: {
            future: "%s 후",
            past: "%s 전",
            s: "몇 초",
            m: "1분",
            mm: "%d분",
            h: "한 시간",
            hh: "%d시간",
            d: "하루",
            dd: "%d일",
            M: "한 달",
            MM: "%d달",
            y: "일 년",
            yy: "%d년"
        }
    };
    return d.default.locale(t, null, !0), t;
});


/***/ })

}]);
//# sourceMappingURL=ko-js.js.map