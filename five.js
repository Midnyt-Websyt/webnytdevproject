let textarea = document.getElementById('text').value =` 
//**HTML CODE**//

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QUIZ</title>
</head>
<body>
  <h3>QUIZ APP</h3>
  <div>
    <ol>
      <div>
        <li>Which of the following is not valid HTML element</li>
        <ol type="A">
          <li>
            <label for=""> h1  </label>
             <input type="checkbox">
             </li>    
             <li>
              <label for="">img</label>
              <input type="checkbox">
             </li>
             <li>
              <label for="">h8</label>
              <input type="checkbox">
             </li>
            
        </ol>
      </div>
<br>
      <div>
        <li>Which of the following allows you lo link webpages, documents and resources</li>
        <ol type="A">
          <li>
            <label for=""> li  </label>
             <input type="checkbox">
             </li>    
             <li>
              <label for="">a</label>
              <input type="checkbox">
             </li>
             <li>
              <label for="">p</label>
              <input type="checkbox">
             </li>
            
        </ol>
      </div>

      <br>

      <div>
        <li>li is used to create lists in HTML</li>
        <ol type="A">
          <li>
            <label for=""> image  </label>
             <input type="checkbox">
             </li>    
             <li>
              <label for="">list</label>
              <input type="checkbox">
             </li>
             <li>
              <label for="">paragraph</label>
              <input type="checkbox">
             </li>
            
        </ol>
      </div>
      
    </ol>
  </div>
</body>
</html>

`




textarea.readOnly = true


let copyButton = document.getElementById("copy")
copyButton.addEventListener("click", function(){
 
  let copiedtext = textarea

  navigator.clipboard.writeText(textarea)
  .then(function(){
    setTimeout(()=>{
      document.getElementById("copy-alert").style.display = "block"
    },0000)

    setTimeout(()=>{
      document.getElementById("copy-alert").style.display = "none"
    },400)
  })

 
})
// GamepadButton.addEventlistener("click", function(){
//   textarea.select()
//   document.execCommand(copy)
//   alert("copied" + textarea)
// })