let textarea = document.getElementById('text').value =` 
//**HTML CODE**//

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="rotate.css">
  <title>Document</title>
</head>
<body>
  
  <div class="rotation-gallery">
    <img src="image/image1.jpg" alt="">
    <img src="image/myimage.jpg" alt="">
    <img src="image/image2.jpg" alt="">
    <img src="image/react.jpg" alt="">
  </div>
</body>
</html>

//# CSS CODE #//
body{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
}
.rotation-gallery{
  display: flex;
  overflow: hidden;
  width: 10rem;;
  height: 15rem;
  background-color: white;
  border: 1rem solid blue;
  border-radius: 1rem;
}

.rotation-gallery img{
  width: 100%;
  height: 100%;

   animation: rotate 8s ease-in 0s infinite forwards alternate-reverse;
}

@keyframes rotate {
  0%{
    transform: translateX(0);
  }
  40.5%{
    transform: translateX(-100%);
  }
  80.1%{
    transform: translateX(-200%);
  }
  100%{
    transform: translateX(0%);
  }
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