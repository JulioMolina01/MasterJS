$(document).ready(() => {
  
  //slider
    $("#goTop").click(() => {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    });

  //CAMBIAR COLORES DE PAGINA
  var tema = $("#theme");
  $("#rojo").click( () => {  
    tema.attr("href","css/rojo.css");
  });

  $("#verde").click( () => {    
    tema.attr("href","css/verde.css");
  });

  $("#azul").click( () => {    
    tema.attr("href","css/azul.css");
  });

  //iniciar sesion pagina    
    $("#formSidebar").submit(() => {
      var nombreOptenidoInput = $("#nombreSidebar").val();
      localStorage.setItem("nombre", nombreOptenidoInput);
    });

    var nombreOptenidoInput = localStorage.getItem("nombre");    

    if (nombreOptenidoInput != null && nombreOptenidoInput != "undefined") {
      var span = $("#infoSide");

      span.html("<strong> Bienvenido " + nombreOptenidoInput + " </strong><br><br>");    
      span.append("<a href='#' id='logout'>Cerrar Sesion</a>");

      $("#formSidebar").hide();        

      $("#logout").click(() => {    
        localStorage.clear();                       
        location.reload();
      });
      
      console.log("Sesion Iniciada")
    }else{
      console.log("Sesion no iniciada")
    }
  
  

  if (window.location.href.indexOf('index') > -1) {

    //Slider
    $(function () {
      $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        randomStart: true,
        auto: true
      });
    });

    //Publicaciones dinamicamente
    var publicaciones = [{
        titulo: 'Publicacion1',
        fecha: moment().format('MMMM Do YYYY'),
        contenido: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },

      {
        titulo: 'Publicacion2',
        fecha: moment().format('MMMM Do YYYY'),
        contenido: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },

      {
        titulo: 'Publicacion3',
        fecha: moment().format('MMMM Do YYYY'),
        contenido: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      }
    ];

    for (const i in publicaciones) {

      var publicacion =
        `
        <article class='publicacion'>
          <h2>${publicaciones[i].titulo} , desde JavaScript</h2>
          <span>${publicaciones[i].fecha}</span>
          <p>
            ${publicaciones[i].contenido}
          </p>
          <button>Leer mas</button>
        </article>
      `;

      $("#publicaciones").append(publicacion);

    }

  }

  if (window.location.href.indexOf('reloj') > -1) {

    //reloj
    setInterval(() => {
      $("#reloj").html(moment().format('D MMMM YYYY, h:mm:ss a') + ". <br><br>Have a nice Day");
    }, 1000)

  }

  if (window.location.href.indexOf('aboutMe') > -1) {

    //acordeon
    $(function () {
      $("#accordion").accordion();
    });

  }


  if (window.location.href.indexOf('contact') > -1) {

    //data-validation
    $.validate({
      lang: 'es'
    });

    //seleccionar fecha Formulario
    $(function () {
      $("#fechaNacimientoCF").datepicker();
    });
    //moment().format("MMM Do YY");  

  }


});