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

  //------toggle comments
let commentMenu = document.getElementById('comment-menu');
commentMenu.style.width = '0px';

function toggleComments(){
    if(commentMenu.style.width == '0px'){
     commentMenu.style.width = "100%";
    }
    else{
    commentMenu.style.width = '0px';
    }
}

//------comment like reaction
//1st
let commentHeart = document.getElementById('comment-like');
let commentHeartLiked = document.getElementById('comment-unlike');
let allCommentLikes= document.getElementById('commentLikes')
let commentLikesNumber = 4170;
allCommentLikes.textContent = commentLikesNumber;

function commLike(){
  commentHeartLiked.classList.remove('unlike');
  commentHeart.classList.add('like');

  commentLikesNumber++;
  allCommentLikes.textContent = commentLikesNumber;
}
function commUnlike(){
    commentHeartLiked.classList.add('unlike');
    commentHeart.classList.remove('like');
    
    commentLikesNumber--;
    allCommentLikes.textContent = commentLikesNumber;
}
//2nd
let commentHeart2 = document.getElementById('comment-like2');
let commentHeartLiked2 = document.getElementById('comment-unlike2');
let allCommentLikes2= document.getElementById('commentLikes2')
let commentLikesNumber2 = 1202;
allCommentLikes2.textContent = commentLikesNumber2;

function commLike2(){
  commentHeartLiked2.classList.remove('unlike');
  commentHeart2.classList.add('like');

  commentLikesNumber2++;
  allCommentLikes2.textContent = commentLikesNumber2;
}
function commUnlike2(){
    commentHeartLiked2.classList.add('unlike');
    commentHeart2.classList.remove('like');
    
    commentLikesNumber2--;
    allCommentLikes2.textContent = commentLikesNumber2;
}
//3rd
let commentHeart3 = document.getElementById('comment-like3');
let commentHeartLiked3 = document.getElementById('comment-unlike3');
let allCommentLikes3= document.getElementById('commentLikes3')
let commentLikesNumber3 = 1111;
allCommentLikes3.textContent = commentLikesNumber3;

function commLike3(){
  commentHeartLiked3.classList.remove('unlike');
  commentHeart3.classList.add('like');

  commentLikesNumber3++;
  allCommentLikes3.textContent = commentLikesNumber3;
}
function commUnlike3(){
    commentHeartLiked3.classList.add('unlike');
    commentHeart3.classList.remove('like');
    
    commentLikesNumber3--;
    allCommentLikes3.textContent = commentLikesNumber3;
}
//4rd
let commentHeart4 = document.getElementById('comment-like4');
let commentHeartLiked4 = document.getElementById('comment-unlike4');
let allCommentLikes4= document.getElementById('commentLikes4')
let commentLikesNumber4 = 469;
allCommentLikes4.textContent = commentLikesNumber4;

function commLike4(){
  commentHeartLiked4.classList.remove('unlike');
  commentHeart4.classList.add('like');

  commentLikesNumber4++;
  allCommentLikes4.textContent = commentLikesNumber4;
}
function commUnlike4(){
    commentHeartLiked4.classList.add('unlike');
    commentHeart4.classList.remove('like');
    
    commentLikesNumber4--;
    allCommentLikes4.textContent = commentLikesNumber4;
}