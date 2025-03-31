function getRandomTenDigit() {
  return Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
}

function getRandomEightDigit() {
  return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function randomDecc(inte){
	return (Math.round((Math.random() * (inte - 1.00 + 1.00) + 1.00).toFixed(2) * 4) / 4).toFixed(2);
}

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
 
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}


function fje(){
	let jibpib = getRandomTenDigit();
	let ibfm = getRandomTenDigit();
	let bf = getRandomEightDigit();
	
	$("#jib_text").text(jibpib);
	$("#pib_text").text(jibpib);
	
	$("#ibfm_text").text(ibfm);
	$("#bf_text").text(bf);
	
	var datumvrijeme = moment().subtract(Math.floor(Math.random() * 1800) + 1, 'minutes').format('DD.MM.YYYY HH:mm:ss');
	
	$("#datum_vrijeme").text(datumvrijeme);
	
	const trgovine = [
		"“ROBOT” d.o.o.", 
		"“BINGO” d.o.o.", 
		"“PIEMONTE” d.o.o.", 
		"“ETNA” d.o.o.", 
		"“ZEKA-COMERC” d.o.o.", 
		"“MEGA-DISKONT” d.o.o.", 
		"“FORTUNA” d.o.o.",
		"YimoR d.o.o", 
		"UTD BEST d.o.o.", 
		"Konzum d.o.o.", 
		"Merkator d.o.o.", 
		"Bingo d.o.o.", 
		"Hoše komerc", 
		"Amko komerc d.o.o.", 
		"Dobrinja d.o.o.", 
		"Ronot d.o.o.", 
		"Naš Market d.o.o.", 
		"Deny Prom d.o.o.", 
		"Madi d.o.o.", 
		"Namex d.o.o."
	];

	const random_trgovine = Math.floor(Math.random() * trgovine.length);
	$("#trgovina").text(trgovine[random_trgovine]);
	
	const mjesta = [
		"Gračanica", 
		"Srebrenik", 
		"Doboj", 
		"Čelić", 
		"Ilidža", 
		"Tuzla", 
		"Prijedor",
		"Bihać", 
		"Cazin", 
		"Tešanj", 
		"Maglaj", 
		"Foča", 
		"Bijeljina", 
		"Ustikolina", 
		"Visoko", 
		"Travnik", 
		"Vitez", 
		"Lukavac", 
		"Teslić", 
		"Zenica",
		"Banja Luka",
		"Gradačac",
		"Konjic",
		"Sarajevo"
		
	];

	const random_mjesta = Math.floor(Math.random() * mjesta.length);
	$("#mjesto").text(mjesta[random_mjesta]);
	
	const zipovi = [
		"75320 Gračanica", 
		"77220 Cazin", 
		"75208 Gornja Tuzla", 
		"71210 Ilidža", 
		"71000 Sarajevo", 
		"78000 Banja Luka"
	];

	const random_zip = Math.floor(Math.random() * zipovi.length);
	$("#zip").text(zipovi[random_zip]);
	
	const adrese = [
		"Mula Mustafe Bašeskije br.48", 
		"Zlatnih Ljiljana br.3", 
		"Branicala Grada br.10", 
		"Patriotske Lige b.b.", 
		"M. Ahmedbegovića 14", 
		"Alije Izetbegovića b.b.", 
		"Polje bb",
		"Bosanska ulica bb"
	];

	const random_adrese = Math.floor(Math.random() * adrese.length);
	$("#adresa").text(adrese[random_adrese]);
	

	const organsko = [
		"Organska Rezana Mrkva ", 
		"Organski Krompir 200G", 
		"Organska Salata 750G", 
		"Organska Jagoda 700G", 
		"Organska Cvekla 225G", 
		"Organski Crveni Luk", 
		"Organska Borovnica", 
		"Organski Grasak", 
		"Organski Avokado", 
		"Organsko Grozdje 500G",
		"Organski sampinjoni",
		"Org. Kivi", 
		"Org. Brusnica"
	]
	
	const vocepovrce = [
		"SOK FRUC: Borovnica 1l", 
		"SOK cvekla domaci 1l", 
		"Limun", 
		"Kiseli krastavci", 
		"Grozdjice suhe", 
		"Svjeza mandarina", 
		"Svjeza banana premium", 
		"Prasa", 
		"Engleska salata", 
		"Mandarine", 
		"Klementine svjeze", 
		"Paprike domace roge", 
		"Svjezi sampinjoni 300g", 
		"Jabuka idared 1 klasa", 
		"GROŽĐE crno domaće", 
		"Kivi 1kg rinfuza", 
		"Banana 1kg/kg", 
		"Balans obrok jagoda", 
		"Balans obrok banana", 
		"Balans obrok višnja", 
		"Brusnica 100g",
		"Grah Trešnjevac",
		"Oslić Hoki",
		"Rezani Šampinjoni",
		"Grašak",
		"Datulja 200g",
		"Carsko povrce 400g",
		"Cappy Apple nektar",
		"Sok mrkva-pom fruc",
		"Nektar jagoda 45%",
		"Kupus svjezi 1kg"
	]
	
	const artikli = [ 
		"Jaja konzumna 500G", 
		"Hljeb crni", 
		"Kikiriki u ljusci", 
		"Svjezi pileci file", 
		"Kecap blagi", 
		"Kecap ljuti", 
		"Govedji gulas", 
		"Crveni grah podravka", 
		"Tuna rio mare", 
		"Mlijeko 2L Dukat", 
		"Pljeskvica pileca madi", 
		"Makaroni vijak barilla", 
		"Kobasica rostiljska ", 
		"Pavlaka kisela kravica", 
		"Kocka za supu podravka", 
		"Cokolada Milka malina", 
		"Orbit zvakace", 
		"Svjezi sir", 
		"Bombone haribo", 
		"Kajmak meggle", 
		"Jogurt balans imuno", 
		"Kefir 2.88m", 
		"Flasirana Voda Jana 1l", 
		"Djumbir mljeveni 500g", 
		"Vegeta briz", 
		"Tuzlanska so", 
		"Lovorov list 150G", 
		"Marlboro gold", 
		"Deo stik cobalt",
		"Hrana za mačke",
		"Kroasan mini",
		"Kurkuma mljevena", 
		"RedBull energy drink", 
		"Tuna u biljnom ulju",
		"Cvijetni med",
		"Riža okruglo zrno",
		"Pistacije 80g",
		"Sok Aronija 700ml",
		"Sok Jabuka nektar",
		"Mahuna žuta",
		"Choco Banana",
		"Sok natura aronija",
		"Puding coko-banana",
		"Puding borovnica",
		"Doner juneci",
		"Donat MG Mivela",
		"Hrenovka pileca",
		"Kinder pingui",
		"Kefir 3.5%mm 200g",
		"Tecni jogurt light 1L",
		"Pileci medaljoni",
		"Bavarski hljeb",
		"Pita od jabuka",
		"Karfiol 400g",
		"Kuskus mediteranski",
		"Čarape muške XL",
		"Ukrasno cvijeće",
		"Plišani medo igračka",
		"Potkošulja muška",
		"Tečnost za suđe",
		"Toalet papir",
		"Kuhinjski ubrus Maca",
		"Mlijeko u prahu",
		"Voda flaširana 5L",
		]


	let broj_artikala = getRndInteger(2,5);
	let broj_artikala_voce = getRndInteger(2,3);
	let broj_artikala_organsko = getRndInteger(2,3);
	
	artikli_text = '';
	artikli_cijene_l = '';artikli_cijene_s = '';artikli_cijene_d = '';
	
	
	artikli_spisak = [];
	
	// artikli obicni loop
	lopaj = false;

	ii = broj_artikala+1;
	do {
		lopaj = true;
		random_artikal = Math.floor(Math.random() * artikli.length);
		if(artikli_spisak.indexOf(artikli[random_artikal]) >= 0){
			
		}else{
			artikli_spisak.push(artikli[random_artikal]);
			ii--;
		}
		if(ii <= 0) {
			lopaj = false;
		}
	}
	while (lopaj); 
	
	// artikli voce loop
	lopaj = false;
	ii = broj_artikala_voce+1;
	do {
		lopaj = true;
		random_artikal = Math.floor(Math.random() * vocepovrce.length);
		if(artikli_spisak.indexOf(vocepovrce[random_artikal]) >= 0){
			
		}else{
			artikli_spisak.push(vocepovrce[random_artikal]);
			ii--;
		}
		if(ii <= 0) {
			lopaj = false;
		}
	}
	while (lopaj); 
	
	
	
	// artikli organsko loop
	lopaj = false;

	ii = broj_artikala_organsko+1;
	do {
		lopaj = true;
		random_artikal = Math.floor(Math.random() * organsko.length);
		if(artikli_spisak.indexOf(organsko[random_artikal]) >= 0){
			
		}else{
			artikli_spisak.push(organsko[random_artikal]);
			ii--;
		}
		if(ii <= 0) {
			lopaj = false;
		}
	}
	while (lopaj); 
	
	//const artikli_spisak2 = artikli_spisak.sort((a,b) => 0.5 - Math.random());
	let artikli_spisak2 = artikli_spisak;
	shuffle(artikli_spisak);
	
	let osnovica = 0;
	console.log(artikli_spisak2);
	let broj_artikala_sve = parseInt(broj_artikala) + parseInt(broj_artikala_organsko) + parseInt(broj_artikala_voce);
	
	console.log(broj_artikala_sve);
	
	for (let i = 0; i <= broj_artikala_sve; i++) {
		let rndArtikalCode = randomString(2, "AHBEGOPMNR") + getRndInteger(1000, 9999);
		artikli_text += rndArtikalCode + " "+ artikli_spisak2[i] + "<br><br>";
		
		kolicina_artikla = getRndInteger(1,2);
		artikal_cijena = randomDecc(2.95);
		
		artikli_cijene_l += kolicina_artikla+".000x<br><br>";
		artikli_cijene_s += artikal_cijena+"KM<br><br>";
		artikli_cijene_d += (artikal_cijena*kolicina_artikla).toFixed(2)+"KM<br><br>";
		osnovica +=(artikal_cijena*kolicina_artikla);
	}
	
	pdv = (osnovica * 17) / 100;
	pdv = pdv.toFixed(2);
	total = (parseFloat(pdv) + parseFloat(osnovica));
	total = total.toFixed(2);
	
	$("#artikli_text").html(artikli_text);
	$("#cijene_l").html(artikli_cijene_l);
	$("#cijene_s").html(artikli_cijene_s);
	$("#cijene_d").html(artikli_cijene_d);
	
	$("#dno_desno").html("<br>"+osnovica.toFixed(2)+"KM<br>"+pdv+"KM<br><br><b>"+total+"KM</b><br>"+total+"KM<br>"+total+"KM<br>"+total+"KM<br>0.00KM");
	
	mob_w = 38;
	if(window.innerWidth <=1024) {
		mob_w = 58;
	}
		
	let sirina = broj_artikala_sve * mob_w;
	$("#pozadina_rc").height(sirina);
	
	console.log("osnovica:"+osnovica);
	console.log("pdv:"+pdv);
	console.log("total:"+total);
	
	$("#randombroj").text($.md5(getRandomTenDigit()));
	
	//$("#qr").attr('src', 'https://api.qrserver.com/v1/create-qr-code/?size=75x75&data=Date:'+datumvrijeme+',Total:'+total);
	
	let poz = getRndInteger(1,20);
	let rndrot = getRndInteger(-3,3);
	let rndBright = getRndInteger(95,115);
	console.log(rndBright);
	$('html').css({'background-image':'url(pozadine/'+poz+'.jpg)', 'transform': 'rotate('+rndrot+'deg)'});
	$("#racun_komplet").css({"filter": "brightness("+rndBright+"%)"});
	
	JsBarcode("#barcode",total, {
  format: "CODE39",
  lineColor: "#00000082",
  background: "#ffffff00",
  displayValue: false,
  width: 3,
  height: 35,
  textAlign: "center"
});
	
}