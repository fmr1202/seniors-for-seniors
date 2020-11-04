function showNav() {
    if (document.getElementById('theDrawer').style.display === "block"){
        document.getElementById('nav-button').src = "assets/nav-open.svg";
        document.getElementById('theDrawer').style.display = "none";
    }
    else{
        document.getElementById('theDrawer').style.display = "block";
        document.getElementById('nav-button').src = "assets/nav-close.svg";
    }
        
    }
