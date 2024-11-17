// Función que realiza una búsqueda en Google utilizando el texto ingresado
function performSearch() {
    // Obtiene el valor del input con id "search-input"
    let inputValue = document.getElementById("search-input").value;
    // Redirige a Google con los resultados de búsqueda basados en el valor ingresado
    window.location.href = `https://www.google.com/search?q=${inputValue}`;
}

// Alterna entre el modo claro y oscuro
document.getElementById("mode-toggle").addEventListener("click", function() {
    // Cambia la clase del body entre "dark-mode" y la clase por defecto
    document.body.classList.toggle("dark-mode");
    
    // Cambia el logo de Google según el modo activo
    let googleLogo = document.getElementById("google-logo");
    if (document.body.classList.contains("dark-mode")) {
        // Logo para modo oscuro
        googleLogo.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
    } else {
        // Logo para modo claro
        googleLogo.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    }
});

// Asocia la función performSearch al botón de búsqueda de texto
document.getElementById("text-search-button").addEventListener("click", performSearch);

// Asocia la función performSearch a la tecla "Enter" del input
document.getElementById("search-input").addEventListener("keydown", function(event) {
    // Verifica si se presiona la tecla "Enter"
    if (event.key === "Enter") {
        performSearch();
    }
});

// Funcionalidad de búsqueda por voz
document.getElementById("voice-search").addEventListener("click", function() {
    // Crea una nueva instancia de reconocimiento de voz
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    
    // Establece el idioma de reconocimiento (español)
    recognition.lang = "es-ES";
    
    // Inicia el reconocimiento de voz
    recognition.start();
    
    // Evento que se ejecuta cuando se detecta un resultado de voz
    recognition.onresult = function(event) {
        // Captura el texto transcrito de la voz
        let transcript = event.results[0][0].transcript;
        // Redirige a Google con los resultados de búsqueda basados en la transcripción
        window.location.href = `https://www.google.com/search?q=${transcript}`;
    };
});

// Redirige a la búsqueda de imágenes de Google
document.getElementById("image-search").addEventListener("click", function() {
    window.location.href = "https://www.google.com/imghp?hl=es-419&ogbl";
});

// Evento que configura el comportamiento del modal al cargar el documento
document.addEventListener("DOMContentLoaded", function() {
    // Referencia al modal
    var modal = document.getElementById("modal");
    // Referencia al botón de apps
    var appsButton = document.getElementById("apps-button");
    // Referencia al ícono de perfil
    var profilePic = document.querySelector(".profile-pic");
    // Referencia al botón de cierre del modal
    var closeButton = document.getElementsByClassName("close-btn")[0];

    // Abre el modal al hacer clic en el botón de apps
    appsButton.onclick = function() {
        modal.style.display = "block";
    };

    // También abre el modal al hacer clic en la imagen de perfil
    profilePic.onclick = function() {
        modal.style.display = "block";
    };

    // Cierra el modal al hacer clic en el botón de cerrar
    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    // Cierra el modal si se hace clic fuera del mismo
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
