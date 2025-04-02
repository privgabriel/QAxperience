var gaveta = ["Faca", "Mascara", "luva"];

console.log(gaveta[0]);
console.log(gaveta[1]);
console.log(gaveta[2]);

gaveta.push("Myers");

console.log(gaveta[3]);

gaveta = gaveta.filter(function(p){
    return p !== "Myers"
})


