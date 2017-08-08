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
        console.log('Got it!');
        console.log(searchURL)
      }
    )
})
