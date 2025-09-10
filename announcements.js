document.addEventListener('DOMContentLoaded', function() {
    const announcementTriggers = document.querySelectorAll('.announcement-trigger');
    
    announcementTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const contentId = this.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            
            // Toggle the expanded state
            this.setAttribute('aria-expanded', !isExpanded);
            content.setAttribute('aria-hidden', isExpanded);
            
            // Close other announcements
            announcementTriggers.forEach(otherTrigger => {
                if (otherTrigger !== trigger) {
                    const otherId = otherTrigger.getAttribute('aria-controls');
                    const otherContent = document.getElementById(otherId);
                    otherTrigger.setAttribute('aria-expanded', 'false');
                    otherContent.setAttribute('aria-hidden', 'true');
                }
            });
        });
    });
});
