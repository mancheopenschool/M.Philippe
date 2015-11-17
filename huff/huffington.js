
var aujour = document.getElementById('aujour');

	var madate = new Date();
	//var jour = madate.getDay() "+jour+;
	var njour = madate.getDate();	
	var mois = madate.getMonth()+1;
	var annee = madate.getFullYear();
	
	//document.write(jour+" "+njour+" "+mois+" "+annee);

	var aff_date = "Paris: " +njour+" "+mois+" "+annee;

	 aujour.innerHTML = aff_date;
		