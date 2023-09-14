let textarea = document.getElementById('text').value =` 
//**HTML CODE**//

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="dropdown.css">
  <title>Document</title>
</head>
<body>


   <header>
    <nav>
<h3 class="logo">WEBNYT</h3>
<ul>
  <li>HOME</li>
  <li>BLOG</li>
  <li class="dropdown">PROJECTS <i></i>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li class="last">JAVASCRIPT</li>
    </ul>
  </li>
  <li>ABOUT US</li>
  <li>CONTACT</li>
</ul>
    </nav>
</header>
  
</body>
</html>


//# CSS CODE #//

body{
  margin: 0;
  padding: 0;
}
nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: green;
  padding: 0 1rem;
}
.logo{
  color: yellow;
}

nav > ul{
  display: flex;
  gap: 2rem;
  color: white;
  align-items: center;

}
.dropdown{
  position: relative;
}
li ul {
  display: none;
}
.dropdown:hover ul{
position: absolute;
top: 1.3rem; right: -2rem; 
background-color: black;
text-align: center;
padding: 0;
height: 10rem;
width: 8rem;
display: block;
}

li ul li{
  border-bottom: 1px solid #999;
  padding: 1rem;
}

li ul li:hover{
  background-color: yellowgreen;
  color: white;
}

.last{
  border: 0;
}
li{
  list-style: none;
  cursor: pointer;
}

li:hover{
  color: greenyellow;
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