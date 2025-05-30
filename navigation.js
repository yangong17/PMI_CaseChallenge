document.addEventListener('DOMContentLoaded', async function() {
    // Function to load navigation
    async function loadNavigation() {
        try {
            const navPlaceholder = document.getElementById('nav-placeholder');
            if (!navPlaceholder) {
                console.error('Navigation placeholder not found');
                return;
            }

            const response = await fetch('nav.html');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const navHtml = await response.text();
            navPlaceholder.innerHTML = navHtml;

            // Set active page
            setActivePage();
        } catch (error) {
            console.error('Error loading navigation:', error);
            // Attempt to reload navigation after a short delay
            setTimeout(loadNavigation, 1000);
        }
    }

    // Function to set active page
    function setActivePage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const links = document.querySelectorAll('.sidebar a');
        
        links.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.remove('active', 'active-parent');
            
            if (href === currentPage) {
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
    }

    // Initial load of navigation
    await loadNavigation();

    // Handle navigation clicks
    document.addEventListener('click', async function(e) {
        const link = e.target.closest('a');
        if (!link || !link.href || link.target === '_blank') return;

        // Only handle internal links
        if (link.origin === window.location.origin) {
            e.preventDefault();
            const href = link.getAttribute('href');

            try {
                const response = await fetch(href);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                
                const html = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                
                // Update main content
                const mainContent = doc.querySelector('.main-content');
                if (mainContent) {
                    document.querySelector('.main-content').innerHTML = mainContent.innerHTML;
                }

                // Update URL and history
                window.history.pushState({}, '', href);
                
                // Update page title
                const newTitle = doc.title;
                if (newTitle) document.title = newTitle;

                // Update active state in navigation
                setActivePage();

                // Scroll to top
                window.scrollTo(0, 0);
            } catch (error) {
                console.error('Error during navigation:', error);
                // Fallback to traditional navigation
                window.location.href = href;
            }
        }
    });

    // Handle browser back/forward
    window.addEventListener('popstate', async function() {
        try {
            const href = window.location.pathname.split('/').pop() || 'index.html';
            const response = await fetch(href);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Update main content
            const mainContent = doc.querySelector('.main-content');
            if (mainContent) {
                document.querySelector('.main-content').innerHTML = mainContent.innerHTML;
            }

            // Update page title
            const newTitle = doc.title;
            if (newTitle) document.title = newTitle;

            // Update active state in navigation
            setActivePage();
        } catch (error) {
            console.error('Error during back/forward navigation:', error);
            window.location.reload();
        }
    });
}); 