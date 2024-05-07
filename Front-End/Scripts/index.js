document.addEventListener("DOMContentLoaded", function() {
    const themeSelector = document.getElementById('theme-selector');

    themeSelector.addEventListener('change', function() {
        const selectedTheme = themeSelector.value;
        // Eliminar todas las clases de tema del body
        document.body.classList.remove('theme-light', 'theme-dark', 'theme-blue');
        // Agregar la clase de tema seleccionada
        document.body.classList.add(selectedTheme);
    });
});
