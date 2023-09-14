let textarea = document.getElementById('text').value =` 
//**HTML CODE**//

//FIRST QUOTE //

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h2>QUOTES APP</h2>
  <div>
    <h3>If you change the way you at things,<br>
       the things you look at change.</h3>
    <p>by WAYNE DYER</p>
    <button><a href="secondquote.html">next</a></button>
  </div>
</body>
</html>

// SECOND QUOTE //

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h2>QUOTES APP</h2>
  <div>
    <h3>Life is like riding a biycle. <br> to keep your balance, 
     <br> you must keeep moving</h3>
    <p>by ALBERT EINSTEIN</p>
    <button><a href="thirdquote.html">next</a></button>
  </div>
</body>
</html>

// THIRD QUOTE //

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h2>QUOTES APP</h2>
  <div>
    <h3>Act like what you do <br>
    makes a difference, it does</h3>
    <p>by WILLIAM JAMES</p>
    <button><a href="">next</a></button>
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