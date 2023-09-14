let textarea = document.getElementById('text').value =` 
//**HTML CODE**//

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recipe</title>
</head>
<body>
  <h2>MY RECIPE APP</h2>
  <hr>
  <div>
    <img src="images/pastacarbona.jpg" alt="" width="150" height="150">
    <h3>PASTA CARBONARA</h3>
  <ol>
    <li>cook spaghetti according to package instructions</li>
    <li>cook chopped bacon until crispy</li>
    <li>whisk egg, black pepper  and grated parmesan</li>
    <li>toss cooked pasta in bacon and drippings. Remove from heat and quickly mix in egg mixture</li>
    <li>serve with extra cheese and pepper</li>
  </ol>
  </div>
  <hr>
<br>
  <div>
    <img src="images/guacamole.jpg" alt="" width="150" height="150">
    <h3>GUACAMOLE</h3>
  <ol>
    <li>Mash ripe avocadoes</li>
    <li>stir in diced red onion, chopped tomatoes, and cilantro</li>
    <li>squeeze in lime juice and season with salt and pepper</li>
    <li>mix well and adjust seasoning </li>
    <li>serve with tortilla as a topping</li>
  </ol>
  </div>
  <hr>
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