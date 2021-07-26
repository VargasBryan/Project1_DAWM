window.addEventListener('DOMContentLoaded', () => {
    introJs().setOptions({
        steps: [
            {
                title: 'Bienvenidos',
                intro: 'Bienvenido a nuestra pagina "Reserva tu cita"'
            },
            {
                title: 'Barra de navegación',
                element: document.getElementById('step2'),
                intro: 'Navega a través de nuestra página'
            },
            {
                title: 'Boton de Inicio',
                element: document.querySelector("#inicio"),
                intro: 'Pagina de inicio'
            },
            {
                title: 'Boton de Quienes Somos',
                element: document.querySelector('#about'),
                intro: 'Pagina de acerca de la empresa'
            },
            {
                title: 'Boton de Servicios',
                element: document.querySelector('#servicio'),
                intro: 'Pagina de quienes somos como empresa'
            },
            {
                title: 'Boton de Contactenos',
                element: document.querySelector('#contactos'),
                intro: 'Pagina de acerca nuestros contactos'
            },
            {
                title: 'Boton de inicio de sesion',
                element: document.querySelector('#btnSesion'),
                intro: 'Pagina de inicio de sesion'
            },
            {
                title: 'Buscador',
                element: document.querySelector('#buscador'),
                intro: 'Buscador en nuestra pagina web'
            }

        ]
    }).start();
});