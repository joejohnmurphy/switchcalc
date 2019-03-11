
// global var to prevent key repeats
var fired = false;
var focusedItem = null;

// JQuery - this applies the code once the document is loaded
$(document).ready(function() {

$('.info').focus();

    // on the "body", listen for keyboard events 
    $('body').on('keydown', function(evt) {
        if (!fired) {
            // Enter key is 13, so if enter is hit and you 
            // are on a button, find whatever has focus and pass that 
            // text (lower case) to the process function
            if (evt.keyCode == 13) {
                // once a key goes down, mark it as fired and don't
                // accept any more events until the key goes up
                fired = true;

                //use data-sound attribute to identify mp3 element to play
                var soundId = $(':focus').data('sound');
                if(typeof(soundId) == 'string') {
                    document.getElementById(soundId).play();
                }
                
            }

            // Tab is is 9, so if we are tabbing, see if we are 
            // on the special "backToStart" and then swich focus
            // to the first tabindex instead of URL bar
            if (evt.keyCode == 9) {
                fired = true;

                if ($(':focus').hasClass('up')) {
                    evt.preventDefault();
                    $('.info').focus();
                }
            }

             // Go back using Backspace - see if this can be made into a loop
            if (evt.keyCode == 8) {
                fired = true;
                evt.preventDefault();
                
                //get current tabindex and find out if its usable to get the previous item
                var currentEle = $(':focus');
                var currentIndex = $(currentEle).attr('tabindex');
                //console.log('currentIndex: '+currentIndex);
                currentIndex = parseInt(currentIndex);
                //if we have an integer tabindex above 1 get the previous item
                if(currentIndex > 1) {
                    nextIndex = currentIndex - 1;
                    //console.log('nextIndex: '+nextIndex);
                    $('[tabindex='+nextIndex+']').focus();
                } else if(currentIndex == 1) {
                    $('[tabindex="0"]').focus();
                } else {
                    //find the highest tabindex and go to it
                    var tabIndexElements = $('[tabindex]');
                    var highestIndex = 0;
                    $.each(tabIndexElements,function(index,element){
                        var thisIndex = parseInt($(element).attr('tabindex'));
                        if(thisIndex > highestIndex) {
                            highestIndex = thisIndex;
                        }
                    });
                    $('[tabindex='+highestIndex+']').focus();
                }
            }

        } else {
            return false;
        }
    });

    // A key has gone up, so now accept events again
    $('body').on('keyup', function(evt) {
        //if this is enter and there is a focusedItem refocus on the item to replay it
        if (evt.keyCode == 13 && focusedItem) {
            $(focusedItem).focus();
            focusedItem = null;
        }

        fired = false;
    });
});