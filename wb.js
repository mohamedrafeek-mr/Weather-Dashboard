let valuesearch = document.getElementById('valuesearch')
let city = document.getElementById('city')
let temper = document.getElementById('temper')
let description =document.querySelector('.description')
let cloud = document.getElementById('cloud')
let humidity = document.getElementById('humidity')
let pressure = document.getElementById('pressure')
let form = document.querySelector('form')
let main = document.querySelector('main')
form.addEventListener('submit' , (event)=>{
    event.preventDefault()
    if(valuesearch.value != ''){
        searchweather()
    }
})
let id ='9505fd1df737e20152fbd78cdb289b6a'
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id
const searchweather = () => {
fetch(url + '&q=' + valuesearch.value)
.then(response => response.json())
.then(data => {
    console.log(data)
    if(data.cod == 200){
        city.querySelector('figcaption').innerHTML = data.name
        city.querySelector('img').src='https://flagsapi.com/'+data.sys.country+'/shiny/64.png'

        temper.querySelector('img').src = 'https://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png'
        temper.querySelector('figcaption span').innerHTML = data.main.temp
        description.innerHTML = data.weather[0].description
        cloud.innerText = data.clouds.all
        humidity.innerText = data.main.humidity
        pressure.innerText = data.main.pressure
    }else{
        main.classList.add('error')
        setTimeout(() =>{
            main.classList.remove('error')
        },1000)
    }
    valuesearch.value =''
})
}
const initapp = () => {
    valuesearch.value = 'Erode'
    searchweather()
}
initapp()