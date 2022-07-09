const sum = require('../sum_arguments');
describe("testing sum function",()=>{
    test("add 2 positive numbers",()=>{
        expect(sum(1,2)).toBe(3);
    });
    test("add to negative numbers",()=>{
        expect(sum(-1,-2)).toBe(-3);
    })
    test("add one negative numbers",()=>{
        expect(sum(-1,2)).toBe(1);
    })
    test("if one is empty",()=>{
        expect(sum(1)).toBe("sum functions needs atleast 2 arguments");
    })
    test("if sum is empty",()=>{
        expect(sum()).toBe("sum invoked without arguments");
    })
    test("adding to floating value",()=>{
        expect(sum(1.5,1.5)).toBe(3);
    })
});