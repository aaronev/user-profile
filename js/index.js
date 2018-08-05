//like an ajax call getting information from a server
//but instead of an ajax call build a way to get the values 
//to get values user inputs
//place the values in an object
//use that object as the data portion in vue
//the trick is to load the page hiding the div app
//once the user clicks submit hide the form and show the div app
//feel free to use animations

var info = {
 fullName: document.querySelector('#f-name').value + ' ' +  document.querySelector('#l-name').value
};

document.querySelector('#form').addEventListener('submit', function(e){
  e.preventDefault();
});

new Vue({
  el: '#app',
  data: info
});

document.querySelector('#submit').addEventListener('click', function() {



  document.querySelector('#app').style.display="block"
})
