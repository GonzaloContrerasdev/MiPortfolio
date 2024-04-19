document.getElementById("checkbox").addEventListener("click", function() {
    // Obtener el color actual del fondo
    var currentColor = document.body.style.backgroundColor;
    // Si el color actual es claro, cambiar a oscuro; de lo contrario, cambiar a claro
    if (currentColor === "rgb(240, 240, 240)" || currentColor === "#f0f0f0") {
      document.body.style.backgroundColor = "#333"; // Cambiar a fondo oscuro
      document.body.style.color = "#f0f0f0";
    } else {
      document.body.style.backgroundColor = "#f0f0f0"; // Cambiar a fondo claro
      document.body.style.color = "#333";
    }
  });

  var boton = document.getElementById("github");

// Agregar un event listener para escuchar el clic en el botón
boton.addEventListener("click", function() {
    // Redirigir al usuario a la URL deseada
    window.open("https://github.com/0800Gonza", "_blank");
});

var boton = document.getElementById("Elementos");

boton.addEventListener("click", function() {
    // Redirigir al usuario a la URL deseada
    window.location.href = ("botones.html")
});
