

// DOM of History and Coin

const callButtons = document.querySelectorAll("#call-btn");
const customAlert = document.getElementById("customAlert");
const currentCoin =  document.getElementById("current-coin")
const currentCopy = document.getElementById("current-copy")
const clearHistory = document.getElementById("clear-btn")
const copyButtons = document.querySelectorAll("#copy-btn")
clearHistory.addEventListener("click",function(){
  document.getElementById("addDiv").innerHTML = '';
})

copyButtons.forEach((copyBtn)=>{
   copyBtn.addEventListener("click",function(){

     const organizationNumber = copyBtn.parentElement.parentElement.children[2]
     const copyText = organizationNumber.innerText;
     navigator.clipboard.writeText(copyText);
     
     document.getElementById("effect").style.display = 'block';
     const divAlert = document.createElement("div");
     divAlert.innerHTML = `
      <div class="div-1">
           <p>emergency-service.netify.app says</p>
        </div><br>
        <div class="div-2">
          <div class="calling flex gap-3">
              <p>Number has been copied</p>
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
      document.getElementById("effect").style.display = 'none';
      customAlert.textContent ='';
      customAlert.style.background= 'white'
      customAlert.style = 'z=-1'
      currentCopy.innerText = parseInt(currentCopy.innerText)+1;


     })

   })
})

callButtons.forEach((btn)=>{
  btn.addEventListener("click",function(){
     if(parseInt(currentCoin.innerText)<20){
       const div = document.createElement("div");
       div.innerHTML = `
       <div class="div-1">
           <p>emergency-service.netify.app says</p>
        </div><br>
         <div class="div-2 flex gap-3">
          <div class="icon-div">
          <i class="fa-solid fa-xmark" style="color: #fe0101;"></i>
          </div>
          <div class="calling flex gap-3">
             <p>You don't have sufficient coins , at least 20 coins needed for call</p>
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
       customAlert.appendChild(div)
       customAlert.style.display = 'block';
       document.getElementById("effect").style.display = 'block';
       const alertOkBtn = document.getElementById("alertOK-btn");
       alertOkBtn.addEventListener("click",function(){
        customAlert.textContent ='';
      customAlert.style.background= 'white'
      customAlert.style = 'z=-1'
      document.getElementById("effect").style.display = 'none';
       })
      //  document.getElementById("effect").style.display = 'none';
      return;
     }
     document.getElementById("effect").style.display = 'block';
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
             <p>${organizationNumber.innerHTML}...</p>
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
      document.getElementById("effect").style.display = 'none';
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







