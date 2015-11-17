$(document).ready(function(){
	
	$(".chg").click(function(){
		$("h1").css('color', 'red');
							});

	jQuery(function($){  	
	$("#datepicker").datepicker();  "d M, y" 
						});	


	$("#nav a").click(function(){
	$("#nav a").removeClass("active");
	$(this).addClass("active");
	/*$(".onoff").trigger("click");*/

								});

	$('.onoff').click(function() {
	console.log("coucou");
       $('#mos').toggle(50);
   								});

   	$("button").click(function(){
   		$("#mos").fadeOut('slow');

   								}); 

   	$(".cacher").click(function(){
   		$(this).fadeOut('slow');

   							});
	

	$("li:contains('David')").addClass('trouve').text("Je suis ici !");



	$('.prenom').click(function(){
 		$('ul').append("<li>Un prénom</li>");   
    
								});
	  

	$("img").each(function(){
	var imgsrc = $(this).attr("src");
	$(this).wrap("<a href='"+imgsrc+"'></a>");
	
							});

/*ou bien	
	$("img").each(function(){
	var imgsrc = $(this).attr("src");
	$(this).wrap("<a href='"$(this).attr("src")"'></a>");

	});*/
	
	jQuery(function($){  	
	$("#datepicker").datepicker("option", "dateFormat", "DD dd MM yy");	
						});
	
	jQuery(function(){  
	$("#bar").progressbar({value:45});
					});


	$(function(){   
    $('#accordeon').accordion({active: true, collapsible: true}); // appel du plugin
				});
	// active: true -->Las accordéons sont repliés au démarrage
	// collapsible: true --> On peut refermer les accordéons
		

    $('#button1').click(function(){ // ToDo
  		var aAjouter = $('input[name=checkListItem]').val();    
		$('.list').append('<div class="item">'+aAjouter+'</div>');  
               
    								});

    $(document).on('click', '.item', function(){
    $(this).remove();  
      
  											});

    $("#double").dblclick(function(){
        $(this).fadeOut('fast');
        						});

     $('div' ).hover(function(){
     $('div').addClass('active')   
    							});
    
     $(function(){
    $('div').removeClass('active')
        
    			});

 	$('input').focus(function(){
    	$('input').css('outline-color', '#FF0000');      
    						});//    background

 	
    	$(document).keydown(function(){
     $('#anim').animate({left:'+=10px'}, 500);   
     								});  
    
							

});


$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// On a appuyé sur la touche flèche gauche
			case 37:
			$('img').animate({left: "-=10px"}, 'fast');
				break;
			// On a appuyé sur la touche flèche vers le haut
			case 38:
			$('img').animate({top:"-=10px"}, 'fast');
				break;
			// On a appuyé sur la touche flèche droite
			case 39:
			$('img').animate({left:"+=10px"}, 'fast');
				break;
			// On a appuyé sur la touche flèche vers le bas
			case 40:
			$('img').animate({top:"-=10px"}, 'fast');
				break;
						};
				});
		});



$(document).ready(function(){
    	$('#logo').animate({ top: '+=100px'}, 1000);
							});

	$(document).ready(function(){
  		$('#gris').click(function(){
     	$('#gris').effect('explode');       
  						});        
							});


	/*$("#photozoom a").fancybox();*/

