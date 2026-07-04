function convertTemperature(type) {

    let celsiusInput = document.getElementById("celsius-input");
    let fahrenheitInput = document.getElementById("fahrenheit-input");
    let kelvinInput = document.getElementById("kelvin-input");

    let celsius;
    let fahrenheit;
    let kelvin;

    switch (type) {

        case "celsius":

            celsius = parseFloat(celsiusInput.value);

            if (isNaN(celsius)) {
                fahrenheitInput.value = "";
                kelvinInput.value = "";
                return;
            }

            fahrenheit = (celsius * 9 / 5) + 32;
            kelvin = celsius + 273.15;

            fahrenheitInput.value = fahrenheit.toFixed(2);
            kelvinInput.value = kelvin.toFixed(2);

            break;

        case "fahrenheit":

            fahrenheit = parseFloat(fahrenheitInput.value);

            if (isNaN(fahrenheit)) {
                celsiusInput.value = "";
                kelvinInput.value = "";
                return;
            }

            celsius = (fahrenheit - 32) * 5 / 9;
            kelvin = celsius + 273.15;

            celsiusInput.value = celsius.toFixed(2);
            kelvinInput.value = kelvin.toFixed(2);

            break;

        case "kelvin":

            kelvin = parseFloat(kelvinInput.value);

            if (isNaN(kelvin)) {
                celsiusInput.value = "";
                fahrenheitInput.value = "";
                return;
            }

            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9 / 5) + 32;

            celsiusInput.value = celsius.toFixed(2);
            fahrenheitInput.value = fahrenheit.toFixed(2);

            break;
    }

    document.body.classList.remove("freezing", "cold", "hot");

    if (celsius < 0) {
        document.body.classList.add("freezing");
    } else if (celsius < 28) {
        document.body.classList.add("cold");
    } else {
        document.body.classList.add("hot");
    }
}