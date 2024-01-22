//set

/*setExample=new Set("aiadmk","dmk","bjp")
console.log(setExample)
setExample.add("dmk")
setExample.add("aiadmk")
setExample.add("congress")
console.log(setExample)
setExample=new Set(["Rags","balu","susee"])
for(const value of setExample)
{   
    console.log(value)
}
for(const key in setExample )//set in for in loop cant print anything in output
{   
    console.log(key)
}*/
//Maps
/*mapEg=new Map([
    ["id","20ECR123"],
    ["Name","Raks"]
])
console.log(mapEg)
for(const value of mapEg)
{   
    console.log("output for of:",value)
}
for(const key in mapEg)//Map in for in loop cant print anything in output
{   
    console.log("output for in:",key)
}

console.log(mapEg.has("Name"))
*/
mapEg=new Map([
    ["id","20ECR123"],
    ["Name","Raks"]
])
console.log(mapEg)
mapEg.set("age","19")
mapEg.set("phone","7395802161")
console.log(mapEg)
mapEg.delete("phone","7395802161")
console.log(mapEg)
