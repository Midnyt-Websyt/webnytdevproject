let textarea = document.getElementById('text').value =` 
//**HTML CODE**//


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="landing.css">
  <title>LANDING PAGE</title>
</head>
<body>
  <header>
  <nav>
    <h3 class="logo">WEBNYTDEV</h3>
    <ul>
      <li>SIGN UP</li>
      <li>LOGIN IN</li>
    </ul>
  </nav>

</header>
  


<main>
  <div class="text">
   <h3> welcome to webnytdev, home of frontend projects </h3> 
  </div>
  <div class="input-container">
    <input type="search" placeholder="search for projects...">
    <button type="submit" >search</button>
  </div>
</main>
</body>
</html>


//# CSS CODE # //

body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: rgb(103, 103, 179);
  }
  
  nav{
    display: flex;
    justify-content: space-between;
    padding: 0rem 3rem;
    background-color: white;
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.7);
    align-items: center;
  }
  
  nav h3{
    font-size: 1.5rem;
    font-weight: bolder;
    color: green;
  }
  ul{
    display: flex;
    gap: 1rem;
  }
  li{
    list-style: none;
    background-color: green;
    color: white;
    padding: .7rem .5rem;
    font-size: .9rem;
    font-weight: bold;
    width: 5rem;
    text-align: center;
  }
  li:hover{
    background-color:rgb(56, 80, 20);
  }
  
  main{
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
   
    
  }
  .text{
    width: 20rem;
    text-align: center;
    font-size: 1.6rem;
    text-transform: uppercase;
    line-height: 2.3rem;
    color: white;
  }
  
  .input-container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
  }
  
  input{
    padding: .5rem 1rem;
    border: 3px solid green;
    outline: 0;
    width: 20rem;
    font-size: 1rem;
  }
  
  button{
    color: white;
    background-color: green;
    font-size: 1.1rem;
    padding: .6rem 1rem;
    border: 0;
  }
  button:hover{
    background-color: rgb(56, 80, 20);
    padding: .55rem 1rem;
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