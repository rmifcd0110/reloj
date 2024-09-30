// Función para obtener y mostrar la hora actual
function showTime() {
    // Creamos un nuevo objeto de tipo Date que nos dará la hora actual
    let now = new Date();

    // Obtenemos las horas, minutos y segundos del objeto 'now'
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Si los minutos o segundos son menores a 10, les agregamos un '0' delante para que siempre tengan dos dígitos
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Formateamos el reloj en formato HH:MM:SS
    let currentTime = `${hours}:${minutes}:${seconds}`;

    // Mostramos el reloj en el div con id 'clock'
    document.getElementById('clock').innerText = currentTime;

    // Llamamos a la función showTime cada segundo (1000 milisegundos)
    setTimeout(showTime, 1000);
}

// Función para obtener y mostrar la fecha actual
function showDate() {
    // Creamos un nuevo objeto de tipo Date para obtener la fecha actual
    let now = new Date();

    // Obtenemos el día, el mes y el año
    let day = now.getDate();
    let month = now.getMonth() + 1; // Los meses empiezan en 0, por eso sumamos 1
    let year = now.getFullYear();

    // Formateamos la fecha en formato DD/MM/YYYY
    let currentDate = `${day}/${month}/${year}`;

    // Mostramos la fecha en el div con id 'date'
    document.getElementById('date').innerText = currentDate;
}

// Iniciamos las funciones cuando la página ha cargado completamente
window.onload = function () {
    showTime();  // Inicia el reloj
    showDate();  // Inicia la fecha
};
