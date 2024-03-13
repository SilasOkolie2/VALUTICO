function toggleMenu() {
    const nav = document.querySelector("nav");
    const ul = document.querySelector("nav > ul");
    const cancelBtn = document.querySelector("#cancelBtn");

    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "block";
        ul.classList.add('vertical-menu');
        positionMenu();
        console.log("display is block");

        if (!cancelBtn) {
            createCancelButton();
        }
    } else {
        nav.style.display = "none";
        ul.classList.remove('vertical-menu');
        console.log("display is none");

        if (cancelBtn) {
            cancelBtn.remove();
        }
    }
}

function positionMenu() {
    const nav = document.querySelector("nav");
    const ul = document.querySelector("nav > ul");
    const navRect = nav.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (navRect.bottom > windowHeight) {
    
        const newTop = windowHeight - navRect.height;
        nav.style.top = newTop + "px";
    }
}

function createCancelButton() {
    const nav = document.querySelector("nav");
    const cancelBtn = document.createElement("button");
    cancelBtn.innerHTML = "&#x274C;"; 
    cancelBtn.id = "cancelBtn";
    cancelBtn.addEventListener("click", function() {
        toggleMenu();
    });
    nav.appendChild(cancelBtn);
}

window.addEventListener("resize", function() {
    const nav = document.querySelector("nav");
    const ul = document.querySelector("nav > ul");

    if (nav.style.display === "block") {
        positionMenu();
    }
});
