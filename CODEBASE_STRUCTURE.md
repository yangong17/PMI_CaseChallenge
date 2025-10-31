# PMI Case Study Challenge - Codebase Structure

## Executive Summary
This document provides a comprehensive overview of the PMI Case Study Challenge web application codebase. The application is structured as a single-page application with multiple HTML pages representing different phases of project management lifecycle.

## Core Files
| File | Size | Purpose |
|------|------|---------|
| `index.html` | 6.2KB | Main challenge portal page (home page) |
| `registration.html` | 4.8KB | Registration landing page |
| `navigation.js` | 14KB | Core navigation and interactivity |
| `styles.css` | 17KB | Global styling and layout |
| `nav.html` | 3.3KB | Navigation template |
| `README.md` | 5.6KB | Project documentation |

## Content Structure

### Introduction & Setup (3 files)
- `about.html` (7.1KB) - Detailed challenge overview
- `introduction.html` (1.5KB) - Initial user onboarding
- `guidelines.html` (12KB) - Challenge rules and requirements

### Project Management Phases

#### 1. Initiation Phase
- `initiation.html`
- `project-charter.html`
- `stakeholder-register.html`

#### 2. Planning Phase
- `planning.html`
- `wbs.html` - Work Breakdown Structure
- `gantt-chart.html`
- `cost-baseline.html`
- `risk-matrix.html`

#### 3. Execution Phase
- `execution.html`
- `unexpected-obstacle.html` (3.1KB)
- `change-request.html`

#### 4. Control Phase
- `control.html`
- `update-gantt.html`
- `update-cost-baseline.html`
- `cost-uncertainty.html`

#### 5. Closure Phase
- `closure.html`
- `lessons-learned.html`
- `final-presentation.html`
- `final-summary.html`

## File Size Analysis
- Largest Content Files:
  1. `styles.css` (17KB)
  2. `navigation.js` (14KB)
  3. `guidelines.html` (12KB)
  4. `about.html` (7.1KB)
  5. `index.html` (6.2KB) - Main challenge portal page (home page)
  6. `registration.html` (4.8KB) - Registration landing page

- Standard Page Size:
  - Most content pages are approximately 1.2-1.3KB
  - Consistent size suggests templated structure

## Making Changes

### Visual Changes
Edit `styles.css` for:
- Layout modifications
- Color schemes
- Responsive design
- Component styling

### Functional Changes
Edit `navigation.js` for:
- Navigation behavior
- Interactive features
- Dynamic content loading
- User experience flows

### Content Changes
- Each phase has dedicated HTML files
- Files follow consistent structure
- Most pages are 37-41 lines long
- Exception: Guidelines and About pages contain more detailed content

## Best Practices for Editing
1. Use version control (Git) for all changes
2. Test changes across multiple pages due to shared styling
3. Maintain consistent structure when adding new pages
4. Reference `nav.html` when adding new navigation items
5. Follow existing naming conventions for new files

---
*Note: All file sizes and line counts are accurate as of the current version. Future updates may modify these metrics.* 