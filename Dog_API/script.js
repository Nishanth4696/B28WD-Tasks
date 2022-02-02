document.body.innerHTML = `
    
<div>
<div class="dropdown">
                <button onclick="myFunction()" class="dropbtn">Dog Breeds</button>
                <div id="myDropdown" class="dropdown-content">
                  <a href="#" onclick="getPomeranian()">Pomeranian</a>
                  <a href="#" onclick="getBullDog()">Bulldog</a>
                  <a href="#" onclick="getHusky()">Siberian Husky</a>
                </div>
              </div>
</div>
    

    <section class="dog-list"></section>`; 
 



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  async function getPomeranian(){
    const data = await fetch("https://61f77d2639431d0017eaf8ab.mockapi.io/Pomeranian",{method: 'GET'});
   const dogs = await data.json();
   
   const dogContainer = document.querySelector(".dog-list");

   dogContainer.innerHTML="";
  setTimeout(()=>{
   dogs.forEach((dog) => {

       // console.log(user.avatar)dog
       dogContainer.innerHTML += `
           <div class="dog-container">
               <img class="dog-avatar" src="${dog.avatar}" alt=${dog.name}/>    
               
               

           </div>

       `;
   });

}, 100);   
}

async function getBullDog(){
    const data = await fetch("https://61f77d2639431d0017eaf8ab.mockapi.io/BullDog",{method: 'GET'});
   const dogs = await data.json();
   
   const dogContainer = document.querySelector(".dog-list");

   dogContainer.innerHTML="";
  setTimeout(()=>{
   dogs.forEach((dog) => {

       // console.log(user.avatar)dog
       dogContainer.innerHTML += `
           <div class="dog-container">
               <img class="dog-avatar" src="${dog.avatar}" alt=${dog.name}/>    
               
               

           </div>

       `;
   });

}, 100);   
}

async function getHusky(){
    const data = await fetch("https://61f77d2639431d0017eaf8ab.mockapi.io/Husky",{method: 'GET'});
   const dogs = await data.json();
   
   const dogContainer = document.querySelector(".dog-list");

   dogContainer.innerHTML="";
  setTimeout(()=>{
   dogs.forEach((dog) => {

       // console.log(user.avatar)dog
       dogContainer.innerHTML += `
           <div class="dog-container">
               <img class="dog-avatar" src="${dog.avatar}" alt=${dog.name}/>    
               
               

           </div>

       `;
   });

}, 100);   
}


