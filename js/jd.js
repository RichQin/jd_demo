window.onload = function(){
    /* 轮播图 */
    var items = document.getElementsByClassName('item');
    var points = document.getElementsByClassName('point');
    var goPreBtn = document.getElementsByClassName('arrow-l');
    var goNextBtn = document.getElementsByClassName('arrow-r');

    var time=0;//定时器图片跳转参数
    var index = 0;//index表示第几张在显示 active类名赋给谁
    var clearActive = function(){
        for(var i=0;i<items.length;i++){
            items[i].className='item';
        }
        for(var i=0;i<points.length;i++){
            points[i].className='point';
        }
    }
    var goIndex = function(){
        clearActive();
        //console.log(index);
        items[index].className='item active';
        points[index].className='point current';
    }

    var goNext = function(){
        
        if(index<7){
            index++;
        }else{index=0;}
        goIndex();
        time=0;
    } 
    var goPre = function(){
        
        if(index==0){
            index=7;
        }else{index--;}
        goIndex();
        time=0;
    } 

    goPreBtn[0].addEventListener('click',function(){
        goPre();
    });
    goNextBtn[0].addEventListener('click',function(){
        goNext();
    });
    for(var i=0;i<points.length;i++)
    {
        points[i].pIndex = i; 
        points[i].onclick=function()
        {
            var pointIndex=this.pIndex;
            index=pointIndex;
            goIndex(); 
            time=0;
        }
        
    }

    setInterval(function(){
        time++;
        if(time==20){
            goNext();
            time=0;
        }
    
    },100)

    /* 侧边tab栏移动 */
    var newsT = document.getElementById('newsT');
    var flag = document.getElementById('flag');
    var newsContainer = document.getElementById('newsContainer');
    for(var i=0;i<2;i++)
    {
        var link = newsT.children[i];
        link.onmouseover = linkMouseover;
        link.setAttribute('index',i);
    }
    function linkMouseover(){
        var offsetLeft = this.offsetLeft;
        animate(flag,offsetLeft-2);
        for(var i=0,len =newsContainer.children.length;i<len;i++)
        {
            var div = newsContainer.children;
            for(var j=0;j<div.length;j++)
            {
                div[j].className = 'news-b hide'
            }
            div[this.getAttribute('index')].className = 'news-b show';
        }
    }
}