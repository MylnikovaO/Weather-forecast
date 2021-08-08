function SelectDefault() {
    document.getElementById("select").options[0].selected = true;
    f1();
}
SelectDefault();

function f1() {
    let val = document.querySelector('.container__inner__select').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + `${val}` + '&appid=667d5500475a36c5dde9689bfc79df2e')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data)
            document.querySelector('.container__inner__box__temp').innerHTML = `${'Температура воздуха'} ${Math.round(data.main.temp - 273)}${'&deg'}`;
            document.querySelector('.container__inner__box__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            document.querySelector('.container__inner__box__clouds').innerHTML = `${'Облачность'} ${data.clouds.all}${'%'}`;
            document.querySelector('.container__inner__box__wind').innerHTML = `${'Скорость ветра'} ${data.wind.speed}${'м/с'}`;
        })
        .catch(function () {

        });
}

document.querySelector('.container__inner__select').onchange = f1;