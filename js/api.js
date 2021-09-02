const API_KEY = `85748f4182fe2f650af25fbe988663be`;

const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    document.getElementById('city-name').value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;

}
const displayTemp = temp => {
    setInnerText('city', temp.name);
    setInnerText('tempareture', temp.main.temp);
    setInnerText('condition', temp.weather[0].main);
    console.log(temp);

    // set 
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

}