let add= document.getElementById('add');
let list= document.getElementById('list');


//Add task
add.addEventListener("click",function(){
  if(document.getElementById('task').value!== ''){
  //create new task and dd it
  let newtask= document.createElement("LI");
  newtask.appendChild(document.createTextNode(document.getElementById('task').value));
  newtask.className='list-group-item';
  list.appendChild(newtask);


  //create delete button
  let newdelete= document.createElement("BUTTON");
  newdelete.appendChild(document.createTextNode('X'));
  newtask.appendChild(newdelete);
  newdelete.className='btn  btn-danger delete';
  list.appendChild(newtask);
}
else {
  alert('Pleace Enter Your Task!')
}
});


//Remove task
let close = document.getElementsByClassName("btn-danger");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
   list.removeChild(this.parentElement());
 }
}

//search box
let search =document.getElementById('search');
search.addEventListener("keyup",function(){
  let key =search.value.toLowerCase();

lis =document.getElementsByClassName('list-group-item');
Array.from(lis).forEach(function(item){
  let itemName=item.firstChild.textContent;
  if(itemName.toLowerCase().indexOf(key)!=-1){
    item.style.display='block';
  }
  else{
     item.style.display='none';
  }
});
});