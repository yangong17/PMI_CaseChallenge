function updateCountdown() {
    const today = new Date();
    
    // Update current date with formatted display
    document.getElementById('current-date').textContent = 
        today.toLocaleDateString('en-US', { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    
    // Find next milestone
    const nextMilestone = moduleConfig.milestones.find(milestone => {
        const milestoneDate = new Date(milestone.date);
        return milestoneDate > today;
    });
    
    // Calculate days until next milestone or final presentation
    if (nextMilestone) {
        const daysUntilNext = Math.ceil((new Date(nextMilestone.date) - today) / (1000 * 60 * 60 * 24));
        document.getElementById('next-module-countdown').textContent = 
            `${daysUntilNext} ${nextMilestone.message}`;
    } else {
        const finalDate = new Date(moduleConfig.finalPresentationDue);
        if (today < finalDate) {
            const daysUntilFinal = Math.ceil((finalDate - today) / (1000 * 60 * 60 * 24));
            document.getElementById('next-module-countdown').textContent = 
                `${daysUntilFinal} days until final presentation due`;
        } else {
            document.getElementById('next-module-countdown').textContent = 
                'Challenge completed!';
        }
    }
    
    // Calculate days until final presentation
    const finalDate = new Date(moduleConfig.finalPresentationDue);
    const daysUntilFinal = Math.ceil((finalDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntilFinal > 0) {
        document.getElementById('final-presentation-countdown').textContent = 
            `${daysUntilFinal} days remaining`;
    } else {
        document.getElementById('final-presentation-countdown').textContent = 
            'Final presentation due today!';
    }
    
    // Update progress bar
    const startDate = new Date(moduleConfig.milestones[0].date);
    const totalDays = (finalDate - startDate) / (1000 * 60 * 60 * 24);
    const daysPassed = (today - startDate) / (1000 * 60 * 60 * 24);
    const progress = Math.min(100, Math.max(0, (daysPassed / totalDays) * 100));
    const progressElement = document.getElementById('progress-fill');
    progressElement.style.width = `${progress}%`;
    
    // Update progress text
    const progressText = progressElement.querySelector('.progress-text');
    if (progressText) {
        progressText.textContent = `${Math.round(progress)}%`;
    }
}

// Update countdown every minute
updateCountdown();
setInterval(updateCountdown, 60 * 1000);

// Update when the page loads
document.addEventListener('DOMContentLoaded', updateCountdown); 