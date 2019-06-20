/**
 * Capture scroll event
 */
window.onscroll = () => {
    // Find nav element
    const nav = document.getElementById("nav");
    // If scrollY > 50 then add class "bg-blacked" to nav
    if (window.scrollY > 50) {
        nav.classList.add("bg-blacked");
    } else {
        nav.classList.remove("bg-blacked");
    }
}
