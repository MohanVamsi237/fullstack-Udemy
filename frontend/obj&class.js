// const Student={
//     fullName:"Mohan Vamsi",
//     marks:569,
//     printMarks : function(){
//         console.log("marks=",this.marks);
//     },
// };

const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
    calcTax12: function(){
        console.log("tax rate is 10%");
    }
    // both the above methods are the same
}

const karanArjun={
    salary: 50000,
}

const karanArjun2={
    salary: 50000,
}

const karanArjun3={
    salary: 50000,
}

const karanArjun4={
    salary: 50000,
}

karanArjun.__proto__=employee;
karanArjun2.__proto__=employee;
karanArjun3.__proto__=employee;
karanArjun4.__proto__=employee;

class toyota{
    constructor(brand){
        console.log("creating a new object");
        this.brand=brand;
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

}

let fortuner=new toyota();
fortuner.setBrand("fortuner");
let lexus=new toyota("lexus");
