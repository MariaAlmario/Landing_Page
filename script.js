const preguntas = document.querySelectorAll('.faqPregunta');

preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        const respuesta = pregunta.nextElementSibling;

        if(respuesta.style.maxHeight){
            respuesta.style.maxHeight = null;
        } else {
            respuesta.style.maxHeight = respuesta.scrollHeight + "px";
        }
    });
});