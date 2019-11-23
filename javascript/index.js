$(".copy").click(function () {
    copyText()
});
function copyText() {
    $("body").after("<input id='copyVal'></input>");
    var text = document.getElementById("copy_text").innerText;;
    var input = document.getElementById("copyVal");
    input.value = text;//修改文本框的内容
    input.select();// 选中文本
    document.execCommand("copy");//执行浏览器复制命令
    $("#copyVal").remove();
    alert("复制成功");
}