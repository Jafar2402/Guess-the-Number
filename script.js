console.log(8);
console.log("Toad");
console.log(8 * 8);
let Lives=3
console.log("Lives: "+ Lives); 
let Nickname="Jafar2402"
console.log(Nickname+" has "+ Lives+ " Lives ");
let SubmitButton=document.getElementById( "SubmitButton" )
let PlayerInput=document.getElementById("PlayerInput")
let Hearts=document.getElementById("Hearts")
let SecretNumber=Math.floor(Math.random()*10+1)
let Hints=document.getElementById("Hints")
console.log(SubmitButton);
SubmitButton.onclick=function(){
    console.log(PlayerInput.value);
    if(PlayerInput.value==SecretNumber ) {
        console.log("You Win!");
        Hearts.innerHTML="🎉🎉🎉"
    }
    else{
        console.log("Wrong!");
        Lives= Lives-1
        Hearts.innerHTML="❤️".repeat(Lives)
        if(SecretNumber<PlayerInput.value) {
        Hints.innerHTML="Secret number is smaller"
        }
        else{
            Hints.innerHTML="Secret number is bigger"
        }
        if (Lives<1){
            Hearts.innerHTML="💀💀💀"
        }
    }
}