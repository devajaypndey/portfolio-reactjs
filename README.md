# Mohit's Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my skills, projects, and UI designs.

## 🚀 Features

- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Modern UI**: Clean, minimal design with smooth animations using Framer Motion
- **SEO Optimized**: Meta tags, sitemap, and robots.txt for better search engine visibility
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **Accessible**: Semantic HTML, proper ARIA labels, and keyboard navigation support

## 📦 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: React Helmet Async

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── UIDesigns.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to complete deployment

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

   Or drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

## 🎨 Customization

### Update Personal Information

- **Name & Role**: Edit `src/pages/Home.jsx`
- **Bio**: Edit `src/pages/About.jsx`
- **Skills**: Update the skills array in `src/pages/Skills.jsx`
- **Projects**: Modify the projects array in `src/pages/Projects.jsx`
- **Contact Info**: Update `src/pages/Contact.jsx`

### Change Color Theme

Edit `tailwind.config.js` to customize the color palette:

```js
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### Add Profile Image

Replace the placeholder in `src/pages/Home.jsx` with your actual image:

```jsx
<img src="/path/to/your/image.jpg" alt="Mohit" className="w-full h-full object-cover" />
```

## 📱 Pages

1. **Home** - Hero section with introduction and CTAs
2. **About** - Personal bio and journey
3. **Skills** - Technical skills with progress indicators
4. **Projects** - Featured projects with links
5. **UI Designs** - Gallery of design work
6. **Contact** - Contact form with WhatsApp integration

## 🔗 Contact Integration

The contact form integrates with WhatsApp. Update the phone number in `src/pages/Contact.jsx`:

```jsx
window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${encodedText}`, '_blank');
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mohit**
- Portfolio: [mohit-portfolio.com](https://mohit-portfolio.com)
- GitHub: [@mohit](https://github.com/mohit)
- Email: contact@mohit.com

---

Built with ❤️ using React and Tailwind CSS
