let eid = [101, 102, 103];
let employee = [
    
    { eid: 101, ename: "Alice", esal: 40000 },
    { eid: 102, ename: "Bob", esal: 78888 },
    { eid: 103, ename: "Charlie", esal: 30000 },
    { eid : 104, ename: "David", esal: 50000 

    },
]
for(let emp of employee){
    console.log(emp.ename);
}
console.log(employee[0].ename); // Alice
console.log(employee[1].ename); // Bob
console.log(employee[2].ename); // Charlie  
console.log(employee[3].ename); // David 