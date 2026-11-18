# Simple React TODO App

A clean, responsive TODO application built with React, Vite, and Lucide icons, ready for deployment to GitHub Pages.

## ✨ Features
- **Add new tasks**: Quick task input with Enter key or click to add.
- **Mark tasks completed/uncompleted**: Toggle tasks with a single click.
- **Delete tasks**: Remove tasks with the delete button.
- **Filter tasks**: Easily toggle between `All`, `Active`, and `Completed` tasks.
- **Local Storage Persistence**: Tasks stay saved even after refreshing the browser.
- **GitHub Pages Ready**: Configured with relative paths and automated deployment workflow.

## 🚀 Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. Open the URL shown in the terminal (usually `http://localhost:5173`).

---

## 🌐 Deploying to GitHub Pages

### Method 1: Automatic via GitHub Actions (Recommended)
1. Initialize git and commit your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - React TODO App"
   ```

2. Create a new repository on [GitHub](https://github.com/new).

3. Link your remote repository and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

4. In your GitHub repository:
   - Go to **Settings** > **Pages**
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
   - Your site will automatically build and deploy live!

---

### Method 2: Manual deploy with `gh-pages`
If you prefer running a command from your computer:
```bash
npm run deploy
```
This builds your project and publishes the `dist` folder directly to the `gh-pages` branch on GitHub.
