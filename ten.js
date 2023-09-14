let textarea = document.getElementById('text').value =` 
//**HTML CODE**//

// FIRST QUOTE //

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="quotecss.css">
  <title>Document</title>
</head>
<body>
  <h2>QUOTES APP</h2>
  <div>
    <h3>If you change the way you at things,<br>
       the things you look at change.</h3>
    <p> <span>by</span>  WAYNE DYER</p>
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
  <link rel="stylesheet" href="quotecss.css">
  <title>Document</title>
</head>
<body>
  <h2>QUOTES APP</h2>
  <div>
    <h3>Life is like riding a biycle. <br> to keep your balance, 
     <br> you must keeep moving</h3>
    <p> <span>by</span> ALBERT EINSTEIN</p>
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
  <link rel="stylesheet" href="quotecss.css">
  <title>Document</title>
</head>
<body>
  <h2>QUOTES APP</h2>
  <div>
    <h3>Act like what you do <br>
    makes a difference, it does</h3>
    <p> <span>by</span> WILLIAM JAMES</p>
    <button><a href="">next</a></button>
  </div>
</body>
</html>

//# CSS CODE #//

body{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

div{
  background-color: rgb(147, 110, 29);
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 3rem 5rem;
  width: 25rem;
  height: 15rem;
  box-shadow: 0 .5rem 1.5rem rgba(0,0,0.5);
}

h3{
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1.7rem;
}
a{
  text-decoration: none;
  color: white;
}
button{
  background-color: green;
  border: 0;
  padding: .5rem 1rem;
  border: 2px solid white;
  border-radius: .5rem;
  font-size: 1rem;
}
p{
  font-size: 1.2rem;
  color: rgb(182, 16, 80);
  font-weight: bolder;
  
}

span{
  color: white;
  font-size: 1rem;
}

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