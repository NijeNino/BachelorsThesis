$(document).ready(function(){

	$('#up_button').click(function(){
		$('html, body').animate({scrollTop : 0},750);
	});

	$(window).scroll(function(){

	    if (document.body.scrollTop > 650) {$('.meni').addClass('animacija');} 
	    else {$('.meni').removeClass('animacija');}

	    if (document.body.scrollTop > 650) {$('.up_btn').addClass('animacija');} 
	    else {$('.up_btn').removeClass('animacija');}
	});

	function lol(n, d){
		$(n).click(function(){
			$("html, body").animate({ scrollTop: $(d).offset().top }, 750);
		});
	}
		lol('.m_pocetna', '#pocetna');
		lol('.m_onama', '#onama');
		lol('.m_proizvodi', '#proizvodi');
		lol('.m_akcije', '#akcije');
		lol('.m_galerija', '#galerija');
		lol('.m_kontakt', '#kontakt');
		lol('.up_btn', '#pocetna');

});

function otvori_modal(s,m,c,o){

	$('.modal.modal_proizvodi').css('display', 'block');
	$('.proizvod_slika').attr('src',s);
	$('.modal_naslov').text(m);
	$('.modal_model').text('Model: '+m);
	$('.modal_cena').text('Cena: '+c);
	$('.modal_opis').text('Opis: '+o);

	$('.zatvori').click(function(){
		$('.modal').css('display', 'none');
	})
}

function otvori_modal_akcije(as,an,ao){

	$('.modal.modal_akcije').css('display', 'block');
	$('.proizvod_slika').attr('src',as);
	$('.modal_naslov').text(an);
	$('.modal_opis').text('Opis: '+ao);

	$('.zatvori').click(function(){
		$('.modal').css('display', 'none');
	})
}

function toggle_meni(){
	$('.meni ul').toggleClass('animirani_meni');
}


var trenutni = 1;
prikazi(trenutni);

function plusDivs(n) {
  prikazi(trenutni += n);
}

function thisImage(n) {
  prikazi(trenutni = n);
}

function prikazi(n) {

	var ukupno = $('.tr_slika').length;
	var ukupno_pr = $('.pr_slika').length;
	var ukupno_nr = $('.nr_slika').length;
	var i;

	if (n > ukupno) {trenutni = 1}
  	if (n < 1) {trenutni = ukupno}
  	for (i = 0; i < ukupno; i++) {
    	$('.tr_slika')[i].style.display = "none";
    	$('.pr_slika')[i].style.display = "none";
    	$('.pr_slika2')[i].style.display = "none";
    	$('.nr_slika')[i].style.display = "none";
 	}
 	$('.tr_slika')[trenutni-1].style.display = "block";

 	var pr = (trenutni-2);
 	if (pr==-1){pr = ukupno-1}
	$('.pr_slika')[pr].style.display = "block";
	$('.pr_slika2')[pr].style.display = "block";

	var nr = trenutni;
	if (nr==ukupno){nr = 0}
	$('.nr_slika')[nr].style.display = "block";
	
}


function validacija() {
    var ime = $('.ime').val();
    var email = $('.email').val();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (ime == "" || email == "") {
        alert("Morate popuniti sva polja naznačeno sa *!");
        return false;
    }
    
    if(email.match(mailformat)){
    	return true;
    }
    else{
    	alert("Morate uneti vlidnu email adresu!");
        return false;
    }
}