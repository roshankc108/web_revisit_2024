// dictionaries in js

const codeAuthor = {
    name : "Roshan KC",
    age : 23,
    address : "butwal"
}

console.log(codeAuthor.name)
console.log(codeAuthor.name+" from "+codeAuthor.address+" age is "+codeAuthor.age)

console.log(typeof(codeAuthor))

console.log(" ")

for(x in codeAuthor){
    console.log(x)
}

for(x in codeAuthor){
    console.log(x+" : "+codeAuthor[x])
}
