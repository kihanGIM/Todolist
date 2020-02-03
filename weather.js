const weather = document.querySelector(".js-weather");
const API_KEY ="3c70f2b2701270de85faefc7a72d7d81";
const COORDS ='coords';



function getWeather(lat,lng){
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.541&lon=126.986&appid=
a97e5180a997167dfac01bc5aa24eb83&units=metric`
).then (function (response){
  return response.json();
})
 .then(function(json){
   const temperature = json.main.temp;
   const place= json.name;
   weather.innerText = `${temperature} @ ${place}`;
});
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess (position){
   const latitude = position.coords.latitude; 
   const longitude= position.coords.longitude;
   const coordsObj = {
       latitude,
       longitude 
   };

   saveCoords(coordsObj);
   getWeather(latitude,longitude);
}


function handleGeoError (){
    console.log ("can't access geo location"); 
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition( handleGeoSuccess, handleGeoError)
}
    
  function loadCoords() { 
        const loadedCoords = localStorage.getItem(COORDS);
        if (loadedCoords === null){
            askForCoords();
        }else {
         const parseCoords = JSON.parse(loadedCoords)
         getWeather(parseCoords.latitude,parseCoords.longitude)
        }
    }

    function init (){
        loadCoords();
}

init ();