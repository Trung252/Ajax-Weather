function getJson(){
    return new Promise(function(resolve){
        axios.get('http://api.openweathermap.org/data/2.5/weather?lat=21.0294498&lon=105.8544441&appid=ecbb0b314a0a2c913bdb33a1143131e8')
        .then(function(json){
            resolve(json.data);
        })
    })
}

function getTemple(){
    //thay the tham so q trong api
    getJson().then(result=>{
        console.log(result)
        document.querySelector(".add").innerHTML=result.name+result.sys.country
        document.querySelector(".templ").innerHTML=Math.round(result.main.temp-273.15)
        document.querySelector(".hum").innerHTML=result.main.humidity
        document.querySelector(".dec").innerHTML=result.weather[0].description
        document.querySelector(".wind").innerHTML=result.wind.speed
        document.querySelector(".min").innerHTML=Math.round(result.main.temp_min-275.15)
        document.querySelector(".max").innerHTML=Math.round(result.main.temp_max-273.15)
    })
}
getTemple();

let time = setInterval(() => {
    document.querySelector(".time").innerHTML= new Date().toLocaleString()
},1000);