// Challenge 3:
//
// Output a count value every time the importantTask function is called.
// Reset the count value after 4 function calls.

function importantTask() {
    console.count("Count")
}

importantTask();
importantTask();
importantTask();
importantTask();
console.countReset("Count");
importantTask();
importantTask();

