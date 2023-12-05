// Fetch the navigation bar element
const navbar = document.getElementById('navbar');
console.log(navbar);
// Create an array of your page links
const links = [
    { text: 'Home', href: 'index.html'},
    { text: 'Page 1', href: 'page1.html' },
    { text: 'Page 2', href: 'page2.html' },
    { text: 'Page 3', href: 'page3.html' }
    // Add more links as needed
];

// Function to create navigation links
function createNavLinks() {
    // Loop through the links array
    links.forEach(link => {
        // Create <a> element
        const a = document.createElement('a');
        a.textContent = link.text;
        a.href = link.href;

        // Append <a> to the navbar
        navbar.appendChild(a);
    });
}

// Call the function to create navigation links
createNavLinks();