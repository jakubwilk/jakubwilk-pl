# Jakub Wilk - Personal Portfolio Website

A modern, responsive portfolio website showcasing the work and experience of Jakub Wilk, a Front-End Developer specializing in React and TypeScript.

## 🚀 Live Demo

Visit the live website: [jakubwilk.pl](https://jakubwilk.pl)

## 📋 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Personal Introduction**: About section with professional background and skills
- **Technology Stack Showcase**: Visual representation of technical expertise
- **Career Timeline**: Professional experience and work history
- **Projects Portfolio**: Showcase of personal and professional projects
- **Social Links**: Direct links to GitHub and LinkedIn profiles
- **Modern UI**: Clean, professional design with smooth interactions

## 🛠️ Technology Stack

### Frontend

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **TanStack Router** - Type-safe routing solution
- **TanStack Query** - Powerful data fetching and caching

### UI & Styling

- **Mantine UI** - Modern React components library
- **Tailwind CSS** - Utility-first CSS framework
- **Tabler Icons** - Beautiful icon set
- **PostCSS** - CSS processing and optimization

### Development Tools

- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── About.tsx        # About section with bio and skills
│   ├── Header.tsx       # Main header with name and social links
│   ├── Projects.tsx     # Projects section container
│   └── projects/        # Project-specific components
│       ├── GridProjects.tsx    # Projects grid layout
│       └── ItemProject.tsx     # Individual project card
├── pages/               # Page components
│   ├── Home.tsx         # Main homepage
│   └── Project.tsx      # Individual project page
├── routes/              # TanStack Router configuration
│   ├── __root.tsx       # Root route layout
│   ├── index.tsx        # Home route
│   └── projects/        # Project-related routes
├── hooks/               # Custom React hooks
│   └── useGetProjectsQuery.ts  # Projects data fetching
├── models/              # TypeScript type definitions
│   └── projects.models.ts      # Project data models
└── main.tsx            # Application entry point
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jakubwilk/jakubwilk-pl.git
   cd jakubwilk-pl
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to see the application running.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint code analysis

## 📁 Project Data

The portfolio projects are stored in `public/data/projects.json`. To add new projects, update this file with the following structure:

```json
{
  "projects": [
    {
      "id": 1,
      "name": "Project Name",
      "description": "Project description",
      "image": "/images/project-image.jpg",
      "link": "https://github.com/username/project",
      "technologies": ["React", "TypeScript", "Vite"]
    }
  ],
  "total": 1
}
```

## 🎨 Customization

### Theming

The application uses Mantine's theming system. Main theme configuration is in `src/App.tsx`:

```typescript
<MantineProvider
  theme={{
    primaryColor: 'orange',
    fontFamily: 'Barlow, sans-serif',
    headings: { fontFamily: 'Barlow, sans-serif' },
  }}
>
```

### Styling

- Tailwind CSS for utility-first styling
- Mantine components for UI elements
- PostCSS for CSS processing and Mantine integration

## 📱 Responsive Design

The website is fully responsive with breakpoints optimized for:

- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop computers (1024px and up)

## 🔧 Development

### Code Quality

- ESLint configuration for consistent code style
- Prettier for automatic code formatting
- TypeScript for type safety
- Import sorting with `eslint-plugin-simple-import-sort`

### Performance

- Vite for fast development and optimized builds
- TanStack Query for efficient data fetching and caching
- Modern React patterns for optimal rendering

## 📄 License

This project is private and intended for personal portfolio use.

## 👤 About the Developer

**Jakub Wilk** is a Front-End Developer with several years of experience, specializing in:

- React & TypeScript development
- Modern JavaScript frameworks
- UI/UX implementation
- Performance optimization

### Connect with Jakub

- **GitHub**: [jakubwilk](https://github.com/jakubwilk)
- **LinkedIn**: [jakub-wilk](https://www.linkedin.com/in/jakub-wilk/)
- **Website**: [jakubwilk.pl](https://jakubwilk.pl)

## 🔄 Version History

- **v2.0.0** - Current version with modern React stack
- Built with React 19, TypeScript, and modern development tools

---

_This portfolio showcases modern web development practices and serves as a professional representation of Jakub Wilk's technical capabilities and project experience._
