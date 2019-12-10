$(document).ready(function () {
    // 复制功能
    $(".copy_btn_change_color").click(function () {
        const _that = this
        let e = document.getElementById("copy_text").innerText;
        let t = document.getElementById("input");
        console.log(e)
        t.value = e;
        //实例化clipboard
        const clipboard = new ClipboardJS('#copy_btn_change_color');
        clipboard.on("success", function (e) {
            _that.children[0].style.color = 'red'
            _that.children[0].innerText = '复制成功,请导入SSR客户端使用'
            setTimeout(function () {
                _that.children[0].style.color = ''
                _that.children[0].innerText = '点击此处复制SSR链接'
            }, 6000)
            e.clearSelection();
        });
        clipboard.on('error', function (e) {
            $(_that).children().css({
                'color': 'red',
            })
            $(_that).children().text("复制失败")
        });
    });

})