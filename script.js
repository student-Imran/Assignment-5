/* DOM of Coin */

document.getElementById("call-btn").addEventListener("click",function(){
  const currentCoin =  document.getElementById("current-coin")
  currentCoin.innerText = parseInt(currentCoin.innerText)-20;
})

/* DOM of Heart */

document.getElementById("click-heart").addEventListener("click",function(){
    const currentHeart = document.getElementById("current-heart")
    currentHeart.innerText = parseInt(currentHeart.innerText) + 1;
   
    
})
