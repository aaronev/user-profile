//like an ajax call getting information from a server
//but instead of an ajax call build a way to get the values 
//to get values user inputs
//place the values in an object
//use that object as the data portion in vue
//the trick is to load the page hiding the div app
//once the user clicks submit hide the form and show the div app
//feel free to use animations

var info = {
  
}

new Vue({
  el: '#app',
  data: {
    full_name: 'Aaron Villanueva',
    pic: "https://yt3.ggpht.com/a-/ACSszfE8jr9X-8TOrsyUy2zRAX1F_6ZZz9knfCIv0w=s900-mo-c-c0xffffffff-rj-k-no",
    Id: Math.floor(1000 + Math.random() * 9000),
    date: mm + '/' + dd + '/' + yyyy,
    time: myTimer()
  }
})
