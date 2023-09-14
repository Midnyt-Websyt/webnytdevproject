let textarea = document.getElementById('text').value =` 
//**HTML CODE**//

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FAQ</title>
</head>
<body>
  <h3>FAQs</h3>
  <div style = 'border:3px solid black; padding:30px; width: 400px;'>
    <details>
      <summary><strong>What projects can we find here?</strong> </summary>
      <br>
      <li> We provide HTML, CSS and JAVASCRIPT projects.</li>
    </details>
    <hr>
    <br>
    <details >
      <summary><strong>How much for premium projects?</strong> </summary>
      <br>
      <li> We do not charge , you just watch AD to open premium</li>
    </details>
    <hr>
    <br>
    <details >
      <summary> <strong>Do the projects come along with source code?</strong></summary>
      <br>
      <li> YES, it does</li>
    </details>
    <hr>
    <br>
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