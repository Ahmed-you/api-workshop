(function () {
  let xhr = new XMLHttpRequest();
  let url =
    "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
  onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let gifDrop = document.querySelector(".gif");
      let giphyObj = JSON.parse(xhr.responseText);
      console.log(xhr.responseText);

      let link = giphyObj.data[1].images.downsized_medium.url;
      gifDrop.src = link;
    } else {
      console.log(JSON.parse(xhr.responseText));
      console.log(typeof JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
})();
