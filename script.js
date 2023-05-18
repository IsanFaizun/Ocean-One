// No 1
function action(){
    alert("I am taking action")
}

// No 2
function editText() {
    const alignContent = document.getElementById("align-content");
    const textArea = document.getElementById("textArea");
    const editButton = document.getElementById("edit");
  
    textArea.style.display = "block";
    textArea.value = alignContent.textContent.trim();
    alignContent.style.display = "none";
    edit.textContent = "[save]";
    edit.onclick = editSave;
}
  
  function editSave() {
    const alignContent = document.getElementById("align-content");
    const textArea = document.getElementById("textArea");
    const editButton = document.getElementById("edit");
  
    alignContent.textContent = textArea.value;
    alignContent.style.display = "block";
    textArea.style.display = "none";
    edit.textContent = "[edit]";
    edit.onclick = editText;
}

// No 3
function send(){
    var output = document.getElementById("output");
    var name = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var outputText =
    "<h4>Thanks for your response!</h4>" +
    "<br>" +
    "Hello my name is " +
    name +
    "<br>" +
    "My email is " +
    email +
    "<br>" +
    "This is my message :  " +
    message;

  output.innerHTML = outputText;
}
