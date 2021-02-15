const api = {
    key: "28a22cbfc27b43da32d8e9cd69a93fd0" ,
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search_box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if(evt.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults (query) {
    if(query==""){
        currentlocation()
        return ;
    }
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }


function currentlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition);
    }
}


function displayResults(weather){
    console.log(weather);
    let city = document.querySelector('.city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerHTML = dateBuilder(now);

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}`;

    let weathe = document.querySelector('.weather');
    weathe.innerHTML = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${weather.main.temp_max}°C / ${weather.main.temp_min}°C`;

    let icn=document.querySelector('.icon');
    icn.innerHTML=`<img src="pict/${weather.weather[0].icon}.png"/>`;

    if (document.body) {
         if(weather.weather[0].main == "")
        {
            document.body.style.background = "url('pict/back_4.jpg') no-repeat bottom center ";
            document.body.style.backgroundSize = "cover";
        }
        else{
            if(weather.weather[0].main == "Haze")
            {
                document.body.style.background = "url('pict/back_1.jpg') no-repeat bottom center ";
                document.body.style.backgroundSize = "cover";
            }
            if(weather.weather[0].main == "Fog")
            {
                document.body.style.background = "url('pict/back_10.jpg') no-repeat bottom center ";
                document.body.style.backgroundSize = "cover";
            }
                if(weather.weather[0].main == "Clouds")
            {
                document.body.style.background = "url('pict/back_9.jpg') no-repeat bottom center ";
                document.body.style.backgroundSize = "cover";
            }
            if(weather.weather[0].main == "Mist")
            {
                document.body.style.background = "url('pict/back_2.jpg') no-repeat bottom center ";
                document.body.style.backgroundSize = "cover";
            }
            if(weather.weather[0].main == "Clear")
            {
                document.body.style.background = "url('pict/back_7.jpg') no-repeat bottom center ";
                document.body.style.backgroundSize = "cover";
            }
            if(weather.weather[0].main == "Snow")
            {
                document.body.style.background = "url('pict/back_5.jpg') no-repeat bottom center ";
                document.body.style.backgroundSize = "cover";
            }
            if(weather.weather[0].main == "Rain")
            {
                document.body.style.background = "url('pict/back_6.jpg') no-repeat bottom center ";
                document.body.style.backgroundSize = "cover";
            }
        }
    }   
}


function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day}, ${date} ${month}, ${year}`;
  }

  

