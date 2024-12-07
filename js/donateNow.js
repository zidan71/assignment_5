
document.getElementById('first-button').addEventListener('click', function (event) {
    event.preventDefault();

    const amount = getInputValueById('first-card-donation');
    const balance = getTextValueById('available-balance');
    const donated = getTextValueById('first-card-balance');


    if (isNaN(amount)) {

        alert('please input a number')
        return;
    }

    if (balance < amount) {
        alert('you do not have enough money')
        document.getElementById('first-card-donation').value = '';
        if (amount === '') {
            alert('please input a number')
        }
        return;
    }

    else {
        const popup = document.getElementById('popup');
        popup.classList.remove('hidden');

        const first = document.getElementById('first-name').innerText;




        const p = document.createElement('p');

        p.innerHTML = `
             <div style="box-sizing: border-box;
            border: 1px solid rgba(17, 17, 17, 0.1);
            border-radius: 16px;
            background: rgb(255, 255, 255);" class="p-6 mb-7">
              <p style="color: rgb(17, 17, 17);
 
font-size: 20px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0%;
text-align: left;">${amount} Taka is Donated for ${first}, Bangladesh</p> <br>
                <h1 style="color: rgba(17, 17, 17, 0.7);
font-size: 16px;
font-weight: 500;" class="mb-6"> Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time) </h1>
                </div>
                
        `

        document.getElementById('history').appendChild(p);
    };

    

    const newBalance = balance - amount;


    document.getElementById('available-balance').innerText = newBalance;
    document.getElementById('first-card-balance').innerText = amount + donated;






    document.getElementById('first-card-donation').value = '';





});


document.getElementById('second-button').addEventListener('click', function (event) {
    event.preventDefault();




    const amount = getInputValueById('second-card-donation');
    const balance = getTextValueById('available-balance');
    const donated = getTextValueById('second-card-balance');

    if (isNaN(amount)) {

        alert('please input a number')
        return;
    }

    if (balance < amount) {
        alert('you do not have enough money')
        document.getElementById('second-card-donation').value = '';
        if (amount === '') {
            alert('please input a number')
        }
        return;
    }

    else {
        const popup = document.getElementById('popup');
        popup.classList.remove('hidden');

        const second = document.getElementById('second-name').innerText;
    

   
  
    const p = document.createElement('p');
    
    p.innerHTML = `
             <div style="box-sizing: border-box;
            border: 1px solid rgba(17, 17, 17, 0.1);
            border-radius: 16px;
            background: rgb(255, 255, 255);" class="p-6 mb-7">
              <p style="color: rgb(17, 17, 17);
 
font-size: 20px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0%;
text-align: left;">${amount} Taka is Donated for ${second}, Bangladesh</p> <br>
                <h1 style="color: rgba(17, 17, 17, 0.7);
font-size: 16px;
font-weight: 500;" class="mb-6"> Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time) </h1>
                </div>
                
        `
  
                       document.getElementById('history').appendChild(p);
    };

    const newBalance = balance - amount;
    document.getElementById('available-balance').innerText = newBalance;
    document.getElementById('second-card-balance').innerText = amount + donated;




    document.getElementById('second-card-donation').value = '';

});




document.getElementById('third-button').addEventListener('click', function (event) {
    event.preventDefault();




    const amount = getInputValueById('third-card-donation');
    const balance = getTextValueById('available-balance');
    const donated = getTextValueById('third-card-balance');

    if (isNaN(amount)) {

        alert('please input a number')
        return;
    }

    if (balance < amount) {
        alert('you do not have enough money')
        document.getElementById('third-card-donation').value = '';
        if (amount === '') {
            alert('please input a number')
        }
        return;
    }

    else {
        const popup = document.getElementById('popup');
        popup.classList.remove('hidden');

        const third = document.getElementById('third-name').innerText;
        const p = document.createElement('p');
    p.innerHTML = `
             <div style="box-sizing: border-box;
            border: 1px solid rgba(17, 17, 17, 0.1);
            border-radius: 16px;
            background: rgb(255, 255, 255);" class="p-6 mb-7">
         <p style="color: rgb(17, 17, 17);
 
font-size: 20px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0%;
text-align: left;">${amount} Taka is Donated for ${third}, Bangladesh</p> <br>
                <h1 style="color: rgba(17, 17, 17, 0.7);
font-size: 16px;
font-weight: 500;" class="mb-6"> Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time) </h1>
                </div>
                
        `
  
                       document.getElementById('history').appendChild(p);
    };

    const newBalance = balance - amount;
    document.getElementById('available-balance').innerText = newBalance;
    document.getElementById('third-card-balance').innerText = amount + donated;


   


    

    

    document.getElementById('third-card-donation').value = '';


});


document.getElementById('popup-button').addEventListener('click', function () {

    document.getElementById('popup').classList.add('hidden');

})
