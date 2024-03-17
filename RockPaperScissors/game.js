let usersc=0;
let compsc=0;
const choices=document.querySelectorAll(".choice");
const msgbox=document.querySelector("#msg");
const user_score=document.querySelector("#user");
const comp_score=document.querySelector("#comp");
const gencompChoice=()=>{
    let options=["rock","paper","scissors"];
    let random=Math.floor(Math.random()*3);
    return options[random];
}
const draw=()=>{
    console.log("it is a draw");
    msgbox.innerText="Aghhh!!A Draw";
    msgbox.style.background="lightblue";
}
const winner=(win,userChoice,compChoice)=>{
 if(win){
    usersc++;
    user_score.innerText=usersc;
    console.log("you win");
    msgbox.innerText=`Hurray!!Your ${userChoice} beats ${compChoice}`;
    msgbox.style.background="green";
 }else{
    compsc++;
    comp_score.innerText=compsc;
    console.log("you lost");
    msgbox.innerText=`Ohhh!! ${compChoice} beats your ${userChoice}`;
    msgbox.style.background="red";
 }
}
const playgame=(userChoice)=>{
    const compChoice=gencompChoice();
    console.log("the user's choice is",userChoice);
    console.log("computer's choice is",compChoice); 
    if (userChoice==compChoice){
        draw();
    }
    else{
        let win=true;
        if (userChoice==="rock"){
            win=compChoice==="paper"?false:true;
        }
        else if (userChoice==="paper"){
            win=compChoice==="rock"?true:false;
        }
        else{
            win=compChoice==="rock"?false:true;
        }
        winner(win,userChoice,compChoice);
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        
        playgame(userChoice);
    })
});