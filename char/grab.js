var char = new Array();
var its;
var Its;

char.push(

	/* FORMAT
	"shortname",	"fullname", */

	"hapell",		"Hapell Sclera"

);

/* hopefully i will not have to touch this, but just in case...

	IMPORTANT SHIT BEGINS HERE
*/

document.write("Hover over an icon to see the character's name<br>");

for (let idx = 0; idx < char.length; idx+=2) {
	/* for debug purposes */
	console.log(char[idx]);
	its = char[idx].toLowerCase();
	Its = char[idx + 1];
	/* this only apples to boxes with years in them,
	it links to... i mean you can read right it's detailed on the 
	final page.
	i doubt i'll be alive to see the year 20000 so it's just
	four digits. */
	document.write('<a href="~' + 
		its + 
		'/index.htm" target="_blank"><img src="arsets/charicons/' +
		its + '.jpg" class="thumb"' +
		' alt="' + Its + '" title="' + Its + '"></a>');
}
/* END IMPORTANT SHIT */