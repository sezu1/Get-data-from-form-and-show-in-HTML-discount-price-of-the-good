//задание 1

const form = document.getElementById('form');

function sendData(event){
    event.preventDefault();

    const formElements = form.querySelectorAll('input, select');

    let values = {};

    formElements.forEach(el=>{
         const {name, value} = el;
         values[name] = value;
    
    document.querySelector('#result').innerHTML = `<div class = "nameValueTable"></div>`
    for (let key in values){ 
            let row = document.createElement('tr');
            row.innerHTML = `${key}:${values[key]}` 
            document.querySelector('.nameValueTable').appendChild(row);   
    }  
    })     
}

form.addEventListener('submit', sendData);





//задание 2

const discountForm = document.getElementById('discountForm');

function sendData2(event){
    event.preventDefault();

    const priceDiscount = discountForm.querySelectorAll('input');
  
    let values2 = {};

    priceDiscount.forEach(el=>{
        const{name, value} = el;
        values2[name] = value;   
    })

    let num1 = parseInt(values2['number']);
    let num2 = parseInt(values2['discount']);

    const disct = num1*num2/100;

    const total = num1 - disct;
    console.log(total);

}

discountForm.addEventListener('submit', sendData2);