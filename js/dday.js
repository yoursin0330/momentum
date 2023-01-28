const d_dayInput=document.body.querySelector(".d-day__input");
const d_dayPrint=document.body.querySelector(".d-day__print")
function setd_day(ee){
    ee.preventDefault()
    const now = new Date();
    const d_day=new Date(String(d_dayInput.querySelector("#d-day").value));
    console.log(d_day)
    const daysLeft=Math.ceil((d_day- now.getTime)/(60*60*1000*24))
    d_dayPrint.querySelector("span").innerText=daysLeft
    d_dayInput.classList.add("hidden");
    d_dayPrint.classList.remove("hidden")
}
d_dayInput.addEventListener("submit",setd_day)