var Close =document.getElementById('close')
var boxContainer=document.getElementById('boxContainer')
var item=document.getElementsByClassName('item')
var boxItem=document.getElementById('boxItem')
var imgs = Array.from(document.querySelectorAll('img')) 
var pref =document.getElementById('pref')

var next=document.getElementById('next')

 
Close.addEventListener('click',function(){
    boxContainer.style.display="none"

})

var imgIndex=0

for(var i=0 ; i< imgs.length ;i++){
      imgs[i].addEventListener('click',function(e){
      
      boxContainer.style.display="flex"
      boxItem.style.backgroundImage=`url(${e.target.src})`
      console.log(e.target.src)
      
    })
}  

next.addEventListener('click',nextImg)
function nextImg(){
    imgIndex++
    if(imgIndex==imgs.length){
        imgIndex=0
    }

    boxItem.style.backgroundImage=`url(${imgs[imgIndex].src})` //x

}

pref.addEventListener('click',prefImg)

function prefImg(){
  
    imgIndex--
    if(imgIndex<0){
        imgIndex=imgs.length-1
    }

    boxItem.style.backgroundImage=`url(${imgs[imgIndex].src})` 
}
/// key bord

document.addEventListener('keyup',function(e){
    if(e.key=="ArrowRight"){
        nextImg()
    }else if(e.key=="ArrowLeft"){
        prefImg()
    }else if(e.key=="Escape"){
        boxContainer.style.display="none"
    }
})

/////
boxContainer.addEventListener('click',function(e){
    boxContainer.style.display="none"
    boxItem.addEventListener('click',function(e){
        e.stopPropagation()
    })
})