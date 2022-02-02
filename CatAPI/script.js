document.body.innerHTML = `
    


    

    <section class="cat-list"></section>`; 
 


  async function getAllCats(){
    const data = await fetch("https://61f77d2639431d0017eaf8ab.mockapi.io/Cats",{method: 'GET'});
   const cats = await data.json();
   
   const catContainer = document.querySelector(".cat-list");

   catContainer.innerHTML="";
  setTimeout(()=>{
   cats.forEach((cat) => {

       // console.log(user.avatar)dog
       catContainer.innerHTML += `
           <div class="cat-container">
               <img class="cat-avatar" src="${cat.avatar}" alt=${cat.name}/>    
               
               

           </div>

       `;
   });

}, 100);   
}
getAllCats();




