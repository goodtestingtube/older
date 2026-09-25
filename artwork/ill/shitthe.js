var illustration = new Array();

illustration.push(

	"2026",

	// ))aug
	"2026_aug_Untitled6",
	// ))july
	"2026_jul_Untitled34",
	"2026_jul_fish",
	// ))may
	"2026_may_batdracula",
	"2026_may_imps",
	// ))april
	"2026_apr_ppco",
	// ))feb
	"2026_feb_Untitled24",
	"2026_feb_woods"

);

illustration.push(

	"2025",

	// ))sep
	"2025_sep_conflict"

);

/* hopefully i will not have to touch this, but just in case...

	IMPORTANT SHIT BEGINS HERE
*/
for (let idx = 0; idx < illustration.length; idx++) {
	/* for debug purposes */
	console.log(illustration[idx]);
	/* this only apples to boxes with years in them,
	it links to... i mean you can read right it's detailed on the 
	final page.
	i doubt i'll be alive to see the year 20000 so it's just
	four digits. */
	if (illustration[idx].length <= 4) {
		document.write('<a href="year/' + 
		illustration[idx] + 
		'.html" target="_blank"><img src="theshit/thumb/' +
		illustration[idx] + '.jpg" class="thumb"' +
		' alt="illustrations from ' + illustration[idx] + '."></a>');
	} else {
	/* for any piece. */
	document.write('<a href="theshit/' + 
		illustration[idx] + 
		'.jpg" target="_blank"><img src="theshit/thumb/' +
		illustration[idx] + '.jpg" class="thumb"' +
		' alt="' + illustration[idx] + '"></a>');
	}
}
/* END IMPORTANT SHIT */