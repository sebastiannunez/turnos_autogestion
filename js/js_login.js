$(document).ready(function(){
	
	localStorage.removeItem("dni");
	localStorage.removeItem("email");
	localStorage.removeItem("nombre_paciente");
	localStorage.removeItem("paciente");
		
	$('#btnLogin').on('click',function(){
		
		var dni = $('#login-dni').val();
		var email = $('#login-email').val();
		
		if(dni==''){
			
			$('#login-dni').addClass('error');
			
			setTimeout(function(){
				$('#login-dni').removeClass('error');				
			},3000)
			
		}else{
			
			if(email==''){
				$('#login-email').addClass('error');
				setTimeout(function(){					
					$('#login-email').removeClass('error');
				},3000)
			}else{
				
				var datos = {
								"accion": "login",
								"dni": dni,
								"email": email
								 
							}
				
				$.ajax({
					url: "http://54.225.110.0/php-bin/ws/ajax_turnos.php",
					data: datos,							
					type:"GET",   	
					success: function(data){
							       					
						if(data=="ok"){
							
							localStorage.setItem("dni", dni);
							localStorage.setItem("email", email);								
							window.location.href = 'turnos_autogestion.html' ;
						}else{
							alert(data);
							$('#divError').css('display','inline-block');
							setTimeout(function(){ 
								$('#divError').css('display','none');
							}, 5000);
						}
						
					}
				});	
				
			}
			
			
			
		}
		
	})
	
	$('#btnRegistrarme').on('click',function(){
		
		$('#loginbox').css('display','none');
		$('#divRegistrar').css('display','block');
	})
	
	$('#btnRegistrar').on('click',function(){
		
		var dni = $('#register-dni').val();
		var email = $('#register-email').val();
		
		if(dni==''){
			
			$('#register-dni').addClass('error');
			
			setTimeout(function(){
				$('#register-dni').removeClass('error');				
			},3000)
			
		}else{
			
			if(email==''){
				$('#register-email').addClass('error');
				setTimeout(function(){					
					$('#register-email').removeClass('error');
				},3000)
			}else{
				
				var datos = {
								"accion": "registro",
								"dni": dni,
								"email": email
								 
							}
				
				$.ajax({
					url: "http://54.225.110.0/php-bin/ws/ajax_turnos.php",
					data: datos,							
					type:"GET",   	
					success: function(data){
							       					
						if(data=="ok"){
							
							localStorage.setItem("dni", dni);
							localStorage.setItem("email", email);		
							alert('Se ha enviado un mail a su casilla de correo para terminar el proceso de registro');				
							window.location.reload() ;
						}else{
							alert(data);
							$('#divErrorRegistro').css('display','inline-block');
							setTimeout(function(){ 
								$('#divErrorRegistro').css('display','none');
							}, 5000);
						}
						
					}
				});	
				
			}
			
			
			
		}
	})
	
	$('#btnCancelar').on('click',function(){
		
		$('#divRegistrar').css('display','none');
		$('#loginbox').css('display','block');
		
	})
	
})
