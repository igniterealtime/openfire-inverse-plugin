(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[7013],{

/***/ 9232:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(_, e) {
     true ? module.exports = e(__webpack_require__(2978)) : 0;
}(this, function(_) {
    "use strict";
    function e(_) {
        return _ && "object" == typeof _ && "default" in _ ? _ : {
            default: _
        };
    }
    var d = e(_), t = {
        name: "zh-hk",
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        ordinal: function(_, e) {
            return "W" === e ? _ + "週" : _ + "日";
        },
        formats: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm"
        },
        relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            m: "一分鐘",
            mm: "%d 分鐘",
            h: "一小時",
            hh: "%d 小時",
            d: "一天",
            dd: "%d 天",
            M: "一個月",
            MM: "%d 個月",
            y: "一年",
            yy: "%d 年"
        },
        meridiem: function(_, e) {
            var d = 100 * _ + e;
            return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1100 ? "上午" : d < 1300 ? "中午" : d < 1800 ? "下午" : "晚上";
        }
    };
    return d.default.locale(t, null, !0), t;
});


/***/ })

}]);
//# sourceMappingURL=zh-hk-js.js.map