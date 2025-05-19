async function myFunction() {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = 0;
            if (x == 0) {
                resolve("Success")
            } else {
                reject("Rejected")
            }
        }, 1000);
    });
    let res = await myPromise;
    console.log(res);
}
myFunction();
