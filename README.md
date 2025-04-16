# UTS Web Application

A modern, responsive web application built with Next.js, React, and Tailwind CSS. This project showcases a professional landing page with multiple components including hero section, services, pricing packages, testimonials, and more.

## ✨ Features

- **Modern UI**: Sleek and responsive design using Tailwind CSS
- **Component-Based Structure**: Well-organized React components 
- **Fast Development**: Powered by Next.js 15
- **Type Safety**: Built with TypeScript
- **Optimized Performance**: Fast loading and rendering
- **Clean Code**: Follows best practices with ESLint and Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or Yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/UTS_PWEB.git
   cd UTS_PWEB
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## 🏗️ Project Structure

```
UTS_PWEB/
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # App layout
│   │   └── page.tsx        # Home page
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind CSS configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 📦 Main Components

- **Header**: Navigation and top bar
- **Hero**: Main landing section
- **Services**: Service offerings showcase
- **Packages**: Pricing and package information
- **Steps**: Process or step-by-step guide
- **Testimonials**: Customer reviews and feedback
- **Partners**: Partner company logos
- **Newsletter**: Email subscription component
- **Footer**: Site links and information

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Lucide React](https://lucide.dev/guide/packages/lucide-react) - Icon library
- [React Icons](https://react-icons.github.io/react-icons/) - Additional icons

## 🚢 Deployment

The application can be deployed on Vercel or any other hosting platform that supports Next.js:

```bash
npm run build
npm run start
```

### Troubleshooting Deployment Issues

If you encounter errors during the build process, here are some solutions:

1. **Module not defined in ES module scope**: This is typically caused by using ES modules with CommonJS. Convert your config files to use the appropriate module format:
   - Use `.js` extension for CommonJS modules (e.g., `next.config.js`, `postcss.config.js`)
   - Use standard `module.exports` syntax instead of ES `export default`

2. **TailwindCSS Error**: If you see an error like "trying to use tailwindcss directly as a PostCSS plugin", update your PostCSS configuration:
   ```js
   // postcss.config.js
   module.exports = {
     plugins: {
       '@tailwindcss/postcss': {},
       autoprefixer: {},
     },
   };
   ```

3. **Permission Issues**: If you encounter permission errors with the `.next` directory, try running with administrator privileges or disable tracing in `next.config.js`:
   ```js
   // next.config.js
   const nextConfig = {
     // Other settings
     output: 'standalone',
     typescript: {
       ignoreBuildErrors: true,
     },
     eslint: {
       ignoreDuringBuilds: true,
     },
   };
   ```

## 🧪 Development

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm run start
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
