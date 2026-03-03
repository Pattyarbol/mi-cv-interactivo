$('#btn-tema').click(function() {
    $('body').toggleClass('bg-dark text-light');
    $(this).text($(this).text() == 'Cambiar a Modo Oscuro' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro');
    if ($('body').hasClass('bg-dark')) {
            $(this).text('Cambiar a Modo Claro');
        } else {
            $(this).text('Cambiar a Modo Oscuro');
        }
    });



    $(document).ready(function () {
    $('#nombre').on('input', function () {
        let nombre = $(this).val();
        if (nombre.trim().length < 3) {
            $(this).addClass('is-invalid').removeClass('is-valid');
        } else {
            $(this).addClass('is-valid').removeClass('is-invalid');
        }
    });
    $('#email').on('input', function () {
        let email = $(this).val();
        let filtroEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (!filtroEmail.test(email)) {
            $(this).addClass('is-invalid').removeClass('is-valid');
        } else {
            $(this).addClass('is-valid').removeClass('is-invalid');
        }
    });


    $('form').on('submit', function (e) {
        e.preventDefault(); 

        let nombreValido = $('#nombre').hasClass('is-valid');
        let emailValido = $('#email').hasClass('is-valid');
        let aceptoTerminos = $('#acepto').is(':checked');

        if (nombreValido && emailValido && aceptoTerminos) {
            alert('¡Formulario enviado con éxito! Gracias por contactarme, Patricia.');
            this.reset(); 
            $('.form-control').removeClass('is-valid'); 
        } else {
            alert('Por favor, completa los campos correctamente y acepta la política de datos.');
        }
    });
});
