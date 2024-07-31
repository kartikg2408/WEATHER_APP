const apiKey="5553faf9ed413d00d5abdd5cbe8171a2";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const condition=document.querySelector(".weather-condition");
        async function checkWeather(city) {
            const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
            var data=await response.json();
            if(data.cod==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
            document.querySelector(".city").innerHTML= data.name;
            document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
            document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";
            var image="images//"+data.weather[0].main+".png";

            document.querySelector(".weather-icon").src=image;
            condition.innerHTML=data.weather[0].main;
            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
        }
    }
        searchbtn.addEventListener("click", () => {
                checkWeather(searchbox.value);
    
        });
        document.addEventListener("keypress", (event) => {
            if (event.key == "Enter") {
                checkWeather(searchbox.value);
            }
        });
        
 
 