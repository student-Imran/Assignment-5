// DOM of History and COIN

const callButtons = document.querySelectorAll("#call-btn")

callButtons.forEach((btn)=>{
  btn.addEventListener("click",function(){
    const currentCoin =  document.getElementById("current-coin")
    currentCoin.innerText = parseInt(currentCoin.innerText)-20;
    const organizationName = btn.parentElement.parentElement.children[0]
    const organizationNumber = btn.parentElement.parentElement.children[2]
    const div = document.createElement("div");
    const date = new Date().toLocaleTimeString();
      div.innerHTML = `
   <div id="addDiv" class="history flex justify-between bg-[#fafafa] h-20 items-center p-2  rounded-sm mb-3">
           <div class="history-information w-2/3">
               <h1 class="font-bold">${organizationName.innerHTML}</h1>
               <div class="number">
                <p class="text-[#908e8e]">${organizationNumber.innerHTML}</p>
               </div>
            </div>
            <div class="time">
              <p>${date}</p>
            </div>
           </div>
           
  `
  document.getElementById("addDiv").appendChild(div);
    
  })
})

/* DOM of Heart */



// document.getElementById("click-heart").addEventListener("click",function(){
//     const currentHeart = document.getElementById("current-heart")
//     currentHeart.innerText = parseInt(currentHeart.innerText) + 1;
   
    
// })





