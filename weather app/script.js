let input_city = document.getElementById('cityinput');
let input_btn = document.getElementById('btn');
let output_city = document.getElementById('city');
let output_temp = document.getElementById('temperature');
let output_desc = document.getElementById('describe');
let od_key = "641d8a6132c2f05d70e36e04bdf9f063";

input_btn.addEventListener('click',() =>{

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input_city.value+'&appid='+od_key)
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
        output_city.innerHTML= 'city:' +data.name;
        output_temp.innerHTML= 'temperature: '+data.main.temp+'farenheit';
        output_desc.innerHTML= 'description:'+data.weather[0].description;
    })
    .catch(error => console.log('threre is an error' +error))
})