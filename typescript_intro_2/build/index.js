function getName({ firstName, lastName }) {
    if (lastName) {
        let fullname = firstName + lastName;
        return fullname;
    }
    else {
        return firstName;
    }
}
let nameobj = { firstName: "satish", lastName: "ojha" };
console.log(getName(nameobj));
//# sourceMappingURL=index.js.map