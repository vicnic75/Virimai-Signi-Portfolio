
const explorex=document.querySelector('#exp')
const button=['home','about','facebook','contacts','email']


function find(){
button.forEach((press)=>{
document.querySelector('#'+press).addEventListener('click',()=>{
explorex.innerHTML=`<div id="explore">
<h2>${press.toUpperCase()}</h2>
<p>${press}:..........</p>
<div/>
<img id='f300'src="F3000.png" alt="">`
})
})
}
find()
