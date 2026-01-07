# More Classifieds Redesign

This project is a React-based redesign of More.co.ke, focusing on SEO optimization, a modern registration flow, and a robust enquiry system.

## SEO Audit Summary (more.co.ke)

### Current Findings
- Title: More Classifieds
- Description: Turn visibility into sales with More Classifieds.
- headings: The home page lacks a clear H1 tag for primary keyword targeting.
- Images: Several images lack descriptive alt tags.
- Mobile: Technical implementation is responsive, but visual hierarchy needs improvement.

### Recommendations
- Implement a single, keyword-rich H1 tag on the homepage.
- Add descriptive alt attributes to all images to improve accessibility and image search rankings.
- Improve meta descriptions to include local keywords (e.g., "Kenya").

## New Design Implementations

### React Registration Page
- Location: /register
- Features:
  - Split-screen layout.
  - Dynamic form labels: Automatically switches between "Full Name" and "Company Name" based on account type selection.
  - Social Auth: Integrated UI for Google and Facebook login.
  - Mobile Responsive: Stacks vertically on small screens with optimized tap targets.

### Robust Enquiry Form
- Location: /enquiry
- Features:
  - Department and Country targeting.
  - Priority Level selector (Low, Medium, High).
  - Custom file upload interface.
  - Glassmorphic UI design matching the overall brand aesthetic.

## Tech Stack
- Frontend: React 19, Vite, React Router 7.
- Styling: Pure CSS3 with modern variables.

## Getting Started
1. Install dependencies: `npm install`
2. Run locally: `npm run dev`
3. Build: `npm run build`
