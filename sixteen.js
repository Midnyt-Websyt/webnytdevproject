let textarea = document.getElementById('text').value =` 
//**HTML CODE**//



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="portfolio.css">
  <link rel="stylesheet" href="css/all.min.css">
<link rel="stylesheet" href="css/fontawesome.min.css">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
  <title>webnytdev portfolio website</title>
</head>
<body>

  <nav>
    <h4 class="name-logo">WEBNYT<span>dev</span></h4>

    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#project">Projects</a></li>
      <li><a href="#skill">Skills</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <i class="fas fa-bars" id="menu"></i>
  </nav>

  <header id="home">
    <img src="image/two.jpg" alt="" class="dev-img">
    <div class="dev-description">
      <h4> I am KINGSFORD OPOKU </h4>
      <h2>WEBNYT</h2>
      <p> A Web develeoper</p>

    </div>
  </header>

  <section id="project">

<h2 class="page-title">
  MY PROJECTS
</h2>

<div class="works">
  <div class="each-project">
    
    <div class="unk">
      <h2>AUDIOMAK CLONE</h2>  
      <img src="image/audio.jpg" alt=""> 
    
    </div>
    <p class="project-description">This is audiomak a music player, and i built it as a clone. its only on mobile and so i did'nt make it to work on pc </p>
  </div>
  <div class="each-project">
<div class="unk">
  <h2>HUBTEL CLONE</h2>
  <img src="image/hub.jpg" alt="">
 
</div>
<p class="project-description">Hubtel is a food ordering app in Ghana, and i built it clone</p>
  </div>
  <div class="each-project">
    
    <div class="unk">
      <h2>MTN CLONE</h2>
      <img src="image/mtn.jpg" alt="">
 
    </div>
    <p class="project-description">i built mtn app clone which is responsive, so it works on both wide screens and small sizes screen </p>
  </div>
</div>
  </section>
  

  <section id="skill">
<h2 class="page-title">SKILLS</h2>

<h6>Below are my current skills :</h6>
<div class="arr">

  <div class="skills">
    <h5 class="html">HTML</h5>
    <h5 class="css">CSS</h5>
    <h5 class="js">JAVASCRIPT</h5>
    <h5 class="react">REACT</h5>
  </div>
  <div class="symbol">
    <p class="h">< ></p>
    <p class="c">#</p>
    <p class="j">JS</p>
    <p class="r">R</p>
  </div>
  <div class="img">
    <img src="image/html.jpg" alt="" class="ht">
    <img src="image/css.jpg" alt="" class="cs">
    <img src="image/js.jpg" alt="" class="jj">
    <img src="image/react.jpg" alt="" class="rr">

  </div>
</div>
  </section>


  <section id="about">
    <h2 class="page-title">About</h2> 

    <h3>About Me</h3>
    <h5>i'm Kingsford (WEBNYT), a web developer from Ghana.
      im a frontend developer with high experience in HTML, CSS and JAVASCRIPT,
      i'm currently free, so i'im opened to both remote and on site Jobs in and outside of Ghana, and also freelance jobs. i have two years experience in the frontend development.
    </h5>
    
    <div class="button">
      <button>read more</button>
    </div>


  </section>

  <section id="contact">

    <h2 class="page-title">CONTACT</h2>

    <div class="form">
      <div class="name">
        <p>NAME :</p>
        <input type="text" placeholder="e.g Kingsford Opoku">
      </div>
      <div class="email">
        <p>EMAIL :</p>
        <input type="email" placeholder="e.g Kingsford@gmail.com">
      </div>
      <div class="message">
        <p>MESSAGE :</p>
        <textarea name="" placeholder="e.g Hi,please can you create an Ecommerce website for me ?" id="" cols="30" rows="3"></textarea>
      </div>
      <button type="submit">Submit</button>
    </div>

    <div class="div"></div>
<div class="footer">
  <div class="handle">
    <img src="img/gmail.jpg" alt="">
    <p>Gmail</p>
  </div>
  <div class="handle">
    <img src="img/fab.jpg " alt="">
    <p>Facebook</p>
  </div>
  <div class="handle">
    <img src="img/insta.jpg" alt="">
    <p>Instagram</p>
  </div>
  <div class="handle">
    <img src="img/tiktok.jpg" alt="">
    <p>Tiktok</p>
  </div>
</div>
  </section>
  <script src="web.js"></script>
</body>
</html>

//# CSS CODE #/


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}




nav #menu{
  display: none;
}

header, section{
  padding: 4.4rem 3%;
  min-height: 100vh;
  transition: 7s;
  overflow: hidden;  
  background-color: rgb(27, 21, 21);


  
}
nav{
  background-color: rgb(22, 19, 19);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: .8rem;
  align-items: center;
  box-shadow: 0 .5rem 1.5rem rgba(0,0,0,0.9);
  position: fixed; left: 0; right: 0;top: 0;
  z-index: 10;
}

nav .name-logo{
  color: rgb(21, 111, 214);
letter-spacing: .2rem;
font-size: 1.7rem;
font-family: monospace;
}
.name-logo span{
  color: green;
}
nav ul {
  display: flex;
  gap: 4rem;
  margin-right: 2rem;
}
nav ul li{
list-style: none;
font-size: 1.2rem;
transition: .5s;
}
nav ul li:hover{
  font-size: 1.5rem;
  transition: .8s ease-in-out;
  letter-spacing: .6rem;
}


nav ul li a:hover{
  color: green;
  transition: .3s;
  
}
nav ul li a{
  color: white;
  text-decoration: none;
  transition: .3s;
  padding: .2rem .3rem;

}


header{
  display: flex;
 overflow-x: hidden;
  align-items: center;

  background-color: rgb(27, 21, 21);
  justify-content: space-between;
}

header .dev-img{
  

}

header img{
  border-radius: 50%;
  width: 23em;
  height: 23rem;
  animation: logoimg 7s ease-in-out 0s 3 alternate-reverse forwards;

}

header .dev-description{
text-align: end;
color: white;
margin-right: 8rem;
overflow: hidden;

}

.dev-description h4{font-size: 1.8rem;
animation: devname 5s ease-out .4s 2 alternate forwards;
}
.dev-description h2{
  font-size: 3rem;
  color:rgb(21, 111, 214);

}

.dev-description p{
  color: rgb(12, 112, 12);
font-weight: bolder;
animation: devdes 4s ease-out .2s 2 alternate forwards;
}



.page-title{
  text-align: center;
  color: green;
  font-size: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid green;
 
  margin-bottom: 1rem;
}

#project{
  transition: .4s ease;
  background-color: ;

}

.works{
  display:flex ;
  justify-content: space-between;
}

.works img{
  width: 17rem;
  height: 23rem;
}

.each-project{
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: .3rem;
}

.each-project p{
  width: 17rem;
  color: #999;

}


.each-project h2{
  color: slateblue;
  margin-bottom: .2rem;

}



#skill{

}

#skill h6{
  color: white;
  font-size: 2rem;
}

.skills, .symbol{
  margin-top: 2rem;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.html{
  color: orangered;
}

.css{
  color: rgb(50, 50, 241);
}


.js{
  color: yellow;
}


.react{
  color: blue;
}

.arr{
  display: flex;
  gap: 9rem;
  align-items: center;
}

.h{
  color: orangered;
}
.c{
  color:rgb(50, 50, 241) ;
}

.j{
  color: yellow;
}

.r{
  color: blue;
}

.img{
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-self: center;
}
.ht{
  margin-top: 1.3rem;
}
.img img{
  width: 2rem;
}

#about h3{
  text-align: center;
  color: slateblue;
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

#about h5{
  color: white;
  font-size: 1.1rem;
  text-align: center;
  width: 40rem;
  margin: 0 auto;
  line-height: 2rem;
}

.button{
display: flex;
align-items: center;
justify-content: center;
margin-top: 1rem;
}
button{
  color: white;
  background-color: green;
  padding: .3rem 1rem;
  border: 0;
  font-size: 1.1rem;
  border-radius: .6rem;
}


#contact{
display: flex;
flex-direction: column;
align-items: center;
}

.form{
  display: flex;
  flex-direction: column;
background-color: #eee;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  border-radius: .5rem;
  
  

}
.footer{
  display: flex;
  margin-top: 1rem;
  gap: 3rem;
  align-items: center;

}

.div{
  margin-top: 2.5rem;
  height: 1px;
  background-color: green;
  width: 100%;
}

.handle{
  display: flex;
  flex-direction: column;
  gap: .4rem;
  color: white;
  align-items: center;
}
.handle p{
  font-size: .8rem;
}

.handle p:hover{
  text-decoration: underline;
  color: green;
}

.handle img{
  width: 2rem;
}

.message textarea{
  font-size: 1rem;
  color: #333;
  padding: .2rem 1rem;
  border: 0;
  width: 26rem;
}

.form p{
  font-size: 1.2rem;
  color: #666;
  margin-bottom: .4rem;
}
.form input:focus{
  outline: none;
}

.form input{
  width: 26rem;
  padding: 1rem 3rem;
  border-radius: .3rem;
  border: 0;
  font-size: 1rem;
}

.form button{
  padding: .3rem .6rem;
  font-size: .9rem;
}









@keyframes logoimg {
 0%{
opacity: }

50%{
  transform: translate(-9%, 50%);
}
 100%{
  transform: translate(70%,30% );
 }
}


@keyframes devname {
  0%{
    color:rgb(173, 142, 39);
font-size: 1.4rem;
  }

  100%{
letter-spacing: .5rem;
    color: white;
    transform: translate(-100%, 50%);
    font-size: 2rem;
  }
}



@keyframes devdes {
  0%{
    color:rgb(88, 30, 196);

  }

  100%{
letter-spacing: .5rem;
    color: white;
    transform: translate(100%, 50%);
  }
}







@media screen and (max-width:966px){
  
  header, section{
    padding: 4.2rem 1%;
    min-height: 100vh;
    transition: 7s;
  overflow: hidden;  
    background-color: rgb(27, 21, 21);
  
  
    
  }
  nav{

    display: flex;
    justify-content: space-between;
    padding: .7rem;
      }

  nav .name-logo{
    color: rgb(21, 111, 214);
  letter-spacing: .2rem;
  font-size: 1.5rem;
  font-family: monospace;
  }

  nav ul {
    display: flex;
    gap: 2rem;
    margin-right: 2rem;
  }
  nav ul li{
  list-style: none;
  font-size: 1rem;
  transition: .5s;
  }

  

  
header{
  display: flex;
 
  align-items: center;

  background-color: rgb(27, 21, 21);
  justify-content: space-between;
}



header img{
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  animation: logoimg 7s ease-in-out 0s 3 alternate-reverse forwards;
  z-index: 9;

}

header .dev-description{
text-align: end;
color: white;
margin-right: 6rem;

}

.dev-description h4{font-size: 1.8rem;
animation: devname 5s ease-out .4s 2 alternate forwards;
}
.dev-description h2{
  font-size: 2.6rem;
  color:rgb(21, 111, 214);

}

.dev-description p{
  color: rgb(12, 112, 12);
font-weight: bolder;
animation: devdes 4s ease-out .2s 2 alternate forwards;
}



@keyframes logoimg {

 
 50%{
   transform: translate(-7%, 45%);
 }
  100%{
   transform: translate(60%,30% );
  }
 }
 
 
 @keyframes devname {
   0%{
     color:rgb(173, 142, 39);
 font-size: 1.2rem;
   }
 
   100%{
 letter-spacing: .3rem;
     color: white;
     transform: translate(-100%, 50%);
     font-size: 1.5rem;
   }
 }
 
 
 
 @keyframes devdes {
   0%{
     color:rgb(88, 30, 196);
 
   }
 
   100%{
 letter-spacing: .3rem;
     color: white;
     transform: translate(100%, 50%);
   }
 }
 
.page-title{
  font-size: 1.5rem;
}

#project{
  padding-left:1% ;
  padding-right:1% ;
}
 .works{
  display:flex ;
  justify-content: space-between;
  gap: 3rem;
  padding: .2rem 1rem;
  align-items: center;
}

.works img{
  width: 10rem;
  height: 15rem;
}
.unk{
  gap: .2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.each-project{
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: .9rem;
}

.each-project p{
  text-align: center;
  color: #999;
  font-size: .8rem;
  height: 10rem;
width: 13rem;
}


.each-project h2{
  color: slateblue;
  margin-bottom: .2rem;
font-size: 1.1rem;
}


#skill h6{
  font-size: 1.8rem;
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