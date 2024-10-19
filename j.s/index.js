var allData = [];
var inputSearchvalue = document.getElementById("input-find");
var buttonsearch = document.getElementById("btn-find");
// var loading = document.querySelector(".loading");

// allRecipe("cairo")

// let allData = [];
allRecipe("cairo")
async function allRecipe(loca) {
  
  try {
    ///////////////////////
    
    var response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=a6ee97a6b3b34ef9b87141723241210&q=${loca}&days=3`,
      { method: "get" }
    );
    
    let data = await response.json();
    allData = data;
    display1();
    display2();
  } catch (error) {
    console.log(error);
  }
}
buttonsearch.addEventListener("click",function(){
var loca=inputSearchvalue.value

allRecipe(loca)
clearInputs()

})


 function clearInputs(){
 inputSearchvalue.value=null
 
} 

function display1(){
  let currentDay=allData
  console.log(currentDay);
  
   let cartona1=`
  { <div class="col-md-12 cola1 border ">
  <div
    class="header-card   "
  >
    
    <div class=" d-flex justify-content-between text-center "><p>${new Date(currentDay.location.localtime)}</p>
    <p>100october</p></div>
  
    
  </div>
  
  <div class="card1 p-3 rounded-start-2  rounded-end-2 mt-2  ">
    <p>${currentDay.location.name}</p>

    <h3>${currentDay.current.temp_c}oc</h3>
     <img src="https:${currentDay.current.condition.icon}" alt=" ">
    
    <p>${currentDay.current.condition.text}</p>
    <br />
   
    <footer class="footer-card d-flex justify-content-around pb-5 ">
      <div><i class="fa-solid fa-umbrella"></i> ${
        currentDay.current.precip_mm
      }%</div>
      <div><i class="fa-solid fa-wind"></i>${
        currentDay.current.wind_kph
      }</div>
      <div><i class="fa-regular fa-compass"></i> ${
        currentDay.current.wind_dir
      }</div>
    </footer>
  </div>
  </div>` 
  document.getElementById("cards1").innerHTML = cartona1;
  
  } 

 function display2() {
 let forecastDay = allData.forecast.forecastday
 
  let cartona2 = ``;
 
  for (let i = 1; i < forecastDay.length; i++) {
    
    console.log(forecastDay[i]);
    
    cartona2 += `
  

              <div class="col-md-6 cola2 text-center "> 
                <div class="header-card ">
                  <p>${new Date(forecastDay[i].date)}</p>
                </div>
                
                <div class="card   d-flex justify-content-center align-items-center mt-2 ">
                  <div>
                  
                 <img src="https:${forecastDay[i].day.condition.icon}" alt=" ">
                  <br />
                  <h5>${forecastDay[i].day.
                    maxtemp_c
                    }</h5>
                  <p>${forecastDay[i].day.
                    mintemp_c
                    }</p>
                 
                  <p>${forecastDay[i].day.condition.text}</p>
                 
                  </div>
                 
                </div>
              </div> 

    `;
  }
  document.getElementById("cards2").innerHTML = cartona2;
}  




 









