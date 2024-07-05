
























































































































































// const API_KEY = "168771779c71f3d64106d8a88376808a";

// function renderWeatherInfo(){
//        let newPara = document.createElement("p");
//         newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
//         document.body.appendChild(newPara);
// }

// async function fetchWeatherDetails(){
   
//     try{
//         let city = "haridwar";

//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//         const data = await response.json();
    
//         renderWeatherInfo(data);
//     }
//     catch(err){
//         console.warn(err);
//     }
// }

// async function getCustomWeather(){
//     try{
//         let latitude = 24.0667;
//     let longitude = 75.0667;

//     let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);

//     let data = await result.json();
//     console.log(data);
//     }
//     catch(err){
//         console.log("Error Found ", err);
//     }
// }

// function getLocation(){

//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }else{
//         console.log("No geolocation supports");
//     }
// }
// function showPosition(position) {
//     let lat = position.coords.latitude;
//     let longi = position.coords.longitude;
  
//     console.log(lat);
//     console.log(longi);
//   }
  