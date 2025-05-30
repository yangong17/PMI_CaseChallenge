document.addEventListener('DOMContentLoaded', () => {
    // Function to update active menu item
    const updateActiveMenu = (href) => {
        // Remove active class from all links
        document.querySelectorAll('.sidebar a').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current page link
        const currentLink = document.querySelector(`.sidebar a[href="${href}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    };

    // Set initial active menu item
    updateActiveMenu(window.location.pathname.split('/').pop() || 'index.html');

    // Handle all navigation links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            try {
                // Fetch the new page content
                const response = await fetch(href);
                const html = await response.text();
                
                // Create a temporary element to parse the HTML
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                
                // Update the main content
                document.querySelector('.main-content').innerHTML = doc.querySelector('.main-content').innerHTML;
                
                // Update the page title
                document.title = doc.title;
                
                // Update the URL without reloading
                history.pushState({}, '', href);
                
                // Update active menu item
                updateActiveMenu(href);
                
                // Scroll to top
                window.scrollTo(0, 0);
            } catch (error) {
                console.error('Error loading page:', error);
                // Fallback to normal navigation if fetch fails
                window.location.href = href;
            }
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', async () => {
        const href = window.location.pathname.split('/').pop() || 'index.html';
        try {
            const response = await fetch(href);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            document.querySelector('.main-content').innerHTML = doc.querySelector('.main-content').innerHTML;
            document.title = doc.title;
            updateActiveMenu(href);
        } catch (error) {
            console.error('Error loading page:', error);
            window.location.reload();
        }
    });
}); 