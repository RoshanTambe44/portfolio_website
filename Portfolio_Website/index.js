//locmotive js
function locomotive(){
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});}

// locomotive()

//start profile
function gsapTime(){
var tl = gsap.timeline();



tl.from(".logo, .navbar-link, .navbar  ", {
    y:-50,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.1    

})

tl.from(".primary-heading, .hero-data .para1, #btn ", {
    x:-800,
    duration:0.5,
    opacity:0,
    stagger:0.5
    

    

})

tl.from(".image", {
    x:800, 
    scale:0,
    duration:1.5,
    opacity:1,

    
    

    

})

tl.from(".para ", {
    x:-800,
    duration:0.5,
    opacity:0,
    stagger:0.5
    

    

})}

gsapTime()

//project section 
function projectSection (){
let title = document.querySelector(".project-title h1");
let atitle = document.querySelector(".project-title #pro-link ");
let tech = document.querySelector(".pro-tech h2");
let disc = document.querySelector(".pro-disc h4");
const leftbtn = document.querySelector("#leftbtn");
const rightbtn = document.querySelector("#rightbtn");
const visit = document.querySelector("#visit");
var choice = 0;

rightbtn.addEventListener("click", function(){
    if(choice == 0 )
    {
        
    title.innerHTML = "Bank Management System (01/2023)";
    tech.innerHTML = "Technologies used: Python 3.11.0";
    disc.innerHTML = "► Created a Python-based application for managing bank accounts. <br>► The application facilitated  functionalities such as Login, Logout, Deposit Amount, Withdrawal Amount, View Customer Details, and Show Balance.<br>► Developed using Python 3.11.0 and utilized appropriate data structures and algorithms to handle account management operations effectively.";
    gsap.from(".project-title h1, .pro-tech h2, .pro-disc  ",{
        x : 800,
        duretion : 0.5,
        delay: 0.2,
        opacity : 0

    })
    choice = 1 ;
    }

    else if(choice == 1 )
    {
    visit.style.display = "block";
    atitle.href = "calculater/calculater.html";
    title.innerHTML = "Calculator";
    tech.innerHTML = "Technologies used:  HTML, CSS, and JavaScript";
    disc.innerHTML = "► Developed  Developed a calculator web application using HTML, CSS, and JavaScript.<br>► The calculator provided basic arithmetic operations and allowed users to perform calculations with ease.<br>► Implemented a user-friendly interface with responsive design principles.";
    gsap.from(".project-title h1, .pro-tech h2, .pro-disc, #visit ",{
        x : 800,
        duretion : 0.5,
        delay: 0.2,
        opacity : 0

    })
    choice = 2 ;

    }

    else if(choice == 2 )
    {
    visit.style.display = "block";
    atitle.href = "wether/weather.html";
    title.innerHTML = "Weather Web Application";
    tech.innerHTML = "Technologies used:  HTML, CSS, and JavaScript";
    disc.innerHTML = "► Created an intuitive user interface with HTML and CSS, providing a clean and user-friendly experience.<br>► Utilized JavaScript to handle user interactions, including location input and data retrieval.<br>► Integrated the OpenWeatherMap API to fetch real-time weather data based on user-entered locations.<br>► Displayed weather information dynamically, including temperature and weather description.<br>► Implemented error handling to provide feedback in case of data retrieval failures.<br>► Designed and maintained a visually appealing and responsive layout using CSS.<br>► Deployed the application, making it accessible to users on various devices.";
    gsap.from(".project-title h1, .pro-tech h2, .pro-disc, #visit  ",{
        x : 800,
        duretion : 0.5,
        delay: 0.2,
        opacity : 0

    })
    choice = 3 ;

    }

    else if(choice == 3 )
    {
    visit.style.display = "block";    
    atitle.href = "translater/index.html";
    title.innerHTML = "Translator Web Application";
    tech.innerHTML = "Technologies used:  HTML, CSS, and JavaScript";
    disc.innerHTML = "► Designed a user-friendly and responsive interface using HTML and CSS to provide an intuitive experience for users.<br>► Leveraged JavaScript to create interactive features, allowing users to input text for translation. <br>► Integrated a translation API (e.g., Google Translate API) to provide accurate translations across multiple languages.<br>► Enabled users to choose the target language and receive real-time translations.<br>► Incorporated error handling to gracefully handle API failures and provide user-friendly error messages.<br>► Ensured that the application works seamlessly across various devices and screen sizes.<br>► Deployed the web application to make it accessible to users online.";
    gsap.from(".project-title h1, .pro-tech h2, .pro-disc, #visit  ",{
        x : 800,
        duretion : 0.5,
        delay: 0.2,
        opacity : 0

    })
    choice = 4 ;
    
    }
    
    else
    {
    visit.style.display = "none";
    title.innerHTML = "Taxi Booking Website (03/2023)";
    tech.innerHTML = "Technologies used: Django, Python, HTML, and CSS.";
    disc.innerHTML = "► Developed a web application for taxi booking using Django framework.<br>► The website included various features such as a Taxi Booking Form, Login Page, Logout functionality, Registration Form, Company details, Refund policy, Feedback Form, and Customer Info.<br>► Implemented a Show Ticket feature that allowed users to view all entered details along with the fare amount of their booking.<br>► Integrated the Gmail API to send registration confirmation emails to users upon successful registration.";
    gsap.from(".project-title h1, .pro-tech h2, .pro-disc  ",{
        x : 800,
        duretion : 0.5,
        delay: 0.2,
        opacity : 0

    })
    choice = 0; 

    }

})

leftbtn.addEventListener("click", function(){
    if(choice == 2 )
    {
    visit.style.display = "none";    
    title.innerHTML = "Bank Management System (01/2023)";
    tech.innerHTML = "Technologies used: Python 3.11.0";
    disc.innerHTML = "► Created a Python-based application for managing bank accounts. <br>► The application facilitated  functionalities such as Login, Logout, Deposit Amount, Withdrawal Amount, View Customer Details, and Show Balance.<br>► Developed using Python 3.11.0 and utilized appropriate data structures and algorithms to handle account management operations effectively.";
    gsap.from(".project-title h1, .pro-tech h2, .pro-disc  ",{
        x : -800,
        duretion : 0.5,
        delay: 0.2,
        opacity : 0

    })
    choice = 1 ;
    }

    else if(choice == 1)
    {
    title.innerHTML = "Taxi Booking Website (03/2023)";
    tech.innerHTML = "Technologies used: Django, Python, HTML, and CSS.";
    disc.innerHTML = "► Developed a web application for taxi booking using Django framework.<br>► The website included various features such as a Taxi Booking Form, Login Page, Logout functionality, Registration Form, Company details, Refund policy, Feedback Form, and Customer Info.<br>► Implemented a Show Ticket feature that allowed users to view all entered details along with the fare amount of their booking.<br>► Integrated the Gmail API to send registration confirmation emails to users upon successful registration.";
    gsap.from(".project-title h1, .pro-tech h2, .pro-disc  ",{
        x : -800,
        duretion : 0.5,
        delay: 0.2,
        opacity : 0

    })
    choice = 0 ;

    }

    else if(choice == 0)
    {
        visit.style.display = "block";
        atitle.href = "translater/index.html"
        title.innerHTML = "Translator Web Application ";
        tech.innerHTML = "Technologies used:  HTML, CSS, and JavaScript";
        disc.innerHTML = "► Designed a user-friendly and responsive interface using HTML and CSS to provide an intuitive experience for users.<br>► Leveraged JavaScript to create interactive features, allowing users to input text for translation. <br>► Integrated a translation API (e.g., Google Translate API) to provide accurate translations across multiple languages.<br>► Enabled users to choose the target language and receive real-time translations.<br>► Incorporated error handling to gracefully handle API failures and provide user-friendly error messages.<br>► Ensured that the application works seamlessly across various devices and screen sizes.<br>► Deployed the web application to make it accessible to users online.";
    gsap.from(".project-title h1, .pro-tech h2, .pro-disc, #visit  ",{
        x : -800,
        duretion : 0.5,
        delay: 0.2,
        opacity : 0

    })
    choice = -1 ;

    }

    else if(choice == -1)
    {
        visit.style.display = "block";
        atitle.href = "wether/weather.html"
        title.innerHTML = "Weather Web Application";
        tech.innerHTML = "Technologies used:  HTML, CSS, and JavaScript";
        disc.innerHTML = "► Created an intuitive user interface with HTML and CSS, providing a clean and user-friendly experience.<br>► Utilized JavaScript to handle user interactions, including location input and data retrieval.<br>► Integrated the OpenWeatherMap API to fetch real-time weather data based on user-entered locations.<br>► Displayed weather information dynamically, including temperature and weather description.<br>► Implemented error handling to provide feedback in case of data retrieval failures.<br>► Designed and maintained a visually appealing and responsive layout using CSS.<br>► Deployed the application, making it accessible to users on various devices.";
        gsap.from(".project-title h1, .pro-tech h2, .pro-disc, #visit  ",{
        x : -800,
        duretion : 0.5,
        delay: 0.2,
        opacity : 0

    })
    choice = -2 ;

    }

    
// 3
    else
    {
        visit.style.display = "block";
        title.innerHTML = "Calculator";
    tech.innerHTML = "Technologies used:  HTML, CSS, and JavaScript";
    disc.innerHTML = "► Developed  Developed a calculator web application using HTML, CSS, and JavaScript.<br>► The calculator provided basic arithmetic operations and allowed users to perform calculations with ease.<br>► Implemented a user-friendly interface with responsive design principles.";
    gsap.from(".project-title h1, .pro-tech h2, .pro-disc, #visit  ",{
        x : -800,
        duretion : 0.5,
        delay: 0.2,
        opacity : 0

    })
    
    choice = 2;

    }

})}

projectSection()


//cursour section
var crsr = document.querySelector(".cursor");
var body = document.querySelector("body");
var projectMove = document.querySelector(".movepro");



function uniCursor(){
body.addEventListener("mousemove", function(dets){
    
    gsap.to(".cursor", {
        top: dets.y,
        left: dets.x 
    })  

        document.querySelector(".project-main").addEventListener("mousemove", function(){
            crsr.style.display = "none";})
        
        document.querySelector(".project-main").addEventListener("mouseleave", function(){
                crsr.style.display = "block"
            })
})}

uniCursor()


function proMove(){
document.querySelector("#border").addEventListener("mousemove", function(loc){
    projectMove.style.display = "block"
    gsap.to(".movepro", {
        top: loc.y,
        left: loc.x
    })
    
    



})


document.querySelector("#border").addEventListener("mouseleave", function(){
    
   projectMove.style.display = "none"
    


})}
proMove()


var cetitle1 = document.querySelector(".about-certificates1 .card-text");
var cetitle2 = document.querySelector(".about-certificates2 .card-text");
var cetitle3 = document.querySelector(".about-certificates3 .card-text");
var certificate1 = document.querySelector(".about-certificates1");
var certificate2 = document.querySelector(".about-certificates2");
var certificate3 = document.querySelector(".about-certificates3");


function certiCursor1(){
        certificate1.addEventListener("mousemove", function(title){
            cetitle1.style.display = "block";
            crsr.style.display = "none";
            cetitle1.style.position = "fixed"

            gsap.to(".about-certificates1 .card-text", {
                left: title.x,
                top: title.y
            })

        } )

        certificate1.addEventListener("mouseleave", function(){
            crsr.style.display = "block";
            cetitle1.style.position = "sticky"
            cetitle1.style.display = "none";
            
            

        } )


       
}

certiCursor1()
        
function certiCursor2(){
    certificate2.addEventListener("mousemove", function(title){
        cetitle2.style.display = "block";
        crsr.style.display = "none";
        cetitle2.style.position = "fixed"

        gsap.to(".about-certificates2 .card-text", {
            left: title.x,
            top: title.y
        })

    } )

    certificate2.addEventListener("mouseleave", function(){
        crsr.style.display = "block";
        cetitle2.style.position = "sticky"
        cetitle2.style.display = "none";



} )

}

certiCursor2()

function certiCursor3(){

    certificate3.addEventListener("mousemove", function(title){
        cetitle3.style.display = "block";
        crsr.style.display = "none";
        cetitle3.style.position = "fixed";

        gsap.to(".about-certificates3 .card-text", {
            left: title.x,
            top: title.y
        })

    } )

    certificate3.addEventListener("mouseleave", function(){
        crsr.style.display = "block";
        cetitle3.style.position = "sticky";
        cetitle3.style.display = "none";


        




} )



}

certiCursor3()



