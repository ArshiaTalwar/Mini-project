const BASE_URL =
 "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdown=document.querySelectorAll(".select-container select");
const exchange=document.querySelector(".exchange") ;
const to=document.querySelector(".To select");
const from=document.querySelector(".From select");
const msg = document.querySelector(".msg");
for(let select of dropdown){
  for(code in countryList){
    let newOption=document.createElement("option");
    newOption.innerText=code;
    newOption.value=code;
    if(select.name==="from" && code=="INR"){
        newOption.selected="selected"
    }else if(select.name==="To" && code=="USD"){
        newOption.selected="selected";
    }
    select.append(newOption);
}
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
});}
/*exchange.forEach((click) => {
    
    click.addEventListener("click",async()=>{
        let amt=document.querySelector("amount");
        console.log(amt)
        let amtval=amt.value;
        if(amtval===""|| amtval<0){
            amtval=1;
            amount.value="1";
        };
*/
const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
    const URL = `${BASE_URL}/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[to.value.toLowerCase()];
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${from.value} = ${finalAmount} ${to.value}`;
};

    
const updateFlag=(ele)=>{
   let currCode = ele.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = ele.parentElement.querySelector("img");
  img.src = newSrc;
};
exchange.addEventListener("click", () => {
    
    updateExchangeRate();
  });