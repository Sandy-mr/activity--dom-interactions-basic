//--------------------------------------------------------
//TASK 1: Add the text 'List of Friends' to .title element
//--------------------------------------------------------
var listfriend = document.querySelector("#app-container .title");

    listfriend.innerHTML = '<h3 class = "title">List of Friends</h3>';


//--------------------------------------------------------
//TASK 2: Put this array of strings as <li> elements
//        onto the friends list
//
//     BONUS: do it in reverse order.

var friendsList = ['Jimmy G.', 'Scotty M.', 'Patty L.', 'Kelly F.', 'Kitty S.']
// var friendsList = friendsList.reverse();
friendsList.reverse();
var ul = document.querySelector("#app-container .friends-list");
for (var i = 0; i < friendsList.length; i++) {
var li = document.createElement('li');
    li.textContent = friendsList[i];
    ul.appendChild(li);
}
//--------------------------------------------------------





//--------------------------------------------------------
//TASK 3: Make all of the text capitalized in the <li> elements with a
//        class of 'urgent'
//
//        BONUS: Capitalize AND make bold the elements with
//               a class of 'urgent'



var urgent = document.querySelectorAll(".urgent");
var list = document.querySelectorAll("li");

li = Array.from(list);

li.forEach(function (element) {
    liHtml = element.textContent.toUpperCase();
    element.innerHTML = liHtml;
});

urgent = Array.from(urgent);
console.log(urgent);
var urg = "<b>";
var urgentB = "</b>"
urgent.forEach(function (elem) {
    html = urg+ elem.textContent + urgentB;
    elem.innerHTML = html;
});



//--------------------------------------------------------
