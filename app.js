var cityName;

function search(){

  var cityName = document.getElementById("textinput").value; 
  const url="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=e703c11a387792cbaa32d66056ed291d&units=metric";
// const iconUrl="http://openweathermap.org/img/wn/"+icon+"@2x.png";

getApiData(url)
  textinput.value="";
}





function getApiData(URL) {
    fetch(URL).then((res)=>{return res.json ();}).then((data)=>foundData(data)).catch((err)=>console.log(err));
}

function foundData(data) {
  console.log(data);
  if(data.cod===200){
    document.getElementById("xxx").innerHTML="";

    var img = document.getElementById("pic");
    img.src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
    img.id="pic";
    
    
    document.getElementById("country-name").innerText=(" : "+data.name);
    document.getElementById("temp").innerText=(" : "+data.main.temp);

    document.getElementById("minTemp").innerText=(" : "+data.main.temp_min);
    document.getElementById("maxTemp").innerText=(" : "+data.main.temp_max);

  
    document.getElementById("description").innerText=(" : "+data.weather[0].description);
    document.getElementById("Wspeed").innerText=(" : "+data.wind.speed);
    
    document.getElementById("humidity").innerText=(" : "+data.main.humidity);
  }
  else{
    document.getElementById("xxx").innerHTML=data.message;
  }
};

function displayError(){
  document.getElementById("xxx").innerHTML="Please enter correct data";
  // document.getElementById("Akash").remove(tr);

 }
function reload(){
  location.reload();
}    
