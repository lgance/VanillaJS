

var manage = (function(){
    var self = this;
    
    var postItArr = [];
    var board = document.getElementById('board');
  
    // var boardMenu = document.getElementById('board-menu');
    var boardMenu;
    var postitMenu;
    // var postitMenu = document.getElementById("postit-menu");
    var contextStatus = {status:false,id:""};
 
    
    var target = {x:"",y:""};
    var mouse = {x:"",y:""};

    function dragStart(targetLocation,mouseLocation){

        if(targetLocation.x ==="" && targetLocation.y===""){
            target.x = "0";
            target.y = "0";
        }    
        else if(targetLocation.x ===""){
               target.x = "0"; 
        }
        else if(targetLocation.y ===""){
                target.y = "0";
        }
       
        else{
            target.x = targetLocation.x;
             target.y = targetLocation.y;
        }

    mouse.x = mouseLocation.x;
    mouse.y = mouseLocation.y;

    }
    function getTarget(){
        return target;
    }
    function getMouse(){
        return mouse;
    }
    function init(){
        setBoardMenu();  
    }
    function postIt (num){
          this.postNum = num;
          this.postTag =0;
          this.textareaTag=0;
    };
    postIt.prototype.create = function(){
        
    // alert("postit 생성 이름은: "+obj.name);
    var postit = document.createElement('div');
    // postit.setAttribute('title',title);
        postit.className='postit';
        // set class postit-title
        var postit_title = document.createElement('div');
            postit_title.className="postit-title";
            // set class arrow-up | arrow-down
            var arrow_up = document.createElement('span');
            arrow_up.className='arrow-up';
            // set class close-up button
            var close_up = document.createElement('button');
            close_up.className='close-up';
        postit_title.appendChild(arrow_up);
        postit_title.appendChild(close_up);
    
    
       postit.appendChild(postit_title);     
        // set class postit-body
        var postit_body = document.createElement('div');
        postit_body.className='postit-body';
            // set class input-body
            var input_body = document.createElement('div');
            input_body.className='input-body';
                // not condition
                var textarea = document.createElement('textarea');
                this.textareaTag = textarea;
                var sizebar =  document.createElement('span');
                    sizebar.className='body-size';
            input_body.appendChild(textarea);
            input_body.appendChild(sizebar);
            postit_body.appendChild(input_body);    
        postit.appendChild(postit_body);
     
    // postit.addEventListener('mousedown',this.postDown);
    // drag it use

    sizebar.setAttribute('draggable',true);


    sizebar.addEventListener('dragstart',function(e){
        var mouseLocation = {x:e.pageX,y:e.pageY};
        manage.dragStart({},mouseLocation);

    });
    sizebar.addEventListener('drag',function(e){
    var movex = manage.getMouse().x-e.pageX;;   
    var movey = manage.getMouse().y-e.pageY;;
 // console.log(e.target.parentElement.parentElement.parentElement);
 var postIt = e.target.parentElement.parentElement.parentElement;

    // var width_ = e.target.parentElement.parentElement.parentElement.offsetWidth;
    // var height_ =e.target.parentElement.parentElement.parentElement.offsetHeight;

    var width_  = postIt.clientWidth;
    var height_ = postIt.clientHeight;
   
    width_ = width_-movex;
    height_ = height_-movey;

    console.log("이동거리  : ",movex," : ",movey);

    console.log("변경된 사이즈 : ",width_," : ",height_);
    postIt.style.width = width_ +"px";
    postIt.style.height = height_+"px";

    
    var mouseLocation = {x:e.pageX,y:e.pageY};
    manage.dragStart({},mouseLocation);

    });
    sizebar.addEventListener('dragend',function(e){

    });
    postit_title.setAttribute('draggable',true);
    postit_title.addEventListener('mousedown',function(e){
        e.stopPropagation();
        postitMenu.style.visibility = 'hidden';
  
      if(e.target.className==="close-up"){
            console.log('x key Click');
            e.target.parentElement.parentElement.className==="postit"
// 가라 기능..
       document.getElementById('board').removeChild(e.target.parentElement.parentElement);
      }
      else if(e.target.className==="arrow-up"){
        e.target.className="arrow-down";
        e.target.parentElement.parentElement.className="postit-up";
              
            console.log("접기 접기");
      }
      else if(e.target.className==="arrow-down"){

            console.log("펼치기 펼치기");
        e.target.className="arrow-up";    
        e.target.parentElement.parentElement.className="postit";
      }

      // post it  x click 접기
      // 구조 문제 
    });
    postit_title.addEventListener('dragstart',function(e){
    
        
    console.log("drag Start");
    var targetLocation = {
        x:e.target.parentElement.style.left,
        y:e.target.parentElement.style.top
                       };
    var mouseLocation = {x:e.pageX ,y:e.pageY};

      e.dataTransfer.dropEffect = "move";
      manage.dragStart(targetLocation,mouseLocation);
    });


    postit_title.addEventListener('dragend',function(e){
        console.log(e);
    if(e.target.parentElement== null){}
    else{
        var moveObj = e.target.parentElement;
      
        var moveX = e.clientX - manage.getMouse().x;
        var moveY = e.clientY - manage.getMouse().y;

        var InputX = parseInt(manage.getTarget().x) + moveX;
        var InputY = parseInt(manage.getTarget().y) + moveY;
// 상 좌
if(InputX < 0 && InputY < 0){
         InputX = 0;
         InputY = 0;
}
// 우 상
else if(InputX + e.target.parentElement.clientWidth > manage.getBoardWidthSize()
    && InputY < 0 ){
        InputX = manage.getBoardWidthSize()-e.target.parentElement.clientWidth;
        InputY = 0;
}
// 우 하    // 스크롤 이슈가 발생    
else if(InputX+ e.target.parentElement.clientWidth > manage.getBoardWidthSize() 
            && InputY + e.target.parentElement.clientHeight > manage.getBoardHeightSize()){
                    InputX = manage.getBoardWidthSize()-e.target.parentElement.clientWidth-5;
                    InputY = manage.getBoardHeightSize()- e.target.parentElement.clientHeight-7;
}
// 좌 하 
else if(InputX < 0  &&InputY + e.target.parentElement.clientHeight > manage.getBoardHeightSize()){
    InputX = 0;
    InputY = manage.getBoardHeightSize() - e.target.parentElement.clientHeight;
}
//  좌  
else if (InputX < 0 ) {
          InputX = 0;
} 
//  상 
else if(InputY < 0 ){
         InputY = 0;
  }

// 우
else if(InputX + e.target.parentElement.clientWidth > manage.getBoardWidthSize()){
            InputX = manage.getBoardWidthSize()-e.target.parentElement.clientWidth-5;
}
// 하
else if(InputY + e.target.parentElement.clientHeight > manage.getBoardHeightSize()){
            InputY = manage.getBoardHeightSize() - e.target.parentElement.clientHeight-7;
}

        
        moveObj.style.top  = InputY + "px";
        moveObj.style.left  = InputX + "px";
    }

console.log("screen  X : ",e.screenX," Y :",e.screenY);
console.log("client  X :",e.clientX," Y : ",e.clientY);
console.log("page X : ",e.pageX, " Y :",e.pageY);

    });
    this.postTag = postit;
    return postit;
    
// newPost

    };
   postIt.prototype.getTextArea = function(){
        return this.textareaTag;
   }
   postIt.prototype.getTag = function(){
       return this.postTag;
   }
    postIt.prototype.getOwner = function(){
        return  this.postNum;
    }
   postIt.prototype.isPos = function(color,obj,flag){

    // obj.x  click X
    // obj.y  click y 
    var x = parseInt(obj.x);
    var y = parseInt(obj.y);
        var top = parseInt(this.getTag().style.top);
        var left = parseInt(this.getTag().style.left);
        
        
        if(this.getTag().style.top==="" && this.getTag().style.left===""){
            top =0;
            left=0;
        }
        else if(this.getTag().style.top===""){
            top=0;
        }
        else if(this.getTag().style.left===""){
            left=0;
        }

        var width = parseInt(this.getTag().clientWidth);
        var height = parseInt(this.getTag().clientHeight);
        if(x > left && x < left+width &&
          y > top && y < top+height){
                        if(flag==="bg"){
                        this.getTag().style.backgroundColor=color;
                        }
                        else{
                        this.getTextArea().style.color=color;  
                        
                        }
        }
   }
    var allDelete = function(){
        var arr = document.querySelectorAll('div.postit');
        for(var i=0;i<arr.length;i++){
            board.removeChild(arr[i]);
        }
        
   }
   var postItAlign = function(){
        var arr = document.querySelectorAll('div.postit');
    var width ="250px";
    var height="200px";
    for(var i=0;i<arr.length;i++){
        arr[i].style.width=width;
        arr[i].style.height=height;

    }
    // 가로 총 길이 /width 가 되었을 경우에 height 만큼을 잡고
    // 줄바꿈이 일어나야 함 
    /*
        정렬 Function 
    */
   };
    var newPost = function(){
        var curLength = postItArr.length;
        var postit = new postIt(curLength);
        board.appendChild(postit.create(curLength));
        postItArr.push(postit);
   }
   var contextMenuSwitch = function(menu){
       // false 면 
    contextStatus ? contextStatus = false : contextStatus = true;
            if(menu ==='boardMenu'){
                postitMenu.style.visibility = 'hidden';
            }
            else if(menu ==='postit'){
                boardMenu.style.visibility = "hidden";
            }
            else {
                postitMenu.style.visibility = 'hidden';
                boardMenu.style.visibility = "hidden";
            }
   }
   function show(){
      // in use All postit Object;
      for (var i=0;i<postItArr.length;i++){
        console.log(postItArr[i]);
      }
   }
   function getBoardWidthSize(){
        return board.offsetWidth;;
   }
   function getBoardHeightSize(){
        return board.offsetHeight;
   }
   function contextOpen(obj){
        if(obj.menuName ==='boardMenu'){
            if(postitMenu.style.visibility==='visible')
                postitMenu.style.visibility='hidden';
            boardMenu.style.visibility = "visible";
            boardMenu.style.top =obj.y+"px";
            boardMenu.style.left =obj.x+"px";
        }
        else if(obj.menuName ==='postIt'){
            if(boardMenu.style.visibility==='visible')
                  boardMenu.style.visibility='hidden';
            
            postitMenu.style.visibility = "visible";
            postitMenu.style.top =obj.y+"px";
            postitMenu.style.left =obj.x+"px";
        }
    }


function setColor(color,flag){
var obj = {x:postitMenu.style.top,
           y:postitMenu.style.left,
        }
    for(var i=0;i<postItArr.length;i++){
        postItArr[i].isPos(color,obj,flag);
    }

}
   
   function setBoardMenu(){
    postitMenu = document.getElementById("postit-menu");
    // board set 
    boardMenu = document.getElementById('board-menu');  

    board.addEventListener('mousedown',function(e){
        console.log('board');
        e.stopPropagation();
     if(e.button===0 ){
        boardMenu.style.visibility = "hidden";
        postitMenu.style.visibility = 'hidden';

//e.target.parentElement.parentElement.parentElement.style.zIndex=2;     
    }

});
  // droppable it use Board 
  board.addEventListener('drop',function(e){
    e.preventDefault();
        console.warn('board on drop');
    // console.log(e);
});
board.addEventListener('dragover',function(e){
    e.preventDefault();
        // console.warn('board on drag over');
});

  
  
  
            
postitMenu.addEventListener('mousedown',function(e){
    e.stopPropagation();
        e.button === 2 ?  contextMenuSwitch() : console.log("L Click");
if(e.target.parentElement.innerText==='배경 색상 변경\n'){
        console.log('배경색 변경');
    // 오픈상태   
        if(e.target.className==="select-selected"){
            e.target.className="select-selectedOpen";  
            e.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.style.display='none';       
        }
        else{
            e.target.className="select-selected"
            e.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.style.display='inline-block';           
        }
        // e.target.nextElementSibling.
        if(e.target.firstElementChild.className==="select-items") {

            e.target.firstElementChild.className="select-itemsOpen";
        }
        else{
            e.target.firstElementChild.className="select-items";
        }

}   // 배경 색상 변경
else if(e.target.tagName==="SELECT"){
    console.log('글자 크기 선택');
}   
else if(e.target.parentElement.innerText==='글자 색상 변경\n'){
    console.log('글자 색상 변경');

    if(e.target.className==="select-selected"){
        e.target.className="select-selectedOpen";   
    }
    else{
        e.target.className="select-selected"
    }
    if(e.target.firstElementChild.className==="select-items") {

        e.target.firstElementChild.className="select-itemsOpen";
    }
    else{
        e.target.firstElementChild.className="select-items";
    }
}  
else if(e.target.className==="blue"){
if(e.target.parentElement.parentElement.parentElement.innerText==="배경 색상 변경\n"){            
    setColor("#00D8FF","bg");
}
else{
      setColor("#00D8FF","");
    }
}
else if(e.target.className==="pink"){
if(e.target.parentElement.parentElement.parentElement.innerText==="배경 색상 변경\n"){            
    setColor("pink","bg");
}
else{
    setColor('pink');
}

}
else if(e.target.className==="yellow"){
if(e.target.parentElement.parentElement.parentElement.innerText==="배경 색상 변경\n"){            
    setColor("yellow","bg");
}
else{
    setColor('yellow');
}
}
});




 // boardMenu set
 boardMenu.addEventListener('mousedown',function(e){
    console.log(e);
    e.stopPropagation();
    e.stopImmediatePropagation();
    e.preventDefault();
    e.button === 2 ?  contextMenuSwitch() : console.log("L Click");
        switch(e.target.id){
            case "0":
                console.log('create');
                newPost();
                break;
            case "1":
                console.log("align ");
                postItAlign();
                break;
            case "2":
                console.log("all delete");
                allDelete();  
                break;
            default:
                break;
        }
       boardMenu.style.visibility = "hidden";
      
    });


   }
    return {
        init:init,
        postIt:postIt,
        allDelete:allDelete,
        newPost:newPost,
        contextOpen:contextOpen,
        contextMenuSwitch:contextMenuSwitch,
        show:show,
        getBoardWidthSize:getBoardWidthSize,
        getBoardHeightSize:getBoardHeightSize,
        dragStart:dragStart,
        getTarget:getTarget,
        getMouse:getMouse

    }
})();
window.oncontextmenu = function (e) {
   var obj = {menuName:"",x:e.pageX,y:e.pageY};
    if(e.target.id ==="board"){
        obj.menuName ='boardMenu'
        manage.contextOpen(obj);
    }
    else if(e.target.offsetParent.offsetParent.className ==="postit"){
        obj.menuName ='postIt';
        var arr = document.querySelectorAll('div#postit-menu-inner li');
        arr[3].innerText = "접기";
        manage.contextOpen(obj);
    }
    else if(e.target.offsetParent.className==="postit"){
        obj.menuName ='postIt';
        manage.contextOpen(obj);
        var arr = document.querySelectorAll('div#postit-menu-inner li');
        arr[3].innerText = "접기";
    }
    else if(e.target.offsetParent.className==="postit-up"){
        obj.menuName='postIt';
        manage.contextOpen(obj);
        var arr = document.querySelectorAll('div#postit-menu-inner li');
        arr[3].innerText = "펼치기";
    }
    return false;
}

function setcontextMenu(){
    //postIt Set
var strArr =["새로운 포스트잇","포스트잇 정렬하기","전체 삭제"];
    var boardContext = document.createElement('div');
         //   boardContext.className='board-menu';
         boardContext.setAttribute('id','board-menu');
    var ulRoot = document.createElement('ul');
        for(var i=0;i<3;i++){
            var liRoot = document.createElement('li');
            liRoot.setAttribute('id',i);
            liRoot.innerText = strArr[i];
            ulRoot.appendChild(liRoot);    
        }
    boardContext.appendChild(ulRoot);

    document.getElementById('board').appendChild(boardContext);
var flag = false;
 // postIt Menu 
 
    var postItMenu = document.createElement('div');
    postItMenu.setAttribute('id','postit-menu');
    var colorArr = ["blue","pink","yellow"];
    var sizeArr=["12","14","16"];
        var postItInnerMenu = document.createElement('div');
        postItInnerMenu.setAttribute('id','postit-menu-inner');
        postItInnerMenu.innerText = '서식 조정 기능';
          var postUl = document.createElement('ul');
            // li 1
            var backgroundColorli = document.createElement('li');
            backgroundColorli.innerText = '배경 색상 변경';
                var selectSelected = document.createElement('div');
                selectSelected.className='select-selected';

                var selectItems = document.createElement('div');
                selectItems.className='select-items';
                                        
                    for(var i=0;i<3;i++){
                        var temp = document.createElement('div');
                        temp.className=colorArr[i];
                        selectItems.appendChild(temp);
                    }


            selectSelected.appendChild(selectItems);
            backgroundColorli.appendChild(selectSelected);
            postUl.appendChild(backgroundColorli);
            // li 2
            var textSizeli = document.createElement('li');
            textSizeli.innerText='글자 크기 선택';
            // 글자 크기 밑 select-selected랑
            var select = document.createElement('select');
            select.setAttribute('id','changeFont');
            select.onchange=changeValue();
                for(var i=0;i<3;i++){
                    var tt = document.createElement('option');
                    tt.innerText = sizeArr[i];
                    select.appendChild(tt);
                }
            textSizeli.appendChild(select);    
            // 글자 색상 배경 넣어야함
    postUl.appendChild(textSizeli);
            // li 3
            var textColorli = document.createElement('li');
            textColorli.innerText='글자 색상 변경';
            var selectSelected2 = document.createElement('div');
            selectSelected2.className='select-selected';
            
            var selectItems2 = document.createElement('div');
            selectItems2.className='select-items';
                for(var i=0;i<3;i++){
                    var temp = document.createElement('div');
                    temp.className=colorArr[i];
                    selectItems2.appendChild(temp);
                }
            selectSelected2.appendChild(selectItems2);
            textColorli.appendChild(selectSelected2);
    postUl.appendChild(textColorli);








    var separatorF = document.createElement('div');
    separatorF.className='menu-separator';
    postUl.appendChild(separatorF);
            // li 4
            var postStatusli = document.createElement('li');
    postUl.appendChild(postStatusli);

    var separatorS = document.createElement('div');
    separatorS.className='menu-separator';
    postUl.appendChild(separatorS);
            // li 5
            var timerli = document.createElement('li');
            timerli.innerText='■ 초 후 삭제';
    postUl.appendChild(timerli);
var separatorT = document.createElement('div');
    separatorT.className='menu-separator';
    postUl.appendChild(separatorT);
            // li6
            var deleteli = document.createElement('li');
            deleteli.innerText='삭제하기';
    postUl.appendChild(deleteli);

    postItInnerMenu.appendChild(postUl);
    postItMenu.appendChild(postItInnerMenu);


    document.getElementById('board').appendChild(postItMenu);


}
window.onresize =function(event){

    console.log("onReisze  Board Size ");
    // console.warn("Board width : " ,manage.getBoardWidthSize());
    // console.warn("Board Height  : ",manage.getBoardHeightSize());
};
window.onload = function(){
            setcontextMenu();
            manage.init();
            this.console.warn("Window onload");



}
function changeValue(e){
var sbox= document.getElementById('changeFont');
console.log("change Select");


}
// console.log("screen  X : ",e.screenX," Y :",e.screenY);
// console.log("client  X :",e.clientX," Y : ",e.clientY);
// console.log("page X : ",e.pageX, " Y :",e.pageY);