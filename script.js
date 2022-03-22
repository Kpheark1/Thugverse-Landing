





var thugkeez = document.getElementById("thugkeez"); //sets an element with this specific id in the index.html file equal to this new var
var listed = document.getElementById("listed");
//var doge = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-mainnet.magiceden.dev/v2/collections/thugkeez/stats",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
    console.log(response); //shows the response of this call in the console log if you inspect element on the page
    thugkeez.innerHTML = response.floorPrice*0.000000001;
    listed.innerHTML = response.listedCount;
    //doge.innerHTML = response.listedCount;

});
