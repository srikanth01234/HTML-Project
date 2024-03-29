var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton= document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelpopup=document.querySelector(".cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var addbook=document.querySelector(".add-book")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">delete</button></h1>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var container=document.querySelector(".container")
var booktitleinput=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author")
var bookdescriptioninput=document.getElementById("book-description-input")

//var deletebook=document.querySelector(".deletebook")

//deletebook.addEventListener("click",function(event){
  //  event.target.parentElement.remove()
//})

function deletebook(event)
{
    event.target.parentElement.remove()
}