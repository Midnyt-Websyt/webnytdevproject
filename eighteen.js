let textarea = document.getElementById('text').value =` 
//**HTML CODE**//

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="musicplayer.css">
  <title>MUSIC PLAYER</title>
</head>
<body>
  <div class="container">
    <div class="song-cover-img">
<img src="image/image1.jpg" alt="">
    </div>
    <div class="song-details">
<h4 class="artist">POLO G</h4>
<h3 class="song-title">I KNOW</h3>
    </div>
    <div class="song-control">
<audio src="mymusic/Polo G - I Know (Official Audio).mp3" controls ></audio>
    </div>
  </div>
</body>
</html>

//# CSS CODE #//


body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: beige;
  height: 100vh;
}

img{
  width: 12rem ;
  height: 12rem;
  border-radius: 50%;
  animation: rotateimg 2s ease-in 0s infinite backwards alternate;
}

.container{
  background-color:sandybrown;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 3%;
  border-radius: 1rem;
}


@keyframes rotateimg {
  from{
transform: rotateX(0deg);
  }

  to{
transform: rotateX(360deg);
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