# Kelsi Gooden — Operations Portfolio

A responsive, accessible static portfolio designed for GitHub Pages. It includes Home, About, Projects, and Contact pages and requires no build system or paid hosting.

## Before publishing

1. Add the public email address and LinkedIn URL in `assets/site.js`.
2. Add project PDFs or images under `assets/projects/` and replace each “coming soon” message with a link.
3. Review the biography and location wording.

## Publish on GitHub Pages

1. Create a public GitHub repository. Name it `snickergiurl.github.io` for the cleanest profile URL, or `kelsi-gooden-portfolio` for a project URL.
2. Upload all files in this folder to the repository’s `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
5. Save. GitHub will display the live URL after deployment finishes.

## Add a project

Place the project file in `assets/projects/`, then replace the status text in `projects.html` with a link such as:

```html
<a class="case-status" href="assets/projects/project-name.pdf">View case study →</a>
```

## Local preview

Open `index.html` directly, or run a local server from this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
