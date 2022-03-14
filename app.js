// var table=prompt("Enter number here");
function table(number){
    let box = document.getElementById("box");
    for(var i = 1 ; i <= 10; i++){
        var res = i*number;
        box.innerHTML += `<p>${number}  x ${i} =  ${res} </p>`
        // document.write(` ${number}  x ${i} =  ${res} `)
    }
}
let input = prompt("enter number");

table(parseInt(input));

