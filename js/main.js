//calculation of the calculator
class Calculator {
  constructor() {
    this.calculation = ""
  }
  enter (value){
    // console.log(this)
   if (value != "=") {
     this.calculation = this.calculation + value
   }
   if (value === "=") {
  // calculator.calculation  = eval(calculator.calculation)
    try {  this.calculation  = eval(this.calculation)}
      catch (error){
      this.calculation = ""
      }
   }
  }
}
// Everything below this is the dom code
let calculator = new Calculator()
let buttons = document.querySelectorAll('[type=button]');
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener('click', function(event) {
    calculator.enter(event.target.value)
     // console.log(calculator.calculation)
     document.getElementById('showresult').value = calculator.calculation
  });
}
