//BACK TO HOME BUTTON
if (up !== "home") {
	l4='<div data-sound="home_page" data-move="home.html" class="btn home_page page_silent" tabindex="'+home_index+'" onfocus="whisper(\'home_page\', \'home_w\')"><img src="images/home.jpg"></div>'
	l5='<audio id="home_page" controls style="display:none"><source src="sounds/home_page.mp3" type="audio/mpeg"></audio>'
	l6='<audio id="home_w" controls style="display:none"><source src="sounds/home_w.mp3" type="audio/mpeg"></audio>'
	document.write(l4)
	document.write(l5)
	document.write(l6)
}

//BACK TO LAST PAGE BUTTON
l7='<div data-sound="'+up+'_page" data-move="'+up+'.html" class="btn back '+up+'_page page_silent" tabindex="0" onfocus="whisper(\''+up+'_page\', \''+up+'_back_w\')"><img src="images/up.jpg"></div>';
l8='<audio id="'+up+'_page" controls style="display:none"><source src="sounds/'+up+'_page.mp3" type="audio/mpeg"></audio><audio id="'+up+'_back_w" controls style="display:none"><source src="sounds/'+up+'_back_w.mp3" type="audio/mpeg"></audio>';
document.write(l7)
document.write(l8)