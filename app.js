

var input = document.getElementById("textinput");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

function search() {
    var cityName = document.getElementById("textinput").value;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=e703c11a387792cbaa32d66056ed291d&units=metric";
    getApiData(url);
    textinput.value = "";
}

function goBack() {
    location.reload();
}

function getApiData(url) {
    fetch(url).then((res) => { return res.json(); }).then((data) => { return foundData(data) }).catch((err) => console.log(err));

}

function foundData(data) {
    console.log(data);
    if (data.cod === 200) {
        document.getElementById("items").style.display = "block";
        document.getElementById("top1").style.display = "none";
        document.getElementById("bottom").style.display = "flex";

        document.getElementById("top2").style.display = "block";

        document.getElementById("bad").innerHTML = "";

        const id = data.weather[0].id;

        let dataimg = document.getElementById("data");
        if (id == 800) {

            dataimg.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_1280.jpg')";
        } else if (id >= 200 && id <= 232) {

            dataimg.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/03/24/11/21/thunder-4963719_1280.jpg')";

        } else if (id >= 600 && id <= 622) {

            dataimg.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/12/04/21/22/snowman-1882635_1280.jpg')";

        } else if (id >= 701 && id <= 781) {

            dataimg.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/08/02/15/50/hilly-2572197_1280.jpg')";

        } else if (id >= 801 && id <= 804) {

            dataimg.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/05/20/20/22/clouds-2329680_1280.jpg')";

        } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {

            dataimg.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/11/29/05/29/buildings-1867550_1280.jpg')";

        }


        document.getElementById("img").src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";





        
        document.getElementById("temp").innerHTML = data.main.temp + " &#8451"

        document.getElementById("dis").innerHTML = data.weather[0].description;
        document.getElementById("place").innerHTML = data.name;
        document.getElementById("humidity").innerHTML = data.main.humidity+"%" ;

    }
    else {
        document.getElementById("items").style.display = "none";
        document.getElementById("bottom").style.display = "none";
        document.getElementById("bad").innerHTML = data.message;
    }
}
