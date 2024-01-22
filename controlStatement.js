/*
for loop
Sum=0
for(var i=0;i<10;i++)
{
    Sum+=i
}
console.log(Sum)
//while loop
var i=0
while(i<10)
{
    Sum+=i
    i++
    
}
console.log(Sum)
//do while
var i=0
do
{
    Sum+=i
    i++
    
}
while(i<10)
console.log(Sum)
/*
//example1
arr=[10,20,30]//valid
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log("first:",arr[i])
    
}

//example2
arr=[10,20,20.5]//valid
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log("second:",arr[i])
    
}
//example3
arr=[10,20,true,false]//valid
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log("third:",arr[i])
    
}
//example4
arr=[10,"string","kongu",20,true]//valid
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log("fourth:",arr[i])
    
}
//for in loop
arr=[10,"string","kongu",20,true]//valid
for(const index in arr){    //arr is object
    console.log("The value present in",index,"is",arr[index])
}*/
//for of loop(we can use element also)
arr=[10,"string","kongu",20,true]//valid
for(const value of arr){    //arr is object
    console.log(value)
}
//forEach of loop
arr=[10,"string","kongu",20,true]//valid
arr.forEach(element => {
    console.log(element)
});
//forEach example
var kongu=new Object()
kongu["fees"]=100000
kongu["accomodation"]="Execelent"
kongu["food"]="Pretty Decent"
kongu["hostelcount"]=10
console.log(kongu)
//for in eg
for(key in kongu)
{
    console.log(key,kongu[key])
}
/*
//forEach in eg -->this shows error
kongu.forEach((key,element)=>
{
    console.log(key,element)
}
)*/