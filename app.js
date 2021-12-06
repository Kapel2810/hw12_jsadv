
///////////////////////////////////
// ----------ex1------------

const generate7BoomAfterDelayAsync = (min, max) => {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * (max - min)) + min
            // console.log(randomNumber)

            if (randomNumber % 7 === 0 || randomNumber % 10 === 7) {
                resolve(randomNumber)
            } else {
                reject("err")
            }
        }, 1000);
    })
    return myPromise


}


const runCode = () => {
    generate7BoomAfterDelayAsync(1, 100)
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=> {
        console.log(err)
    })
}