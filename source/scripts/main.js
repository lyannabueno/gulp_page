$(document).ready(function() {
    $('#phone').mask('(00) 00000-0000');

    $('.btn.value').click(function() {
        $('.btn.value').removeClass('active');
        $(this).addClass('active');
    });

    $('#donateButton').click(function() {
        $('.btn.value').removeClass('active')
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            message: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            phone: 'Por favor, insira seu telefone',
            message: 'Por favor, digite uma mensagem à nós'
        },

        submitHandler: function(form, event) {
            event.preventDefault(); // evita o comportamento padrão da págian de subir para o cabeçalho
            console.log(form)
        },
        invalidHandler: function(event, validador) {
            event.preventDefault();
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Preencha os ${camposIncorretos} campos incorretos`)
            }
        }

    });
})