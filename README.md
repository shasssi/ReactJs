1. npm init -y
2. npm i react react-dom
3. npm i webpack webpack-cli webpack-dev-server --save-dev
4. npm install @babel/core babel-loader @babel/preset-react @babel/preset-env --save-dev
5. npm install html-webpack-plugin --save-dev
6. npm run start
7. npm run build
8. npm install --save-dev style-loader css-loader

- refer another useRef scenarion in bookmark component.

- issue 1. toggle is not working for bookmark

- webpack error MIME type ('text/html') is not executable,
- to fix this error -> publicPath added in output obj webpack config

#### Use case - Context API
1. Theming: Context API is useful for managing themes in an application. You can create a theme context to provide the current theme and allow components to access and update it.

2. User Authentication: Storing and managing user authentication state across components can be done effectively with Context API. You can provide authentication information to components that need it.

3. Localization: Context API can be employed for handling internationalization and localization in an app. You can provide language settings and translated content through a context.

4. App Settings: For managing user preferences and application settings, Context API can store and share configuration data among different parts of the application.

#### Use cases - Redux
1. State Management: Redux is primarily designed for centralized state management in complex applications. It’s ideal when you have a large amount of application state that needs to be shared across components.

2. Predictable State Changes: Redux enforces a strict unidirectional data flow, making it easier to predict how the state changes in response to actions. This predictability is valuable for debugging and maintaining the application.

3. Time-Travel Debugging: Redux allows you to record and replay actions, facilitating time-travel debugging. This feature is crucial for pinpointing and fixing bugs in your application.

4. Middleware Integration: Redux provides a middleware system that allows you to add custom logic, such as logging, caching, or asynchronous actions, to your application’s state management process.

5. Large-Scale Applications: Redux shines in large and complex applications where data flows through many components, and you need a structured approach to manage state changes and side effects.

#### testing library
https://www.youtube.com/playlist?list=PLIGDNOJWiL182w2gKS5TsDuO6PZkJa0tK
- Jest is a testing framework which provides assertions, mocking etc..
- act and wait for usecase - https://medium.com/@AbbasPlusPlus/act-and-waitfor-react-testing-library-dba78bb57e30
https://davidwcai.medium.com/react-testing-library-and-the-not-wrapped-in-act-errors-491a5629193b
