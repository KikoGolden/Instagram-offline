//--------------------main

//--------loading screen
$(window).on("load", function () {
  $("#loader").fadeOut(1000);
  $("#page").fadeIn(1000);
});

//--------------elements

//---------heart like
let heart = document.getElementById("like-btn");
let heartLiked = document.getElementById("liked-btn");

//---------save button
let saves = document.getElementById("Save-btn");
let saveSaved = document.getElementById("saved-btn");

let allLikes = document.getElementById("like-nums");
let likesNumber = 648;
allLikes.textContent = likesNumber;

//--------------------functions

//------like reaction
function like() {
  heartLiked.classList.remove("unlike");
  heart.classList.add("like");

  likesNumber++;
  allLikes.textContent = likesNumber;
}
function unlike() {
  heartLiked.classList.add("unlike");
  heart.classList.remove("like");

  likesNumber--;
  allLikes.textContent = likesNumber;
}

//------save reaction
function save() {
  saveSaved.classList.remove("unsave");
  saves.classList.add("save");
}
function unsave() {
  saveSaved.classList.add("unsave");
  saves.classList.remove("save");
}

//------toggle menu
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function togglemenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.paddingTop = "10px";
    menuList.style.paddingBottom = "10px";
    menuList.style.maxHeight = "130px";
    setTimeout(function () {
      menuList.style.maxHeight = "0px";
      menuList.style.padding = "0px";
    }, 3000);
  } else {
    menuList.style.padding = "0";
    menuList.style.maxHeight = "0px";
  }
}
function toggleBackMenu() {
  menuList.style.padding = "0";
  menuList.style.maxHeight = "0px";
}

//------toggle save collections
let collections = document.getElementById("save-collections");
collections.style.maxHeight = "0px";

let background = document.getElementById("darker-background");

function toggleCollections() {
  if (collections.style.maxHeight == "0px") {
    collections.style.paddingTop = "10px";
    collections.style.paddingBottom = "10px";
    collections.style.maxHeight = "330px";

    background.classList.add("show-dark");
  } else {
    collections.style.padding = "0";
    collections.style.maxHeight = "0px";

    background.classList.remove("show-dark");
  }
}

//-------adding to all collections
let contentChoosen = document.getElementById("collection-choosed");

function addedToMemes() {
  contentChoosen.textContent = "Memes";
}
function addedToCars() {
  contentChoosen.textContent = "Cars";
}
function addedToQuotes() {
  contentChoosen.textContent = "Quotes";
}

//------added collection toggle
let wrapper = document.getElementById("wrapper-added");
wrapper.style.maxHeight = "0px";

function toggleAdded() {
  wrapper.style.maxHeight = "140px";
  setTimeout(hidewrapper, 2000);
}
function hidewrapper() {
  wrapper.style.maxHeight = "0px";
}

//------toggle comments
let commentMenu = document.getElementById("comment-menu");
commentMenu.style.width = "0px";

function toggleComments() {
  if (commentMenu.style.width == "0px") {
    commentMenu.style.width = "100%";
  } else {
    commentMenu.style.width = "0px";
  }
}

//------comment like reaction
//1st
let commentHeart = document.getElementById("comment-like");
let commentHeartLiked = document.getElementById("comment-unlike");
let allCommentLikes = document.getElementById("commentLikes");
let commentLikesNumber = 4170;
allCommentLikes.textContent = commentLikesNumber;

function commLike() {
  commentHeartLiked.classList.remove("unlike");
  commentHeart.classList.add("like");

  commentLikesNumber++;
  allCommentLikes.textContent = commentLikesNumber;
}
function commUnlike() {
  commentHeartLiked.classList.add("unlike");
  commentHeart.classList.remove("like");

  commentLikesNumber--;
  allCommentLikes.textContent = commentLikesNumber;
}
//2nd
let commentHeart2 = document.getElementById("comment-like2");
let commentHeartLiked2 = document.getElementById("comment-unlike2");
let allCommentLikes2 = document.getElementById("commentLikes2");
let commentLikesNumber2 = 1202;
allCommentLikes2.textContent = commentLikesNumber2;

function commLike2() {
  commentHeartLiked2.classList.remove("unlike");
  commentHeart2.classList.add("like");

  commentLikesNumber2++;
  allCommentLikes2.textContent = commentLikesNumber2;
}
function commUnlike2() {
  commentHeartLiked2.classList.add("unlike");
  commentHeart2.classList.remove("like");

  commentLikesNumber2--;
  allCommentLikes2.textContent = commentLikesNumber2;
}
//3rd
let commentHeart3 = document.getElementById("comment-like3");
let commentHeartLiked3 = document.getElementById("comment-unlike3");
let allCommentLikes3 = document.getElementById("commentLikes3");
let commentLikesNumber3 = 1111;
allCommentLikes3.textContent = commentLikesNumber3;

function commLike3() {
  commentHeartLiked3.classList.remove("unlike");
  commentHeart3.classList.add("like");

  commentLikesNumber3++;
  allCommentLikes3.textContent = commentLikesNumber3;
}
function commUnlike3() {
  commentHeartLiked3.classList.add("unlike");
  commentHeart3.classList.remove("like");

  commentLikesNumber3--;
  allCommentLikes3.textContent = commentLikesNumber3;
}
//4rd
let commentHeart4 = document.getElementById("comment-like4");
let commentHeartLiked4 = document.getElementById("comment-unlike4");
let allCommentLikes4 = document.getElementById("commentLikes4");
let commentLikesNumber4 = 469;
allCommentLikes4.textContent = commentLikesNumber4;

function commLike4() {
  commentHeartLiked4.classList.remove("unlike");
  commentHeart4.classList.add("like");

  commentLikesNumber4++;
  allCommentLikes4.textContent = commentLikesNumber4;
}
function commUnlike4() {
  commentHeartLiked4.classList.add("unlike");
  commentHeart4.classList.remove("like");

  commentLikesNumber4--;
  allCommentLikes4.textContent = commentLikesNumber4;
}

//------comment publish input
const inputField = document.getElementById("input");
const publishBtn = document.getElementById("comment-publish");
const ul = document.getElementById("comms-all");

inputField.onkeyup = () => {
  let userData = inputField.value;
  if (userData.trim() != 0) {
    publishBtn.classList.add("active");
  } else {
    publishBtn.classList.remove("active");
  }
};

publishBtn.onclick = () => {
  let userData = inputField.value;
  let getLocalStorage = localStorage.getItem("New Comment");
  if (getLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }
  inputField.value = null;
  listArr.push(userData);
  localStorage.setItem("New Comment", JSON.stringify(listArr));
  showTasks();
  publishBtn.classList.remove("active");
};

function showTasks() {
  let getLocalStorage = localStorage.getItem("New Comment");
  if (getLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }
  let newLiTag = "";
  listArr.forEach((element, index) => {
    newLiTag = `<li class="comments">
    <img class="comm-pfp" src="images/prf.jpg">
    <div class="comment-wrapper">
      <div class="user-info-wrapper">
       <div class="comment">
        <strong>kikogoldena</strong>
        ${element}
       </div>
      </div>
       <div class="comment-info">
          <div>1 сек.</div>
          <div class="comment-reply">Отговор</div>
       </div>
    </div>
    <img class="comm-like" onclick="exeption()" src="images/heart.png">
   </li>`;
  });
  ul.innerHTML += newLiTag;
}

//---cant like own post exeption
function exeption() {
  alert("Can't like your own comments!");
}

//---------toggle description
let descriptionToggleBtn = document.getElementById("description-more");
let postDescription = document.getElementById("post-description");

function toggleDescription() {
  postDescription.innerHTML =
    '<strong>Marvel</strong> DUDE! 🚨 Spider-Monday is HERE! 🚨 Tickets are on sale NOW for <span class="hashtag">#SpiderManNoWayHome</span>! Hurry, you definitely want to be the FIRST to see it exclusively in movie theaters December 17!';
}

//---------messages navigation element selected
let messagesEl1 = document.getElementById("messages-nav1");
let messagesEl2 = document.getElementById("messages-nav2");
let messagesEl3 = document.getElementById("messages-nav3");

//1
function currElementMessage1() {
  if (!messagesEl1.classList.contains("current-messages-nav")) {
    messagesEl1.classList.add("current-messages-nav");
  }

  if (messagesEl2.classList.contains("current-messages-nav")) {
    messagesEl2.classList.remove("current-messages-nav");
  }
  if (messagesEl3.classList.contains("current-messages-nav")) {
    messagesEl3.classList.remove("current-messages-nav");
  }
}

//2
function currElementMessage2() {
  if (!messagesEl2.classList.contains("current-messages-nav")) {
    messagesEl2.classList.add("current-messages-nav");
  }

  if (messagesEl1.classList.contains("current-messages-nav")) {
    messagesEl1.classList.remove("current-messages-nav");
  }
  if (messagesEl3.classList.contains("current-messages-nav")) {
    messagesEl3.classList.remove("current-messages-nav");
  }
}

//3
function currElementMessage3() {
  if (!messagesEl3.classList.contains("current-messages-nav")) {
    messagesEl3.classList.add("current-messages-nav");
  }

  if (messagesEl2.classList.contains("current-messages-nav")) {
    messagesEl2.classList.remove("current-messages-nav");
  }
  if (messagesEl1.classList.contains("current-messages-nav")) {
    messagesEl1.classList.remove("current-messages-nav");
  }
}

//---toggle messages
let messagesMenu = document.getElementById("messages-menu");
let msgSearch = document.getElementById("search-msg-wrapper");
messagesMenu.style.width = "0px";
msgSearch.style.visibility = "hidden";

function toggleMessages() {
  if (messagesMenu.style.width == "0px") {
    messagesMenu.style.width = "100%";
    messagesMenu.style.height = "100%";
    msgSearch.style.visibility = "visible";
  } else {
    messagesMenu.style.width = "0px";
    msgSearch.style.visibility = "hidden";
  }
}

//-----story slider
function Slider() {
  const carouselSlides = document.querySelectorAll(".part");
  const btnPrev = document.querySelector(".prev");
  const btnNext = document.querySelector(".next");
}

//-----toggle options
let options = document.getElementById("options-toggle");
options.style.maxHeight = "0px";

let background2 = document.getElementById("darker-background2");

function toggleOptions() {
  if (options.style.maxHeight == "0px") {
    options.style.paddingTop = "10px";
    options.style.paddingBottom = "10px";
    options.style.maxHeight = "330px";

    background2.classList.add("show-dark");
  } else {
    options.style.padding = "0";
    options.style.maxHeight = "0px";

    background2.classList.remove("show-dark");
  }
}
//------copy button
let copyBtn = document.getElementById("copy-btn");
var pageLink = "https://drippymanegldn.000webhostapp.com/";
copyBtn.onclick = function () {
  navigator.clipboard.writeText(pageLink);
};

let savedLinkObject = document.getElementById("saved-link-wrapper");

function saveLink() {
  savedLinkObject.classList.remove("fade-out");
  savedLinkObject.classList.remove("dont-show");
  setTimeout(function () {
    savedLinkObject.classList.add("fade-out");
  }, 1300);
  setTimeout(function () {
    savedLinkObject.classList.add("dont-show");
  }, 1500);
}

//---------report button
let reportMenu = document.getElementById("reportMenu");
reportMenu.style.maxHeight = "0px";

let background3 = document.getElementById("darker-background3");

function reportMenuToggle() {
  if (reportMenu.style.maxHeight == "0px") {
    reportMenu.style.paddingTop = "10px";
    reportMenu.style.paddingBottom = "10px";
    reportMenu.style.maxHeight = "90%";

    background3.classList.add("show-dark");
  } else {
    reportMenu.style.padding = "0";
    reportMenu.style.maxHeight = "0px";

    background3.classList.remove("show-dark");
  }
}

//---Delete Post Function
function deletePost() {
  let postReported = document.getElementById("main-post-content");
  if (postReported.classList.contains("dont-show")) {
    postReported.classList.remove("dont-show");
  } else {
    postReported.classList.add("dont-show");
  }
}

//---Delete Reported Post
let postReportedMsg = document.getElementById("reported-contents-wrapper");

function reportedPostDel() {

 deletePost();

  if (postReportedMsg.classList.contains("remove")) {
    postReportedMsg.classList.remove("remove");
  } else {
    postReportedMsg.classList.add("remove");
  }
}

//----Hide Post 
let postHidedMsg = document.getElementById("hide-contents-wrapper");

function hidedPostMenuToggle(){

deletePost();

if (postHidedMsg.classList.contains("remove")) {
  postHidedMsg.classList.remove("remove");
} else {
  postHidedMsg.classList.add("remove");
}

}

//-----Swiper
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let slider = document.getElementById("slider");

prevBtn.onclick = function(){
    if (slider.classList.contains('nextButton')) {
      slider.classList.remove('nextButton');
    }
    else{
      slider.classList.add('prevButton');
    }
}
nextBtn.onclick = function(){
    if (slider.classList.contains('prevButton')) {
      slider.classList.remove('prevButton');
      slider.classList.add('nextButton');
    }
    else{
      slider.classList.add('nextButton');
    }
}