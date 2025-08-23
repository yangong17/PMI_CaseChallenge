// Get DOM elements
function getElements() {
    return {
        currentDate: document.getElementById('current-date'),
        progressFill: document.getElementById('progress-fill'),
        progressText: document.querySelector('.progress-text'),
        nextModule: document.getElementById('next-module-countdown'),
        finalPresentation: document.getElementById('final-presentation-countdown')
    };
}

// Format date to readable string
function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Calculate days between dates
function getDaysBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((date1 - date2) / oneDay));
}

// Format countdown text
function formatCountdown(days) {
    if (days < 0) return 'Past due';
    if (days === 0) return 'Due today';
    return `${days} days remaining`;
}

// Update countdown widget
function updateCountdown() {
    // Check if config exists
    if (!window.moduleConfig) return;
    
    // Get all required elements
    const elements = getElements();
    if (!elements.currentDate || !elements.progressFill || !elements.progressText || 
        !elements.nextModule || !elements.finalPresentation) return;

    const now = new Date();
    elements.currentDate.textContent = formatDate(now);

    const startDate = new Date(window.moduleConfig.milestones[0].date);
    const finalDate = new Date(window.moduleConfig.finalPresentationDue);

    // Find next milestone
    const nextMilestone = window.moduleConfig.milestones.find(milestone => {
        const milestoneDate = new Date(milestone.date);
        return milestoneDate > now;
    });

    // Calculate progress
    let progress = 0;
    if (now >= startDate) {
        const totalDays = getDaysBetween(startDate, finalDate);
        const daysElapsed = getDaysBetween(startDate, now);
        progress = Math.min((daysElapsed / totalDays) * 100, 100);
    }

    // Update progress bar
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `${Math.round(progress)}%`;

    // Update next milestone
    if (nextMilestone) {
        const daysToNext = getDaysBetween(now, new Date(nextMilestone.date));
        elements.nextModule.innerHTML = `${nextMilestone.name}: ${formatCountdown(daysToNext)}`;
    } else {
        elements.nextModule.textContent = 'All modules available';
    }

    // Update final presentation countdown
    const daysToFinal = getDaysBetween(now, finalDate);
    elements.finalPresentation.textContent = formatCountdown(daysToFinal);
}

// Export for navigation.js
window.updateCountdown = updateCountdown;
