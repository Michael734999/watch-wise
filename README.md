# Watch Wise Web App

Watch Wise is a fast and responsive movies web app that provides starwars and other movie data. Built using modern web technologies like React, Redux, TypeScript, Vite, and Chakra UI, this app ensures a smooth, lightweight, and interactive user experience.

# Features

- Starwars and other movie data.
- Modern tech stack: Built with React, Redux, TypeScript, and Chakra UI for optimal performance and responsiveness.
- User-friendly UI: Intuitive design powered by Chakra UI for accessible, customizable, and beautiful UI components.
- Lightweight & Fast: Optimized for a fast and smooth user experience, powered by Vite for quick build times.

# Technologies Used

- React: A popular JavaScript library for building user interfaces.
- TypeScript: A statically typed superset of JavaScript, improving code quality and reliability.
- Redux: A global state management tool for handling global state.
- Vite: A next-generation, fast, and highly optimized build tool.
- Chakra UI: A component library that provides customizable and accessible UI elements for faster development.
- TMDB API: Used for fetching movie data.

# Run Locally

To get started, clone the repository and install dependencies:

```sh
cd watch-wise
yarn install

To start the application, run
yarn run dev
```

This will start a development server, and you can open your browser to http://localhost:3000 to view the app.

# Environment Variables

To use TBMD API, you’ll need to set up your .env file with the following variables:

```js
VITE_TMDB_API_KEY = requestToken;
VITE_TMDB_API_AUTH_TOKEN = requestToken;
```

Please request these keys via email: mmoore4361@gmail.com.

# Running Tests with Vitest

You can run tests using the following command:

```sh
for running tests
yarn run test

for a full test coverage report
yarn run coverage
```

# Pre-commit Linting check with Husky

To maintain high code quality and enforce consistent coding standards, I’ve implemented a pre-commit hook using Husky. This hook automatically runs whenever a commit is made, ensuring that code is properly linted and formatted before being committed to the repository. By integrating Husky, the pre-commit hook helps catch common issues such as syntax errors, unused variables, and inconsistent code styles.

# Why I Chose Vite as the Build Tool

When selecting a build tool for this project, I opted for Vite because of its speed, simplicity, and modern approach to bundling JavaScript applications. Vite is designed to provide fast development builds and a smooth user experience with minimal configuration.

Here are the main reasons I chose Vite over other build tools like Webpack or Create React App:

1. Faster Development Builds: Vite leverages ES modules for development, which allows it to serve your code without bundling it first. This results in significantly faster startup times and instant module reloading as you make changes to your code, improving the development experience.

1. Out-of-the-box Optimization: Vite automatically optimizes your code for production, leveraging tools like ESBuild for extremely fast bundling. This leads to faster build times, smaller bundle sizes, and an overall smoother deployment process.

1. Native Support for TypeScript: Vite has built-in support for TypeScript, which makes setting up the project easier and reduces the need for additional configurations compared to other bundlers.

1. Modern Features and Flexibility: Vite supports modern web features such as Hot Module Replacement (HMR), tree-shaking, and code-splitting right out of the box, which makes it highly customizable and future-proof for more complex applications.

Overall, Vite was chosen for its performance advantages and ability to streamline the development and build process, making it an ideal fit for this project.

# Why I Chose Chakra UI for Styling

For styling, I chose Chakra UI over other libraries like Material-UI or Tailwind CSS for several key reasons that align with the needs of the project:

1. Ease of Use: Chakra UI offers a simple and intuitive API that allows developers to quickly build responsive and accessible UI components without requiring deep knowledge of CSS. This is particularly helpful for creating consistent and user-friendly interfaces with minimal effort.

2. Accessibility First: Chakra UI is built with accessibility in mind, ensuring that all components follow best practices for accessibility out of the box. This was important for me, as I wanted the application to be usable by as many people as possible, regardless of their abilities.

3. Customizable and Themeable: One of the standout features of Chakra UI is its theming capabilities. Chakra allows for easy customization of the app's color scheme, typography, and other styles through a theme provider, without requiring complex CSS overrides. This makes it simple to create a cohesive design system while maintaining flexibility.

4. Component-Based Design: Chakra UI provides a wide range of pre-built, responsive, and customizable components like buttons, modals, form elements, and alerts, which greatly speeds up the development process. I didn't have to build UI elements from scratch or spend time on styling intricate components.

In comparison to other libraries like Material-UI or Tailwind CSS, Chakra UI provided a balanced combination of accessibility, ease of use, flexibility, and pre-built components that allowed me to focus more on building features rather than dealing with complex design systems or layout grids.

# Why I Chose a Functional Approach Over a Class-based Approach

In this project, I adopted a functional component-based approach using React Hooks instead of the traditional class-based components. Here’s why:

1. Simplicity and Readability: Functional components are simpler and more concise compared to class-based components. They are easier to read and maintain, especially for smaller components. By using React Hooks (such as useState, useEffect, and custom hooks), the component logic becomes more declarative and manageable, avoiding the need for lifecycle methods and complex class structures.

2. Improved Reusability and Composability: Functional components encourage a compositional approach, where logic can be encapsulated within custom hooks and reused across the app. This is more efficient and scalable than dealing with complex state management within class-based components.

3. Better Performance: React's functional components, especially with Hooks, allow for optimizations such as memoization and lazy loading. These optimizations lead to better performance, as React can more efficiently re-render only the necessary parts of the UI.

4. Future-Proofing: React's team has emphasized functional components with Hooks as the future direction of React development. The majority of new React features and optimizations are designed with functional components in mind. By adopting a functional approach, this project is better aligned with React’s evolving best practices.

5. Less Boilerplate: Functional components require less boilerplate code compared to class components. There’s no need for constructors, the render() method, or managing this binding, all of which can introduce additional complexity and potential issues.

In conclusion, the functional approach, combined with the power of React Hooks, made the development process more efficient, modular, and maintainable. It also aligns with the direction React is moving toward, ensuring that the project is built on modern and best practices.

# Why I Used Redux Toolkit

I chose Redux Toolkit for state management in this React app because it offers several advantages over other state management tools:

1. Simplified Syntax: Redux Toolkit provides a set of APIs that simplify the typically verbose Redux code, reducing the boilerplate required for actions, reducers, and store setup.

2. Built-in Best Practices: It includes best practices out-of-the-box, such as automatic immutability checks and simple async handling with createAsyncThunk, ensuring the codebase remains clean and maintainable.

3. Optimized Performance: Redux Toolkit is optimized for performance with features like memoization, which helps prevent unnecessary re-renders in React components.

4. Flexibility & Extensibility: While it simplifies Redux usage, it still allows full flexibility for complex state management when needed. It also integrates seamlessly with the Redux DevTools for debugging.

5. Active Community and Support: Redux Toolkit is maintained by the Redux team, which ensures that it's regularly updated and well-supported with extensive documentation.

For these reasons, Redux Toolkit felt like the most efficient and scalable choice for state management in this web app.

# Future Features

If I had more time, I would have added the following features to enhance the app:

1. TV Shows Feature: I would integrate a TV shows section where users could explore, search, and discover their favorite TV series. This feature would include the ability to view detailed information about each show, including episodes and seasons, similar to the movies feature.

2. Watchlist Functionality: I would implement a watchlist feature, allowing users to add movies to their personal list to keep track of what they want to watch in the future. This would include options to mark movies as watched, remove them from the list, and view their watch history.

These additions would provide users with a more complete and interactive experience when managing their movie and TV show preferences.
