(() => {
    document.body.addEventListener("click", (event) => {
        if (event.target.textContent === "Search Location") {
            const rawInput = document.querySelector("input");
            const inputValue = rawInput.value.trim();
            if (!inputValue) {
                alert ("Please enter a valid location");
                return;
            }

            async function fetchData() {
                const weatherApiKey = "c1d45315e62c578b08a4ab5cf29ee80c";
                const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=c1d45315e62c578b08a4ab5cf29ee80c&units=metric`
            
                try {
                    let fetchWeatherData = await fetch(weatherApiUrl);
                    let weatherData = await fetchWeatherData.json();
                    console.log(weatherData);

                    const weather = weatherData.weather[0];
                    const description = `${weather.description}`;
                    const temp = weatherData.main.temp;
                    const city = weatherData.name;

                    const heading = document.createElement("h3");
                    heading.textContent = city;
                    document.body.appendChild(heading);
                    const paraArray = [];
                    for (let i = 1; i < 3; i++) {
                        const paragraph = document.createElement("p");
                        document.body.appendChild(paragraph);
                        paraArray.push(paragraph);
                    }
                    paraArray[0].textContent = temp + " " + "Degrees Celcius";
                    paraArray[1].textContent = description;

                    console.log(description);
                    console.log(temp + " " + "Degrees celcius");
                    console.log(city);
                } catch (error) {
                    alert ("Something went wrong");
                }
            }
            fetchData();
        }
    });
})();