// document.getElementById('btn1').addEventListener('click', loadUser);

document.getElementById('btn2').addEventListener('click', loadUsers);

// function loadUser() {
//   var xhr = new   XMLHttpRequest();
//   xhr.open('GET', 'note.json', true);
//   xhr.onload = function () {
//     if (this.status == 200) {
//       console.log(this.responseText);
//       var user = JSON.parse(this.responseText);
//
//       var output = '';
//
//       output += '<ul>' +
//       '<li>ID: '+user.id+'</li>'+
//       '<li>Name: '+user.name+'</li>'+
//       '<li>Age: '+user.age+'</li>'+
//       '<li>Address: '+user.address+'</li>'+
//       '<li>City: '+user.city+'</li>'+
//       '<li>Country: '+user.country+'</li>'+
//       '</ul>';
//
//       document.getElementById('pool').innerHTML = output;
//
//       //console.log(this.responseText);
//     }
//   };
//
//   xhr.send();
// }

function loadUsers() {
  var xhr = new   XMLHttpRequest();
  xhr.open('GET', 'note.json', true);
  xhr.onload = function () {
    if (this.status == 200) {
      //console.log(this.responseText);
      var users = JSON.parse(this.responseText);

      var output = '';
      for(var i in users){
      output += '<ul>' +
        '<li>Name: '+users[i].name+'</li>'+
        '<li>Age: '+users[i].age+'</li>'+
        '<li>Address: '+users[i].address+'</li>'+
        '<li>City: '+users[i].city+'</li>'+
        '<li>Country: '+users[i].country+'</li>'+
        '</ul>';
      }
      document.getElementById('out').innerHTML = output;

      //console.log(this.responseText);
    }
  };

  xhr.send();
}
