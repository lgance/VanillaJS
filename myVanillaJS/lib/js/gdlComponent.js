


CommonComponent = (function(){
    function CommonComponent(){

    }

    CommonComponent.prototype.setProps = function(props){
        if(!Util.isObject(props)){
            console.error('this props is not Object');
            return false;
        }


    }




    return CommonComponent;
})();








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
            menuComponent.addEventListener('click',function(){
                console.warn('test');
            })
            menuComponent.className='gdlMenu';
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
    } // createMenu 

    Component.createButton = function(button){
        try{
            // if(!!Util.isObject(button)){
            //     throw new Error('supported button is Array');
            // }
        let buttonComponent = document.createElement('button');
        buttonComponent.type='button';
        buttonComponent.innerText='New Buton';
        buttonComponent.className='gdlButton';




            return buttonComponent;
        }
        catch(err){console.error(err); return false;}

    }

    return Component;
})();