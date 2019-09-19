

function cerrarsesion() {
  localStorage.removeItem("usuario");
  window.location = "login.html"
}

document.querySelector('#input_log').addEventListener('click', function() {

    user = document.querySelector("#user_log").value;
    pass = document.querySelector("#pass_log").value;
    if ("admin" == user) {
      if ("12345" == pass) {
        localStorage.setItem("usuario", user);
        window.location = "secciones.html";
      }
    }

  document.querySelector("#alerta").innerHTML = "Usuario no encontrado";
});
