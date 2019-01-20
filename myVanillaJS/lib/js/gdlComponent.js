



var Component = (function(){
    function Component(){}


    /*
        Support menuType


    
    */
    Component.createMenu = function(menu){
        try{
            if(!!Util.isObject(menu)){
                throw new Error("supported MenuItem is Array");
            }
          
        var menuComponent  = document.createElement('ul');

        var rootMenulength = menu.length;
            for(var i=0;i<rootMenulength;i++){
                var menu_1 = document.createElement('li');

                menu_1.innerText = menu[i].text;
                
                menuComponent.appendChild(menu_1);
            }
        return menuComponent;
        }
        catch(err){
            console.error(err);
            return false;
        }
    }


    return Component;
})();