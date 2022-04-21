window.addEventListener('load', function () {
    updateClickLabels();
})

setInterval(updateClickLabels, 2000);

function colorClicked(color) {
    // console.log("color clicked", color);
    sendData(color)
    updateClickLabels()

}

function updateClickLabels() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            document.getElementById("color-label-red").innerHTML = "current count:" + response.redClicks
            document.getElementById("color-label-green").innerHTML = "current count: " + response.greenClicks
            document.getElementById("color-label-blue").innerHTML = "current count: " + response.blueClicks
            // console.log('success!', xhttp)
        }
    };
    xhttp.open("GET", "/api/clicks", true);
    xhttp.send();


}


function sendData(color) {
    let xhr = new XMLHttpRequest();
    let url = "/api/clicks/" + color
    xhr.open("PUT", url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.onload = () => console.log(xhr.responseText); // uncomment to debug
    let data = color;
    xhr.send(data);
}


