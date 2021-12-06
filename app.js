
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


// const generatePrimeNumberAfterDelayAsync = (min, max) => {
//     let myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let randomNumber = Math.floor(Math.random() * (max - min)) + min

//             if (randomNumber < 2) {
//                 reject()

//                 for (let i = 0; i < randomNumber; i++) {
//                     if (randomNumber % i === 0) {
//                         reject()
//                     }
//                 }
//             }else{
//                 resolve(randomNumber)
//             }
//         }, 1000);
//     })
//     return myPromise
// }

// const runCode = () => {
//     generatePrimeNumberAfterDelayAsync(1, 20)
//         .then((number) => {
//             console.log(number)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }

//////////////////////////////////////
//--------------ex 3 ---------------

// let cuteAnimals = ['חתלתול', 'כלבלב', 'ארנבון', 'תוכון', 'עקרב', 'עכביש', 'ג׳וק']
// const generteCuteAnimalAfterDelayAsync = () => {
//     let myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {

//             let randomAnimalIndex = Math.floor(Math.random() * cuteAnimals.length)
//             let randomAnimal = cuteAnimals[randomAnimalIndex]

//             if (randomAnimal === 'עקרב' || randomAnimal === 'עכביש' || randomAnimal === 'ג׳וק') {
//                 reject('not a cute animal')
//             } else {
//                 resolve(randomAnimal)
//             }
//         }, 1000);

//     })
//     return myPromise


// }
// const runCode = () => {
//     generteCuteAnimalAfterDelayAsync()
//     .then((data)=> {
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

/////////////////////////////////
//------------- ex 4------------

let daysOfWeek = ['יום א','יום ב','יום ג','יום ד','יום ה','יום ו','שבת']
const generateWorkingDayAfterDelayAsync = () => {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {

            let workingDayIndex = Math.floor(Math.random() *daysOfWeek.length)
            let workingDay = daysOfWeek[workingDayIndex]
            switch (workingDay) {
                case 'יום א':
                    resolve(workingDay)
                    break;
                case 'יום ב':
                    resolve(workingDay)
                    break;
                case 'יום ג':
                    resolve(workingDay)
                    break;
                case 'יום ד':
                    resolve(workingDay)
                    break;
                case 'יום ה':
                    resolve(workingDay)
                    break;
                case ' יום ו':
                    reject('יום ו-יום חופש')
                    break;
                case 'שבת':
                    reject('שבת-יום חופש')
                    break;
            }
        }, 1000);
    })
    return myPromise

}

const runCode = () => {
 generateWorkingDayAfterDelayAsync()
 .then ((data)=>{
     console.log(data)
 })
 .catch((err)=> {
     console.log(err)
 })
}