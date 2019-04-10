console.log ("Collapse Sidebar Menu JavaScript Connected!");

// Set the width of the sidebar to 220px and the left margin of the page content to 220px
function openNav() {
    document.getElementById("mySidebar").style.width = "220px";
    //document.getElementById("main").style.marginLeft = "220px";       // Use this line of code if you want the hamburger menu bar to slide to the right with mySidebar
}
  
  // Set the width of the sidebar to 0 and the left margin of the page content to 0
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    //document.getElementById("main").style.marginLeft = "0";           // Use this line of code if you want the hamburger menu bar to slide back to the left with mySidebar
}