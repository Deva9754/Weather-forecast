const button = document.getElementById("Search-button")
const input = document.getElementById("Search-city")

const abc = document.getElementById("location")
const bc = document.getElementById("country")
const c = document.getElementById("region")
const d = document.getElementById("airquality")

async function getdata(cityname) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=6f16b4aaa4124df6bf471837231209&q=${cityname}&aqi=yes`);
    return await promise.json()

}
button.addEventListener("click" , async()=>{
const value=input.value;
const result = await getdata(value);
console.log(result);
abc.innerText=`${result.location.name}`
bc.innerText=`${result.location.country}`
c.innerText=`${result.location.tz_id}`
d.innerText=`${result.current.condition.text}`
})
