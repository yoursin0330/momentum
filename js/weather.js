const API_KEY="9c50a548a1a56ed524f605a3ec0f1553";

const colorpalette=[
    "658864","B7B78A","DDDDDD","FEC868","FDA769","0081B4","D3756B","A0C3D2"
]
function onGeoOk(position){ //when geolocation was successful
    //JS will give you the position of the user
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    console.log("You live in",lat,lon)
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response=>response.json()).then(data=>{
        const weatherIcon = document.querySelector("#weather div")
        const weather=document.querySelector("#weather span:nth-child(2)")
        const city=document.querySelector("#weather span:last-child")
        weather.innerText=`${data.weather[0].main} / ${data.main.temp}`;
        city.innerText=data.name;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }); //실제로 url에 갈 필요없이 javascript가 대신 URL을 부름
    //units=metric으로 바꾸면 기본 화씨로 되어 있는 걸 섭씨로 바꿀 수 있음
    //url을 fetch하고, 그 다음으로 response 받음
    const date=new Date();
}
function onGeoError(){ //when geolocation was unsuccessful
    alert("Can't find you. No weather for you.")

}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);