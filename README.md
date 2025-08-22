# PMI-LA Case Study Challenge

A comprehensive, modern web-based project management lifecycle experience designed for educational purposes. This platform guides participants through all five phases of project management: Initiation, Planning, Execution, Control, and Closure.

## 🚀 Features

- **Modern, Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility First**: WCAG 2.1 compliant with keyboard navigation and screen reader support
- **Interactive Elements**: Mystery button scenarios, smooth animations, and enhanced UX
- **Performance Optimized**: Efficient caching, preloading, and optimized assets
- **Robust Architecture**: Modern JavaScript with error handling and fallback systems

## 📋 Project Structure

```
PMI_CaseStudyChallenge/
├── index.html              # Registration landing page
├── challenge.html          # Main challenge portal page
├── nav.html                 # Navigation component
├── styles.css               # Modern CSS with design system
├── navigation.js            # Enhanced navigation system
├── README.md               # Project documentation
│
├── Introduction/
├── ├── about.html          # About the challenge
├── ├── guidelines.html     # Challenge guidelines
├── └── introduction.html   # Business case introduction
│
├── 1. Initiation/
├── ├── initiation.html     # Phase overview
├── ├── project-charter.html     # 1.1 Laying the Foundation
├── └── stakeholder-register.html  # 1.2 Identifying Key Players
│
├── 2. Planning/
├── ├── planning.html       # Phase overview
├── ├── wbs.html           # 2.1 Building the Blueprint
├── ├── gantt-chart.html   # 2.2 Developing the Schedule
├── ├── cost-baseline.html # 2.3 Visualizing the Budget
├── ├── risk-matrix.html   # 2.4.1 Mapping the Risks
├── └── cost-uncertainty.html # 2.4.2 Simulating the Uncertain
│
├── 3. Execution/
├── ├── execution.html      # Phase overview
├── ├── unexpected-obstacle.html # 3.1 Unexpected Obstacle (3 scenarios)
├── ├── change-request.html # 3.2 Responding to Change
├── └── update-gantt.html  # 3.3 Adjusting the Timeline
│
├── 4. Control/
├── ├── control.html       # Phase overview
├── └── update-cost-baseline.html # 4.1 Realigning the Budget
│
└── 5. Closure/
    ├── closure.html       # Phase overview
    ├── final-presentation.html # 5.1 Final Presentation
    └── final-submission-instructions.html # Final Submission Instructions
```

## 🎨 Design System

The project uses a modern CSS design system with:

- **Color Palette**: Professional blue-gray theme with consistent color tokens
- **Typography**: System font stack for optimal readability
- **Spacing**: 8-point grid system for consistent layout
- **Components**: Reusable button, card, and navigation components
- **Responsive**: Mobile-first design with breakpoints at 768px and 1024px

## 🛠 Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with custom properties and grid/flexbox
- **Vanilla JavaScript**: ES6+ with modern browser APIs
- **No Dependencies**: Zero external libraries for maximum performance

## 🚦 Getting Started

1. **Local Development**:
   - Serve files through a local web server (not file://)
   - Recommended: `python -m http.server 8000` or `npx serve`
   - Open `http://localhost:8000` in your browser

2. **Production Deployment**:
   - Upload all files to web server
   - Ensure proper MIME types for `.html`, `.css`, `.js` files
   - Configure server for client-side routing if needed

## 🔧 Maintenance

### Adding New Sections

1. Create new HTML file following the template structure
2. Add navigation entry to `nav.html`
3. Update any relevant navigation links in existing files

### Customizing Styles

All styles are centralized in `styles.css` with CSS custom properties:

```css
:root {
  --primary-500: #3b82f6;    /* Primary brand color */
  --space-4: 1rem;           /* Base spacing unit */
  --radius-lg: 0.5rem;       /* Border radius */
}
```

### Navigation System

The `NavigationManager` class handles:
- Dynamic navigation loading
- Active state management
- Error handling and fallbacks
- Accessibility features
- Performance optimizations

## 📱 Browser Support

- **Modern Browsers**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **Mobile**: iOS Safari 13+, Chrome Mobile 80+
- **Features**: CSS Grid, ES6+, Fetch API, CSS Custom Properties

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimized
- High contrast mode support
- Reduced motion support
- Focus management

## 🚀 Performance Features

- **Caching**: Navigation component caching
- **Preloading**: Page prefetching on hover
- **Optimization**: Compressed assets and efficient CSS
- **Progressive Enhancement**: Works with JavaScript disabled

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Descriptive alt text
- Clean URLs

## 📞 Support

For technical issues or questions:

- **PMI-LA Community**: Discord channel
- **Office Hours**: Tuesday & Thursday, 6-8 PM PST
- **Email**: outreach@pmi-la.org

## 📝 License

Educational use only.

---

**Last Updated**: December 2024  
**Version**: 2.0.0 
