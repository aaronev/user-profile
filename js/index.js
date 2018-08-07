document.querySelector('#main-form').addEventListener('submit', function(e){
  e.preventDefault();
});

document.querySelector('#submit').addEventListener('click', function() {

  new Vue({
    el: '#app',
    data: {
      fullName: document.querySelector('#f-name').value + ' ' +  document.querySelector('#l-name').value,
      gender: document.querySelector('#gender').value,
      email: document.querySelector('#email').value,
      phone: document.querySelector('#phone').value,
      color: document.querySelector('#color').value
    }
  });

  document.querySelector('#app').style.display="block"
  document.querySelector('#main-form').style.display="none"

})

