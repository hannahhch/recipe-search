let button = document.querySelector('.search-button');

let searchName = 'http://recipepuppyproxy.herokuapp.com/api/?q=';

button.addEventListener('click', function() {
  var searchBox = document.querySelector('.search-recipe').value;
  let searchURL = searchName + searchBox;
  fetch(searchURL)

    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

        response.json().then(function(data){
          for (let i = 0; i < data.results.length; i++) {
            let title = data.results[i].title;
            let thumbnail = data.results[i].thumbnail;
            let newBox = document.createElement('div');
            newBox.setAttribute("class", "box");
            let markup = `
            <p>${title}</p>
            <img src = ${thumbnail}>
            `
            newBox.innerHTML = markup
            let box = document.querySelector(".results");
            box.appendChild(newBox);
          }
        });
      })
});
