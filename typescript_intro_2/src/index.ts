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