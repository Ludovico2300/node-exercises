function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}


// console.log(luckyDraw("Joe"));

luckyDraw("Joe")
    .then(
        function (value) {
            console.log("value:", value);
        },
        function (reason) {
            console.log("reason:", reason);
        }
    )
    .catch(error => {
        console.log("There has been a problem...:", error.message);
    })

luckyDraw("Caroline")
    .then(
        function (value) {
            console.log("value:", value);
        },
        function (reason) {
            console.log("reason:", reason);
        }
    )
    .catch(error => {
        console.log("There has been a problem...:", error.message);
    })

luckyDraw("Sabrina")
    .then(
        function (value) {
            console.log("value:", value);
        },
        function (reason) {
            console.log("reason:", reason);
        }
    )
    .catch(error => {
        console.log("There has been a problem...:", error.message);
    })