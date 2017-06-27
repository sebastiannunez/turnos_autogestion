$(document).ready(function(){
	
	$('.verHorDis').click(function(){	
		
		var filas = $("#tab_dias_horarios tr").length;
		
		for (var i=0; i<filas; i++) {
		    $('#tab_dias_horarios tr:eq('+i+')').css('background-color','#fff');
		}		
		
		
		$("#divHorariosDisponibles").html("<center><h3><i class='fa fa-spinner fa-pulse fa-3x fa-fw' ></i> &nbsp; <h2>Cargando...</h2></h3></center>");
		
		var link = $(this).data('link');
		var indexrow = $(this).data('indexrow');
		$('#tab_dias_horarios tr:eq('+indexrow+')').css('background-color','#f0e424');
		
	   	$.get(link , 
	   			{ url_recarga: link },
	   				function (data) {
	   					
						$('#divHorariosDisponibles').html(data);
						
						//obtenemos la posición en la que se encuentra el botón
						var posicion_boton = $('#btnVerHorarios').offset().top;
						                         
						//hacemos scroll hasta el botón
						$("html, body").animate({scrollTop:posicion_boton+"px"});
					}
		);	
		
	})
	
})