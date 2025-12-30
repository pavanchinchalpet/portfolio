# Pavan Chinchalpet's Portfolio

A high-performance, responsive portfolio website built with Next.js and TypeScript, featuring optimized components and mobile-first design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14.2.31-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Performance](https://img.shields.io/badge/Performance-Optimized-green)

## 🌟 Features

- **🚀 Performance Optimized**: React.memo, lazy loading, and optimized components
- **📱 Mobile-First Design**: Responsive layout optimized for all devices
- **🎨 Clean UI**: Professional black and white theme with light blue accents
- **⚡ Fast Loading**: Optimized images and efficient code structure
- **🔄 Reusable Components**: Modular ContactCard, ProjectCard, and EducationCard
- **📧 Interactive Contact**: Clickable email, phone, and social links
- **🎯 SEO Optimized**: Proper meta tags and semantic HTML
- **♿ Accessible**: Screen reader friendly and keyboard navigation

## 🚀 Live Demo

Visit the live portfolio: [https://pavanchinchalpet.github.io/Portfolio/](https://portfolio-pavanchinchalpet.vercel.app)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Custom CSS with mobile-first responsive design
- **UI Components**: Optimized reusable components with React.memo
- **Performance**: Lazy loading, image optimization, efficient rendering
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   └── (main)/
│   │       ├── layout.tsx          # Main layout with viewport meta tag
│   │       └── page.tsx            # Optimized homepage with all sections
│   ├── components/
│   │   ├── ContactCard.tsx         # Reusable contact card component
│   │   ├── ProjectCard.tsx         # Reusable project card component
│   │   └── EducationCard.tsx       # Reusable education card component
│   └── styles/
│       └── globals.css            # Mobile-first responsive CSS
├── public/
│   ├── images/                    # Optimized images
│   │   └── passport size photo.jpg # Profile image with lazy loading
│   └── favicon.ico               # Site favicon
├── .gitignore                    # Git ignore configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Clean black and white theme
- **Accent**: Light blue (#3b82f6, #06b6d4)
- **Text**: Black (#000000) and gray (#666666)
- **Background**: White (#ffffff) with subtle borders

### Typography
- **Font Family**: Inter and Manrope, system fonts
- **Headings**: Bold, professional styling
- **Body**: Clean, readable text with optimized line height
- **Mobile**: Responsive font sizes for all screen sizes

### Performance Optimizations
- **React.memo**: Prevents unnecessary re-renders
- **Lazy Loading**: Images load only when needed
- **Mobile-First**: Optimized for mobile devices first
- **Efficient CSS**: Minimal, targeted styles

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

- `src/app/(main)/page.tsx` - All personal information and content
- `src/components/ContactCard.tsx` - Contact details and social links
- `src/components/ProjectCard.tsx` - Your projects and descriptions
- `src/components/EducationCard.tsx` - Education history

### Styling
- Modify `src/styles/globals.css` for global styles and responsive design
- Update component styles for specific sections
- Change colors in the CSS variables section
- Adjust mobile breakpoints as needed

### Images
- Add your project images to `public/images/`
- Update image paths in the main page
- Replace profile picture in `public/images/passport size photo.jpg`

## 🎯 Sections Overview

### Hero Section
- Professional greeting with optimized typography
- Brief introduction paragraph with responsive text
- Call-to-action buttons with hover effects
- Optimized profile image with lazy loading

### About Section
- Professional summary and personal details
- Technical skills with organized categories
- Responsive layout for all devices

### Internship Experience
- Current internship details
- Key achievements and responsibilities
- Professional experience showcase

### Projects Section
- Reusable ProjectCard components
- Detailed project descriptions
- Technology stack tags
- Responsive grid layout

### Education & Achievements
- Reusable EducationCard components
- Academic history and achievements
- Interests and extracurricular activities

### Contact Section
- Reusable ContactCard components
- Clickable contact information
- Social media integration
- Responsive contact layout

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio uses a mobile-first approach and is optimized for:
- **Mobile**: 320px - 767px (Single column, touch-friendly)
- **Tablet**: 768px - 1023px (Two columns, balanced spacing)
- **Desktop**: 1024px - 1279px (Multi-column, hover effects)
- **Large Desktop**: 1280px+ (Enhanced spacing and effects)

### Mobile Optimizations
- Reduced font sizes for better readability
- Full-width buttons for easier tapping
- Optimized image sizes
- Single-column layouts
- Touch-friendly spacing

### Desktop Enhancements
- Hover effects on cards and buttons
- Multi-column grid layouts
- Enhanced spacing and typography
- Smooth animations and transitions

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

## 🚀 Performance Features

### Optimizations Implemented
- **React.memo**: All components are memoized to prevent unnecessary re-renders
- **Lazy Loading**: Profile image loads only when needed
- **Mobile-First CSS**: Optimized styles for all device sizes
- **Efficient Components**: Reusable components reduce code duplication
- **Optimized Images**: Proper image sizing and loading attributes

### Code Quality
- **TypeScript**: Full type safety throughout the application
- **Clean Architecture**: Organized component structure
- **Responsive Design**: Mobile-first approach with progressive enhancement
- **Accessibility**: Proper semantic HTML and ARIA attributes

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

Built with ❤️ by Pavan kumar Chinchalpet.
