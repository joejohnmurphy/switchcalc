// global var to prevent key repeats
var fired = false;
var focusedItem = null;

var whisper = function(class_name, whisper_sound) {
    if ($(':focus').hasClass(class_name)) {
        document.getElementById(whisper_sound).volume = 0.1;
        document.getElementById(whisper_sound).play()}
};

/*
    if ($(':focus').hasClass('green')) {document.getElementById('green').volume = 0.1; document.getElementById('green').play()}
    if ($(':focus').hasClass('blue')) {document.getElementById('blue').volume = 0.1; document.getElementById('blue').play()}
    if ($(':focus').hasClass('school_page')) {document.getElementById('school_w').volume = 0.1; document.getElementById('school_w').play()}
    if ($(':focus').hasClass('calculator_page')) {document.getElementById('calculator_w').volume = 0.1; document.getElementById('calculator_w').play()}
    if ($(':focus').hasClass('social_page')) {document.getElementById('social_w').volume = 0.1; document.getElementById('social_w').play()}
    if ($(':focus').hasClass('feelings_page')) {document.getElementById('feelings_w').volume = 0.1; document.getElementById('feelings_w').play()}
    if ($(':focus').hasClass('want_page')) {document.getElementById('want_w').volume = 0.1; document.getElementById('want_w').play()}
    if ($(':focus').hasClass('need_page')) {document.getElementById('need_w').volume = 0.1; document.getElementById('need_w').play()}
    if ($(':focus').hasClass('about_page')) {document.getElementById('about_w').volume = 0.1; document.getElementById('about_w').play()}
    if ($(':focus').hasClass('family_page')) {document.getElementById('family_w').volume = 0.1; document.getElementById('family_w').play()}
    if ($(':focus').hasClass('food_page')) {document.getElementById('food_w').volume = 0.1; document.getElementById('food_w').play()}
    if ($(':focus').hasClass('up')) {document.getElementById('up_w').volume = 0.1; document.getElementById('up_w').play()}
    if ($(':focus').hasClass('vocab_page')) {document.getElementById('vocab_w').volume = 0.1; document.getElementById('vocab_w').play()}
    if ($(':focus').hasClass('friends_page')) {document.getElementById('friends_w').volume = 0.1; document.getElementById('friends_w').play()}
    if ($(':focus').hasClass('teachers_page')) {document.getElementById('teachers_w').volume = 0.1; document.getElementById('teachers_w').play()}
    if ($(':focus').hasClass('schedule_page')) {document.getElementById('schedule_w').volume = 0.1; document.getElementById('schedule_w').play()}
    if ($(':focus').hasClass('colors_page')) {document.getElementById('colors_w').volume = 0.1; document.getElementById('colors_w').play()}
    if ($(':focus').hasClass('morning')) {document.getElementById('morning_w').volume = 0.1; document.getElementById('morning_w').play()}
    if ($(':focus').hasClass('afternoon')) {document.getElementById('afternoon_w').volume = 0.1; document.getElementById('afternoon_w').play()}
    if ($(':focus').hasClass('aqueduct')) {document.getElementById('aqueduct_w').volume = 0.1; document.getElementById('aqueduct_w').play()}
    if ($(':focus').hasClass('mosaic')) {document.getElementById('mosaic_w').volume = 0.1; document.getElementById('mosaic_w').play()}
    if ($(':focus').hasClass('ancient')) {document.getElementById('ancient_w').volume = 0.1; document.getElementById('ancient_w').play()}
    if ($(':focus').hasClass('old')) {document.getElementById('old_w').volume = 0.1; document.getElementById('old_w').play()}
    if ($(':focus').hasClass('new')) {document.getElementById('new_w').volume = 0.1; document.getElementById('new_w').play()}
    if ($(':focus').hasClass('meteor_shower')) {document.getElementById('meteor_shower_w').volume = 0.1; document.getElementById('meteor_shower_w').play()}
    if ($(':focus').hasClass('happy_birthday')) {document.getElementById('happy_birthday_w').volume = 0.1; document.getElementById('happy_birthday_w').play()}
    if ($(':focus').hasClass('panda')) {document.getElementById('panda_w').volume = 0.1; document.getElementById('panda_w').play()}
    if ($(':focus').hasClass('telescope')) {document.getElementById('telescope_w').volume = 0.1; document.getElementById('telescope_w').play()}
    if ($(':focus').hasClass('jam_board')) {document.getElementById('jam_board_w').volume = 0.1; document.getElementById('jam_board_w').play()}
    if ($(':focus').hasClass('google_slides')) {document.getElementById('google_slides_w').volume = 0.1; document.getElementById('google_slides_w').play()}
        };
*/

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
//                if(typeof(soundId) == 'string') {

                    if ($(':focus').hasClass('page')) {
                        document.getElementById(soundId).volume = 0.1;
                        document.getElementById(soundId).play();
                        setTimeout(function() {window.location.href="school.html";}, 1500)
                    } else {
                        document.getElementById(soundId).play();
                        }
                        
/*                  //pause and reset any other audio currently playing
                    $('audio').each(function(i,e) {
                        e.pause();
                        e.currentTime = 0;
                    });
                    
                  } else {
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
                    if ($(':focus').hasClass('abby')) {document.getElementById('abby').play(); 
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('adam')) {document.getElementById('adam').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('grace')) {document.getElementById('grace').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('ibet')) {document.getElementById('ibet').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('john')) {document.getElementById('john').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('kendrick')) {document.getElementById('kendrick').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000);}
                    if ($(':focus').hasClass('sam')) {document.getElementById('sam').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('tj')) {document.getElementById('tj').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('trevor')) {document.getElementById('trevor').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('mcclellan')) {document.getElementById('mcclellan').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('pressley')) {document.getElementById('pressley').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('maley')) {document.getElementById('maley').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('springstroh')) {document.getElementById('springstroh').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('rodriguez')) {document.getElementById('rodriguez').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('craig')) {document.getElementById('craig').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('lawler')) {document.getElementById('lawler').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('fleming')) {document.getElementById('fleming').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('schallmoser')) {document.getElementById('schallmoser').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('mr_e')) {document.getElementById('mr_e').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000);}
                    if ($(':focus').hasClass('biz')) {document.getElementById('biz').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('gannon')) {document.getElementById('gannon').play();
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('math')) {document.getElementById('math').play()}
                    if ($(':focus').hasClass('cwt')) {document.getElementById('cwt').play()}
                    if ($(':focus').hasClass('health')) {document.getElementById('health').play()}
                    if ($(':focus').hasClass('zones')) {document.getElementById('zones').play()}
                    if ($(':focus').hasClass('lunch')) {document.getElementById('lunch').play()}
                    if ($(':focus').hasClass('resource')) {document.getElementById('resource').play()}
                    if ($(':focus').hasClass('pe')) {document.getElementById('pe').play()}
                    if ($(':focus').hasClass('cooking')) {document.getElementById('cooking').play()}
                    if ($(':focus').hasClass('english')) {document.getElementById('english').play()}
                    if ($(':focus').hasClass('choir')) {document.getElementById('choir').play()}
                    if ($(':focus').hasClass('red')) {document.getElementById('red').play()}
                    if ($(':focus').hasClass('yellow')) {document.getElementById('yellow').play()}
                    if ($(':focus').hasClass('green')) {document.getElementById('green').play()}
                    if ($(':focus').hasClass('blue')) {document.getElementById('blue').play()}
                    if ($(':focus').hasClass('purple')) {document.getElementById('purple').play()}
                    if ($(':focus').hasClass('black')) {document.getElementById('black').play()}
                    if ($(':focus').hasClass('white')) {document.getElementById('white').play()}
                    if ($(':focus').hasClass('brown')) {document.getElementById('brown').play()}
                    if ($(':focus').hasClass('sister')) {document.getElementById('sister').play()}
                    if ($(':focus').hasClass('help')) {document.getElementById('help').play()}
                    if ($(':focus').hasClass('switch_off')) {document.getElementById('switch_off').play()}
                    if ($(':focus').hasClass('cant_hear')) {document.getElementById('cant_hear').play()}
                    if ($(':focus').hasClass('chair_move')) {document.getElementById('chair_move').play()}
                    if ($(':focus').hasClass('chair_tilt')) {document.getElementById('chair_tilt').play()}
                    if ($(':focus').hasClass('head')) {document.getElementById('head').play()}
                    if ($(':focus').hasClass('neck')) {document.getElementById('neck').play()}
                    if ($(':focus').hasClass('hip')) {document.getElementById('hip').play()}
                    if ($(':focus').hasClass('arm')) {document.getElementById('arm').play()}
                    if ($(':focus').hasClass('leg')) {document.getElementById('leg').play()}
                    if ($(':focus').hasClass('feet')) {document.getElementById('feet').play()}
                    if ($(':focus').hasClass('weezer')) {document.getElementById('weezer').play()}
                    if ($(':focus').hasClass('dekker')) {document.getElementById('dekker').play()}
                    if ($(':focus').hasClass('springsteen')) {document.getElementById('springsteen').play()}
                    if ($(':focus').hasClass('ghostbusters')) {document.getElementById('ghostbusters').play()}
                    if ($(':focus').hasClass('beatles')) {document.getElementById('beatles').play()}
                    if ($(':focus').hasClass('mom')) {document.getElementById('mom').play()}
                    if ($(':focus').hasClass('dad')) {document.getElementById('dad').play()}
                    if ($(':focus').hasClass('tessa')) {document.getElementById('tessa').play()}
                    if ($(':focus').hasClass('goofma')) {document.getElementById('goofma').play()}
                    if ($(':focus').hasClass('grandpa')) {document.getElementById('grandpa').play()}
                    if ($(':focus').hasClass('grandma')) {document.getElementById('grandma').play()}
                    if ($(':focus').hasClass('joking')) {document.getElementById('joking').play()}
                    if ($(':focus').hasClass('catch')) {document.getElementById('catch').play()}
                    if ($(':focus').hasClass('audiobook')) {document.getElementById('audiobook').play()}
                    if ($(':focus').hasClass('tetherball')) {document.getElementById('tetherball').play()}
                    if ($(':focus').hasClass('phone_call')) {document.getElementById('phone_call').play()}
                    if ($(':focus').hasClass('test_kitchen')) {document.getElementById('test_kitchen').play()}
                    if ($(':focus').hasClass('cooks_country')) {document.getElementById('cooks_country').play()}
                    if ($(':focus').hasClass('simply_ming')) {document.getElementById('simply_ming').play()}
                    if ($(':focus').hasClass('jacques_pepin')) {document.getElementById('jacques_pepin').play()}
                    if ($(':focus').hasClass('primal_grill')) {document.getElementById('primal_grill').play()}
                    if ($(':focus').hasClass('chefs_life')) {document.getElementById('chefs_life').play()}
                    if ($(':focus').hasClass('milk_street')) {document.getElementById('milk_street').play()}
                    if ($(':focus').hasClass('tessa_show')) {document.getElementById('tessa_show').play()}
                    if ($(':focus').hasClass('teagan')) {document.getElementById('teagan').play()}
                    if ($(':focus').hasClass('zoey')) {document.getElementById('zoey').play()}
                    if ($(':focus').hasClass('layla')) {document.getElementById('layla').play()}
                    if ($(':focus').hasClass('cassens')) {document.getElementById('cassens').play()}
                    if ($(':focus').hasClass('global_studies')) {document.getElementById('global_studies').play()}
                    if ($(':focus').hasClass('digital_tools')) {document.getElementById('digital_tools').play()}
                    if ($(':focus').hasClass('step_1')) {document.getElementById('step_1').play()}
                    if ($(':focus').hasClass('step_2')) {document.getElementById('step_2').play()}
                    if ($(':focus').hasClass('step_3')) {document.getElementById('step_3').play()}
                    if ($(':focus').hasClass('step_4')) {document.getElementById('step_4').play()}
                    if ($(':focus').hasClass('step_5')) {document.getElementById('step_5').play()}
                    if ($(':focus').hasClass('step_6')) {document.getElementById('step_6').play()}
                    if ($(':focus').hasClass('step_7')) {document.getElementById('step_7').play()}
                    if ($(':focus').hasClass('enjoy')) {document.getElementById('enjoy').play()}
                    if ($(':focus').hasClass('confused')) {document.getElementById('confused').play()}
                    if ($(':focus').hasClass('bored')) {document.getElementById('bored').play()}
                    if ($(':focus').hasClass('nervous')) {document.getElementById('nervous').play()}
                    if ($(':focus').hasClass('mad')) {document.getElementById('mad').play()}
                    if ($(':focus').hasClass('scared')) {document.getElementById('scared').play()}
                    if ($(':focus').hasClass('focused')) {document.getElementById('focused').play()}
                    if ($(':focus').hasClass('day')) {document.getElementById('day').play()}
                    if ($(':focus').hasClass('night')) {document.getElementById('night').play()}
                    if ($(':focus').hasClass('morning')) {document.getElementById('morning').play()}
                    if ($(':focus').hasClass('afternoon')) {document.getElementById('afternoon').play()}
                    if ($(':focus').hasClass('aqueduct')) {document.getElementById('aqueduct').play()}
                    if ($(':focus').hasClass('mosaic')) {document.getElementById('mosaic').play()}
                    if ($(':focus').hasClass('ancient')) {document.getElementById('ancient').play()}
                    if ($(':focus').hasClass('old')) {document.getElementById('old').play()}
                    if ($(':focus').hasClass('new')) {document.getElementById('new').play()}
                    if ($(':focus').hasClass('meteor_shower')) {document.getElementById('meteor_shower').play()}
                    if ($(':focus').hasClass('happy_birthday')) {document.getElementById('happy_birthday').play()}
                    if ($(':focus').hasClass('panda')) {document.getElementById('panda').play()}
                    if ($(':focus').hasClass('telescope')) {document.getElementById('telescope').play()}
                    if ($(':focus').hasClass('jam_board')) {document.getElementById('jam_board').play()}
                    if ($(':focus').hasClass('google_slides')) {document.getElementById('google_slides').play()}
                    if ($(':focus').hasClass('crackerjack')) {document.getElementById('crackerjack').play()}
                    if ($(':focus').hasClass('school_page')) {document.getElementById('school_page').volume = 0.1;
                        document.getElementById('school_page').play(); 
                        setTimeout(function() {window.location.href="school.html";}, 2000)}
                    if ($(':focus').hasClass('calculator_page')) {document.getElementById('calculator_page').volume = 0.1;
                        document.getElementById('calculator_page').play(); 
                        setTimeout(function() {window.location.href="index.html";}, 2000)}
                    if ($(':focus').hasClass('social_page')) {document.getElementById('social_page').volume = 0.1;
                        document.getElementById('social_page').play(); 
                        setTimeout(function() {window.location.href="social.html";}, 2000)}
                    if ($(':focus').hasClass('feelings_page')) {document.getElementById('feelings_page').volume = 0.1;
                        document.getElementById('feelings_page').play(); 
                        setTimeout(function() {window.location.href="feelings.html";}, 2000)}
                    if ($(':focus').hasClass('want_page')) {document.getElementById('want_page').volume = 0.1;
                        document.getElementById('want_page').play(); 
                        setTimeout(function() {window.location.href="want.html";}, 2000)}
                    if ($(':focus').hasClass('need_page')) {document.getElementById('need_page').volume = 0.1;
                        document.getElementById('need_page').play(); 
                        setTimeout(function() {window.location.href="need.html";}, 2000)}
                    if ($(':focus').hasClass('about_page')) {document.getElementById('about_page').volume = 0.1;
                        document.getElementById('about_page').play(); 
                        setTimeout(function() {window.location.href="about.html";}, 2000)}
                    if ($(':focus').hasClass('family_page')) {document.getElementById('family_page').volume = 0.1;
                        document.getElementById('family_page').play(); 
                        setTimeout(function() {window.location.href="family.html";}, 2000)}
                    if ($(':focus').hasClass('food_page')) {document.getElementById('food_page').volume = 0.1;
                        document.getElementById('food_page').play(); 
                        setTimeout(function() {window.location.href="food.html";}, 2000)}
                    if ($(':focus').hasClass('home_page')) {document.getElementById('home_page').volume = 0.1;
                        document.getElementById('home_page').play(); 
                        setTimeout(function() {window.location.href="home.html";}, 2000)}
                    if ($(':focus').hasClass('vocab_page')) {document.getElementById('vocab_page').volume = 0.1;
                        document.getElementById('vocab_page').play(); 
                        setTimeout(function() {window.location.href="vocab.html";}, 2000)}
                    if ($(':focus').hasClass('friends_page')) {document.getElementById('friends_page').volume = 0.1;
                        document.getElementById('friends_page').play(); 
                        setTimeout(function() {window.location.href="friends.html";}, 2000)}
                    if ($(':focus').hasClass('teachers_page')) {document.getElementById('teachers_page').volume = 0.1;
                        document.getElementById('teachers_page').play(); 
                        setTimeout(function() {window.location.href="teachers.html";}, 2000)}
                    if ($(':focus').hasClass('schedule_page')) {document.getElementById('schedule_page').volume = 0.1;
                        document.getElementById('schedule_page').play(); 
                        setTimeout(function() {window.location.href="schedule.html";}, 2000)}
                    if ($(':focus').hasClass('colors_page')) {document.getElementById('colors_page').volume = 0.1;
                        document.getElementById('colors_page').play(); 
                        setTimeout(function() {window.location.href="colors.html";}, 2000)}
                
                }*/
                
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

    setTimeout( function(){ fired = false; },500);
    });
});