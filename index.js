const calculate = document.querySelector(".cal");
const image = document.querySelector("#img-container");
const result = document.querySelector(".result");    

class Goods{
    constructor(dollarRate, freightRate, clearingCost, overallCbm){
        this.dollarRate = dollarRate;
        this.freightRate = freightRate;
        this.clearingCost = clearingCost;
        this.overallCbm = overallCbm;
    }
    
}


class UI{
    showError(error){
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
        
}
function clearError(){
    document.querySelector(".alert").remove();
} 


document.querySelector('.con').addEventListener('click', function(e){
    const dollarRate = document.querySelector('#dollar');
    const freightRate = document.querySelector('#freight');
    const clearingCost = document.querySelector('#clearing');
    const overallCbm  =  document.querySelector('#tcbm');

    const ui = new UI()
    const goods = new Goods(dollarRate, freightRate, clearingCost, overallCbm)

    if(dollarRate.value === '' || freightRate.value === '' || clearingCost.value ==='' || overallCbm.value ==='') {
            
        ui.showError('Please fill all tabs')
    
    } else{
        dollarRate.disabled = true;
        freightRate.disabled = true;
        clearingCost.disabled = true;
        overallCbm.disabled = true;
        document.querySelector('.con').style.display = "none";
        document.querySelector('.collect').style.display = "block";
        document.querySelector('.cal').style.display = "block"; 
    }
    
  
    e.preventDefault()
})


calculate.addEventListener("click", function loader(e){
    result.style.display ="none";
    image.style.display = "block";
    

    setTimeout(calculateResults, 2000);


    e.preventDefault();

})

function calculateResults(){
    const dollarRate = document.querySelector('#dollar').value;
    const freightRate = document.querySelector('#freight').value;
    const clearingCost = document.querySelector('#clearing').value;
    const overallCbm  =  document.querySelector('#tcbm').value;

    
    console.log(freightRate)
    const goods = new Goods(dollarRate, freightRate, clearingCost, overallCbm);


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

    const ui = new UI()
    if(isFinite(checker)){
        priceForOne.value ="N" + Math.round(singlePrice);
        priceForCtn.value ="N" + totalPrice.toFixed(1);
        // calculate.attributes ="disabled";
        result.style.display ="block";
        image.style.display ="none";
    } else{
        ui.showError("Please input a number")

    }

     
    
    
    

    
}