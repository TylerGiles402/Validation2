var content = document.body.querySelector(".content");
var User = document.body.querySelector(".User")
var submit = document.body.querySelector(".submit")
var errorMessage = document.body.querySelector(".errorMessage")


var PageView = document.body.querySelector(".PageView")
var ViewNotes = document.body.querySelector(".View")

var AddingNotes = document.body.querySelector(".AddingNotes")
var Incorrect = document.body.querySelector(".Incorrect")

var list = []

PageView.style.display = "none"

function View(){
  content.style.display = "none"
  PageView.style.display = "block"
}

function renderList(){
  document.body.querySelector(".list").innerHTML ="";
  for(var i=0; i<list.length; i++){
    var itmEle = document.createElement("h6");
    itmEle.innerHTML=list[i]
    document.body.querySelector(".list").appendChild(itmEle)
  }
}

document.body.querySelector(".submit").addEventListener("click",function(){
  if(User.value == "coolStudent123"){
    View()
  }else{
    document.body.querySelector(".errorMessage").innerHTML = "Incorrect Username"
  }
})

document.body.querySelector(".ViewNotes").addEventListener("click",function(){
  if(!isNaN(AddingNotes.length>=1)){
   list.push(AddingNotes.value) 
    renderList() 
  }else{
    Incorrect.innerHTML = "Few Characters"  
  }
})