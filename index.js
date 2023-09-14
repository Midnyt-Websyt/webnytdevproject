let htmlBeginner = document.querySelectorAll("#html-beginner")
let htmlIntermediate = document.querySelectorAll("#html-intermediate")
let htmlAdvanced = document.querySelectorAll("#html-advanced")
let cssBeginner = document.querySelectorAll("#css-beginner")
let cssIntermediate = document.querySelectorAll("#css-intermediate")
let cssAdvanced = document.querySelectorAll("#css-advanced")

let htmlSelect = document.querySelector("#html")
let cssSelect = document.querySelector("#css")
let jsSelect = document.querySelector("#js")


let beginner = document.querySelector("#beginner")
let advanced = document.querySelector("#advanced")
let intermediate = document.querySelector("#intermediate")



beginner.addEventListener("click", function(){
    htmlcheckbox1()
    csscheckbox1()
    jscheckbox1()
})


intermediate.addEventListener("click", function(){
    htmlcheckbox2()
    csscheckbox2()
    jscheckbox2()
    
})


advanced.addEventListener("click", function(){
    htmlcheckbox3()
    csscheckbox3()
    jscheckbox3()
})

htmlSelect.addEventListener("click", function(){
    htmlcheckbox1()
    htmlcheckbox2()
    htmlcheckbox3()
})

cssSelect.addEventListener("click", function(){
    csscheckbox1()
    csscheckbox2()
    csscheckbox3()
})

jsSelect.addEventListener("click", function(){
    checkbox1()
    checkbox2()
    checkbox3()
})

function htmlcheckbox1(){
    if(htmlSelect.checked && beginner.checked){
        htmlBeginner.forEach((elements)=>{
            elements.style.display ="block"
        })       
    }
    
}


function htmlcheckbox2(){
    if(htmlSelect.checked && intermediate.checked){
        htmlIntermediate.forEach((elements)=>{
            elements.style.display ="block"
        })       
    }
    
}
  
function htmlcheckbox3(){
    if(htmlSelect.checked && advanced.checked){
        htmlAdvanced.forEach((elements)=>{
            elements.style.display ="block"
        })       
    }
    
}
  
function csscheckbox1(){
    if(cssSelect.checked && beginner.checked){
        cssBeginner.forEach((elements)=>{
            elements.style.display ="block"
        })       
    }
    
}

function csscheckbox2(){
    if(cssSelect.checked && intermediate.checked){
        cssIntermediate.forEach((elements)=>{
            elements.style.display ="block"
        })       
    }
    
}

function csscheckbox3(){
    if(cssSelect.checked && advanced.checked){
        cssAdvanced.forEach((elements)=>{
            elements.style.display ="block"
        })       
    }
    
}



// function jscheckbox1(){
//     if(jsSelect.checked && beginner.checked){
//         document.querySelector(".javascript").style.display="flex"     
//     }
    
// }


// function jscheckbox2(){
//     if(jsSelect.checked && intermediate.checked){
//         document.querySelector(".javascript").style.display="flex"     
//     }
    
// }


// function jscheckbox3(){
//     if(jsSelect.checked && advanced.checked){
//         document.querySelector(".javascript").style.display="flex"     
//     }
//     else{
//         document.querySelector(".javascript").style.display="none"
//     }
    
// }