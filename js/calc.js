// global var to prevent key repeats
var fired = false;

// JQuery - this applies the code once the document is loaded
$(document).ready(function() {

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

                // hack to get the screen reader to re-read
                // the number you are on for repeats
                //$(evt.target).blur().focus();

                if ($(':focus').hasClass('zero')) {
                    document.getElementById('a_0').play()
                }

                if ($(':focus').hasClass('one')) {
                    document.getElementById('a_1').play()
                }

                if ($(':focus').hasClass('two')) {
                    document.getElementById('a_2').play()
                }

                if ($(':focus').hasClass('three')) {
                    document.getElementById('a_3').play()
                }

                if ($(':focus').hasClass('four')) {
                    document.getElementById('a_4').play()
                }

                if ($(':focus').hasClass('five')) {
                    document.getElementById('a_5').play()
                }

                if ($(':focus').hasClass('six')) {
                    document.getElementById('a_6').play()
                }

                if ($(':focus').hasClass('seven')) {
                    document.getElementById('a_7').play()
                }

                if ($(':focus').hasClass('eight')) {
                    document.getElementById('a_8').play()
                }

                if ($(':focus').hasClass('nine')) {
                    document.getElementById('a_9').play()
                }

                if ($(':focus').hasClass('ten')) {
                    document.getElementById('a_plus').play()
                }

                if ($(':focus').hasClass('eleven')) {
                    document.getElementById('a_minus').play()
                }

                if ($(':focus').hasClass('twelve')) {
                    document.getElementById('a_times').play()
                }

                if ($(':focus').hasClass('thirteen')) {
                    document.getElementById('a_divided').play()
                }

                // call the function
                process($('.btn:focus').text().toLowerCase());
                // Create a new jQuery.Event object with specified event properties.

                // JM - return focus to beginning if an operation is selected    
                if ($(':focus').hasClass('operation')) {
                    evt.preventDefault();
                    $('.btn[tabindex=1]').focus();
                }
            }

            // Tab is is 9, so if we are tabbing, see if we are 
            // on the special "backToStart" and then swich focus
            // to the first tabindex instead of URL bar
            if (evt.keyCode == 9) {
                fired = true;

                if ($(':focus').hasClass('up')) {
                    evt.preventDefault();
                    $('.btn[tabindex=1]').focus();
                }
            }

             // Go back using Backspace - see if this can be made into a loop
            if (evt.keyCode == 8) {
                fired = true;
                    evt.preventDefault();

                if ($(':focus').hasClass('zero')) {
                    $('.up').focus();
                }

                if ($(':focus').hasClass('one')) {
                    $('.btn[tabindex=1]').focus();
                }

                if ($(':focus').hasClass('two')) {
                    $('.btn[tabindex=2]').focus();
                }

                if ($(':focus').hasClass('three')) {
                    $('.btn[tabindex=3]').focus();
                }

                if ($(':focus').hasClass('four')) {
                    $('.btn[tabindex=4]').focus();
                }

                if ($(':focus').hasClass('five')) {
                    $('.btn[tabindex=5]').focus();
                }

                if ($(':focus').hasClass('six')) {
                    $('.btn[tabindex=6]').focus();
                }

                if ($(':focus').hasClass('seven')) {
                    $('.btn[tabindex=7]').focus();
                }

                if ($(':focus').hasClass('eight')) {
                    $('.btn[tabindex=8]').focus();
                }

                if ($(':focus').hasClass('nine')) {
                    $('.btn[tabindex=9]').focus();
                }

                if ($(':focus').hasClass('ten')) {
                    $('.btn[tabindex=10]').focus();
                }

                if ($(':focus').hasClass('eleven')) {
                    $('.btn[tabindex=11]').focus();
                }

                if ($(':focus').hasClass('twelve')) {
                    $('.btn[tabindex=12]').focus();
                }

                if ($(':focus').hasClass('thirteen')) {
                    $('.btn[tabindex=13]').focus();
                }

                if ($(':focus').hasClass('fourteen')) {
                    $('.btn[tabindex=14]').focus();
                }

                if ($(':focus').hasClass('fifteen')) {
                    $('.problem').focus();
                }

                if ($(':focus').hasClass('sixteen')) {
                    $('.btn[tabindex=16]').focus();
                }

                if ($(':focus').hasClass('seventeen')) {
                    $('.ans').focus();
                }

                if ($(':focus').hasClass('up')) {
                    $('.btn[tabindex=18]').focus();
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

    // This is just a convenience method that lets
    // the mouse work like the tab/enter actions
    $('.btn').on('click', function(evt) {
        process($(this).text().toLowerCase());
    });

    // This is another convenience if you "click" on the 
    // "Answer" text to calculate the answer
    $('.answerText').on('click', function(evt) {
        process("=");
    });

});

// Since keyboard and mouse events call the same
// action, it makes sense to move this into a function. 
// Text is passed in and depending on what it is, 
// different things happen.
function process(text) {

    // This is a reference to the problem text line
    var problemTextArea = $('#problem');

    // This is a reference to the current text on the line
    var problemText = $('#problem').html();

    // This is a reference to the problem text line
    var readProblemTextArea = $('#readProblem');

   // This is a reference to the current text on the line
    var readProblemText = $('#readProblem').html();

    // This is a reference to the answer text line
    var answerTextArea = $('#ans');

    // This is a reference to the current text on the line
    var answerText = $('#ans').text();

    // A switch statement lets us do different things 
    // depending on what the text is. You can add additional 
    // cases below. Each case should end with a "break;"
    // If no cases match, the default case is run at the end.
    switch (text) {
        // if it is the word plus, add a plus sign 
        case "plus":
            // the area label here helps chrome vox speak the problem correctly
            problemTextArea.html(problemText + " <span aria-label='plus'> + </span> ");
            readProblemTextArea.html(readProblemText + text);
            break;

            // if it is the word minus, add a minus sign
        case "minus":
            // the area label here helps chrome vox speak the problem correctly
            problemTextArea.html(problemText + " <span aria-label='minus'> - </span> ");
            readProblemTextArea.html(readProblemText + text);
            break;
            
            // if it is the word times, add a times sign
        case "times":
            // the area label here helps chrome vox speak the problem correctly
            problemTextArea.html(problemText + " <span aria-label='times'> * </span> ");
            readProblemTextArea.html(readProblemText + text);
            break;

            // if it is the word divided by, add a division sign
        case "divided by":
            // the area label here helps chrome vox speak the problem correctly
            problemTextArea.html(problemText + " <span aria-label='divided by'> / </span> ");
            readProblemTextArea.html(readProblemText + text);
            break;

            // if it is the word reset, clear the answer line
        case "reset":
            problemTextArea.text("")
            readProblemTextArea.text("");
            answerTextArea.text("");
            break;

            // if it is equals; evaluate the expression on the 
            // answer line, and then focus on it so it is read
            // give it some nice formatting too so it is read
            // appropriately and not per digit
            // NOTE: = is currently hidden now given the new answer btn
        case "=":
            try {
                answerTextArea.text(eval(problemText).toLocaleString());
                $('#readProblem').focus();
            } catch (e) {
                // adding an error message if the 
                // eval didn't go as planned
                answerTextArea.text('Error');
                $('#ans').focus();
            }
            break;

            // slightly different outcome for clicking answer.
            // this can be refactored if you are feeling saucy 
        case " = ":
            try {
                // tweak here to just pull text from the problem and ignore
                // html (the span tags)
                // JM trying to get it to read equation, =, answer (e.g. 5 + 4 = 9)
                problemTextArea.text() + answerTextArea.text(eval(problemTextArea.text()).toLocaleString()); 
                //"=" + answerTextArea.text(problemTextArea.text().toLocaleString());
                $('#ans').focus();
            } catch (e) {
                // adding an error message if the 
                // eval didn't go as planned
                answerTextArea.text('Error');
                $('#ans').focus();
            }
            break;

            // otherwise, you're probably on a number, so just
            // append it to the existing text
        default:
            problemTextArea.html(problemText + text);
            readProblemTextArea.html(readProblemText + text);

            break;
    }
}