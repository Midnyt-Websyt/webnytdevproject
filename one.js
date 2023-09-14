let textarea = document.getElementById('text').innerHTML =` 
//**HTML CODE**//

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tribute page</title>
</head>
<body>

   <img src="images/drkwamenkurumah.jpg" alt="">

   <br>
     <h2>DR OSAGYEFO KWAME NKURUMAH</h2> 

<p>Dr Kwame nkurumah born in Nkroful, <a href="#">Ghana</a>, was the first president in  the Republic of Ghana. Her wife was Fathia Nkrumah. </p>

  <h4>DR KWAME NKURUMAH'S ACHIVEMENTS</h4>

<p>He did so much for his country Ghana. some of his projects are below;</p>


  <ul>

    <li>Bank of Ghana</li>
    <li>Ghana Oil Company (GOIL)</li>
    <li>Kwame Nkurumah University Of Science and Technology (KNUST)</li>
    <li>Kumasi Shoe factory</li>
    <li>SSNIT</li>
    <li>State Insurance Company (SIC)</li>
    <li>State and Housing Projects</li>
    <li>Tema Harbour</li>
    <li>Tema Oil Refinery</li>

  </ul>

<p> There are over 90 big projects he completed in just 6 years </p>

</body>
</html>`




textarea.readOnly = true;


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