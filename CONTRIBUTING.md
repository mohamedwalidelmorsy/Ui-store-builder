# Contributing to StoreBuilders.io

Thank you for considering a contribution. The following guidelines keep the codebase consistent and the review process efficient.

---

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready, protected |
| `develop` | Integration branch for features |
| `feat/<scope>` | New features |
| `fix/<scope>` | Bug fixes |
| `chore/<scope>` | Tooling, deps, config |
| `docs/<scope>` | Documentation only |

All work branches off `develop`. PRs target `develop`; `develop` merges to `main` on release.

---

## Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short summary>

[optional body]

[optional footer]
```

**Types:** `feat` · `fix` · `docs` · `style` · `refactor` · `perf` · `test` · `chore` · `ci`

**Examples:**
```
feat(store-builder): add WooCommerce platform option to step 2
fix(auth): prevent redirect loop on expired session token
perf(marketing): lazy-load hero section images for LCP improvement
chore(deps): upgrade Next.js to 15.3.2
```

---

## Development Workflow

```bash
# 1. Fork and clone
git clone git@github.com:<your-fork>/Ui-store-builder.git
cd Ui-store-builder

# 2. Install dependencies
npm install

# 3. Create a feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feat/your-feature-name

# 4. Develop with hot reload
npm run dev

# 5. Lint before committing
npm run lint

# 6. Commit using conventional format
git commit -m "feat(scope): describe what and why"

# 7. Push and open PR against develop
git push origin feat/your-feature-name
```

---

## Pull Request Checklist

Before submitting a PR, confirm:

- [ ] Branch targets `develop`, not `main`
- [ ] Commit messages follow Conventional Commits
- [ ] `npm run lint` passes with zero warnings
- [ ] `npm run build` succeeds locally
- [ ] No `.env` files or secrets committed
- [ ] New components follow the existing file/folder naming conventions
- [ ] PR description explains **what** changed and **why**

---

## Code Style

- **JSX files** use `.jsx` extension
- **Components** are PascalCase; files match component name
- **Tailwind classes** are the single source of truth for styling — no inline `style={}` unless dynamic values are required
- **No unused imports** — ESLint enforces this
- **No `console.log`** in production code paths

---

## Reporting Issues

Use [GitHub Issues](https://github.com/mohamedwalidelmorsy/Ui-store-builder/issues) with the appropriate label:

- `bug` — reproducible defect with steps to reproduce
- `enhancement` — feature request with clear use case
- `documentation` — missing or incorrect docs
- `question` — usage questions (prefer Discussions for these)

---

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
