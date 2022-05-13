const alloperatosBtn=document.querySelectorAll(".operator"); // operator buttons
const alloperandBtn=document.querySelectorAll(".operand"); // operand buttons


const inputX=document.querySelector("#x"); // input form for x
const inputY=document.querySelector("#y"); // input form for y
const inputAns=document.querySelector("#ans"); // input form for ans label
const inputCompute=document.querySelector("#compute"); // input for which operation to be performed

for(operands of alloperandBtn)
{
    operands.addEventListener("click",function() {inputCompute.value=this.textContent; }) // node list of operand buttons
}
for(btns of alloperatosBtn) { btns.addEventListener("click",function() {
       if(this.textContent === "=") {
      // equal button  
   
     const dataX=Number(inputX.value); // input value of x
     const dataY=Number(inputY.value); // input value of y
     const dataCompute=inputCompute.value; // input value of z
     let dataAns=0; // final answer
  
  switch(dataCompute)
  {
      case "+": dataAns=dataX+dataY;
                 break;
     case "-": dataAns=dataX-dataY;
                 break;
    case "X":  dataAns=dataX*dataY;
                break;
    case "/": dataAns=dataX/dataY;
               break;
    
 }
inputAns.value=dataAns; 
 }
})
}






