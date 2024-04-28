let scroll_b = document.getElementById('scroll');
scroll_b.classList.add("hide");
window.onscroll = function(){ 
if (this.scrollY > screenY)scroll_b.classList.remove('hide');
else scroll_b.classList.add('hide');
};
scroll_b.onclick = ()=> window.scroll(0,0);
let list_b = document.getElementById('list_button');
let count = 0;
list_b.onclick = function(){
   count++;
   if (count %2 == 0) list.classList.add('hide');
   else list.classList.remove('hide')
};


let list = document.getElementById('list');
list.classList.add('float');
let float = document.getElementsByClassName('float')

let cover = document.getElementById('cover');
cover.onclick = function() {
    for(let i = 0 ; i < float.length ; i++){
        float[i].classList.add('hide')
    }
}
