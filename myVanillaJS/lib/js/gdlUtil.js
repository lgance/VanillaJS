console.warn('start GdlUtil');
var Util = (function(){
    function Util(){}
    Util.basePath = './lib/js/';

    /**
     * configs - [attribute]
     * 
     * jsfileName = javaScript file Name
     * path = javaScript logic file location
     * async = loading async true or false
     * onload =  script onload callback (fullPath)
     * 
     * position = body or head 
     */

    Util.include = function(path,configs){
        if(typeof path==='object' && typeof configs ==='undefined'){
            var configs = path;
            path = configs.path;
        }

        var async =configs!==undefined ?
                   (configs.async!==undefined ? 
                   configs.async : true) : true;
                   
        var pathArr = path.replace(/\.js/gi,'').split('/');
        var fullPath = Util.basePath+pathArr.join('/')+'.js';
        var jsfileName = configs!==undefined?
                        (configs.jsfileName !==undefined ?
                        configs.jsfileName : path) :
                        path;
    // create Script tag
        var scriptTags = document.createElement('script');
            scriptTags.setAttribute('src',fullPath);
            scriptTags.async = async;

        var onload = configs!==undefined? 
                        configs.onload : 
                        'undefined';
        if(typeof onload==='function'){
            scriptTags.onload = function (){
                onload(fullPath);
            }
        }
        else {
             scriptTags.onload = function(){
                 console.log('onLoad Script >> '+ fullPath);
             }
        };
    // append script tag in document body 
        document.body.insertBefore(scriptTags,document.body.lastChild);

        // logicNameArray.forEach(function(item,index,arr){
        //     path = dirPath.concat(item,'.js');
        //     var logicScriptTags = document.createElement('script');
        //         logicScriptTags.setAttribute('src',path);
        //         logicScriptTags.async = false; // sync Loading;
        //         logicScriptTags.onload = function(){
        //                 console.warn('Script Loading : ',item.concat('.js'));
        //         }
        //     document.body.insertBefore(logicScriptTags,document.body.lastChild);
        // })
    }
    Util.generatedUUID = function(){
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

    Util.generatedUUID2 = function(){
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    Util.getBrowser = function(){
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
    return Util;

})();
var gdlUtil = {

    removeCursors: function(element){
        if(element.style !=null){
            element.style.cursor = '';
        }
        var children = element.childNodes;

        if(children !=null){
            var childCount = children.length;
            for(var i=0;i<childCount;i+=1){
                gdlUtil.removeCursors(children[i]);
            }
        }

    }





}






console.warn('end Gdl Util');