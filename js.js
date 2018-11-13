var items=document.getElementsByClassName('item');/*获取图片*/
var points=document.getElementsByClassName('point');/*获取点*/
var goPreBtn =document.getElementById('goPre');/*获取左按钮*/
var goNextBtn =document.getElementById('goNext');/*获取右按钮*/
var time = 0;/*定时器*/
var index=0;/*index表示第几张图片在展示，即第index张图有active这个类名*/
/*第几个点在展示*/

var clearActive = function () {
    for(var i=0; i<items.length;i++)
    {
        items[i].className = 'item';
        points[i].className = 'point';
    }
}//用在指定新index前，遍历一遍去掉active

var goIndex = function () {/*函数名叫goIndex*/
    /*让第index张图片和点按钮有active这个类名*/
    clearActive();
/*    console.log(index);*/
    points[index].className = 'point active'/*points和items在js开头定义了*/
    items[index].className = 'item active';
}

var goNext = function(){
    if(index < 4)
    {
        index++;
    }
    else
        index = 0;
    goIndex();
    time = 0;/*点击左箭头，time重置*/
}

var goPre = function(){
    if(index > 0)
    {
        index--;
    }
    else
        index = 4;
    goIndex();
    time = 0;/*点击右箭头，time重置*/
}

goNextBtn.addEventListener('click',function(){
    goNext();
})

goPreBtn.addEventListener('click',function () {
    goPre();
})

for(var i=0; i<points.length; i++){/*不是很明白*/
    points[i].addEventListener('click',function () {
        var pointIndex = this.getAttribute('data-index');
        /*获取触发事件的事物的属性*/
     /*   console.log(pointIndex);*/
        index = pointIndex;
        goIndex();
        time = 0;/*点击小点后，time重置，图片停2s再跳下一张*/
    })
}

/*还差鼠标放到点上面时，点的颜色改变*/
/*自动轮播需要定时器*/

/*定时器*/
/*setInterval(function () {
    goNext();
},2000)/!*设置间隔(时间),2000ms,每2秒执行一次*!/
/!*需要解决手动轮播和自动轮播的协调问题，如下*!/*/

setInterval(function () {/*每100ms执行如下代码*/
    time++;
    if(time == 20){/*20次，即2秒，跳到下一张*/
        goNext();
        time=0;
    }
    if(time>20){
        time = 0;
        goNext();
    }
},100)








/*获取图片类名，以决定给哪个图片加上active这个类名*/
/*1
var goPre =document.getElementById('goPre');
/!*获取按钮*!/
var goNext =document.getElementById('goNext');
*/

/*1
goPre.onclick = goNext.onclick = c;
function c(e) {
    items[index].className = 'item';
    var x = e.target.id == "goPre" ? -1 : 1;
    if (x == -1){
        index = index > 0 ? index + x : 4;
    }else{
        index = index < 4 ? index + x : 0;
    }
    items[index].className = 'item active';
}
function d(x) {
    console.log(x);
}*/
