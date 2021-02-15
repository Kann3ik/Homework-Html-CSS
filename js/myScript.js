let btn = document.getElementById('myBtn');
let modal = document.getElementById('myModal');
let clos = document.getElementById('myClose');
let content = document.getElementById('cont');

function Opacity1() {
    content.style.opacity = 1;
}

function none() {
    modal.style.display = 'none';
}

btn.onclick = function() {
    modal.style.display = 'block';
    setTimeout(Opacity1, 100);
}

clos.onclick = function() {
    content.style.opacity = 0;
    setTimeout(none, 1000);
}
