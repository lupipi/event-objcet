window.onload=function(){
    var box=document.getElementById('divselect'),
        title=box.getElementsByTagName('cite')[0],
        menu=box.getElementsByTagName('ul')[0],
        as=box.getElementsByTagName('a'),
        index=-1;
    // 点击选框时
    title.onclick=function(event){
      event=event||window.event;
      if(event.stopPropagation){
        event.stopPropagation();
      }else{
        event.canselBubble=true;
      }
      menu.style.display='block';
      document.onkeyup=function(e){
        e=e||window.event;
        for (var i = 0; i <as.length; i++) {
          as[i].style.background='none';
        }
        // 如果按下了向下方向键
        if(e.keyCode==40){
          index++;
          if(index>=as.length){
            index=0;
          }
          as[index].style.background='#ccc';
        }
        // 如果按下了向上方向键
        if(e.keyCode==38){
          if(index<=0){
            index=as.length;
          }
          index--;
          as[index].style.background='#ccc';
        }
      // 如果按下了回车键
        if(e.keyCode==13 && index!=-1){
          title.innerHTML=as[index].innerHTML;
          menu.style.display='none';
          index=-1;    
        }
      }
    }  
    // 滑过滑过、离开、点击每个选项时
    for (var i = as.length - 1; i >= 0; i--) {
      as[i].onmouseover=function(){
        this.style.background='#ccc';
      }
      as[i].onmouseout=function(){
        this.style.background='none';
      }
      as[i].onclick=function(){
        title.innerHTML = this.innerHTML;
      }
    }
    // 点击页面空白处时
    document.onclick=function(){
      menu.style.display='none';
    }
 }
