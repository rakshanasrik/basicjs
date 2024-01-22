/*//Hoisting
// variable Hoisting
console.log(a) //undefined
var a=10
//Let Hoisting
console.log(a) //Reference error
let a=10*/

//Functional Hoisting
konguClg(5,10)
function konguClg(a,b)
{
    for(i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log("The number "+i+" is even")
        }
        else{
            console.log("The number "+i+" is odd")

        }
    }
}