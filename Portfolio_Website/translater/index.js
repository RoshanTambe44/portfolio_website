const btn = document.querySelector("#btn");
const finp = document.querySelector("#f-inp");
const sinp = document.querySelector("#s-inp");
// const fsec = document.querySelector("#f-sec");
const ssec = document.querySelector("#s-sel");

// console.log(fsec)

btn.addEventListener("click", function(){
    

const url = 'https://text-translator2.p.rapidapi.com/translate';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'adf04ec1bbmsh4f662ba42694dabp18f00ejsnf1e4a5b918aa',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	},
	body: new URLSearchParams({
		source_language: 'en',
		target_language: ssec.value,
		text: finp.value


	})
};

 try { async  function fetchdata(){
    const response = await fetch(url, options);
	const result = await response.json();
	

    sinp.textContent= result.data.translatedText;
       
	

}

fetchdata()
	
} catch (error) {
	console.error(error);
}


})