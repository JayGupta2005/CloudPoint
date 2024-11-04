const apiKey = "79717ec76b6d5159f18a90845df79075";

        async function checkWeather() {
            const city = document.getElementById("cityInput").value;
            if (!city) {
                alert("Please enter a city name!");
                return;
            }

            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) throw new Error("City not found");

                const data = await response.json();
                console.log(data);
                const weatherIcon = document.querySelector(".weather-icon");
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
                if(data.weather[0].main == "Clouds"){ 
                    weatherIcon.src = "images/clouds.png";
                }
                else if(data.weather[0].main == "Clear"){ 
                    weatherIcon.src = "images/clear.png";
                }
                else if(data.weather[0].main == "Rain"){ 
                    weatherIcon.src = "images/rain.png";
                }
                else if(data.weather[0].main == "Drizzle"){ 
                    weatherIcon.src = "images/drizzle.png";
                }
                else if(data.weather[0].main == "Mist"){ 
                    weatherIcon.src = "images/mist.png";
                }
                document.querySelector(".weather").style.display="block";
            } catch (error) {
                alert(error.message);
            }
        }