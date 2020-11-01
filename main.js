let temptr=document.getElementsByClassName('tr3')
for (i=99;i>0;i--){
if(parseInt(temptr[i].children[3].innerText)<1){
temptr[i].remove()
}
}
