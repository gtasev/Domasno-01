var gradovi = [
			{ime:"Veles", povrsina:428 + "km2",  nadmorskaVisocina: 206 + "m" , ziteli:43716 },
			{ime:"Strumica", povrsina:322 + "km2",  nadmorskaVisocina: 256 + "m" , ziteli:35311 },
			{ime:"Bitola", povrsina:423 + "km2",  nadmorskaVisocina: 576 + "m" , ziteli:105644 },
			{ime:"Kocani", povrsina:382 + "km2",  nadmorskaVisocina: 380 + "m" , ziteli:28330 },
			{ime:"Stip", povrsina:400 + "km2", nadmorskaVisocina: 340 + "m" , ziteli: 40016 },
			{ime:"Debar", povrsina:146 + "km2",  nadmorskaVisocina: 625 + "m" , ziteli:14561 },
			{ime:"Kicevo", povrsina:49 + "km2",  nadmorskaVisocina: 625 + "m" , ziteli:27067 },
			{ime:"Ohrid", povrsina:390 + "km2",  nadmorskaVisocina: 700 + "m" , ziteli:42033 },
			{ime:"Prilep", povrsina:513 + "km2",  nadmorskaVisocina: 520 + "m" , ziteli:35847 },
			{ime:"Skopje", povrsina:1854 + "km2",  nadmorskaVisocina: 240 + "m" , ziteli:811045 }
];


console.log("\n" + "Gradovi vo Makedonija: " + "\n")
for(x in gradovi){
	console.log(gradovi[x].ime + "\n" + " povrsina: " + gradovi[x].povrsina +  "\n" +" nadmorska visocina: " + gradovi[x].nadmorskaVisocina + "\n" + " ziteli: " + gradovi[x].ziteli + "\n" );
};
console.log("-------------------------------------------------------")


var gradovi1 = gradovi.map(function(st){
	st.goleminaSporedZiteli = st.ziteli > 30000 ? "Golem grad" : "Mal grad";
	return st;
});

console.log("\n" + "Spored brojot na zitelite, gradovite se: " + "\n");

for(x in gradovi1){
console.log(gradovi1[x].ime + " - " + gradovi1[x].goleminaSporedZiteli);}


var vkupnoZiteliVoGradovite = gradovi1.reduce(function(vkupno,st){
	return vkupno + st.ziteli;
},0);

console.log("\n"+"-------------------------------------------------------")
console.log("\n"  + "Gradovite od dadenata niza imaat vkupno: " + vkupnoZiteliVoGradovite + " ziteli");
console.log("\n"+"-------------------------------------------------------"+"\n")


var filterNiza = gradovi1.filter(function(st){
	var broj = parseInt(st.povrsina.substring(0,st.povrsina.length-3));
	return broj > 400;
}); 

var filterNiza1 = filterNiza.map(function(st){
	st.povrsinaBroj = parseInt(st.povrsina.substring(0,st.povrsina.length-3));
	return st
});

var sortNiza = filterNiza1.sort(function(a,b){
	return b.povrsinaBroj - a.povrsinaBroj
})

console.log("Gradovi koi se so povrsina pogoelma od 400km2 podredeni od najgolem do najmal se: " + "\n")

for(x in sortNiza){
console.log(sortNiza[x].ime + " - " + sortNiza[x].povrsina);}

//promena