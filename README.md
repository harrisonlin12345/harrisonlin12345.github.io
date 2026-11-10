# Engineering Portfolio

Personal portfolio website for Harrison Lin, built with HTML, CSS, and JavaScript and designed for GitHub Pages.

## Publish at `https://YOUR_USERNAME.github.io/`

1. Create a **public** GitHub repository named exactly `YOUR_USERNAME.github.io` (replace `YOUR_USERNAME` with your actual GitHub username).
2. Upload `index.html`, `styles.css`, `script.js`, and your resume as `resume.pdf` to the **root** of the repository. Do not upload only the ZIP file.
3. Edit the `config` object at the top of `script.js` with your GitHub username, LinkedIn URL, email, and project repository URLs.
4. Go to repository **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. After deployment, visit `https://YOUR_USERNAME.github.io/`.

## Customize

- Edit text, experience, project descriptions, and statuses in `index.html`.
- Edit colors, spacing, and fonts in `styles.css`.
- Add actual project repository URLs in `script.js`.
- Place a current `resume.pdf` alongside `index.html` to enable the Resume PDF button.

The Home, About, Projects, and Resume navigation links work without a framework or build step. The site uses URL hashes (`#about`, etc.) so all four pages work with static GitHub Pages hosting.

**Before publishing:** Verify all project descriptions and skill claims reflect work you've actually completed. Don't publish proprietary employer materials.

## Add your photo

Put your portrait at `images/profile.jpg` (create the `images` folder if needed). The Home page automatically shows it in the portrait frame. A placeholder with initials appears until the image is added. A portrait-oriented JPG works best.
