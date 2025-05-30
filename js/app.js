/**
 * Main application script for PMI-LA Case Study Challenge
 */

class App {
    constructor() {
        this.utils = Utils;
        this.initialized = false;
    }

    /**
     * Initialize the application
     */
    async init() {
        if (this.initialized) return;

        try {
            // Initialize utility event listeners
            this.utils.initEventListeners();

            // Load initial content if needed
            const contentContainer = document.getElementById('content-container');
            if (!contentContainer.children.length) {
                await this.utils.handleRoute(window.location.pathname);
            }

            this.initialized = true;
            console.log('Application initialized successfully');
        } catch (error) {
            console.error('Error initializing application:', error);
            // Retry initialization after delay
            setTimeout(() => this.init(), 1000);
        }
    }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
}); 