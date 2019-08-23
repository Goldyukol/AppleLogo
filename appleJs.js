let menu = document.getElementsByClassName('menu')[0],
    menus = document.getElementsByClassName('menu-item'),
    menuItemLi = document.createElement("li"),
    title = document.getElementById('title'),
    adv = document.querySelectorAll('.adv')[0],
    promptApple = document.querySelectorAll('#prompt')[0];
    

menu.insertBefore(menus[2], menus[1]);
menuItemLi.classList.add('menu-item');
menuItemLi.textContent = "Пятый элемент";
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('apple_true.jpg')";
title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

let questionApple = prompt("Ваше отношение к технике Apple?", "");
promptApple.textContent = questionApple; // 5 //