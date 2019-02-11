
var section_ = document.querySelector('main section');


// Utility
Gdl = (function(){
    var instance;
    // Gdl Properties
    var _browser;

    // var libraryLogic = ['gdlUtil','gdlAjax','gdlComponent','tempEvent'];
    var libraryLogic = ['gdlAjax','gdlComponent','tempEvent'];



    var basePath = './lib/js/';
    // 미사용 로컬에선 사용 불가능 WAS위에선 가능 
    function create(obj){
        if(!Util.isObject(obj)){
            return;
        }

        var config = obj["config"];
        var xhr = new XMLHttpRequest;
        var url = 'http:./'+config;
        xhr.onreadystatechange = function(){
            if(xhr.readyState ===4){
                    if(xhr.status===200){
                        console.log('success');
                        console.log(xhr);
                    }
                    else{
                        console.error('error');
                    }
            }

        }
        console.log(url);
        xhr.open('GET',url,true);
        xhr.send();
    }
    
    
    
    function onload(){}; 

    function initialize(){
        console.time('logic Load');

        Util.loadCSS('./lib/css/gdlComponentStyle/GdlComponent.css');
        // library Loading // css js 분기 처리 추후 
       libraryLogic.reduce(function(prev,curr,index,arr){
                Util.include({
                    path:basePath+curr+'.js',
                    jsfileName:curr,
                    async:true,
                    onload : function(){
                        console.warn('['+(index+1)+'] load Complete ',curr);
                    }
                });
       },0);

       console.timeEnd('logic Load');

        document.addEventListener("DOMContentLoaded", function() {
                // JS HTML load Complete
                console.warn('DOMCOntentedLoad');
        });
        
        return{
         
        }
    }
    
    return{
        getInstance:function(){
            if(!instance){
                instance = initialize();
            }
            return instance
        }
    }
})().getInstance();

// window 로딩 순서 

