interface test{
    title:string;
    status:boolean;
    id:number;
}
interface combineName{
    firstName:string;
    lastName?:string;
}

function getName({firstName,lastName}:combineName):string{
    if(lastName){
        let fullname:string =firstName+lastName;
        return fullname;
    }
    else{
        return firstName;
    }
    
   
}
let nameobj = {firstName:"satish",lastName:"ojha"};

console.log(getName(nameobj));

interface Address{
    houseNumber:number;
    street:string;
    city:string;
    state:string;
    postalCode:number;
    country:string;

}

interface PersonDetails{
    phones:number[];
    addresses:Address[];
    email?:string;
    firstName:string;
    lastName:string;
    middleName?:string;
}