# Pavan Chinchalpet's Portfolio

A modern, responsive portfolio website built with Next.js and TypeScript, featuring a professional dark theme design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14.2.31-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)
![React](https://img.shields.io/badge/React-18.3.1-blue)

## 🌟 Features

- **Modern Design**: Clean, professional dark theme with light blue accents
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and hover effects
- **Interactive Navigation**: Fixed navbar with smooth scrolling
- **Contact Form**: Functional contact form for inquiries
- **Project Showcase**: Detailed project cards with technology tags
- **Skills Visualization**: Interactive skill bars with percentages
- **Social Integration**: Links to GitHub, LinkedIn, and other platforms

## 🚀 Live Demo

Visit the live portfolio: [https://pavanchinchalpet.github.io/Portfolio/](https://pavanchinchalpet.github.io/Portfolio/)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: CSS-in-JS, Custom CSS
- **UI Components**: Custom components with professional styling
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   └── (main)/
│   │       ├── layout.tsx          # Main layout with navbar
│   │       ├── page.tsx            # Homepage with all sections
│   │       ├── about/page.tsx       # About page
│   │       ├── contact/page.tsx     # Contact page
│   │       └── projects/page.tsx    # Projects page
│   ├── components/
│   │   ├── Hero.tsx               # Hero section component
│   │   ├── About.tsx              # About section component
│   │   ├── Skills.tsx             # Skills section component
│   │   ├── Projects.tsx           # Projects section component
│   │   ├── Contact.tsx            # Contact section component
│   │   ├── Navbar.tsx             # Navigation component
│   │   └── Footer.tsx             # Footer component
│   ├── styles/
│   │   └── globals.css            # Global styles and theme
│   ├── theme/
│   │   ├── theme.ts               # Theme configuration
│   │   └── ThemeProvider.tsx      # Theme provider component
│   └── types/
│       └── index.ts               # TypeScript type definitions
├── public/
│   ├── images/                    # Project images and assets
│   └── favicon.ico               # Site favicon
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── README.md                     # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Dark theme (#0a0a0a, #1a1a1a)
- **Accent**: Light blue (#3b82f6, #06b6d4)
- **Text**: White (#ffffff) and light gray (#d1d5db)
- **Borders**: Dark gray (#333)

### Typography
- **Font Family**: Inter, system fonts
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable text with proper line height

### Animations
- Smooth scroll behavior
- Fade-in animations on scroll
- Hover effects on interactive elements
- Gradient text animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pavanchinchalpet/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Customization

### Personal Information
Update the following files with your information:

- `src/components/Hero.tsx` - Name and introduction
- `src/components/About.tsx` - Professional summary and stats
- `src/components/Contact.tsx` - Contact details and social links
- `src/components/Projects.tsx` - Your projects and descriptions

### Styling
- Modify `src/styles/globals.css` for global styles
- Update component styles for specific sections
- Change colors in the CSS variables section

### Images
- Add your project images to `public/images/`
- Update image paths in the Projects component
- Add your profile picture if desired

## 🎯 Sections Overview

### Hero Section
- Professional greeting with gradient text
- Brief introduction paragraph
- Call-to-action buttons

### About Section
- Professional summary
- Experience statistics
- Skills overview

### Skills Section
- Interactive skill bars
- Technology tags
- Additional skills display

### Projects Section
- Project cards with descriptions
- Technology stack tags
- GitHub and live demo links

### Contact Section
- Contact information
- Contact form
- Social media links

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1200px+ (Full layout)
- **Tablet**: 768px - 1199px (Adjusted layout)
- **Mobile**: < 768px (Mobile-first design)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `out` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Pavan Chinchalpet**
- Email: pavanchinchalpet@gmail.com
- LinkedIn: [linkedin.com/in/pavanchinchalpet](https://linkedin.com/in/pavanchinchalpet)
- GitHub: [github.com/pavanchinchalpet](https://github.com/pavanchinchalpet)
- Portfolio: [pavanchinchalpet.github.io/Portfolio/](https://pavanchinchalpet.github.io/Portfolio/)

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ by Pavan Chinchalpet
