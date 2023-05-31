const apiKey = 'fa13812a99e115cbef92c7e3c1765ede';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric&q=`;
const inp = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon') 

async function checkWeather(city){
    const response = await fetch(apiUrl+city);
    let data = await response.json()

    if(data.cod==='404'){
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
        

    }
    else{
        document.querySelector('.error').style.display='none';
    }

    console.log(data);

    document.querySelector('.city').innerText =data.name;
    document.querySelector('.temp').innerText = Math.round(data.main.temp)+'°c';
    document.querySelector('.humidity').innerText =data.main.humidity + '%';
    document.querySelector('.wind').innerText =data.wind.speed + 'Km/h';

    if(data.weather[0].main == 'Clear'){
        weatherIcon.src = './assets/imgs/sun.png';
    }

    else if (data.weather[0].main == 'Clouds'){
        weatherIcon.src = './assets/imgs/clouds_icon.png';

    }

    else if (data.weather[0].main == 'Rain'){
        weatherIcon.src = './assets/imgs/storm.png';
    }

    else if (data.weather[0].main == 'Mist'){
        weatherIcon.src = './assets/imgs/mist_iconsvg.svg';
    }
    else if (data.weather[0].main == 'Drizzle'){
        weatherIcon.src = './assets/imgs/drizzle.png';
    }

    document.querySelector('.weather').style.display='block';
    
}

btn.addEventListener('click',()=>{
    checkWeather(inp.value);

})
