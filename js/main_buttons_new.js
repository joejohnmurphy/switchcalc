nLen = display.length
var home_index=nLen+1

for (i = 0; i < nLen; i++) {
    j = i + 1
    l1='<div data-sound="'+sound[i]+'" '+move[i]+'class="btn '+btnclass[i]+' '+sound[i]+'" tabindex="'+j+'" onfocus="whisper(\''+sound[i]+'\', \''+sound[i]+'_w\')">'+display[i]+'</div>'
    l2='<audio id="'+sound[i]+'" controls style="display:none"><source src="sounds/'+sound[i]+'.mp3" type="audio/mpeg"></audio>'
    l3='<audio id="'+sound[i]+'_w" controls style="display:none"><source src="sounds/'+sound[i]+'_w.mp3" type="audio/mpeg"></audio>'
    document.write(l1)
    document.write(l2)
    document.write(l3)
}
