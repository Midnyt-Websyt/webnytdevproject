let textarea = document.getElementById('text').value =` 
//**HTML CODE**//

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TEXT AND IMAGE</title>
</head>
<body>
  <h2>TEXT AND PHOTO </h2>
  <p>choose your favorite musician</p>
  <img src="images/image1.jpg" alt="my favorite musician" width="200" height="200">
  <img src="images/image2.jpg" alt="my favorite musician" width="200" height="200">
<br>
  <input type="radio" name="favorite" value="lil durk">Lil Durk
  <input type="radio" name="favorite" value="polo g">Polo G
<h3>what do you like about your favorite musician</h3>

<input type="checkbox" name="choice1" value="dressing"> Dressing
<br>
<input type="checkbox" name="choice2" value="voice"> Voice 
<br>
<input type="checkbox" name="choice3" value="calmness"> Calmness
<br>
<input type="checkbox" name="choice4" value="lyrics"> Lyrics

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