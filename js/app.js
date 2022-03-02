

const api_key = `ecee96b536b7b7091b5bc06323a097ae`;


const searchTemparature = () => {

    const city = document.getElementById('city-name').value;
    document.getElementById('city-name').value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data) );
}

const setInnerText = (id,text) => {

    if(text){
        document.getElementById(id).innerText = text;
    }else {
        document.getElementById(id).innerText = 'Unknown';
    }


}

const displayTemparature = temparature => {
    
    setInnerText('city', temparature.name);
    setInnerText('temp', temparature.main.temp);
    setInnerText('condition', temparature.weather[0].main);

    // set icon 

    const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;

    const imgIcon = document.getElementById('weather-icon');

    imgIcon.setAttribute('src',url);
}