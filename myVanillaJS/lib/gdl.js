


// Utility
Gdl = (function(){
    var instance;
    // Gdl Properties
    var _browser;


    function gdlUtilModuleLoading(){
        var utilTag = document.createElement('script');
        var path = './lib/js/gdlUtil.js';
        // utilTag.setAttribute('src',path);
                                //gdlUtil.js
        utilTag.src = path;
        utilTag.async = false;
        utilTag.onload = function(){
            console.log('gdlUtil Loading');
        }
        // document.head.appendChild(src);
        // document.body.insertBefore(src,document.body.lastChild);
        document.body.appendChild(utilTag,document.body.lastChild);
    }
    function gdlOtherModuleLoading(){
        var arr = ['gdlAjax','tempEvent'];
        // 나머지 모듈 비동기로드 
        // arr.reduce(function(prev,curr,index,arr){
        //         Util.include(curr+'.js');
        // },0);

        // 현재는 동기로드 
        arr.reduce(function(prev,curr,index,arr){
             Util.include({
                path:curr+'.js',
                jsfileName:curr,
                async:false,
                onload : function(){
                    console.warn('임시 테스트 코드 온로드 확인 ',tt);
                }
            });
        },0);


    }
    function initialize(){
        document.addEventListener("DOMContentLoaded", function() {
            console.warn('Windows DOM ContentedLoaded');
            gdlUtilModuleLoading();
            setTimeout(function(){
                gdlOtherModuleLoading();
            },100);


            // gdlOtherModuleLoading();

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

