/**
 * Utility functions for the PMI-LA Case Study Challenge
 */

const Utils = {
    /**
     * Load HTML content from a URL
     * @param {string} url - The URL to fetch content from
     * @returns {Promise<string>} The HTML content
     */
    async loadContent(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.text();
        } catch (error) {
            console.error('Error loading content:', error);
            throw error;
        }
    },

    /**
     * Update page meta information
     * @param {string} title - The page title
     * @param {string} path - The current path
     */
    updatePageMeta(title, path) {
        document.title = `${title} - PMI-LA Case Study Challenge`;
        window.history.pushState({path}, '', path);
    },

    /**
     * Handle client-side routing
     * @param {string} path - The path to route to
     * @returns {Promise<void>}
     */
    async handleRoute(path) {
        try {
            const content = await this.loadContent(path);
            const parser = new DOMParser();
            const doc = parser.parseFromString(content, 'text/html');
            
            // Extract and update content
            const mainContent = doc.querySelector('#content-container');
            if (mainContent) {
                document.getElementById('content-container').innerHTML = mainContent.innerHTML;
            }

            // Update page metadata
            const title = doc.title.split(' - ')[0];
            this.updatePageMeta(title, path);

            // Scroll to top
            window.scrollTo(0, 0);
        } catch (error) {
            console.error('Error handling route:', error);
            // Fallback to traditional navigation
            window.location.href = path;
        }
    },

    /**
     * Initialize event listeners
     */
    initEventListeners() {
        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link || !link.href || link.target === '_blank') return;

            // Only handle internal links
            if (link.origin === window.location.origin) {
                e.preventDefault();
                this.handleRoute(link.pathname);
            }
        });

        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.path) {
                this.handleRoute(e.state.path);
            }
        });
    }
}; 