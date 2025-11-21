const modal= document.querySelector(".modal");

function dismissModal() 
{
    modal.style.display = "none";
}
document.querySelector(".btn").addEventListener("click",()=>{
    dismissModal()
})
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("uname").value;
    const password = document.getElementById("pwd").value;
    
    if (username === "sam" && password === "3009") {
        window.location.href = "index.html";
    }
    else{
        modal.style.display = "block";
    }
});
 
dismissModal()

function toggleNav() 
{
    
   const sidebar = document.querySelector(".nav-sidebar")
   const sidebarLinks = document.querySelector(".nav-sidebar ul");

   
    if(sidebar.style.width === "272px"){
        sidebar.style.width = "50px";
        sidebarLinks.style.visibility = "hidden";
    } else {
    
        sidebar.style.width = "272px";

        sidebarLinks.style.visibility = "visible";

    }


}
