# My template for Next.js apps - WIP

<img src="https://raw.githubusercontent.com/chranderson/ca-next-template/main/public/default-screen.png" alt="CA NextJS Template 2024" width="400"/>

A starter template with: TailwindCSS, Typescript, Jest & Playwright

## Commands

|                   |                                             |
| ----------------- | ------------------------------------------- |
| `pnpm i`          | Installs the dependencies                   |
| `pnpm dev`        | Starts the development server               |
| `pnpm build`      | Builds the application for production       |
| `pnpm start`      | Starts the production server, only if built |
| `pnpm lint`       | Runs the linter                             |
| `pnpm test`       | Runs the unit tests                         |
| `pnpm test:watch` | Runs the unit tests in watch mode           |
| `pnpm test:e2e`   | Runs the end-to-end tests                   |

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Env variables are managed and validated for type safety with [@t3-oss/env-nextjs](https://env.t3.gg/) and require configuration in the file [@/lib/env.js](src/lib/env.js).

## Testing

### Unit tests

[Jest](https://jestjs.io/) is used for unit tests.
You can run the tests once or in watch mode.

- `pnpm test` // runs once
- `pnpm test:watch` // runs in watch mode

### End-to-end tests

[Playwright](https://nextjs.org/docs/app/building-your-application/testing/playwright) is used for end-to-end tests.
A github action is configured to run the tests on push and pull request.  
Includes a smoke test to ensure home page renders.

To run playwright locally, you must build and start the server first.

1. `pnpm build && pnpm start`
2. `pnpm test:e2e`

## CI & Deployment

Includes github action to run E2E test (playwright) on successful deployment of vercel preview.
