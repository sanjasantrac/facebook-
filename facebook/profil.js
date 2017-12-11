var profile={
	cover:'',
	profileImage:'',
	name:"Sanja",
	lastName:"Santrac",
	statusi:[
		'Ne znam sliku da ubacim',
		'a ni redosled statusa nije dobar...',
		'hajde da popravimo :D'

		]

}

// var hero= document.getElementById('hero');
// hero.style.background= 'url("https://www.facebook.com/photo.php?fbid=10204335777424941&set=a.2730354228437.2109784.1544687466&type=3&theater")';

// var profileImage= document.getElementById('profile-img');
// profileImage.src= profile.profileImage;
// profileImage.alt=  profile.name + " " + profile.lastName + " profile photo"




var fullName= document.getElementById("full-name");
fullName.innerHTML=profile.name + " "  + profile.lastName;

var statusiDiv= document.getElementById("statusi");
var div,p;

for (var i = profile.statusi.length-1; i >= 0; i--) {
	div= document.createElement('div');
	p= document.createElement('p');
	p.innerHTML=profile.statusi[i];
	div.appendChild(p);
	div.classList.add('status');
	statusiDiv.appendChild(div);
}