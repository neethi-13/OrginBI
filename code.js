const a={"name":"Neethi","age":22};
const {name ,  age} =a;
console.log(name , age);
for(let key in a){
    console.log(key , a[key]);
}
const b = [10,20,35,40];
const [x,y,...rest] = b;
console.log(x,y,rest);
for(let key of b){
    console.log(key);
}
console.log("Reduce");
const sum = b.reduce((t,n)=>t+n ,0);
console.log(sum);
console.log("Map");
const squ = b.map((n)=>{
   return n*n
})
console.log("squ :" ,squ);
b.map((n)=>{
    console.log(n*n);
})

console.log("Filter");
const even = b.filter((n)=>n%2 == 0);
console.log("even :" ,even);
b.filter((n)=>{
    if(n%2 == 0){
        console.log(n);
    }
})


console.log("object");
const person = {
    firstName : "Neethi",
    lastName  : "V",
    age       : 22,
    fullName  : function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());

//console.log(map)

const rd = require("readline");
const rl = rd.createInterface({
    input : process.stdin,
    output : process.stdout
})
let arr =[] ;
let size;
rl.question("Enter size of array : " , (n)=>{
    size = parseInt(n);
    rl.on('line', (num)=>{
        arr.push(parseInt(num));
        if(arr.length == size){
            rl.close();
        }
    })
})
rl.on("close", () => {
    console.log("Your array:", arr);
});

console.log("End of code");

//DAi NEETHI