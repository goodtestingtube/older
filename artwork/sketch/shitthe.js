const antinople = document.getElementById("istanbul");

const cantgoback = document.getElementById("cantgoback");

let next; 
let previous;
let position;
var latest;
var earliest;


var murray = new Array();

murray[33]="2026_aug_bat"
murray[32]="2026_aug_helluva"
murray[31]="2026_aug_akai"
murray[30]="2025_dec_alastor"
murray[29]="2025_dec_alastor2"
murray[28]="2025_nov_firedemon"
murray[27]="2025_nov_jobapp"
murray[26]="2025_oct_lineup"
murray[25]="2025_oct_pod"
murray[24]="2025_sep_andre"
murray[23]="2025_sep_changeling"
murray[22]="2026_feb_lucasoliver"
murray[21]="2026_jul_kaf"
murray[20]="2026_jul_solidliquidakai"
murray[19]="2026_jun_hapell"
murray[18]="2026_jun_hapellfaces"
murray[17]="2026_jun_ween_nudity"
murray[16]="2026_may_batdracula"
murray[15]="2026_may_diner"
murray[14]="2026_may_hapellsad"
murray[13]="2026_may_lucasoliveragain"
murray[12]="2026_jul_adamtheasshole"
murray[11]="2026_jun_memory"
murray[10]="2026_may_witchespt1"
murray[9]="2026_may_witchespt2"
murray[8]="2026_may_impspt1_nudity"
murray[7]="2026_may_impspt2"
murray[6]="2026_may_impspt3"
murray[5]="2026_may_impspt4"
murray[4]="2026_may_impspt5_nudity"
murray[3]="2025_dec_lucasbrotherpt1"
murray[2]="2025_dec_lucasbrotherpt2"
murray[1]="2025_dec_lucasbrotherpt3_nudity"
murray[0]="2025_nov_drugs_nudity"

var earliest = murray[0];
var latest = murray[murray.length - 1];

function triggerWarning() {
	if (position.includes("nudity") != false) {
		document.getElementById("trigger").innerHTML = "Nudity"
	} else {
		document.getElementById("trigger").innerHTML = "Nothing";
	}
}

function getYear() {
	document.getElementById("year").innerHTML = position.substring(0,8);
}

function getPosition() {
	if (position == undefined) {
		antinople.src = "../../assets/error.png";
		antinople.alt = "error!";
		cantgoback.href = "../../assets/error.png";
	} else {
		antinople.src = "theshit/thumb/" + position + ".jpg";
		antinople.alt = position;
		cantgoback.href = "theshit/" + position + ".jpg";
		antinople.setAttribute("position",position);
		console.log(position);
		triggerWarning();
		getYear();
	}
}

function getLatest() {
	position = latest;
	getPosition();
}

function getEarliest() {
	position = earliest;
	getPosition();
}

function getPrev() {
	if (position == earliest) {
		console.log("nope");
	} else {
		var po = antinople.getAttribute("position");
		var index = murray.indexOf(po);
		position = murray[index - 1];
		getPosition();
	}
}

function getNext() {
	if (position == latest) {
		console.log("nope");
	} else {
		var po = antinople.getAttribute("position");
		var index = murray.indexOf(po);
		position = murray[index + 1];
		getPosition();
	}
}

function getRand() {
	let i = Math.floor(Math.random() * murray.length);
	let r = murray[i];
	position = r;
	getPosition();
}