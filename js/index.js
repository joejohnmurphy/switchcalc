// global var to prevent key repeasts
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
                $(evt.target).blur().focus();

                // call the function
                process($('.btn:focus').text().toLowerCase());
            }

            // Tab is is 9, so if we are tabbing, see if we are 
            // on the special "backToStart" and then swich focus
            // to the first tabindex instead of URL bar
            if (evt.keyCode == 9) {
                fired = true;

                if ($(':focus').hasClass('backToStart')) {
                    evt.preventDefault();
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
            break;

            // if it is the word minus, add a minus sign
        case "minus":
            // the area label here helps chrome vox speak the problem correctly
            problemTextArea.html(problemText + " <span aria-label='minus'> - </span> ");
            break;

            // if it is the word reset, clear the answer line
        case "reset":
            problemTextArea.text("");
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
                $('#problem').focus();
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
            break;
    }
}