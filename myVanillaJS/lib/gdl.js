


// Utility
Gdl = (function(){
    var instance;
    // Gdl Properties
    var _browser;

    function getBrowser(){
        // 크롬
        return _browser = typeof _browser!=='undefined' ? _browser  : 
        !!navigator.userAgent.match(/chrome/i) ? 'chrome' :
        //모바일
        (navigator.userAgent.match('CriOS') || navigator.userAgent.match(/mobile/i)) ? 'mobile' :
        //사파리
        !!navigator.userAgent.match(/macintosh/i) ? 'safari' :
        //아이패드 아이팟 아이폰
        !!navigator.userAgent.match(/iPad|iPhone|iPod/i) ? 'iPhone' :
        // IE
        !!navigator.userAgent.match(/Trident/i) ? 'ie' : 'unknown';
    }

    function initialize(){
    // Browser Setting
        getBrowser();
        return{

        }
    }
    
    return{
        getInstance:function(){
            if(!instance){
                instance = initialize();
            }
            return instacne
        }
    }
})();

// window 로딩 순서 

