document.getElementById('first-button').addEventListener('click',function(event){
    event.preventDefault();
    
    const amount = getInputValueById('first-card-donation');
    const balance = getTextValueById('available-balance');
    const donated = getTextValueById('first-card-balance');
    
    
        if(isNaN(amount)){
    
            alert('please input a number')   
            return;
          }

          if(balance<amount){
            alert('you do not have enough money')
            if(amount === ''){
                alert('please input a number')
            }
            return;
          }
    
        else{
            const popup = document.getElementById('popup');
    
    popup.classList.remove('hidden');
        };


    const newBalance = balance - amount;

    
    document.getElementById('available-balance').innerText = newBalance;
    document.getElementById('first-card-balance').innerText = amount + donated;

        
    

    const first = document.getElementById('first-name').innerText;
    

    const history =  document.getElementById('history');
  
    const div = document.createElement('div');
    
    div.innerHTML = `
              <div class="h-[800px]">
              <h1 class="text-big text-center">Your donation history</h1> <br>
                  <div class="p-7 mb-5" style="box-sizing: border-box;
              border: 1px solid rgba(17, 17, 17, 0.1);
              border-radius: 16px;
              background: rgb(255, 255, 255);">
                  <div>
                      <h1> ${amount} Taka is Donated for ${first}, Bangladesh</h1>
                      <p>Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
                  </div>
  
              </div>
              </div>`
  
                  history.appendChild(div);

        document.getElementById('first-card-donation').value  = '';
                  


               

});


document.getElementById('second-button').addEventListener('click',function(event){
    event.preventDefault();

  
   

    const amount = getInputValueById('second-card-donation');
    const balance = getTextValueById('available-balance');
    const donated = getTextValueById('second-card-balance');

    if(isNaN(amount)){
    
        alert('please input a number')   
        return;
      }

      if(balance<amount){
        alert('you do not have enough money')
        if(amount === ''){
            alert('please input a number')
        }
        return;
      }

    else{
        const popup = document.getElementById('popup');

popup.classList.remove('hidden');
    };

    const newBalance = balance - amount;
    document.getElementById('available-balance').innerText = newBalance;
    document.getElementById('second-card-balance').innerText = amount + donated;


    const second = document.getElementById('second-name').innerText;
    

    const history =  document.getElementById('history');
  
    const div = document.createElement('div');
    
    div.innerHTML = `
              <div class="h-[800px]">
              <h1 class="text-big text-center">Your donation history</h1> <br>
                  <div class="p-7 mb-5" style="box-sizing: border-box;
              border: 1px solid rgba(17, 17, 17, 0.1);
              border-radius: 16px;
              background: rgb(255, 255, 255);">
                  <div>
                      <h1> ${amount} Taka is Donated for ${second}, Bangladesh</h1>
                      <p>Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
                  </div>
  
              </div>
              </div>`
  
                  history.appendChild(div);

                  document.getElementById('second-card-donation').value  = '';

});

document.getElementById('third-button').addEventListener('click',function(event){
    event.preventDefault();

    
   

    const amount = getInputValueById('third-card-donation');
    const balance = getTextValueById('available-balance');
    const donated = getTextValueById('third-card-balance');

    if(isNaN(amount)){
    
        alert('please input a number')   
        return;
      }

      if(balance<amount){
        alert('you do not have enough money')
        if(amount === ''){
            alert('please input a number')
        }
        return;
      }

    else{
        const popup = document.getElementById('popup');

popup.classList.remove('hidden');
    };

    const newBalance = balance - amount;
    document.getElementById('available-balance').innerText = newBalance;
    document.getElementById('third-card-balance').innerText = amount + donated;


    const third = document.getElementById('third-name').innerText;
    

    const history =  document.getElementById('history');
  
    const div = document.createElement('div');
    
    div.innerHTML = `
              <div class="h-[800px]">
              <h1 class="text-big text-center">Your donation history</h1> <br>
                  <div class="p-7 mb-5" style="box-sizing: border-box;
              border: 1px solid rgba(17, 17, 17, 0.1);
              border-radius: 16px;
              background: rgb(255, 255, 255);">
                  <div>
                      <h1> ${amount} Taka is Donated for ${third}, Bangladesh</h1>
                      <p>Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
                  </div>
  
              </div>
              </div>`
  
                  history.appendChild(div);

                  document.getElementById('third-card-donation').value  = '';


});


document.getElementById('popup-button').addEventListener('click',function(){

    document.getElementById('popup').classList.add('hidden');

})
