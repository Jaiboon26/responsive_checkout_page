var qty1 = document.getElementById('qty1')
var plus_qty1 = document.getElementById('plus_qty1')
var minus_qty1 = document.getElementById('minus_qty1')
var price1 = document.getElementById('price1')
var qty2 = document.getElementById('qty2')
var plus_qty2 = document.getElementById('plus_qty2')
var minus_qty1 = document.getElementById('minus_qty2')
var price2 = document.getElementById('price2')
var total = document.getElementById('total')
var shipping = document.getElementById('shipping')
var x = 1;
var y = 1;
var price = 54.99;
var price2_2 = 74.99;
var shipping_price = 19;
var total_price = price + price2_2 + shipping_price;
total.textContent = total_price + '$'

var modal = document.getElementById('modal')
var form = document.getElementById('myForm')

var reload = document.getElementById('reload')
var header = document.getElementById('header')
var main = document.getElementById('main')

document.addEventListener("DOMContentLoaded", function () {
    checkwidth()
    if (window.innerWidth <= 600) {
        reload.style.display = 'block'
        header.style.display = 'none'
        main.style.display = 'none'
        setTimeout(function () {
            reload.style.display = 'none';
            header.style.display = 'flex'
            main.style.display = 'flex'
        }, 2000);
    }
    else {
        reload.style.display = 'block'
        header.style.display = 'none'
        main.style.display = 'none'
        setTimeout(function () {
            reload.style.display = 'none';
            header.style.display = 'grid'
            main.style.display = 'grid'
        }, 2000);
    }
});

window.addEventListener("resize", checkwidth);

function checkwidth() {
    if (window.innerWidth <= 600) {
        header.style.display = 'flex'
        main.style.display = 'flex'
    }
    else {
        header.style.display = 'grid'
        main.style.display = 'grid'
    }
}
// function showhide() {
// if (modal.style.display === 'none'){
//     modal.style.display = 'flex'
//     setTimeout(function() {
//         modal.style.display = 'none';
//     }, 2000);
// }
// }

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (modal.style.display === 'none') {
        modal.style.display = 'flex'
        setTimeout(function () {
            modal.style.display = 'none';
            form.submit();
            window.location.href = 'index.html'
        }, 2000);
    }
});



function sumtotal() {
    total_price = price + price2_2 + shipping_price;
    total.textContent = total_price.toFixed(2) + '$'
}

function plus() {
    x++;
    qty1.textContent = x;
    price = 54.99 * x;
    price1.textContent = "$" + price.toFixed(2);
    sumtotal();
}

function minus() {

    if (x < 1) {
        x = 0;
        qty1.textContent = x;
        price = 0;
        sumtotal();
    }
    else {
        x--;
        qty1.textContent = x;
        price = price - 54.99;
        price1.textContent = "$" + price.toFixed(2);
        sumtotal();
    }
}

function plus2() {
    y++;
    qty2.textContent = y;
    price2_2 = 74.99 * y;
    price2.textContent = "$" + price2_2.toFixed(2);
    sumtotal();
}

function minus2() {
    if (y < 1) {
        y = 0;
        qty2.textContent = y;
        price2_2 = 0;
        sumtotal();
    }
    else {
        y--;
        qty2.textContent = y;
        price2_2 = price2_2 - 74.99;
        price2.textContent = "$" + price2_2.toFixed(2);
        sumtotal();
    }
}

