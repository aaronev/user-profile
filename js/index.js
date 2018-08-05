document.querySelector('#main-form').addEventListener('submit', function(e){
  e.preventDefault();
});

document.querySelector('#submit').addEventListener('click', function() {

  new Vue({
    el: '#app',
    data: {
      fullName: document.querySelector('#f-name').value + ' ' +  document.querySelector('#l-name').value,
      gender: 'Male',
      email: 'Email',
      phone: 'Phone',
      color: 'Red'
    }
  });

  document.querySelector('#app').style.display="block"
  document.querySelector('#main-form').style.display="none"

})

