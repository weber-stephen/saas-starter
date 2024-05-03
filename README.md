<div align="center"><strong>Next.js 14 SaaS Starter With Shadcn-ui</strong></div>
<div align="center">Built with the Next.js App Router</div>
<br />
<div align="center">
<span>
</div>

## Overview

This is a starter template using the following stack:

- Framework - [Next.js 14](https://nextjs.org/14)
- Language - [TypeScript](https://www.typescriptlang.org)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn-ui](https://ui.shadcn.com)
- Schema Validations - [Zod](https://zod.dev)
- Auth - [Nextauth](https://next-auth.js.org)
- Tables - [Tanstack Tables](https://tanstack.com/table/)
- Linting - [ESLint](https://eslint.org)
- Formatting - [Prettier](https://prettier.io)
- Jest - [Jest](https://jestjs.io/)
- Storybook - [Storybook](https://storybook.js.org/)

Based off of the [https://next-shadcn-dashboard-starter.vercel.app/](https://next-shadcn-dashboard-starter.vercel.app/) codebase, but simplified, adding testing and storybook.

Stories from [https://github.com/JheanAntunes/storybook-shadcn](https://github.com/JheanAntunes/storybook-shadcn)

## Pages

| Pages                                                                             | Specifications                                                                                        |
| :-------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| Signup                       | Authentication with **NextAuth** supports Social logins and email logins(Enter dummy email for demo). |
| Dashboard           | Cards with recharts graphs for analytics.                                                             |
| Users          | Tanstack tables with user details client side searching, pagination etc                               |
| Profile     | Mutistep dynamic forms using react-hook-form and zod for form validation.                             |
| 404 Page  | Not Found Page Added in the root level                                                                |
                         

## Getting Started

Follow these steps to clone the repository and start the development server:

- `git clone https://github.com/weber-stephen/saas-starter.git`
- `yarn install`
- Create a `.env.local` file by copying the example environment file:
  `cp env.example.txt .env.local`
- Add the required environment variables to the `.env.local` file.
- `yarn dev`

You should now be able to access the application at http://localhost:3000.

## Commands
Commands availabile in the package.json file

| Command              | Description                             |
|----------------------|-----------------------------------------|
| `yarn dev`             | Run the development server              |
| `yarn build`           | Build the application                   |
| `yarn start`           | Run the application                     |
| `yarn lint`            | Lint the application                    |
| `yarn test`            | Run Jest tests                          |
| `yarn test:watch`      | Run Jest tests in watch mode            |
| `yarn test:ci`         | Run tests setup for CI                  |
| `yarn storybook`       | Run storybook                           |
| `yarn build-storybook` | Run storybook build                     |
| `yarn format`          | Run prettier format check               |
| `yarn format:fix`      | Run prettier format check and fix       |
| `yarn test:e2e`        | Run E2E Playwright tests                |
| `yarn test:e2e:ui`     | Run E2E Playwright Interactive UI tests |
| `yarn test:e2e:report` | Show E2E Test Report                    |

## Testing

### Run Jest Component Tests
```
yarn test
```

Generate a basic Jest configuration file by running the following command:

```
yarn create jest@latest
```

Visit the testing playground to test selection
[https://testing-playground.com/](https://testing-playground.com/)

### Run E2E Playwright Tests

Install Playwright by following the directions [here](https://playwright.dev/)

Runs the end-to-end tests.
```
yarn playwright test
```

Starts the interactive UI mode.
```
yarn playwright test --ui
```

Runs the tests only on Desktop Chrome.
```
yarn playwright test --project=chromium
```

Runs the tests in a specific file.
```
yarn playwright test example
```

Runs the tests in debug mode.
```
yarn playwright test --debug
```

Auto generate tests with Codegen.
```
yarn playwright codegen
```

## Styling Components/Themeing

Checkout the Radix playground to change the theme
[https://www.radix-ui.com/themes/playground](https://www.radix-ui.com/themes/playground)