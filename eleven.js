let textarea = document.getElementById('text').value =` 
//**HTML CODE**//

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="personal.css">
  <title>PERSONAL CARD</title>
</head>
<body>
  <div class="card">
<img src="image/myimage.jpg" alt="">
    <h2>KINGSFORD OPOKU</h2>
    <div>
<span>(phone)</span>
<p>+233 785 296 1195</p>
    </div>
    
    <div>
      <span>(Email)</span>
      <p>kingsfordopoku@gmail.com</p>
    </div>
   
    <div>
        <span>(Address)</span>
      <p>AR 9355 6366</p>
    
    </div>
  
  </div>
</body>
</html>


//# CSS CODE # //

body{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card{
  background-color: yellow;
display: flex;
flex-direction: column;
padding: 2rem 3rem;
align-items: center;
border: 5px solid green;
border-radius: 1rem;
}

img{
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  border: 5px solid green;
}
.card > div{
  display: flex;
  align-items: center;
  font-size: 1.2rem;
gap: .6rem;
border-bottom: 2px solid #333;
width: 100%;
color: rgb(140, 41, 41);
}
span{
  color: green;
  font-size: 1.4rem;

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
// })ee