//create event listener
document.getElementById('button').addEventListener('click', loadText);

function loadText() {
    //create xhr obj
    var xhr = new XMLHttpRequest();

    //OPEN,
  xhr.open('GET','note.json', true);

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(xhr.responseText);
    }
  }
  xhr.send();
}
