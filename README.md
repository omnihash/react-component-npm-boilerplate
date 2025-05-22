# React Component Library Boilerplate

This project serves as a boilerplate for creating reusable React component libraries and deploying them to npm. It includes an example `AnimatedGradientButton` component featuring customizable sizes, variants, and a gradient animation effect.

## Prerequisites

Before setting up the project, ensure you have the following installed:

1. **Node Version Manager (NVM):**
   Install NVM to manage Node.js versions:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
   ```
   After installation, restart your terminal and verify:
   ```bash
   nvm --version
   ```

   Use the correct Node.js version specified in the `.nvmrc` file:
   ```bash
   nvm install
   nvm use
   ```

2. **Yarn:**
   Install Yarn as the package manager:
   ```bash
   npm install --global yarn
   ```
   Verify the installation:
   ```bash
   yarn --version
   ```

## Setup

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <local-repository-folder>
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn start
   ```

## Using the `AnimatedGradientButton`

To use the `AnimatedGradientButton` component in your project:

1. Install the package (if published to npm):
   ```bash
   yarn add <repo-name>
   ```

2. Import and use the component in your React project:
   ```tsx
   import React from 'react';
   import { AnimatedGradientButton } from 'animated-gradient-button';

   const App = () => {
     return (
       <div>
         <AnimatedGradientButton size="large" variant="primary" onClick={() => alert('Button clicked!')}>
           Click Me
         </AnimatedGradientButton>
       </div>
     );
   };

   export default App;
   ```
3. Import styles
   ```css
    @import "<repo-name>/dist/index.css";
   ```
### Props

| Prop       | Type                          | Default   | Description                              |
|------------|-------------------------------|-----------|------------------------------------------|
| `children` | `React.ReactNode`             | `null`    | The content of the button.              |
| `size`     | `'small' | 'medium' | 'large'` | `'medium'`| The size of the button.                 |
| `variant`  | `'primary' | 'secondary' | 'danger' | 'success'` | `'primary'` | The color scheme of the button.         |
| `disabled` | `boolean`                     | `false`   | Disables the button when set to `true`.  |

## Publishing to npm

To publish the package to npm:

1. Ensure you are logged in to npm:
   ```bash
   npm login
   ```

2. Update the version in `package.json` (if needed):
   ```bash
   npm version <new-version>
   ```

3. Build the package:
   ```bash
   yarn build
   ```

4. Publish the package:
   ```bash
   npm publish --access public
   ```

5. Verify the package is published by searching for it on [npm](https://www.npmjs.com/).

## License

This project is licensed under the MIT License. See the LICENSE file for details.