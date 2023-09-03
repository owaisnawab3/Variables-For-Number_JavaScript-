let age = 18;
alert("I Am " + age + " Years Old.");


// let visitorCount = 14
// alert("You have visited this site " + visitorCount + " times") 
// Check if localStorage supports and is available
if (typeof(Storage) !== "undefined") {
    // Check if the visitorCount key exists in localStorage
    if (localStorage.getItem("visitorCount")) {
      // Retrieve the current visitor count
      var visitorCount = parseInt(localStorage.getItem("visitorCount"));
      visitorCount++; // Increment the count
      localStorage.setItem("visitorCount", visitorCount); // Store the updated count
    } else {
      // If the visitorCount key doesn't exist, set it to 1 for the first visit
      localStorage.setItem("visitorCount", 1);
      var visitorCount = 1;
    }
  
    // Show the visitor count in an alert box
    alert("You have visited this site " + visitorCount + " times.");
  } else {
    // If localStorage is not supported or available, display a message
    alert("LocalStorage is not available. Visitor count cannot be tracked.");
  }

let birthYear = "2005."

document.write("My Birth year is ", + birthYear + " <br/> Data Type of my declared variable is number")
console.log("My Birth year is " + birthYear + "\n Data Type of my declared variable is number")

let visitorName = "Owais Nawab";
let productTitle = "5 T-shirt";
let store = "Shopify"


console.log(visitorName + " ordered " + productTitle +"(S) On " + store + " Clothing store ")

document.write("<br/>Owais Nawab ordered 5 T-shirt(S) On Shopify Clothing store")