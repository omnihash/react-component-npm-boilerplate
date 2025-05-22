# React Component Library Boilerplate

This project serves as a boilerplate for creating reusable React component libraries and deploying them to npm. It includes an example `AnimatedGradientButton` component featuring customizable sizes, variants, and a gradient animation effect.

## Setup

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or 
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or 
   yarn start
   ```

## Using the `AnimatedGradientButton`

To use the `AnimatedGradientButton` component in your project:

1. Install the package (if published to npm):
   ```bash
   npm install <repo-name>
   # or 
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
   npm publish
   ```

5. Verify the package is published by searching for it on [npm](https://www.npmjs.com/).

## License

This project is licensed under the MIT License. See the LICENSE file for details.