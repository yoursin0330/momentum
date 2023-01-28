const API_KEY="9c50a548a1a56ed524f605a3ec0f1553";

const luck=[
    "되도록 원행은 삼가 하는 것이 신상에 좋을 뿐 아니라 가까운 곳에서의 귀인을 맞이할 확률이 높다. 시작과 같은 마무리가 힘드니 고생스럽더라도 마지막까지 인내심을 버리지 말고 자신에게 주어진 일을 깔끔히 마무리 하라. 인내를 가지고 자기계발에 힘을 쓸 시기이다.",
    "주위사람 중에 미혼인 사람이 있으면 오늘 당신은 그 사람에게 사랑의 전령자 역할을 할 수 있을 것이다. 중개업종에서 일을 하는 사람이라면, 오늘은 다른 날보다 성과가 좋은 날이다. 사람과 사람의 만남에서 이익이 생길 수 있을 것이니, 만남을 소중히 여겨라.",
    "외출할 일이 생기면 오전 중에 다녀오는 게 유리하다. 산모는 출산이 예상된다. 학습 중인 사람은 다른 유혹에 빠지지 말고 노력하는 자세를 보여라. 새로운 일을 하게 될 기회가 오겠지만, 아직은 때가 이르니 기다리는 마음으로 양보하라. 바둑 한 수로 미래를 담보 할 수는 없다.",
    "유달리 풍족한 재물운이 사방에서 왕성하게 솟고 있으니 하는 일마다 이익이 많겠다. 재운이 있어 재물을 얻을 수는 있지만 사소한 이익에 집착하면 잃는 것도 있다는 걸 잊지 말아야겠다. 특히, 사람과 사람 사이가 멀어지지 않도록 잘 관리해야 한다. 조만간 그 의미를 알게 될 것이다.",
    "마음이 콩밭에 가 있으니 현실에 소홀해지는 것을 어찌할 수가 없겠구나. 일을 벌이지 않는 게 좋겠다. 의를 밝히고자 한다면 먼저 독서를 해야 유리 하겠다. 오늘은 독서하기에 좋은 날이다. 가장은 자식들과의 대화에서 권위의식을 내려 놓는 게 좋다.",
    "말과 행동이 일치하지 않는다면 기존에 있던 대인관계를 잃을 수 있다. 한번 잃어버린 신뢰를 회복하는 건 어려운 일이니 언행일치를 드러내라. 인생에서 언제 다시 만날지 모르는 일이다. 절친한 친구의 장점만 눈에 보이니 부러운 일이다. 그렇다고 편승하는 것은 인이 아니다.",
    "재산 증식의 기회가 있다. 매매나 계약에 있어서 약간의 이익만 있으면 진행하는 게 유리하다. 자기가 생각한 이상으로 훗날 이익을 얻을 수 있다. 경쟁자와 화합을 도모할 수 있는 기회가 온다. 하루의 손익에는 마이너스 일 수는 있어도 일년의 손익에서는 이익이 된다.",
    "단기적인 매매 이익이나 금전적 이익이 생길 수 있다. 자금은 가급적 지출하지 말고 저축하여 나중에 있을 지출을 대비하는 것이 유리하다. 성인의 생각은 멀리 있으나 우자의 생각은 코 앞에 있다. 작게 이기지 말고 크게 이기는 게 유익하다.",
    "만약 새로운 일을 시작한다면 길하나, 처음부터 너무 무리한 계획은 당신을 쉽게 지치게 한다. 허영심이나 자존심 때문에 허세를 부리면 될 일도 안 된다. 항상 겸손하게 자신을 낮추더라도 얼마든지 존중 받을 수 있음을 명심함이 옳다.",
    "되도록 원행은 삼가 하는 것이 신상에 좋을 뿐 아니라 가까운 곳에서의 귀인을 맞이할 확률이 높다. 시작과 같은 마무리가 힘드니 고생스럽더라도 마지막까지 인내심을 버리지 말고 자신에게 주어진 일을 깔끔히 마무리 하라.",
    "지금까지 노력해왔던 일들의 성과가 눈앞에 까지 왔다. 중요한 시기이다. 힘들었기에 이쯤에서 멈춰야 할 것인지 인내를 가지고 좀 더 공들일 것인지 선택해야 한다. 어느 것도 괜찮다. 변하지 말아야 할 것은 처음에 계획했던 마음이다.",
    "지금은 당신 스스로 상대방에게 머리를 숙일 줄 아는 지혜가 현명함이 필요하다. 괜한 자존심으로 큰 일을 그르칠 수 있으니 현재의 일을 위해서 상대방에게 머리를 숙일 수도 있는 것이다. 훗날 상대방이 당신의 관대함에 머리를 숙일 것이다. 결정은 신중 하고 빨리 하는 것이 기회를 놓치지 않는 지름길이 될 것이다."
]
const colorpalette=[
    "658864","B7B78A","DDDDDD","FEC868","FDA769","0081B4","D3756B","A0C3D2"
]
const todaysLuckBox=document.body.querySelector(".todays-luck")
const todaysLuck=document.body.querySelector(".todays-luck .todays-luck__text")
function onGeoOk(position){ //when geolocation was successful
    //JS will give you the position of the user
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    console.log("You live in",lat,lon)
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response=>response.json()).then(data=>{
        const weatherIcon = document.querySelector("#weather div")
        const weather=document.querySelector("#weather span:first-child")
        const city=document.querySelector("#weather span:last-child")
        weather.innerText=`${data.weather[0].main} / ${data.main.temp}`;
        city.innerText=data.name;
    }); //실제로 url에 갈 필요없이 javascript가 대신 URL을 부름
    //units=metric으로 바꾸면 기본 화씨로 되어 있는 걸 섭씨로 바꿀 수 있음
    //url을 fetch하고, 그 다음으로 response 받음
    const date=new Date();
    todaysLuckBox.style.backgroundColor=`#${colorpalette[Math.floor(Math.random()*colorpalette.length)]}`
    todaysLuck.innerText=luck[Math.round(lat*lon+date.getDay()+date.getMonth()+date.getFullYear())%luck.length];
    document.querySelector(".todays-luck").classList.remove("hidden")
}
function onGeoError(){ //when geolocation was unsuccessful
    alert("Can't find you. No weather for you.")

}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);