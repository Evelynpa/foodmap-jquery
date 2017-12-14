$(document).ready(function () {
    $('.splash').fadeOut(5000);


    $('#search').click(function () {
        clear();
        var name = $('#name').val().toLowerCase();

        for(var i = 0; i< data.restaurant.length;i++){
            if(data.restaurant[i]['nombre']=== name || data.restaurant[i]['tipo-comida']=== name){
                var img = data.restaurant[i]['img'];
                var titulo =data.restaurant[i]['nombre'];
                var address =data.restaurant[i]['direccion'];
                var schedule =data.restaurant[i]['horario'];
                var category =data.restaurant[i]['tipo-comida'];

                $("body").append("<section id='sectionImg'>"+
                    "<div class='row' id='imgSearch'>"+
                    "<div class='col-xs-4 col-xs-offset-4 col-lg-4 col-lg-offset-4 square'>"+
                    "<img src='"+img+"' alt='fotos' class='thumbnail fotos img-responsive' data-toggle='modal' data-target='#myModal'>"+
                    "</div>"+
                    "</div>"+
                    "</section>"+
                    <!-- Modal -->
                    "<div id='myModal' class='modal fade' role='dialog'>"+
                    "<div class='modal-dialog'>"+
                    <!-- Modal content-->
                    "<div class='modal-content'>"+
                    "<div class='modal-header'>"+
                    "<h3 class='modal-title'>"+titulo.toUpperCase()+"</h3>"+
                    "</div>"+
                    "<div class='modal-body'>"+
                    "<img src='"+img+"' alt='fotoModal' class='thumbnail img-responsive imgModal'>"+
                    "<p>"+address+"</p>"+
                    "<p>"+schedule+"</p>"+
                    "<p>Comida: "+category.toUpperCase()+"</p>"+
                    "</div>"+
                    "<div class='modal-footer'>"+
                    "<button type='button' class='btn btn-danger' data-dismiss='modal' id='close'>Cerrar</button>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                    "</div>");

                $(".square").mouseover(function(){
                    $(".fotos").css({'box-shadow' : '0px 3px 12px 3px rgba(0,0,0,0.75)'});
                    $(".square").css({' background-color' : 'rgba(0, 0, 0, 0.5)'});
                });
                $(".square").mouseout(function(){
                    $(".fotos").css({'box-shadow' : '0px 0px 0px 0px rgba(0,0,0,0.75)'});
                    //$('.title').fadeOut('fast');
                });
            }

        }
        function clear() {
            $('#sectionImg').remove();
        }
    })


})