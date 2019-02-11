


var lnbMenu = [
    {text:"메뉴",},
    {text:"메뉴222",},
    {text:"메뉴333",},
    {text:"메뉴444",},
    {text:"메뉴555",},
    {text:"메뉴666",},
    {text:"메뉴666",},
    {text:"메뉴666",},
    {text:"메끝",},

]
var lnb = document.querySelector("div.mainWrapper aside");
lnb.appendChild(Component.createMenu(lnbMenu));



// 헤더에 버튼 붙이기 
var header = document.querySelector('div.UserControl');

var headerBtn = Component.createButton();
header.appendChild(headerBtn);







