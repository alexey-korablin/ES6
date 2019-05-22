var buttons = document.querySelectorAll('button');

for ( let i= 0; i < buttons.length; i++ ) {
    var button = buttons[i];
    button.textContent = i + 1;
    button.onclick = function (z) {
        console.log(i + 1);
    };
}


