var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        //var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
        var a = new Array("生命", "灵魂", "活着", "万古", "千秋", "神州", "信仰", "神明", "深渊", "命理", "九幽", "诸天", "神佛", "倾天", "寰宇", "九霄", "凌霄", "不屈", "呐喊", "独断", "神权", "苍穹", "天下", "皇座", "无敌", "四海","盛世","春秋","古今","逆天","神祗","神国","青冥","阴冥","乾纲");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#ff6651"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        }, 1500, function () {
            $i.remove();
        });
    });
});