# ATOZ Frontend

This workspace contains a modern Angular frontend scaffold for ATOZ (Arabic). It uses standalone components and a minimal CSS fallback that emulates Tailwind utility classes so the app can run without requiring the Tailwind CLI in environments where Node tooling is limited.

What I changed in this branch:
- Standalone components: header, footer, home, services, projects, contact, payment.
- Demo assets: `src/assets/demo-1.svg`, `demo-2.svg`, `demo-3.svg` used in the projects gallery.
- `src/generated-tailwind.css`: minimal Tailwind-like utility set and animations used by the app (fallback to avoid PostCSS/Tailwind build issues).

Run locally (PowerShell):

```powershell
npm install
npm start
```

If you prefer Angular CLI directly:

```powershell
npm install
npx ng serve --configuration development
```

Notes:
- The project currently uses `src/generated-tailwind.css` (precompiled fallback). To enable full Tailwind:
  - Install `tailwindcss` and `@tailwindcss/postcss` (if required by your Angular version).
  - Revert `angular.json` to use `src/styles.scss` with Tailwind directives and configure `postcss.config.cjs` accordingly.

PrimeNG (optional):
- To use PrimeNG UI components, install these packages locally:

```powershell
npm install primeng primeicons
```

- Then import the desired PrimeNG modules in your components or a shared module. Example for buttons:

```ts
import { ButtonModule } from 'primeng/button';
```

SCSS organization:
- The project now uses `src/styles.scss` which imports `src/styles/_variables.scss` and `src/styles/_mixins.scss`.
- `src/generated-tailwind.css` remains included (via `src/styles.scss`) as a fallback utility set so the app runs without Tailwind CLI.

Tailwind CSS (install locally):

- To enable the full Tailwind workflow (recommended), run locally:

```powershell
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run start
```

- The repo includes `tailwind.config.cjs` and `postcss.config.cjs` so once `tailwindcss` is installed the `@tailwind` directives in `src/styles.scss` will be processed. If you cannot install packages in your environment, the project still works using the included `src/generated-tailwind.css` fallback.

Notes about Angular version:
- This workspace currently contains Angular 21 packages. If you explicitly require Angular 17, let me know and I can adapt the project, but that involves downgrading package versions and adjusting config files.

If you want I can:
- Replace SVG placeholders with client photography (PNG/JPG) and create responsive srcsets.
- Re-enable full Tailwind workflow and generate the full utility CSS.
- Prepare a zip of the project for handoff (you may need to run the compression locally if the environment can't run `Compress-Archive`).

---
_ A to Z Innovations
# ATOZFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
