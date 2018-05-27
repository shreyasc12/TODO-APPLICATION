//to select unordered list
var ul = document.getElementById('list')
var li;


var addTodo = document.getElementById('add')
addTodo.addEventListener('click',()=>{

//console.log('its clicked')
var input = document.getElementById('input');
var item = input.value;
ul = document.getElementById('list');
var textnode = document.createTextNode(item);

if(item===''){
  //console.log('hey')
  //return false;
  var enterTodo = document.createElement('p')
  enterTodo.textContent = 'Enter your Todo:)'
  document.querySelector('body').appendChild(enterTodo);
}

else{
    li = document.createElement('li')    //creating li
    var checkBox = document.createElement('input')  //creating checkbox
    checkBox.type = 'checkBox';
    checkBox.setAttribute('id','check');  //to add id to checkbox

    //create label
    var label = document.createElement('label')

    //adding these on the web page


    ul.appendChild(li);
    li.appendChild(checkBox);
    label.appendChild(textnode);
    li.appendChild(label);

    ul.insertBefore(li,ul.childNodes[0]);
    //li.className = 'visual';
    setTimeout(()=>{
      li.className = 'visual'
    },3);      //if you want to add animation while adding the item


    input.value='';   //to clear whatever there is in the input box

}
})

var removeTodo = document.getElementById('remove')
removeTodo.addEventListener('click',removeItem)

function removeItem(){
    //console.log('its clicked');
    li = ul.children;            //it will return an array of all the li  (try by doing console log)
     for(let index = 0;index<li.length;index++)   //here we are iterating through each li
     {
       while (li[index] && li[index].children[0].checked)
       {
          //console.log(list[index])
         ul.removeChild(li[index])
       }
     }
}
//to remove all elements
// function AllremoveItem(){
//     //console.log('its clicked');
//     li = ul.children;            //it will return an array of all the li  (try by doing console log)
//      for(let index = 0;index<li.length;index++)   //here we are iterating through each li
//      {
//        while (li[index])
//        {
//
//          ul.removeChild(li[index])
//        }
//      }
// }
