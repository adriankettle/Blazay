//create event listener
document.getElementById('button').addEventListener('click', loadText);

function loadText() {
    //create xhr obj
    var xhr = new XMLHttpRequest();

    //OPEN,
  xhr.open('GET','sample.txt', true);

  //optional
  xhr.onprogress = function () {
  //  console.log('READYSTATE: ', xhr.readyState);
  }

  xhr.onload = function () {
    if (this.status == 200) {
      document.getElementById('output').innerHTML = this.responseText;
      //console.log(xhr.responseText);
    }else if (this.status == 404) {
      document.getElementById('output').innerHTML = this.responseText;
    }
  }

  xhr.onerror = function () {
    console.log('Request Error...');
  }
  xhr.send();
}
