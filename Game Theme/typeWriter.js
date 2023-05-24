// Function: typeWriter (Asynchronous)
// Description: Intends to write HTML code with the type writer effect
// Parameters: 
//      - idx (integer): index to write in text
//      - elementId (string): the id of the HTML element to write in
//      - i (integer): initialize it with 0, the function is recursive.
//      - callback (function): function to call after the execution
// Returns: None
function typeWriter(idx, elementId, i, callback, ...params) {
    if (i < text[idx].length) {
        document.getElementById(elementId).innerHTML += text[idx][i];
        i += 1;
        setTimeout(typeWriter, 75, idx, elementId, i, callback, ...params);
    }
    else {
        // execute a callback function if the callback parameter is invoked
        if (typeof callback === "function") {
            callback(...params);
        }
    }
}

// Function: backspace (Asynchronous)
// Description: It removes the characters one by one with the type write effect
// Parameters:
//      - times (integer): the amount of backspaces you want
//      - elementId (string): the id of the HTML element
//      - callback (function): function to call after the execution
// Returns: None
function backspace(times, elementId, callback, ...params) {
    if (times == 0) {
         // execute a callback function if the callback parameter is invoked
        if (typeof callback === 'function') {
            callback(...params);
        }
        return;
    }
    let sentence = document.getElementById(elementId).innerHTML;
    document.getElementById(elementId).innerHTML = sentence.substring(0, sentence.length - 1)
    setTimeout(backspace, 100, times - 1, elementId, callback, ...params)
}

// Function: displayText 
// Description: Driver Code
// Parameters: None
// Returns: None
function displayText() {
    iteration += 1
    typeWriter(0, "secondary_0", 0)
}

let iteration = -1;
const text = ["It has the power to create lifelong friendships."];
displayText();

