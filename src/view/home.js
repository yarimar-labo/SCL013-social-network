import {login, userLogin, accesoUserLogin} from '../lib/index.js'

export const home = () => { 
    const divHome = document.createElement('div');

    const viewHome =  `
   <div id="content">
    <div id="home">
      <div class="img-portada"></div>
        <div id="boxsingIn">
          <img src="../img/logo3.png">
          <input class="login" id="txtEmail" type="email" name="user-email" placeholder="Direccion de correo">
          <input class="login" id="txtPasswword" type="password" name="user-contraseña" placeholder="Contraseña">
          <button class="login" id="btnLogin" type="button" name="singIn">Iniciar Sesion</Button>
          <article class="login" class="article"></article>
          <input class="login" type="text" id="google" value="Iniciar sesion con Google">
          <p>¿No tienes cuenta? <a href='#/singIn'><button>Registrate</button></a></p>
        </div>
        </div>
    </div>

   `
   divHome.innerHTML = viewHome;
    const btnGoogle = divHome.querySelector('#google')
    btnGoogle.addEventListener('click', () => {
        login()
    })
    
    const btnLogin = divHome.querySelector('#btnLogin');
    btnLogin.addEventListener('click', () => {
        let email = document.getElementById('txtEmail').value;
        let pass = document.getElementById('txtPasswword').value;
        userLogin (email, pass);
        accesoUserLogin (email, pass);
    });

    return divHome
}