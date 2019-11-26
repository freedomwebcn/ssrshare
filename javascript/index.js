$(".copy").click(function () {
    copyText()
});

function copyText() {
    $("body").after("<input id='copyVal'></input>");
    var text = document.getElementById("copy_text").innerText;;
    var input = document.getElementById("copyVal");
    input.value = $.trim(text); //修改文本框的内容
    input.focus();
    input.setSelectionRange(0, -1); // 选中文本
    document.execCommand("copy"); //执行浏览器复制命令

    $("#copyVal").remove();
    alert("复制成功");

}


function reurl() {
    url = location.href;
    var times = url.split("?");
    if (times[1] != 1) {
        url += "?1";
        self.location.replace(url);
    }
}
onload = reurl;
/* 有的浏览器第一次加载不会动画  刷新当前页面一次 */

$(document).ready(function () {
    var box0 = $(".loop_img"),
        v0 = 0.6; //这里添加滚动的对象和其速率
    Rin(box0, v0);

    function Rin($Box, v) { //$Box移动的对象，v对象移动的速率
        var $Box_ul = $Box.find("ul"),
            $Box_li = $Box_ul.find("li"),
            left = 0,
            allLiWidth = 0,
            timer; //定时器

        $Box_li.each(function (index) {
            allLiWidth += $(this).outerWidth(true); //即要滚动的长度
            console.log(allLiWidth)
        })

        if (allLiWidth >= $Box.width()) { //如果滚动长度超出Box长度即开始滚动，没有的话就不执行滚动
            $Box_li.clone(true).appendTo($Box_ul);
            Tmove();
        }

        function Tmove() {
            //运动是移动left 从0到-s;
            left -= v;
            if (left <= -allLiWidth) {
                left = 0;
                //$Box_ul.css("left", left)
                $Box_ul[0].style.webkitTransform = 'translateX(' + left + 'px)';
            } else {
                $Box_ul[0].style.webkitTransform = 'translateX(' + left + 'px)';
            }
            timer = requestAnimationFrame(Tmove);
        }

        window.requestAnimationFrame = window.requestAnimationFrame || function (Tmove) {
            return setTimeout(Tmove, 1000 / 60)
        };

        window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;



        /*
         $Box_ul.hover(function () {
             cancelAnimationFrame(timer)
         }, function () {
             if (allLiWidth >= $Box.width()) { //如果滚动长度超出Box长度即开始滚动，没有的话就不执行滚动
                 Tmove();
             }
         })
        */


    }
})