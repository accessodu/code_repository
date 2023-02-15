  
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

//console.log('Chrome extension go?');

//let paragraphs = document.getElementsByTagName('p');
//for (elt of paragraphs) {
 // elt.style['background-color'] = '#FF00FF';
//}

//$('a').click(function() {
  //  alert('You\'re about to go to' +$(this).attr('href')+', Just Sayin\'');
  
 //});


 
//$('a').click(function() {
//alert($(this).attr('href'));
   
  
//$.ajax({
    // url:  $get.$(this).attr("href"),
    // complete: function(data) {
   ////    alert(data.responseText);
    // }
//});
  
    // var url = $(this).attr("href");
    // var newurl = $(this).attr("href", url);
    
  // function getURLParameter(url) {

    // return($("body").html(body));
    // }
      //alert(getURLParameter("sort",string));
    //  alert(getURLParameter(newurl));


//});


 
//window.onload=()=>{
  
 // var element=Array.prototype.slice.call(
 //   document.querySelectorAll(".a-list-item") 
 // )
 // alert(element)
 // console.log("this is the op",element)
//}

// window.onload = () => {
//   var div=document.querySelector(`.a-section.a-spacing-none.a-spacing-top-small`);
//   console.log("THE ELEMENT",div)
//   var button = document.createElement('input');
//   button.setAttribute("type","button");
//   button.setAttribute("value","Button Value");
//   button.setAttribute("name","CLICK MEEEEEEEE");
//   button.addEventListener(
//     "click",
//     () => {
//       alert("Button has been clicked");
//     },
//     false
//   );
//   div.appendChild(button);
//   console.log("Loaded")
//   //Get all the clickable links for products
//   var href = document.querySelectorAll(".a-link-normal.a-text-normal");
//   // Add an event listener to check when the link is pressed
//   href.forEach((item) => {
//     item.addEventListener("click", (event) => {
//       event.preventDefault(); //Prevent the href from loading the new page
//       var url = `https://www.amazon.com/${item.getAttribute("href")}`; //Generate our product info link
//       getDetails(url); //Get the details of the product and display the alert
//     });
//   });
// };
window.onload = () => {
  var div = document.querySelector(
    `.a-section.a-spacing-none.a-spacing-top-small`
  );

  var url =
    `https://www.amazon.com` +
    div.childNodes[1].childNodes[1].getAttribute("href");
  console.log(url)
  var button = document.createElement("input");
  button.setAttribute("type", "button");
  button.setAttribute("value", "Button Value");
  button.setAttribute("name", "CLICK MEEEEEEEE");
  button.addEventListener(
    "click",
    () => {
      getDetails(url);
    },
    false
  );
  div.appendChild(button);
  console.log("Loaded");
};
const getDetails = (url) => {
  fetch(url) //Get request of the generated url
    .then((res) => res.text()) // use the .text() of res (object) to convert the byte stream into plain text
    .then((text) => {
      var parser = new DOMParser(); //DomParser API
      var doc = parser.parseFromString(text, "text/html"); //parse into DOM query-able form
      var items = doc.querySelectorAll(
        ".a-unordered-list.a-vertical.a-spacing-mini span.a-list-item"
      ); //Query the details of the product
      var info = "";
      //Generate the new info to be displayed on the alert
      items.forEach((element) => {
        info += element.innerHTML;
      });
      alert(info); // Make an alert to display the product info
    })
    // If there is an error catch it and display it as an alert
    .catch((err) => alert(err));
};