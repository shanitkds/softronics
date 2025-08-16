//MAP

// const arr=[1,2,3,4,5]

// const result=arr.map((element,index,array)=>{

//     if(element%2===0){
//         return element
//     }
     
// })

// console.log(result);

// ------------------------------------------------------------------------

// FILTTER

// const movies = [
//     {
//         name:"pulimurugan",
//         rating:8
//     },
//     {
//         name:"lucifer",
//         rating:10
//     },
//     {
//         name:"kgf",
//         rating:9
//     }
// ]

// const result=movies.filter((movie)=>{
//     return movie.rating > 8
// })

// // console.log(result);


// // -----------------------------------------------------------------

// // FIND

// const result2=movies.find((movie)=>{

//     return movie.rating>=9;
// })

// console.log(result2);




// ---------------------------------------------------------------------------------------------------------------

// PROBLUM 

// const movies = [
//     {
//         title: "Inception",
//         year: 2010,
//         rating: 8.8,
//         genre: "Sci-Fi",
//     },
//     {
//         title: "Interstellar",
//         year: 2014,
//         rating: 8.6,
//         genre: "Sci-Fi",
//     },
//     {
//         title: "The Dark Knight",
//         year: 2008,
//         rating: 9.0,
//         genre: "Action",
//     },
//     {
//         title: "The Godfather",
//         year: 1972,
//         rating: 9.2,
//         genre: "Crime",
//     },
//     {
//         title: "The Shawshank Redemption",
//         year: 1994,
//         rating: 9.3,
//         genre: "Drama",
//     },
//     {
//         title: "Avengers: Endgame",
//         year: 2019,
//         rating: 8.4,
//         genre: "Action",
//     },
//     {
//         title: "The Room",
//         year: 2003,
//         rating: 3.7,
//         genre: "Drama",
//     },
// ];


// const toprate=movies.filter((movies)=>{

//     return movies.rating>=9
    
// })

// const title=movies.map((movie)=>{
//     return movie.title
// })

// const topmovietitle=movies.map((movies)=>{

//     if (movies.rating>=9) {

//         return movies.title
//     }
     
    
// })

// // console.log(toprate);
// // console.log(title);
// console.log(topmovietitle);

// -----------------------------------------------------------------------------------------------
// REDUCE

const arr=[1,2]
const sum=arr.reduce((ele,int)=>{
    return ele+int
},2)

console.log(sum);

// ------------------------------------------------------------

// SLICE
// const arr=[1,2,3,4,5,]

// const result=arr.slice(-2)
// console.log(result);

// ---------------------------------------------------

// SPLICE

// const arr=[1,2,3,4,5,3]

// const result=arr.splice(0,2,8,9)
// console.log(result);
// console.log(arr);


