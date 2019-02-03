
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

                if ($(':focus').hasClass('breakfast')) {document.getElementById('breakfast').play()}
                if ($(':focus').hasClass('bacon')) {document.getElementById('bacon').play()}
                if ($(':focus').hasClass('biscut')) {document.getElementById('biscut').play()}
                if ($(':focus').hasClass('cereal')) {document.getElementById('cereal').play()}
                if ($(':focus').hasClass('donut')) {document.getElementById('donut').play()}
                if ($(':focus').hasClass('eggs')) {document.getElementById('eggs').play()}
                if ($(':focus').hasClass('muffin')) {document.getElementById('muffin').play()}
                if ($(':focus').hasClass('oatmeal')) {document.getElementById('oatmeal').play()}
                if ($(':focus').hasClass('pancakes')) {document.getElementById('pancakes').play()}
                if ($(':focus').hasClass('sausage')) {document.getElementById('sausage').play()}
                if ($(':focus').hasClass('waffle')) {document.getElementById('waffle').play()}
                if ($(':focus').hasClass('snack')) {document.getElementById('snack').play()}
                if ($(':focus').hasClass('brownie')) {document.getElementById('brownie').play()}
                if ($(':focus').hasClass('chips')) {document.getElementById('chips').play()}
                if ($(':focus').hasClass('cookie')) {document.getElementById('cookie').play()}
                if ($(':focus').hasClass('cracker')) {document.getElementById('cracker').play()}
                if ($(':focus').hasClass('gummy')) {document.getElementById('gummy').play()}
                if ($(':focus').hasClass('nuts')) {document.getElementById('nuts').play()}
                if ($(':focus').hasClass('pretzel')) {document.getElementById('pretzel').play()}
                if ($(':focus').hasClass('snack_bar')) {document.getElementById('snack_bar').play()}
                if ($(':focus').hasClass('hamburger')) {document.getElementById('hamburger').play()}
                if ($(':focus').hasClass('chicken')) {document.getElementById('chicken').play()}
                if ($(':focus').hasClass('french_fries')) {document.getElementById('french_fries').play()}
                if ($(':focus').hasClass('pasta')) {document.getElementById('pasta').play()}
                if ($(':focus').hasClass('bread')) {document.getElementById('bread').play()}
                if ($(':focus').hasClass('salad')) {document.getElementById('salad').play()}
                if ($(':focus').hasClass('sandwich')) {document.getElementById('sandwich').play()}
                if ($(':focus').hasClass('fruits')) {document.getElementById('fruits').play()}
                if ($(':focus').hasClass('apple')) {document.getElementById('apple').play()}
                if ($(':focus').hasClass('banana')) {document.getElementById('banana').play()}
                if ($(':focus').hasClass('blueberry')) {document.getElementById('blueberry').play()}
                if ($(':focus').hasClass('grape')) {document.getElementById('grape').play()}
                if ($(':focus').hasClass('orange')) {document.getElementById('orange').play()}
                if ($(':focus').hasClass('peach')) {document.getElementById('peach').play()}
                if ($(':focus').hasClass('pineapple')) {document.getElementById('pineapple').play()}
                if ($(':focus').hasClass('strawberry')) {document.getElementById('strawberry').play()}
                if ($(':focus').hasClass('watermelon')) {document.getElementById('watermelon').play()}
                if ($(':focus').hasClass('meat')) {document.getElementById('meat').play()}
                if ($(':focus').hasClass('beef')) {document.getElementById('beef').play()}
                if ($(':focus').hasClass('fish')) {document.getElementById('fish').play()}
                if ($(':focus').hasClass('hot_dog')) {document.getElementById('hot_dog').play()}
                if ($(':focus').hasClass('pork')) {document.getElementById('pork').play()}
                if ($(':focus').hasClass('shrimp')) {document.getElementById('shrimp').play()}
                if ($(':focus').hasClass('steak')) {document.getElementById('steak').play()}
                if ($(':focus').hasClass('turkey')) {document.getElementById('turkey').play()}
                if ($(':focus').hasClass('vegetables')) {document.getElementById('vegetables').play()}
                if ($(':focus').hasClass('asparagus')) {document.getElementById('asparagus').play()}
                if ($(':focus').hasClass('broccoli')) {document.getElementById('broccoli').play()}
                if ($(':focus').hasClass('carrot')) {document.getElementById('carrot').play()}
                if ($(':focus').hasClass('cauliflower')) {document.getElementById('cauliflower').play()}
                if ($(':focus').hasClass('corn')) {document.getElementById('corn').play()}
                if ($(':focus').hasClass('green_beans')) {document.getElementById('green_beans').play()}
                if ($(':focus').hasClass('lettuce')) {document.getElementById('lettuce').play()}
                if ($(':focus').hasClass('onions')) {document.getElementById('onions').play()}
                if ($(':focus').hasClass('potato')) {document.getElementById('potato').play()}
                if ($(':focus').hasClass('tomato')) {document.getElementById('tomato').play()}
                if ($(':focus').hasClass('condiment')) {document.getElementById('condiment').play()}
                if ($(':focus').hasClass('barbeque')) {document.getElementById('barbeque').play()}
                if ($(':focus').hasClass('butter')) {document.getElementById('butter').play()}
                if ($(':focus').hasClass('jelly')) {document.getElementById('jelly').play()}
                if ($(':focus').hasClass('ketchup')) {document.getElementById('ketchup').play()}
                if ($(':focus').hasClass('mayo')) {document.getElementById('mayo').play()}
                if ($(':focus').hasClass('mustard')) {document.getElementById('mustard').play()}
                if ($(':focus').hasClass('peanut_butter')) {document.getElementById('peanut_butter').play()}
                if ($(':focus').hasClass('pepper')) {document.getElementById('pepper').play()}
                if ($(':focus').hasClass('salt')) {document.getElementById('salt').play()}
                if ($(':focus').hasClass('sugar')) {document.getElementById('sugar').play()}
                if ($(':focus').hasClass('syrup')) {document.getElementById('syrup').play()}
                if ($(':focus').hasClass('cake')) {document.getElementById('cake').play()}
                if ($(':focus').hasClass('candy')) {document.getElementById('candy').play()}
                if ($(':focus').hasClass('chocolate')) {document.getElementById('chocolate').play()}
                if ($(':focus').hasClass('cupcake')) {document.getElementById('cupcake').play()}
                if ($(':focus').hasClass('ice_cream')) {document.getElementById('ice_cream').play()}
                if ($(':focus').hasClass('pie')) {document.getElementById('pie').play()}
                if ($(':focus').hasClass('pudding')) {document.getElementById('pudding').play()}
                if ($(':focus').hasClass('drink')) {document.getElementById('drink').play()}
                if ($(':focus').hasClass('apple_juice')) {document.getElementById('apple_juice').play()}
                if ($(':focus').hasClass('chocolate_milk')) {document.getElementById('chocolate_milk').play()}
                if ($(':focus').hasClass('fruit_punch')) {document.getElementById('fruit_punch').play()}
                if ($(':focus').hasClass('kool_aid')) {document.getElementById('kool_aid').play()}
                if ($(':focus').hasClass('lemonade')) {document.getElementById('lemonade').play()}
                if ($(':focus').hasClass('milk')) {document.getElementById('milk').play()}
                if ($(':focus').hasClass('milkshake')) {document.getElementById('milkshake').play()}
                if ($(':focus').hasClass('orange_juice')) {document.getElementById('orange_juice').play()}
                if ($(':focus').hasClass('soda')) {document.getElementById('soda').play()}
                if ($(':focus').hasClass('water')) {document.getElementById('water').play()}
                if ($(':focus').hasClass('Italian')) {document.getElementById('Italian').play()}
                if ($(':focus').hasClass('Mexican')) {document.getElementById('Mexican').play()}
                if ($(':focus').hasClass('Asian')) {document.getElementById('Asian').play()}
                if ($(':focus').hasClass('American')) {document.getElementById('American').play()}
                if ($(':focus').hasClass('seafood')) {document.getElementById('seafood').play()}
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