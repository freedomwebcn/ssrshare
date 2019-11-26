$('.copy_btn_change_color').click(function () {

    copyText($(this).children())

    // copyText(this)
})

function copyText(_children) {

    $("body").after("<input id='copyVal'></input>")
    var text = document.getElementById("copy_text").innerText;;
    var input = document.getElementById("copyVal");
    input.value = text; //修改文本框的内容
    input.focus();
    input.setSelectionRange(0, -1); // 选中文本
    document.execCommand("copy")
    _children.text('复制成功')
    $("#copyVal").remove();

}



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