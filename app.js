
///////////////////////////////////
// ----------ex1------------

// const generate7BoomAfterDelayAsync = (min, max) => {
//     let myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let randomNumber = Math.floor(Math.random() * (max - min)) + min
//             // console.log(randomNumber)

//             if (randomNumber % 7 === 0 || randomNumber % 10 === 7) {
//                 resolve(randomNumber)
//             } else {
//                 reject("err")
//             }
//         }, 1000);
//     })
//     return myPromise


// }


// const runCode = () => {
//     generate7BoomAfterDelayAsync(1, 100)
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((err)=> {
//         console.log(err)
//     })
// }

/////////////////////////////////////
//----------- ex2--------------


const generatePrimeNumberAfterDelayAsync = (min, max) => {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * (max - min)) + min

            if (randomNumber < 2) {
                reject()

                for (let i = 0; i < randomNumber; i++) {
                    if (randomNumber % i === 0) {
                        reject()
                    }
                }
            }else{
                resolve(randomNumber)
            }
        }, 1000);
    })
    return myPromise
}

const runCode = () => {
    generatePrimeNumberAfterDelayAsync(1, 20)
        .then((number) => {
            console.log(number)
        })
        .catch((err) => {
            console.log(err)
        })
}