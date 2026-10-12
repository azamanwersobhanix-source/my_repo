// Change this one value to your exact GitHub username when you confirm it.
const GITHUB_USERNAME = "azamanwersobhanix-source";
const MAX_PROJECTS = 8;

const githubUrls = {
  profile: `https://github.com/${GITHUB_USERNAME}`,
  repos: `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=${MAX_PROJECTS}`
};

const $ = (selector) => document.querySelector(selector);

function repoCard(repo) {
  const description = repo.description || "A project from Azam SB’s GitHub workspace.";
  const language = repo.language || "Code";
  const updated = new Date(repo.updated_at).toLocaleDateString(undefined, { year: "numeric", month: "short" });
  return `
    <div class="col-md-6 reveal is-visible">
      <article class="project-card">
        <div class="project-top">
          <div class="project-folder"><i class="bi bi-folder2-open"></i></div>
          <div class="repo-meta">Updated ${updated}</div>
        </div>
        <h3>${escapeHtml(repo.name)}</h3>
        <p>${escapeHtml(description)}</p>
        <div class="project-bottom">
          <span class="lang">${escapeHtml(language)}</span>
          <div class="stats">
            <span><i class="bi bi-star"></i>${repo.stargazers_count}</span>
            <span><i class="bi bi-diagram-3"></i>${repo.forks_count}</span>
            <a href="${repo.html_url}" target="_blank" rel="noopener" class="text-light text-decoration-none" aria-label="Open ${escapeHtml(repo.name)} on GitHub"><i class="bi bi-arrow-up-right"></i></a>
          </div>
        </div>
      </article>
    </div>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function loadGitHubProjects() {
  const stateTitle = $("#githubStateTitle");
  const stateText = $("#githubStateText");
  const grid = $("#projectsGrid");

  try {
    const response = await fetch(githubUrls.repos, {
      headers: { Accept: "application/vnd.github+json" }
    });

    if (!response.ok) throw new Error(`GitHub responded with ${response.status}`);

    const repos = await response.json();
    const visibleRepos = repos.filter(repo => !repo.fork).slice(0, MAX_PROJECTS);

    if (!visibleRepos.length) {
      stateTitle.textContent = "No public repositories yet.";
      stateText.textContent = "Add a public repository on GitHub and it will appear here automatically.";
      grid.innerHTML = `<div class="empty-project">Your project gallery is ready. The next commit gets a front-row seat.</div>`;
      return;
    }

    stateTitle.textContent = `${visibleRepos.length} public project${visibleRepos.length === 1 ? "" : "s"} loaded.`;
    stateText.textContent = `Showing your most recently updated repositories from @${GITHUB_USERNAME}.`;
    grid.innerHTML = visibleRepos.map(repoCard).join("");
  } catch (error) {
    console.warn("GitHub project loading failed:", error);
    stateTitle.textContent = "GitHub gallery needs your handle.";
    stateText.textContent = `The site is configured for @${GITHUB_USERNAME}. Check script.js if that is not your exact username.`;
    grid.innerHTML = `
      <div class="empty-project">
        <div class="mb-2"><i class="bi bi-github fs-2"></i></div>
        <strong>Connect the right GitHub username.</strong>
        <div class="mt-2">Open <code>script.js</code> and change <code>GITHUB_USERNAME</code>.</div>
      </div>`;
  }
}

function setupLinks() {
  ["#githubHeroLink", "#githubProjectsLink", "#githubContactLink"].forEach((selector) => {
    const el = $(selector);
    if (el) el.href = githubUrls.profile;
  });
}

function setupScrollReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  nodes.forEach((node) => observer.observe(node));
}

function setupCursorGlow() {
  const glow = $(".cursor-glow");
  if (!glow || window.matchMedia("(pointer: coarse)").matches) return;
  window.addEventListener("pointermove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  setupLinks();
  setupCursorGlow();
  setupScrollReveal();
  loadGitHubProjects();
});
