# 🎓 ASIP Notes - Applied Signal & Image Processing Lab

> **Modern course website for PSCS501 - Applied Signal and Image Processing**  
> Interactive theory notes paired with hands-on Streamlit practicals for comprehensive learning.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Streamlit](https://img.shields.io/badge/Streamlit-Lab-FF4B4B?logo=streamlit)](https://streamlit.io/)

## 🌟 Features

### 📚 **Comprehensive Course Content**
- **Complete syllabus** with 67+ indexed topics across 2 modules
- **Interactive navigation** with accordion sidebar
- **Progressive learning path** from fundamentals to advanced concepts
- **Responsive design** optimized for all devices

### 🎨 **Modern Design System**
- **Professional UI/UX** with educational focus
- **Dark/Light mode** support with system preference detection
- **Consistent typography** scale and color palette
- **Smooth animations** and micro-interactions

### 🔧 **Interactive Components**
- **Syllabus slider** showcasing course topics
- **Accordion navigation** for easy content browsing
- **Module cards** with hover effects
- **Progress indicators** and breadcrumb navigation

### 🧪 **Practical Integration**
- **Streamlit lab integration** for hands-on experiments
- **Direct links** to interactive practicals
- **Visual demonstrations** of signal processing concepts

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Chandan-Yadav24/ASIP-Notes.git
cd ASIP-Notes

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the course website.

### Streamlit Practicals
```bash
# Access the live interactive practicals
open https://asip-lab.streamlit.app/
```


## 📖 Course Structure

### **Module I: Fundamentals & Image Processing Basics**
- **Unit 1**: Digital Signals Processing (24 topics)
  - Periodic Signals & Spectral Decomposition
  - Noise Analysis & Types
  - Autocorrelation Techniques
  - Frequency-Domain Operations (DFT/FFT)

- **Unit 2**: Image Processing Fundamentals (18 topics)
  - Image Processing Pipeline
  - Intensity & Histogram Transformations
  - Smoothing & Sharpening Techniques
  - Image Derivatives & Gradients

### **Module II: Advanced Operations**
- **Unit 3**: Structural & Morphological Operations (20 topics)
  - Edge Detection (Sobel, Canny, Prewitt, Roberts)
  - Image Pyramids (Gaussian, Laplacian)
  - Morphological Processing (12 operations)

- **Unit 4**: Advanced Image Processing (18 topics)
  - Feature Descriptors (Harris, HOG, SIFT)
  - Image Segmentation (10 techniques)
  - Advanced Algorithms (Watershed, GrabCut)

## 🏗️ Project Architecture

```
src/app/
├── components/           # Reusable UI components
│   ├── AccordionSidebar.jsx    # Navigation sidebar
│   ├── CourseLayout.jsx        # Layout wrapper
│   ├── ModuleCard.jsx          # Module display cards
│   ├── SyllabusSlider.jsx      # Interactive topic slider
│   └── UnitList.jsx            # Unit listing component
├── data/
│   └── syllabus.js            # Complete course data
├── modules/                   # Course content pages
│   ├── module-1/             # Module I content
│   └── module-2/             # Module II content
├── globals.css               # Design system & styles
└── page.jsx                  # Homepage
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Blue (#2563eb) - Brand & interactive elements
- **Secondary**: Violet (#7c3aed) - Accents & highlights
- **Semantic**: Success, Warning, Error states
- **Neutrals**: Sophisticated slate palette

### **Typography Scale**
- **Display**: 60px - Hero headlines
- **H1-H4**: 36px → 20px - Content hierarchy
- **Body**: 18px, 16px, 14px - Content text
- **Caption**: 12px - Labels & metadata

### **Components**
- **Cards**: Hover effects, subtle shadows
- **Buttons**: Primary/secondary variants
- **Badges**: Status & category indicators
- **Navigation**: Accordion with smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel (recommended)

## 📱 Responsive Design

- **Mobile-first** approach with breakpoint system
- **Flexible layouts** adapting to screen sizes
- **Touch-friendly** navigation and interactions
- **Optimized performance** across devices

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Development Guidelines
- Follow existing code style and component patterns
- Update syllabus data in `/data/syllabus.js` for content changes
- Test responsive design across breakpoints
- Maintain accessibility standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [ ] **Content Management**: Admin panel for easy content updates
- [ ] **Search Functionality**: Global search across all topics
- [ ] **Progress Tracking**: Student progress and completion tracking
- [ ] **Interactive Quizzes**: Assessment tools for each module
- [ ] **PDF Export**: Downloadable notes and summaries
- [ ] **Mobile App**: React Native companion app

## 📞 Support

- **Course**: PSCS501 - Applied Signal and Image Processing
- **Institution**: University of Mumbai
- **Issues**: [GitHub Issues](https://github.com/yourusername/ASIP-Notes/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/ASIP-Notes/discussions)

---

<div align="center">

**Built with ❤️ for students learning Signal & Image Processing**

[🌐 Live Demo](https://asip-notes.vercel.app) • [📚 Documentation](https://github.com/yourusername/ASIP-Notes/wiki) • [🐛 Report Bug](https://github.com/yourusername/ASIP-Notes/issues)

</div>