function sayHI() {
    document.getElementById("title").textContent = "You clicked mehh!";

    setTimeout(function() {
        window.location.href = "page2.html";
    }, 2000);
    }
