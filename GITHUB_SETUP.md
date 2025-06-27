# GitHub Setup Instructions

Follow these steps to push your interview-app to a new GitHub repository:

## 1. Create a New Repository on GitHub

1. Go to https://github.com and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the repository details:
   - Repository name: `interview-app` (or any name you prefer)
   - Description: "Post-Production Committee Interview App 2025/26 - Bilingual interview application with photo adjustment and video editing questions"
   - Select "Public" repository
   - DO NOT initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## 2. Push Your Local Repository to GitHub

After creating the repository, GitHub will show you instructions. Use these commands in your terminal:

```bash
# Navigate to your project directory
cd "/Users/peterdai/Desktop/Post-production Interview/interview-app"

# Add the remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/interview-app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

If you're using SSH instead of HTTPS:
```bash
git remote add origin git@github.com:YOUR_USERNAME/interview-app.git
```

## 3. Verify Your Repository

1. Refresh your GitHub repository page
2. You should see all your files uploaded
3. The README.md should be displayed on the main page

## 4. (Optional) Enable GitHub Pages

To host your app for free using GitHub Pages:

1. First, update `vite.config.ts` to add base path:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/interview-app/', // Add this line
   })
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     ...existing scripts,
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

5. Go to Settings → Pages in your GitHub repository
6. Select "Deploy from a branch"
7. Choose "gh-pages" branch and "/ (root)" folder
8. Click Save

Your app will be available at: `https://YOUR_USERNAME.github.io/interview-app/`

## Troubleshooting

If you encounter authentication issues:
- For HTTPS: You may need to use a Personal Access Token instead of your password
- For SSH: Make sure your SSH key is added to your GitHub account

If you see "fatal: remote origin already exists":
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/interview-app.git
```