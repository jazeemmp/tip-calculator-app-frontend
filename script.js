const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const optionInput = document.getElementById("option-input");
const buttons = document.querySelectorAll(".option-btn");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total");
const errMsg = document.getElementById("errmsg");
const resetBtn = document.querySelector('.reset-btn')

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        calculateTip()
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

function calculateTip() {
  const bill = billInput.value;
  const people = peopleInput.value;
  const option = optionInput.value;
  const active = document.querySelector(".active");
  let percentage;
  if (active) {
    percentage = active.value;
  } 
  if(people<=0){
    errMsg.style.display = "block"
    peopleInput.classList.add('error')
  }
  else{
    errMsg.style.display = "none"
    peopleInput.classList.remove('error')
  }
  if (bill && people > 0 ) {
    const tip = (bill * ((percentage||option) / 100)) / people;
    const total = (bill / people) + tip; 
    tipAmount.textContent = `$${tip.toFixed(2)}`;
    totalAmount.textContent = `$${total.toFixed(2)}`; 
  }
  
}
resetBtn.addEventListener('click',()=>{
    billInput.value = "";
    peopleInput.value ="";
    buttons.forEach((btn) => btn.classList.remove("active"));
    tipAmount.textContent = "$0.00"
    totalAmount.textContent = "$0.00"
})
billInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input",calculateTip)
optionInput.addEventListener("input",calculateTip)