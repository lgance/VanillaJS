


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
    function generatedUUID(){
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
    function generateUUIDMIT() { // Public Domain/MIT
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    function initialize(){
    // Browser Setting
        getBrowser();
        return{
            generatedUUID:generatedUUID
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

