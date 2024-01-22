//callback
function ramusomu(WelcomeMessage,callback)
{
 setTimeout(function(){
    console.log(WelcomeMessage)
    callback();
   
  },20000)
}
function miniAni()
{
    console.log("odi poiru vanthudatha da thambi!!!")
}
ramusomu("Hello Ramu and Somu\nWelcome to KEC",miniAni)