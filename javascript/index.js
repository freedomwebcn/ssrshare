$(".copy").click(function () {
    copyText()
});

function copyText() {
    $("body").after("<input id='copyVal'></input>");
    var text = document.getElementById("copy_text").innerText;;
    var input = document.getElementById("copyVal");
    input.value = text; //修改文本框的内容
    input.select(); // 选中文本
    document.execCommand("copy"); //执行浏览器复制命令
    $("#copyVal").remove();
    alert("复制成功");
}


const $footer = $(".footer");
const $Ul = $('.footer ul');
const speed = -2; //初始化速度
console.log($Ul[0].innerHTML)
$Ul[0].innerHTML += $Ul[0].innerHTML;
//$Ul.append($Ul.html()); //图片内容*2

const $Li = $(".footer ul li");

$Ul.width($Li.length * 64)//设置ul的宽度使图片可以放下
function move() {
    if ($Ul[0].offsetLeft < -($Ul[0].offsetWidth / 2)) { //向左滚动，当靠左的图4移出边框时
        $Ul[0].style.left = 0;
    }
    $Ul[0].style.left = $Ul[0].offsetLeft + speed + 'px';
}
let timer = setInterval(move, 30); //全局变量 ，保存返回的定时器
//移入清除定时器

$footer.mouseenter(function () {
clearInterval(timer)
})

//离开设定时器

$footer.mouseleave(function () {
    timer = setInterval(move, 30)
})

