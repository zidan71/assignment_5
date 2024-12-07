document.getElementById('history-button').addEventListener('click',function(){

    document.getElementById('donation-button').classList.remove('bg-green-400');
    document.getElementById('history-button').classList.add('bg-green-400');
   

});

document.getElementById('donation-button').addEventListener('click',function(){

    document.getElementById('history-button').classList.remove('bg-green-400');
    document.getElementById('donation-button').classList.add('bg-green-400');
   
});


document.getElementById('blog-button').addEventListener('click',function(){

    window.location.href = '/blog.html'

})