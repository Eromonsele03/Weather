

// 1).
// THIS FUNCTION FETCHES THE WEATHER DETAILS FROM THE API
const getWeather = async() => { 
    const weatherType = document.getElementById('weather-type')
    const temperature = document.getElementById('temp')
    const minTemp = document.getElementById('min-temp')
     const maxTemp = document.getElementById('max-temp')
   
   const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
 
   const options = {
     method: 'GET',
     headers: {
       'X-RapidAPI-Key': 'f9db462e4cmsh29281fc9ca5af64p1d04cdjsn2a5ad017c785',
       'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
     }
   }
   
   try {
   const response = await fetch(url, options);
   const result = await response.json();
      console.log(result.main.temp_min);
       console.log(result.main.temp_max);
      console.log(result.weather[0].main)
     weatherType.innerHTML = `<h2> ${result.weather[0].main}</h2>`
     temperature.innerHTML = `<h3> ${result.main.temp}</h3>`
     minTemp.innerHTML = `<h3> ${result.main.temp_min}</h3>`
     maxTemp.innerHTML = `<h3> ${result.main.temp_max}</h3>`
      // try {
      //   const response = await fetch(url, options);
      //   const result = await response.json();
 
      //   // Check if the expected properties exist before accessing them
      //   if (result && result.main && result.main.temp) {
      //       console.log(result.main.temp);
      //       console.log(result.main.temp_min);
      //       console.log(result.main.temp_max);
      //       console.log(result.weather[0].main);
      //       weatherType.innerHTML = `<h2> ${result.weather[0].main}</h2>`;
      //       temperature.innerHTML = `<h3> ${result.main.temp}</h3>`;
      //       minTemp.innerHTML = `<h3> ${result.main.temp_min}</h3>`;
      //       maxTemp.innerHTML = `<h3> ${result.main.temp_max}</h3>`;
      //   } else {
      //       console.error('Weather data is not available or in unexpected format');
      //   }
     
 } catch (error) {
   console.error(error);
     
 }
   
   
 }
 //---------------------------------------------------------
 //==========THE FETCH REQUEST USING ".then" METHOD=========
 // const weatherApp = () => {
 //   fetch('https://open-weather13.p.rapidapi.com/city/ogun/EN', options)
 //   .then(response => response.json())
 //   .then(json => console.log(json.main))
 //   .catch(err => console.error(err));
 // }
 // weatherApp()
 
 
 searchBtn = document.getElementById('search-btn')
 inputBar= document.getElementById('city-input')
 searchBtn.onclick = () =>  displayWeather()
 //The above piece of code will activate the function "displayWeather() and show weather details on the DOM"
 
 
 
 // 2).
 //--------------------------------------------------------
 displayWeather = () => {
   city = inputBar.value
    getWeather()
   
   
    const cityName = document.getElementById('city-name')
 
 
   const nameDisplay = `<h1> ${city} </h1>`
   cityName.innerHTML = nameDisplay.toUpperCase()
 
   
 }
 
 