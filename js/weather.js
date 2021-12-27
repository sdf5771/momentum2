const API_KEY = '31a3cefc127d8d62a0b4afa221f803d2';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`You live in ${lat} , ${lon}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
}
function onGoeError() {
    alert("Can't find your location, There is No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGoeError);
