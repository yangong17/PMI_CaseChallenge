/**
 * Navigation handler for the PMI-LA Case Study Challenge
 */

class Navigation {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.navigationData = {
            items: [
                { path: '/', title: 'Title Page' },
                { path: '/phase1.html', title: 'Phase 1: Intro to Case Study' },
                {
                    path: '/phase2_capex.html',
                    title: 'Phase 2: Capital Expenditure',
                    children: [
                        { path: '/phase3a1_high.html', title: 'Phase 3: High Tech' },
                        { path: '/phase3a2_low.html', title: 'Phase 3: Low Tech' }
                    ]
                },
                {
                    path: '/phase2_product.html',
                    title: 'Phase 2: Product',
                    children: [
                        { path: '/phase3b1_a.html', title: 'Phase 3: Product A' },
                        { path: '/phase3b2_b.html', title: 'Phase 3: Product B' },
                        { path: '/phase3b3_c.html', title: 'Phase 3: Product C' }
                    ]
                }
            ]
        };
    }

    /**
     * Generate navigation HTML
     * @returns {string} Navigation HTML
     */
    generateNavigationHTML() {
        const navItems = this.navigationData.items.map(item => {
            let itemHtml = `<li>
                <a href="${item.path}" data-path="${item.path}">${item.title}</a>`;
            
            if (item.children) {
                const childrenHtml = item.children.map(child => `
                    <li class="sub-item">
                        <a href="${child.path}" data-path="${child.path}">${child.title}</a>
                    </li>
                `).join('');
                
                itemHtml += `<ul>${childrenHtml}</ul>`;
            }
            
            itemHtml += '</li>';
            return itemHtml;
        }).join('');

        return `
            <h1>PMI-LA Case Challenge</h1>
            <nav>
                <ul>${navItems}</ul>
            </nav>
        `;
    }

    /**
     * Update active state in navigation
     */
    updateActiveState() {
        const currentPath = window.location.pathname;
        const links = this.sidebar.querySelectorAll('a');
        
        links.forEach(link => {
            const linkPath = link.getAttribute('data-path');
            link.classList.remove('active', 'active-parent');
            
            if (linkPath === currentPath) {
                link.classList.add('active');
                
                // If it's a sub-item, highlight parent
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

    /**
     * Initialize navigation
     */
    async init() {
        try {
            // Generate and insert navigation
            this.sidebar.innerHTML = this.generateNavigationHTML();
            
            // Set initial active state
            this.updateActiveState();

            // Listen for route changes
            document.addEventListener('route-changed', () => {
                this.updateActiveState();
            });
        } catch (error) {
            console.error('Error initializing navigation:', error);
            // Retry initialization after delay
            setTimeout(() => this.init(), 1000);
        }
    }
}

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const navigation = new Navigation();
    navigation.init();
}); 