const product1 = document.getElementById('product1-a').innerText;
const product1Convert = parseFloat(product1);
const product2 = document.getElementById('product2-a').innerText;
const product2Convert = parseFloat(product2);

const Minus = document.getElementById('product1-m');
Minus.addEventListener('click', function() {
    updateNumber(-1,"number1");
    updateSubTotal(-product1Convert);
})
const Plus = document.getElementById('product1-p');
Plus.addEventListener('click', () => {
    updateNumber(1,"number1");
    updateSubTotal(product1Convert);
})

const Minus2 = document.getElementById('product2-m');
Minus2.addEventListener('click', function() {
    updateNumber(-1,"number2");
    updateSubTotal(-product2Convert);
})
const Plus2 = document.getElementById('product2-p');
Plus2.addEventListener('click', () => {
    updateNumber(1,"number2");
    updateSubTotal(product2Convert);
})

function updateNumber(num,id){
    const number = document.getElementById(id).innerText;
    const numberFloat = parseFloat(number);
    const totalNumber = numberFloat + num;
    if(totalNumber>=0){
        document.getElementById(id).innerText = totalNumber;
        }
 }
function updateSubTotal(num){
const subTotal = document.getElementById('subTotal').innerText;
const subTotalConvert = parseFloat(subTotal);
const totalSubTotal = subTotalConvert + num;
updateTax(totalSubTotal);
if(totalSubTotal>=0){
    document.getElementById('subTotal').innerText = totalSubTotal;
    }
}
function updateTax(num){
    const totalTax = (num*2)/100;
    updateTotal(num,totalTax);
    document.getElementById('tax').innerText = totalTax;
}
function updateTotal(num1,num2){
    const total = num1 + num2;
 document.getElementById('total').innerText = total;
}
