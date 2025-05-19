//create promise
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let x = 1;
        if (x == 0) {
            resolve("Success")
        } else {
            reject("Rejected")
        }
    }, 1000);
})

//resolve promise
myPromise.then(
    (value) => {
        console.log(value);
    },
    (error) => {
        console.log(error);
    }
);
