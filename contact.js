let menuB = document.getElementById("bars")

menuB.addEventListener("click", function(){
  document.getElementById("menu").classList.add("active")
  document.getElementById("close").style.display = "block"
})

document.getElementById("close").addEventListener("click", function(){
  document.getElementById("menu").classList.remove("active")
  document.getElementById("close").style.display = "none"
})