let user = 'Rosa254';
let pass = 'holaamigo'
document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault();
    let userInput = document.querySelector('#username').value;
    let passInput = document.querySelector('#password').value;
    if(user !== userInput || pass !== passInput){
        console.log('datos incorrectos!!');
        mostrarAlert('Datos incorrectos!!', false);
        return;
    }
    if(user === userInput && pass === passInput){
        console.log('datos Correctos!!');
        mostrarAlert('Datos Correctos!!', true);
        return;
    }
    console.log(userInput, passInput);
})

function mostrarAlert(mensaje, alerta) {
    let h1 = document.createElement('h1')
    let alert = document.querySelector('.alert');
    if(!alerta){
        console.log('alertaaaaa no activa');
        alert.classList.add('no-active')
        h1.innerText=mensaje;
        alert.appendChild(h1);
        setTimeout(() => {
            alert.classList.remove('no-active');
            h1.remove()
        }, 2000);
    }else{
        console.log('alertaaaaa no activa');
        alert.classList.add('active')
        h1.innerText=mensaje;
        alert.appendChild(h1);
        setTimeout(() => {
            alert.classList.remove('active');
            h1.remove()
        }, 2000);
    }
}