function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function showPopup(){
    document.getElementById("popup").style.display = "flex";
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}

function goToCategory() {
    document.getElementById("category").scrollIntoView({
        behavior: "smooth"});
}

function showOffer(){
    document.getElementById("offerPopup").style.display = "flex";
}

function closeOffer(){
    document.getElementById("offerPopup").style.display = "none";
}

function saveAddress() {
    const address = document.getElementById("address").value;

    localStorage.setItem("userAddress", address);

    document.getElementById("displayAddress").textContent = address;
}

window.onload = function () {
    const savedAddress = localStorage.getItem("userAddress");

    if (savedAddress) {
        document.getElementById("displayAddress").textContent = savedAddress;
        document.getElementById("address").value = savedAddress;
    }
};

window.onload = function () {
    const savedAddress = localStorage.getItem("userAddress");

    if (savedAddress) {
        document.getElementById("displayAddress").textContent = savedAddress;
    }
};

window.addEventListener("DOMContentLoaded", () => {
    const savedAddress = localStorage.getItem("userAddress");

    const display = document.getElementById("displayAddress");

    if (display && savedAddress) {
        display.textContent = savedAddress;
    }
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    if(!form.checkValidity()){
        e.preventDefault();              // Stop form submission
        document.getElementById("errorPopup").style.display = "flex";
    }

});

function closeErrorPopup(){
    document.getElementById("errorPopup").style.display = "none";
}