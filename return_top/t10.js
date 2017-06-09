/**
 * Created by a369785853 on 2017/6/9.
 */
var float1 = document.getElementsByClassName("float")[0];
var container = document.getElementsByClassName("container")[0];
var divs = container.getElementsByTagName("div");
var li = float1.getElementsByTagName("li")
var arr = [];
var boolean = true;
for (var i = 0;i < divs.length; i++) {
    arr[i] = parseInt(divs[i].offsetTop);
    li[i].index = i;
    li[i].onclick = function(){
        var _this = this;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var clientHeight1 = document.documentElement.clientHeight || document.body.clientHeight;
        var duration = 1500;
        var time = 100;
        var reg = /^-?(\d+)$/g;
        var select = scrollTop-arr[this.index];
        var String = select.toString();
        var res = String.replace(reg,function(){
            var a = arguments[1];
            return a
        }) //把 select 中的负数转换为正数
        console.log(arr)
        var step = parseInt(res/(duration/time));
        boolean = false;
        var anim = setInterval(function(){
            var currentTop = document.documentElement.scrollTop||document.body.scrollTop;
            if (arr[_this.index] >currentTop) {
                currentTop+=step;
                if(currentTop >= arr[_this.index]) {
                    clearInterval(anim);
                    boolean = true;
                    return ;
                }
            }
            if (arr[_this.index] < currentTop) {
                console.log(currentTop)
                if (currentTop-40 <= arr[_this.index] ) {
                    clearInterval(anim);
                    boolean = true;
                    return ;
                }

                currentTop-=step;
            }

            document.documentElement.scrollTop = currentTop;
            document.body.scrollTop =currentTop;
        },time);

    }
};
window.onscroll = function(){
    var scrollTop1 = document.documentElement.scrollTop || document.body.scrollTop;
    var clientHeight1 = document.documentElement.clientHeight || document.body.clientHeight;
    //console.log(scrollTop1);
    //console.log(clientHeight1);
    if (scrollTop1 > clientHeight1 && boolean) {
        float1.style.display = "block"
    } else {
        float1.style.display = "none"
    }
    for (var i = 0; i< li.length; i++) {
        if (scrollTop1 > arr[i]-100 && scrollTop1 < arr[i]+600) {
            li[i].className = "active"
        } else {
            li[i].className = ''
        }
    }

}
