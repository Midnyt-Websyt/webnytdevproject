let textarea = document.getElementById('text').value =` 
//**HTML CODE**//

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume</title>
</head>
<body>
  <h4>NAME: KINGSFORD OPOKU</h4>
  <h4>AGE: 18YRS</h4>
  <hr>
  <img src="images/myimage.jpg" alt="my image" width="200" height="200">

  <div>
<h3>ABOUT ME</h3>
<hr>
<p>I am Kingsford Opoku, i just finished High school. <br>
I need a part time job as a junior frontend developer <br>
I have two years experience.
</p>
<hr>
<h3>EXPERIENCE</h3>

<h5>FREELANCING(upwork) - 2020 <i>to</i> 2023 </h5> 
<hr>
<h3>SKILLS</h3>

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JAVASCRIPT</li>
  <li>REACT</li>
</ul>
<hr>
<h3>TRAINING</h3>

<h5><a href="freecodecapm.com">Freecodecamp</a></h5>
<ol>
  <li>Web responsive course</li>
  <li>Data structure course</li>
  <li>Frontend frameworks course</li>
</ol>
<hr>
<h3>EDUCATION</h3>
<p>I went to <a href="greatkoss.com">GREAT KOSS</a> from 2020 to 2023</p> 
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