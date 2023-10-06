// // Code your solution here
// const users = [
//     {
//       firstName: "Niky",
//       lastName: "Morgan",
//       favoriteColor: "Blue",
//       favoriteAnimal: "Jaguar",
//     },
//     {
//       firstName: "Tracy",
//       lastName: "Lum",
//       favoriteColor: "Yellow",
//       favoriteAnimal: "Penguin",
//     },
//     {
//       firstName: "Josh",
//       lastName: "Rowley",
//       favoriteColor: "Blue",
//       favoriteAnimal: "Penguin",
//     },
//     {
//       firstName: "Kate",
//       lastName: "Travers",
//       favoriteColor: "Red",
//       favoriteAnimal: "Jaguar",
//     },
//     {
//       firstName: "Avidor",
//       lastName: "Turkewitz",
//       favoriteColor: "Blue",
//       favoriteAnimal: "Penguin",
//     },
//     {
//       firstName: "Drew",
//       lastName: "Price",
//       favoriteColor: "Yellow",
//       favoriteAnimal: "Elephant",
//     },
//   ];

// function filter(array){
//     for (const individual of array) {
//         if (favoriteColorBlue(individual)) {
//             console.log(individual.firstName)
//         } else {
//             console.log("wooo")
//         }
//     }
// }

// function favoriteColorBlue(individual) {
//     return individual['favoriteAnimal'] === 'Penguin'
// }

// filter(users) 

const drivers1 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Bobby']

function findMatching(arr, driverName){
    return arr.filter((individual) => individual.toLowerCase() === driverName.toLowerCase())

}

// findMatching(drivers, 'Bobby'); //=

// function findMatching(arr, driverName){
//     const filteredDrivers = arr.filter((individual) => individual['name'] === driverName)
//     console.log(filteredDrivers.map(Object.values))
// }

function fuzzyMatch(arr, driverName){
    return arr.filter((individual) => individual.slice(0, driverName.length) === driverName)
}

function matchName(arr, driverName){
    const filteredDrivers = arr.filter((individual) => individual['name'] === driverName)
    return filteredDrivers;
}