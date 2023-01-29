const API_KEY="9c50a548a1a56ed524f605a3ec0f1553";
const cities = [
    {"city": "Seoul","lat":37.566,"lon":126.9784,
    "img":"https://cdn-icons-png.flaticon.com/512/1999/1999739.png"
    },
    {"city": "Busan","lat":35.10278,"lon":129.04028,
    "img":"https://as1.ftcdn.net/v2/jpg/05/34/97/32/1000_F_534973217_FgIECuOWnfdoHalT1XZuyybVnkOz10EQ.jpg"},
    {"city": "Tokyo","lat":35.6895,"lon":139.69171,
    "img":"https://cdn-icons-png.flaticon.com/512/2314/2314646.png"},
    {"city": "Paris","lat":48.85341,"lon": 2.3488,
    "img":"https://cdn-icons-png.flaticon.com/512/533/533471.png"},
    {"city": "Sydney","lat":-33.86785,"lon":151.20732,
    "img":"https://cdn-icons-png.flaticon.com/512/3754/3754625.png"},
    {"city": "Rome","lat":41.89193,"lon":12.51133,
    "img":"https://cdn-icons-png.flaticon.com/512/2606/2606666.png"},
    {"city": "Taipei","lat":25.04776,"lon":121.53185,
    "img":"https://cdn-icons-png.flaticon.com/512/984/984112.png"}
]
// const colorpalette=[
//     "658864","B7B78A","DDDDDD","FEC868","FDA769","0081B4","D3756B","A0C3D2"
// ]
function onGeoOk(position){ //when geolocation was successful
    //JS will give you the position of the user
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    console.log("You live in",lat,lon)
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response=>response.json()).then(data=>{
        const weather=document.querySelector("#weather span:nth-child(2)")
        const city=document.querySelector("#weather span:last-child")
        weather.innerText=`${data.weather[0].main} / ${Math.floor(data.main.temp)}`;
        city.innerText=data.name;
    }); //실제로 url에 갈 필요없이 javascript가 대신 URL을 부름
    //units=metric으로 바꾸면 기본 화씨로 되어 있는 걸 섭씨로 바꿀 수 있음
    //url을 fetch하고, 그 다음으로 response 받음
    calDistance(lat,lon);
}
function onGeoError(){ //when geolocation was unsuccessful
    alert("Can't find you. No weather for you.")

}
function calDistance(hereLat,hereLon){
    let nearestCity;
    let nearestDist=9999;
    let cityImg;
    const backCol = document.body.querySelector(".traveling-recommend__content div")
    // cities.forEach(cityObj => {
    //     const dist = Math.hypot(cityObj.lat-hereLat,cityObj.lon-hereLon);
    //     if (dist<nearestDist && dist>3){
    //         nearestDist=dist;
    //         nearestCity=cityObj.city;
    //         cityImg=cityObj.img;
    //     }
    // });
    nearestCity=cities[1].city;
    cityImg=cities[1].img;
    document.body.querySelector(".traveling-recommend__city").innerText=nearestCity;
    const travelContent=document.body.querySelector(".traveling-recommend__content");
    travelContent.querySelector("img").src=cityImg;
    document.body.querySelector(".traveling-recommend__before").classList.add("hidden")
    travelContent.classList.remove("hidden")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
