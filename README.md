# BlobMixer

BlobMixer is a Three.js-based interactive web application for creating and mixing animated blob shapes with customizable gradients and shaders. The project uses Vite for fast development and includes custom GLSL shaders for unique visual effects.

## Features
- Interactive blob generation and mixing
- Custom gradients and textures (see `public/gradients/`)
- Real-time shader effects (GLSL in `shaders/`)
- Responsive design
- Fast development with Vite

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```powershell
   git clone <your-repo-url>
   cd BlobMixer
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```

### Running the App
Start the development server:
```powershell
npm run dev
```
Open your browser and navigate to the local server URL (usually `http://localhost:5173`).

## Project Structure
- `index.html` — Main HTML file
- `main.js` — Entry point for the Three.js app
- `style.css` — Stylesheet
- `vite.config.js` — Vite configuration
- `public/` — Static assets (fonts, gradients)
- `shaders/` — GLSL shader files

## Customization
- Add new gradients to `public/gradients/` for more visual options.
- Modify or add GLSL shaders in `shaders/` to create new effects.

## License
MIT

## Credits
- [Three.js](https://threejs.org/)
- [Vite](https://vitejs.dev/)
- Custom shaders and gradients by project contributors.
