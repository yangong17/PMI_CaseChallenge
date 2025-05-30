document.addEventListener('DOMContentLoaded', async function() {
    // Load the navigation
    const response = await fetch('nav.html');
    const navHtml = await response.text();
    
    // Insert the navigation
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHtml;
    }
    
    // Set active page
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    const links = document.querySelectorAll('.sidebar a');
    
    links.forEach(link => {
        const pageName = link.getAttribute('data-page');
        if (pageName === currentPage) {
            link.classList.add('active');
            
            // If it's a sub-item, also highlight parent
            const parentLi = link.closest('li.sub-item');
            if (parentLi) {
                const parentLink = parentLi.parentElement.previousElementSibling;
                if (parentLink) {
                    parentLink.classList.add('active-parent');
                }
            }
        }
    });
}); 