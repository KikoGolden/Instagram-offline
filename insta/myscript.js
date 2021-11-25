//--------------------main


//--------------elements

//---------heart like
let heart = document.getElementById('like-btn');
let heartLiked = document.getElementById('liked-btn');

//---------save button
let saves = document.getElementById('Save-btn');
let saveSaved = document.getElementById('saved-btn');

let allLikes= document.getElementById('like-nums')
let likesNumber = 648;
allLikes.textContent = likesNumber;



//--------------------functions

//------like reaction
function like(){
  heartLiked.classList.remove('unlike');
  heart.classList.add('like');

  likesNumber++;
  allLikes.textContent = likesNumber;
}
function unlike(){
    heartLiked.classList.add('unlike');
    heart.classList.remove('like');
    
    likesNumber--;
    allLikes.textContent = likesNumber;
}

//------save reaction
function save(){
    saveSaved.classList.remove('unsave');
    saves.classList.add('save');
  }
  function unsave(){
      saveSaved.classList.add('unsave');
      saves.classList.remove('save');
  }

  //------toggle menu 
  let menuList = document.getElementById("menuList");
menuList.style.maxHeight = '0px';

function togglemenu(){

   if(menuList.style.maxHeight == '0px'){
       menuList.style.paddingTop = '10px';
       menuList.style.paddingBottom = '10px';
       menuList.style.maxHeight = '130px';
       setTimeout(function(){
           menuList.style.maxHeight = "0px"
           menuList.style.padding = "0px";
        },5000);
   }
   else{
    menuList.style.padding = '0';
       menuList.style.maxHeight = '0px';
   }
}

//------toggle save collections 
let collections = document.getElementById("save-collections");
collections.style.maxHeight = '0px';

let background = document.getElementById("darker-background");

function toggleCollections(){

   if(collections.style.maxHeight == '0px'){
    collections.style.paddingTop = '10px';
    collections.style.paddingBottom = '10px';
    collections.style.maxHeight = '330px';
 
    background.classList.add('show-dark');
   }
   else{
    collections.style.padding = '0';
    collections.style.maxHeight = '0px';
     
    background.classList.remove('show-dark');
   }
}

//-------adding to all collections
let contentChoosen= document.getElementById('collection-choosed');

function addedToMemes(){
 contentChoosen.textContent = 'Memes';
}
function addedToCars(){
  contentChoosen.textContent = 'Cars';
}
function addedToQuotes(){
  contentChoosen.textContent = 'Quotes';
}

//------added collection toggle
let wrapper = document.getElementById("wrapper-added");
wrapper.style.maxHeight = '0px';

function toggleAdded(){
  wrapper.style.maxHeight = "140px";
  setTimeout(hidewrapper,2000);
}
  function hidewrapper(){
    wrapper.style.maxHeight = '0px';
  }
