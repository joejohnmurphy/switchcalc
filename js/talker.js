// global var to prevent key repeats
var fired = false;
var focusedItem = null;

var whisper = function(class_name, whisper_sound) {
    if ($(':focus').hasClass(class_name)) {
        document.getElementById(whisper_sound).volume = 0.2;
        document.getElementById(whisper_sound).play()}
};

// JQuery - this applies the code once the document is loaded
$(document).ready(function() {

$('.a').focus();

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
                //use whisper volume if just moving to new page
                //use full volume if speaking and moving to new page
                var soundId = $(':focus').data('sound');
                var moveId = $(':focus').data('move');
                    if ($(':focus').hasClass('a')) {
                        document.getElementById(soundId).volume = 0.2;
                        document.getElementById(soundId).play();
                    } else if ($(':focus').hasClass('page_silent')) {
                        window.location.href=moveId;
                    } else if ($(':focus').hasClass('page')) {
                        document.getElementById(soundId).play();
                        setTimeout(function() {window.location.href=moveId;}, 1500)
                    } else {
                        document.getElementById(soundId).play();
                    }                
            }

            // Tab is is 9, so if we are tabbing, see if we are 
            // on the special "backToStart" and then swich focus
            // to the first tabindex instead of URL bar
            if (evt.keyCode == 9) {
                fired = true;
                //special for Numbers page
                if ($(':focus').hasClass('numbersback')) {
                    evt.preventDefault();
                    var currentEle = $(':focus');
                    var currentIndex = $(currentEle).attr('tabindex');
                    currentIndex = parseInt(currentIndex);
                    nextIndex = currentIndex - 9;
                    $('[tabindex='+nextIndex+']').focus();
                } else if ($(':focus').hasClass('back')) {
                    evt.preventDefault();
                    $('.a').focus();
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
                //special for Numbers page
                if ($(':focus').hasClass('numbersback')) {
                    nextIndex = currentIndex + 1;
                //special for Numbers page
                } else if ($(':focus').hasClass('number')) {
                    if(currentIndex > 91) {
                        location.reload();
                    } else {
                        nextIndex = Math.ceil((currentIndex-1) / 10) * 10 + 2;
                    }
                //special for Date Numbers page
                } else if ($(':focus').hasClass('date_number')) {
                    if(currentIndex > 31) {
                        location.reload();
                    } else {
                        nextIndex = Math.ceil((currentIndex-1) / 10) * 10 + 2;
                    }
                } else {nextIndex = currentIndex - 1;}
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

    // Debouncing: 1/4 second
    setTimeout( function(){ fired = false; },250);
    });
});