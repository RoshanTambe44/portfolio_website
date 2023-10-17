var input = document.getElementById("input")
var city = document.getElementById("city")


function add()

{
   
    if (input.value === "")
    {
        alert("Enter your city name")
    }

    else{
        city.textContent = input.value

    }
}


const apiurl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const apikey = "4ffa94f3d992f8921960d1b9ccff5857"

async function checkwether  (city)  {
        
        const response = await fetch( apiurl + city + `&appid=${apikey}`)
        const data = await response.json() 
        if(response.status == 404)
        {

            
            document.querySelector(".error").style.display = "block"
            document.querySelector(".main2").style.display = "none"
            

        }
        else
        {
            document.querySelector(".error").style.display = "none"
            document.querySelector(".main2").style.display = "block"
        }

        

       
                
    
        document.querySelector(".cast h1").innerHTML = Math.round(data.main.temp)  + "°C" ; 
        document.querySelector(".p1").innerHTML =data.main.humidity;
        document.querySelector(".p2").innerHTML =data.wind.speed + "km/h";
        document.querySelector(".p").innerHTML =data.weather[0].main;

    
        document.querySelector(".img").style.background = "none";
        document.querySelector(".p1").style.background = "none";
        document.querySelector(".p2").style.background = "none";
        document.querySelector(".p  ").style.background = "none";

        
    if(data.weather[0].main == "Clouds"){
        document.querySelector(".img").src ="clouds.png"
    

        }
    else if(data.weather[0].main == "Clear"){
            document.querySelector(".img").src ="clear.png"
        
    
    } 
    else if(data.weather[0].main == "Haze"){
            document.querySelector(".img").src ="haze.png"
        
    
    } 
    else if(data.weather[0].main =="Rain"){
        document.querySelector(".img").src ="rain.png"
    

    } 
    else if(data.weather[0].main == "Strom"){
        document.querySelector(".img").src ="strom.png"


    } 
    else if(data.weather[0].main == "Sun"){
        document.querySelector(".img").src ="sun.png"


    } 
    else if(data.weather[0].main == "Sunny"){
        document.querySelector(".img").src ="sunny.png"


    } 
    else if(data.weather[0].main == "Mist"){
        document.querySelector(".img").src ="mist.png"


    } 
}

document.querySelector("#btn").addEventListener("click", function(){
        checkwether(input.value)
       
})




 
