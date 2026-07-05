# 🚀 Hasnat Ahmed - Portfolio Website

A beautiful, modern portfolio website showcasing skills and projects in web development, data analysis, UI/UX design, and more.

## ✨ Features

### 🎨 Modern Design
- **Smooth Color Scheme**: Elegant gradient colors with excellent contrast
- **Premium Typography**: Inter & Playfair Display fonts for professional look
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle transitions and engaging scroll effects

### 📱 Fully Responsive
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Optimized for all screen sizes

### ⚡ Performance Optimized
- CSS compression and optimization
- Lazy loading for images
- Fast load times with efficient asset management

### 🔒 Security & SSL
- HTTPS/SSL configuration included
- Security headers implemented
- XSS protection and content type sniffing prevention

## 📊 Sections Included

1. **Navigation Bar** - Sticky navigation with smooth scrolling
2. **Hero Section** - Eye-catching introduction with call-to-action buttons
3. **About Section** - Professional background with statistics
4. **Skills Section** - 6 detailed skill cards highlighting expertise:
   - SQL & Data Analysis (Pizza Sales Report)
   - Python Development (AI Dashboard, Web Scraping)
   - Excel & Analytics (Interactive Dashboards)
   - UI/UX Design (Figma Projects)
   - Web Design & Development
   - Tech Stack

5. **Projects Section** - 6 featured projects with descriptions
6. **Contact Section** - Contact form and social links
7. **Footer** - Professional footer with copyright

## 🎯 Skills Highlighted

### SQL & Data Analysis
- Pizza Sales Report with MySQL Workbench
- Revenue tracking and order analysis
- Business intelligence insights

### Python Development
- AI Futurepedia Dashboard
- Web scraping automation
- Calculator and Password Generator utilities

### Excel & Analytics
- Interactive dashboards
- Pivot table analysis
- Business metrics tracking

### UI/UX Design
- Figma prototyping
- Wireframing and design systems
- User research

### Web Design & Development
- Responsive HTML/CSS
- JavaScript interactivity
- Modern design principles

## 🚀 Quick Start

### Option 1: Using GitHub Pages (Recommended)

1. Clone the repository:
```bash
git clone https://github.com/hasnat-ahmedd/hasnat-ahmedd.github.io.git
cd hasnat-ahmedd.github.io
```

2. Push to your GitHub repository:
```bash
git add .
git commit -m "Deploy portfolio website"
git push origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages section
   - Select main branch as source
   - Save

Your website will be live at: `https://hasnat-ahmedd.github.io`

### Option 2: Using Custom Domain

1. Update your CNAME file with your domain:
```
yourdomain.com
```

2. Configure your domain DNS settings:
   - Point A record to GitHub Pages IP addresses
   - Or add CNAME record pointing to `username.github.io`

3. Enable HTTPS in repository settings

### Option 3: Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. For live server, use:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

## 📁 File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Modern CSS styling
├── script.js           # Interactive JavaScript
├── .htaccess           # SSL/HTTPS configuration
├── CNAME               # Custom domain configuration
├── README.md           # Documentation
└── assets/             # (Optional) Images and media folder
```

## 🎨 Color Scheme

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#ec4899` (Pink)
- **Accent**: `#10b981` (Emerald)
- **Background**: `#ffffff` (White)
- **Text Primary**: `#0f172a` (Dark Slate)
- **Text Secondary**: `#475569` (Slate)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔐 SSL/HTTPS Configuration

The `.htaccess` file includes:
- Automatic HTTPS redirect
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- Cache control for static assets
- Gzip compression

## 🛠️ Customization

### Update Personal Information

Edit `index.html` to update:
- Your name and title
- Contact information
- Social media links
- Project descriptions

### Modify Colors

Edit `styles.css` CSS variables:
```css
:root {
    --primary: #6366f1;
    --secondary: #ec4899;
    --accent: #10b981;
    /* ... other colors */
}
```

### Update Projects

Edit the projects grid section in `index.html` to add your projects:
```html
<div class="project-card">
    <div class="project-image" style="background: linear-gradient(...)"></div>
    <div class="project-content">
        <!-- Your project details -->
    </div>
</div>
```

## 📈 Performance Tips

1. **Optimize Images**: Use web-optimized formats (WebP, JPEG)
2. **Minify Assets**: Use tools to minify CSS and JavaScript
3. **Cache Busting**: Add version numbers to assets for updates
4. **CDN**: Consider using a CDN for faster delivery

## 🔍 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for description and keywords
- Proper heading hierarchy (H1, H2, H3)
- Mobile viewport configuration
- Schema markup ready

## ♿ Accessibility

- ARIA labels and semantic HTML
- Proper color contrast
- Keyboard navigation support
- Screen reader friendly

## 🐛 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

## 📞 Contact & Support

For questions or improvements:
- Email: hasnat.ahmed@email.com
- GitHub: [hasnat-ahmedd](https://github.com/hasnat-ahmedd)
- LinkedIn: [Your LinkedIn](https://linkedin.com)

## 📄 License

This project is open source and available under the MIT License.

## 🎓 Student Developer Package

This portfolio website includes support for:
- GitHub Student Developer Pack benefits
- Free SSL certificates through GitHub Pages
- Custom domain configuration
- Professional hosting

## 🚀 Deployment Checklist

- [ ] Update personal information
- [ ] Add project details
- [ ] Update contact information
- [ ] Configure custom domain (if using)
- [ ] Enable HTTPS
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check performance on different browsers

## 📊 Website Analytics

Consider integrating:
- Google Analytics
- Hotjar for user behavior
- Search Console for SEO

## 🎉 Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Project filtering
- [ ] Comment system
- [ ] Newsletter subscription
- [ ] Multi-language support

---

**Made with ❤️ by Hasnat Ahmed**

Your modern portfolio website is ready to showcase your amazing skills and projects! 🚀

