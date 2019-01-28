
// global var to prevent key repeats
var fired = false;

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

                if ($(':focus').hasClass('daily')) {
                    document.getElementById('daily').play()
                }

                if ($(':focus').hasClass('weekend')) {
                    document.getElementById('weekend').play()
                }

                if ($(':focus').hasClass('name')) {
                    document.getElementById('name').play()
                }

                if ($(':focus').hasClass('age')) {
                    document.getElementById('age').play()
                }

                if ($(':focus').hasClass('tv')) {
                    document.getElementById('tv').play()
                }

                if ($(':focus').hasClass('food')) {
                    document.getElementById('food').play()
                }

                if ($(':focus').hasClass('sport')) {
                    document.getElementById('sport').play()
                }

                if ($(':focus').hasClass('team')) {
                    document.getElementById('team').play()
                }

                if ($(':focus').hasClass('music')) {
                    document.getElementById('music').play()
                }

                if ($(':focus').hasClass('eat')) {
                    document.getElementById('eat').play()
                }

                if ($(':focus').hasClass('drink')) {
                    document.getElementById('drink').play()
                }

                if ($(':focus').hasClass('listen')) {
                    document.getElementById('listen').play()
                }

                if ($(':focus').hasClass('watch')) {
                    document.getElementById('watch').play()
                }

                if ($(':focus').hasClass('rest')) {
                    document.getElementById('rest').play()
                }

                if ($(':focus').hasClass('walk')) {
                    document.getElementById('walk').play()
                }

                if ($(':focus').hasClass('switch')) {
                    document.getElementById('switch').play()
                }

                if ($(':focus').hasClass('hello')) {
                    document.getElementById('hello').play()
                }

                if ($(':focus').hasClass('goodbye')) {
                    document.getElementById('goodbye').play()
                }

                if ($(':focus').hasClass('school')) {
                    document.getElementById('school').play()
                }

                if ($(':focus').hasClass('how_doing')) {
                    document.getElementById('how_doing').play()
                }

                if ($(':focus').hasClass('how_weekend')) {
                    document.getElementById('how_weekend').play()
                }

                if ($(':focus').hasClass('what_weekend')) {
                    document.getElementById('what_weekend').play()
                }

                if ($(':focus').hasClass('what_sports')) {
                    document.getElementById('what_sports').play()
                }

                if ($(':focus').hasClass('what_tv')) {
                    document.getElementById('what_tv').play()
                }

                if ($(':focus').hasClass('fine')) {
                    document.getElementById('fine').play()
                }

                if ($(':focus').hasClass('sounds_fun')) {
                    document.getElementById('sounds_fun').play()
                }

                if ($(':focus').hasClass('thanks')) {
                    document.getElementById('thanks').play()
                }

                if ($(':focus').hasClass('dont_like')) {
                    document.getElementById('dont_like').play()
                }

                if ($(':focus').hasClass('nice_day')) {
                    document.getElementById('nice_day').play()
                }

                if ($(':focus').hasClass('good_morning')) {
                    document.getElementById('good_morning').play()
                }

                if ($(':focus').hasClass('cool')) {
                    document.getElementById('cool').play()
                }

                if ($(':focus').hasClass('was_fun')) {
                    document.getElementById('was_fun').play()
                }

                if ($(':focus').hasClass('delicious')) {
                    document.getElementById('delicious').play()
                }

                if ($(':focus').hasClass('happy')) {
                    document.getElementById('happy').play()
                }

                if ($(':focus').hasClass('sad')) {
                    document.getElementById('sad').play()
                }

                if ($(':focus').hasClass('excited')) {
                    document.getElementById('excited').play()
                }

                if ($(':focus').hasClass('tired')) {
                    document.getElementById('tired').play()
                }

                if ($(':focus').hasClass('sick')) {
                    document.getElementById('sick').play()
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
                
                if ($(':focus').hasClass('b')) {
                    $('.a').focus();
                }

                if ($(':focus').hasClass('c')) {
                    $('.b').focus();
                }

                if ($(':focus').hasClass('d')) {
                    $('.c').focus();
                }

                if ($(':focus').hasClass('e')) {
                    $('.d').focus();
                }

                if ($(':focus').hasClass('f')) {
                    $('.e').focus();
                }

                if ($(':focus').hasClass('g')) {
                    $('.f').focus();
                }

                if ($(':focus').hasClass('h')) {
                    $('.g').focus();
                }

                if ($(':focus').hasClass('i')) {
                    $('.h').focus();
                }

                if ($(':focus').hasClass('j')) {
                    $('.i').focus();
                }

                if ($(':focus').hasClass('k')) {
                    $('.j').focus();
                }

                if ($(':focus').hasClass('l')) {
                    $('.k').focus();
                }

                if ($(':focus').hasClass('m')) {
                    $('.l').focus();
                }

                if ($(':focus').hasClass('n')) {
                    $('.m').focus();
                }

                if ($(':focus').hasClass('o')) {
                    $('.n').focus();
                }

                if ($(':focus').hasClass('up')) {
                    $('.btn[tabindex=1]').focus();
                }
            }

        } else {
            return false;
        }
    });

    // A key has gone up, so now accept events again
    $('body').on('keyup', function(evt) {
        fired = false;
    });
});