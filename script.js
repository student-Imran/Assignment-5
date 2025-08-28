// DOM of History and Coin

const callButtons = document.querySelectorAll("#call-btn");
const customAlert = document.getElementById("customAlert");


callButtons.forEach((btn)=>{
  btn.addEventListener("click",function(){
     const organizationName = btn.parentElement.parentElement.children[0]
     const organizationNumber = btn.parentElement.parentElement.children[2]
     const divAlert = document.createElement("div");
     divAlert.innerHTML = `
      <div class="div-1">
           <p>emergency-service.netify.app says</p>
        </div><br>
        <div class="div-2 flex gap-3">
          <div class="icon-div">
           <i class="fa-solid fa-phone-volume" style="color: #fc031c;"></i>
          </div>
          <div class="calling flex gap-3">
             <h2>Calling ${organizationName.innerHTML}</h2>
             <p>${organizationNumber.innerHTML}</p>
          </div>
        </div><br>
        <div class="div-3 flex justify-between">
          <div>

          </div>
          <div>
            <button id="alertOK-btn" class="bg-pink-300 text-black w-16 h-10 rounded-xl">OK</button>
          </div>
        </div>
     `
     customAlert.style.background= 'black'

     customAlert.appendChild(divAlert)
     customAlert.style.display = 'block';

     const alertOkBtn = document.getElementById("alertOK-btn");
     
     alertOkBtn.addEventListener("click",function(){
      customAlert.textContent ='';
      customAlert.style.background= 'white'
      customAlert.style = 'z=-1'
      const currentCoin =  document.getElementById("current-coin")
      currentCoin.innerText = parseInt(currentCoin.innerText)-20;
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
})

//  DOM of Heart 

const hearts = document.querySelectorAll(".fa-heart")

hearts.forEach((heart)=>{
  heart.addEventListener("click",function(){
    const currentHeart = document.getElementById("current-heart")
    currentHeart.innerText = parseInt(currentHeart.innerText) + 1;
  })
})







