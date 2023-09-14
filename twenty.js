let textarea = document.getElementById('text').value =` 
//**HTML CODE**//

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="googlesearchpage.css">
  <link rel="stylesheet" href="css/all.min.css">
  <link rel="stylesheet" href="css/fontawesome.min.css">
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
  <title>Document</title>

  </head>
  <body>
    <div class="container">
      <div class="top-bar">
        <div class="google-logo">
          <h1> <span class="g">G</span> <span class="o">o</span> <span class="second-o">o</span> <span class="second-g">g</span> <span class="l">l</span> <span class="e          ">e</span>  </h1>
        </div>

        <div class="input-bar">
          <input type="">
          <i class="fas fa-search"></i>
        </div>
      </div>
<div class="page">
      <div class="nav">
        <ul>
         <li><a href="" id="default" >All</a></li>
         <li><a href="">News</a></li>
         <li><a href="">Shopping</a></li>
         <li><a href="">Images</a></li>
         <li><a href="">Videos</a></li>
         <li><a href="">More <i class="fas fa-caret-down"></i> </a></li>
         <li><a href="">Search tools</a></li>
        </ul>
   
           </div>

      <div class="main">
  
        <div class="results-total">
          <p>About 128,000 results (0.35 seconds)</p>
        </div>
        <div class="results">
      

  
            <div class="each">
              <h5>http://webnytdev.com</h5>
              <span class="green">webnytdev.com/contact/ <span class="more" > webnyt <i class="fas fa-caret-down"></i> </span></span>
            <h4 class="title">Webnytdev is a home for frontend developers - Webnytdev</h4>
            <p>Webnytdev provides projects from a beginners level to advanced level. It provides projects on HTML, CSS and JAVASCRIPT. You can choose a lanuage and the level you want </p>
            </div>
        
            <div class="each">
              <h5>http://www.codenews.com > blog</h5>
            
              <span class="green">codenews.com/blog/ <span class="more" > webnyt <i class="fas fa-caret-down"></i> </span></span>
            <h4 class="title">Frontend projects ideas</h4>
            <p>To get the best projects as a frontend developer, you should visit <a href="webnytdev.com">Webnytdev.com</a> for it, they provide projects base on your level of experience together with source codes</p>
            <span>Missing-projects</span>
            </div>
            <div class="each">
              <h5>Learncodefirst.com</h5>
              <span class="green">learncodefirst.com/blog <span class="more" > webnyt <i class="fas fa-caret-down"></i> </span></span>
            <h4 class="title">Sarkodie the best rapper in Africa</h4>
            <p>Sarkodie is great rapper from Ghana, he raps mostly in his local language but has won almost every African's heart including people from outside the continent </p>
            </div>
          
          </div>
        
        </div>
      </div>
    </div>
    </div>
  </body>


  //# CSS CODE #//

  *{
    margin: 0;
    padding: 0;
  
  }
  body{
    background-color: #eee;
    height: 100vh;
    overflow: hidden;
  }
  .container{
    padding: 1rem 0;
  }
  .top-bar{
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 0 1rem;
   
    
  }
  
  .input-bar{
  display: flex;
  }
  
  .input-bar input{
  width: 55rem;
  padding: .6rem 1rem;
  font-size: 1.1rem;
  outline: 0;
  }
  
  .input-bar i{
    background-color:rgb(63, 63, 221);
    padding:  1rem;
    color: white;
  }
  
  
  
  
  
  .google-logo h1{
    font-size: 1.9rem;
    font-family:'Times New Roman', Times, serif;
    display: flex;
    gap: .2rem;
  }
   .google-logo .g{
    color: blue;
   }
  
   .google-logo .o{
    color: red;
   }
   .google-logo .second-o{
    color: gold;
   }
   .google-logo .second-g{
    color: blue;
   }
  
   .google-logo .l{
    color: green;
   }
   .google-logo .e{
    color: red;
   }
  
   .page{
    margin-top: 1rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 90vh;
   }
   .nav{
  
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 2px solid #eee;
    padding: 1rem 4rem;
    background-color: white;
  
  
  }
   .nav ul{
    display: flex;
  gap: 2rem;
  
   }
  
   .nav ul li{
    list-style: none;
  
   }
  
   .nav ul li a{
    color: #666;
    text-decoration: none;
    font-size: 1.1rem;
  
   }
  
   .main{
  
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 4rem;
    gap: 2rem;
  
  
  
   }
  
  
   #default{
    border-bottom: 3px solid rgb(63, 63, 221);
    padding-bottom: 1rem;
   }
  
   .results-total{
  color: #666;
  font-size: 1.1rem;
   }
  
   .results{
    display: flex;
    flex-direction: column;
    gap: 1rem;
   }
  .each{
    width: 45rem;
   
  }
   .each h5{
    color: rgb(58, 46, 46);
    font-size: 1rem;
  
   }
   .each h4{
    color: rgb(82, 18, 143);
    font-size: 1.3rem;
  
   }
   .green{
    color: green;
   }
  
   .each p{
    font-family: sans-serif;
    line-height: 1.5rem;
    color: #333;
   }
  
   span{
    color: #666;
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