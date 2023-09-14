let textarea = document.getElementById('text').value =` 
//**HTML CODE**//

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>REGISTRATION FORMS</title>
</head>
<body>
  <img src="" alt="">
  <h3>REGISTRATION PAGE</h3>
  <form action="webnytdev.com" method="get">
    <label for="firstname">FIRSTNAME: </label>
    <input type="text" name="firstname" id="firstname" placeholder="Edna" required>
    <br>
    <br>
    <label for="lastname">LASTNAME: </label>
    <input type="text" name="lastname" id="lastname" placeholder="Bill" required>
    <br>
    <br>
    <label for="email">EMAIL: </label>
    <input type="email" name="email" id="email" placeholder="webnyt@gamil.com" required>
    <br>
    <br>
    <label for="gender">GENDER:</label>
    <input type="radio" name="gender" id="male">male
    <input type="radio" name="gender" id="female">female
    
    <br>
    <br>
    <label for="password">PASSWORD: </label>
    <input type="password" name="password" id="password" >
    <br>
    <br>
    <button type="submit" >REGISTER</button>
  </form>
  <p>Already have an account? <a href="#">sign in</a></p>
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