const calculate = document.querySelector(".cal");
const image = document.querySelector("#img-container");
const result = document.querySelector(".result");    
    
calculate.addEventListener("click", function loader(e){
    result.style.display ="none";
    image.style.display = "block";
    

    setTimeout(calculateResults, 2000);


    e.preventDefault();

})

function calculateResults(){
   
    const dollarRate = 1050;
    const freightRate = 4300;
    const clearingCost = 10500000;
    const overallCbm = 66.31;

    const ctnPrice = document.querySelector(".dollar-price"),
      qtyPerCtn = document.querySelector(".ctn-qtn"),
      ctnCBM = document.querySelector(".ctn-cbm"),
      
      
      priceForOne = document.querySelector(".pcs-price"),
      priceForCtn = document.querySelector(".ctn-price");
    
    let priceInNaira = ctnPrice.value * dollarRate;
    let freightAmount = (ctnCBM.value * freightRate * dollarRate) / overallCbm;
    let clearingExpense = (ctnCBM.value * clearingCost) / overallCbm;
    let totalPrice = priceInNaira + freightAmount + clearingExpense;
    let singlePrice = totalPrice / qtyPerCtn.value;
    let checker = parseFloat(ctnCBM.value) * parseFloat(ctnPrice.value) / qtyPerCtn.value;

    if(isFinite(checker)){
        priceForOne.value ="N" + Math.round(singlePrice);
        priceForCtn.value ="N" + totalPrice.toFixed(1);
        // calculate.attributes ="disabled";
        result.style.display ="block";
        image.style.display ="none";
    } else{
        showError("Please input a number")

    }

    function showError(error){
        const errorDiv = document.createElement("div");
        const headDiv = document.querySelector(".head-div");
        const heading = document.querySelector("h1");
    
        errorDiv.className = "alert";
        errorDiv.appendChild(document.createTextNode(error));
        errorDiv.style.backgroundColor ="red"
        errorDiv.style.borderRadius = "10%";
        // errorDiv.style.font-color ="red"
    
        headDiv.insertBefore(errorDiv, heading);
    
        setTimeout(clearError, 3000);
        image.style.display ="none"
    }
    
    function clearError(){
        document.querySelector(".alert").remove();
    } 
     
    
    
    

    
}