//taking variables for values
var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var feels=document.querySelector('#feelslike');
var weatherImage = document.getElementById("weathericon");

apiid="f1e7d40ec06dec42cb9783244571dce1";

function conversion(val){
    return (val - 273).toFixed(2);
}

btn.addEventListener('click',()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+' &APPID='+apiid)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var f1 =data['main']['feels_like']
        var wndspd = data['wind']['speed']
        var icon=data['weather']['0']['icon']
        console.log(icon);
        city.innerHTML=`City: ${nameval}`
            temp.innerHTML = `Temperature: ${ conversion(temperature)} C`
            description.innerHTML = `Conditions: ${descrip}`
            feels.innerHTML=`Feels Like: ${conversion(f1)} C`
            wind.innerHTML = `Wind Speed: ${wndspd} km/h`
            weatherImage.src=`http://openweathermap.org/img/wn/${icon}.png`
    })
    .catch(err => alert('You entered Wrong city name'))
})