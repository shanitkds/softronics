//CLLONIG METHORDS
// ----


// reference copy


// const student={

//     name:'shanith',
//     age:22,
//     mark:34
// }


// const newstudent=student;
// newstudent.age=13

// console.log(student,newstudent);
// console.log(student.age);

// ----------------------------------------------------------------------------------------------------------



// shallow copy


// const student={

//     name:'shanith',
//     age:22,
//     mark:34,
//     address:{
//         place:"kodasseri",
//         pin:999999
//     }
// }


// const newstudent={...student};
// newstudent.mark=55
// newstudent.address.place="pandikkad"


// console.log(student);
// console.log(newstudent);

// ---------------------------------------------------------------------------------------------------------

// deep copy



const student={

    name:'shanith',
    age:22,
    mark:34,
    address:{
        place:"kodasseri",
        pin:999999
    }
}

const newstudent=JSON.parse(JSON.stringify(student))

newstudent.name="diya";
newstudent.address.pin=676521;

console.log(student);
console.log(newstudent);

