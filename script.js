let weather = { 
    apikey : '3c41db516346bf4179ca067f31a14699',
    
weatherUpdate : async function (city)  {
    let fetching = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather.apikey}`)
    let data = await fetching.json()
     this.weatherDisplay(data); 

},
weatherDisplay : (data) => {
 const { name } = data;
 
 const { icon, description } = data.weather[0];
 const { temp, humidity } = data.main;
 const { speed } = data.wind;
 console.log(name,description,icon,temp,humidity,speed);
 },
}