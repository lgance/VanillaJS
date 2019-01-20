// console.log('gdlAjax .js ');
var Ajax = function(){
    function Ajax(){}
    Ajax.call = function(url,settings){
        if(typeof url ==='object'&& typeof settings==='undefined'){
            var settings = url;
            url = settings.url;
        }
        var type = settings.type ? settings.type :'get';
        var async = settings.async !==undefined ? settings.async : true;
        var responseType = settings.dataType !==undefined ? settings.dataType :"";
        var _success = settings.success;
        var _error = settings.error;
        var _complete = settings.complete;
        if(type.toLowerCase()==='get' && settings.data){
            url += Ajax.toQueryString(settings.data);
        }
        var xhr = new XMLHttpRequest;
        xhr.open(type,url,async);
        if(async)
            xhr.responseType = responseType;
        xhr.onload = function(){
            if(xhr.status ===200){
                // response Data Validataion 
                
                if(typeof _success ==='function'){
                    _success(xhr.response,xhr.status,xhr);
                } // success callback 
            } // status 200 PASS 
            else{
                    _error(xhr,xhr.status);
            } // error callback  
            if(typeof _complete ==='function'){
                _complete(xhr,xhr.status);
            } // complete callback 
        } // onload = function 
        
        // if type post 
        // do SomeThing

        xhr.send();
    } // call

    Ajax.toQueryString = function(data){
        if(typeof data==='string'){
            return "?" + data;
        }
        else if(typeof data==='object'){
            // return "?" + $.param(data);
        }
    }
    return Ajax
}();

