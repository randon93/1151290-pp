// VARIABLES REGISTRO

function registrar() {

  var nombres = document.getElementById('name_reg');
  var apellidos = document.getElementById('ape_reg');
  var usario_reg = document.getElementById('user_reg');
  var contraseña_reg = document.getElementById('pass_reg');
  var correo = document.getElementById('email_reg');
  var tlf = document.getElementById('tlf_reg');

  localStorage.add('nombres', name_reg.value);
  localStorage.add('apellidos', ape_reg.value);
  localStorage.add('usario_reg', user_reg.value);
  localStorage.add('contraseña_reg', pass_reg.value);
  localStorage.add('correo', email_reg.value);
  localStorage.add('tlf', tlf_reg.value);
}


// function registrar() {
  // localStorage.setItem('name_reg', nombres.value);
  // localStorage.setItem('ape_reg', apellidos.value);
  // localStorage.setItem('user_reg', usario_reg.value);
  // localStorage.setItem('pass_reg', contraseña_reg.value);
  // localStorage.setItem('email_reg', correo.value);
  // localStorage.setItem('tlf_reg', tlf.value);
// }

function logear() {

  var validar_usuario = localStorage.getItem('user_reg');
  var validar_pass = localStorage.getItem('pass_reg');

  var usuario_log = document.getElementById('user_log');
  var contraseña_log = document.getElementById('pass_log');

  if (user_log.value == '' || contraseña_log.value == '') {
    alert('Rellene los campos necesarios para ingresar con exito');
  } else {
    if (user_log.value == validar_usuario && pass_log.value == validar_pass) {

      location.href = "datosabiertos.html";
      alert('Logeado con exito!');
    } else {
      alert('Usuario o contraseña Incorrecta');
    }
  }
}

// var btnLog = document.querySelector('input-log');
// var btnReg = document.querySelector('input-reg');
//
// btnLog.onclick = function() {
//   logear();
// }
//
// btnReg.onclick = function() {
//   registrar();
// }

// var miBoton = document.querySelector('button');
// var miTitulo = document.querySelector('h1');
//
// if (!localStorage.getItem('nombre')) {
//   estableceNombreUsuario();
// } else {
//   var nombreAlmacenado = localStorage.getItem('nombre');
//   miTitulo.textContent = 'Trabajando con javascript, ' + nombreAlmacenado;
// }
//
// miBoton.onclick = function() {
//   estableceNombreUsuario();
// }
//
// function estableceNombreUsuario(){
//   var miNombre = prompt ('Por favor, ingresa tu nombre.');
//   localStorage.setItem('nombre', miNombre);
//   miTitulo.textContent = 'Trabajando con javascript,' + miNombre;
// }
