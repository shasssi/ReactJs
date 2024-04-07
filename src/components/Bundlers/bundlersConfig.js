import React from "react";

export const craCode = `/* npx - command used to execute. Here it executes create-react-app and gives the new react project. */

npx create-react-app my-app

npm run start`;

export const craData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>CRA - Create React App</b> &#x2192; By simply running one command,
        Create React App sets up everything that we need to start our React
        project.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            It takes care of webpack, babel, and other build dependencies. All
            build dependencies are maintained by <b>react-scripts</b> so it's
            easy to maintain and upgrade with just one command &#x2192;{" "}
            <b>"npm install react-scripts@latest"</b>
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            <b>Disadvantages of CRA</b> &#x2192; Using Create React App makes it
            difficult to add cusotm build configurations. &#x2192; Create React
            App also adds a lot of abstraction and extra code that is really not
            needed.
          </span>
        ),
      },
    ],
  },
];

export const bundlerseData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>Bundling</b> is an optimization technique that bundles our code and
        all its dependencies together in one bundle file.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            Bundler is used to reduce the load time of the browser. &#x2192; It
            takes multiple javascript file (js file + 3rd party dependencies
            lodash, react, node_modules etc..) and coverts it to bundled
            javascript file.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            Different Bundlers &#x2192;{" "}
            <b>Webpack, Vite, gulp, parcel, browserify, grunt etc.</b>
          </span>
        ),
      },
    ],
  },
];

export const installCode = `npm init -y

npm i react react-dom

npm i webpack webpack-cli webpack-dev-server --save-dev

npm install @babel/core babel-loader @babel/preset-react @babel/preset-env --save-dev

npm install html-webpack-plugin --save-dev

npm install --save-dev style-loader css-loader

npm run start

npm run build
`;

export const installationData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>Setup React project with Webpack</b>
      </span>
    ),
  },
];

export const webpackCode = `const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
    publicPath: '/' /* added public path to fix the page refresh issue for lazy loaded componenet */
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "assets/images/[name].[ext]",
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "assets", toType: "dir" }],
    }),
  ],
};`;

export const webpackeData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>Webpack</b> &#x2192; It takes files of different types such as
        JavaScript and front-end asset files (HTML, CSS, images, etc.) and
        packages them into a group of smaller files.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            Webpack also creates a dependency graph to import modules that are
            dependent on one another in the correct oder.
          </span>
        ),
      },
    ],
  },
  {
    id: 2,
    mainContent: <span>Configurations needed for webpack.config.js</span>,
    subContent: [
      {
        id: 21,
        content: (
          <span>
            &#x25CF; <b>entry</b> &#x2192; tells the webpack where the entry
            point to our application is.
          </span>
        ),
      },
      {
        id: 22,
        content: (
          <span>
            &#x25CF; <b>output</b> &#x2192; tells the webpack the name and
            location of our bundled file that will be generated when we produce
            a production build.
          </span>
        ),
      },
      {
        id: 23,
        content: (
          <span>
            &#x25CF; <b>module</b> &#x2192; inform webpack about different types
            of loader that we use.
          </span>
        ),
      },
      {
        id: 24,
        content: (
          <span>
            &#x25CF; <b>Rules</b> &#x2192; is an array of object where we set a
            rule for different file types.
          </span>
        ),
      },
      {
        id: 25,
        content: (
          <span>
            &#x25CF; <b>webpack Loaders</b> &#x2192; It is a way to pre-process
            the files that are not js files (jsx, css, scss etc.) &#x2192; They
            work like compilers that check for different kinds of files and
            match them with their appropriate loaders for handling them.
          </span>
        ),
      },
      {
        id: 26,
        content: (
          <span>
            &#x25CF; <b>['style-loader', 'css-loader']</b> &#x2192; Used for
            processing the CSS file.
          </span>
        ),
      },
      {
        id: 27,
        content: (
          <span>
            &#x25CF; <b>babel-loader</b> &#x2192; Used during bundling process
            for undertanding JSX files and processing it.
          </span>
        ),
      },
      {
        id: 28,
        content: (
          <span>
            &#x25CF; <b>presets</b> &#x2192; A preset in Babel is a collection
            of plugins that are used to support specific language features.
          </span>
        ),
      },
      {
        id: 29,
        content: (
          <span>
            &#x25CF; <b>@babel/preset-react</b> &#x2192; By default, Babel has
            the preset es2015 which adds support for ES6 JavaScript and the
            preset react which adds support for JSX. JSX stands for JavaScript
            XML and it allows us to write HTML in JavaScript.
          </span>
        ),
      },
      {
        id: 30,
        content: (
          <span>
            &#x25CF; <b>@babel/preset-env</b> &#x2192; It is a preset that
            allows us to use the latest JavaScript code without having to manage
            which syntax transforms are needed by our target environment(s).
            This package will also make our JavaScript bundles smaller.
          </span>
        ),
      },
      {
        id: 31,
        content: (
          <span>
            &#x25CF; <b>devServer historyApiFallback</b> &#x2192; URL /user/:id
            won't know where to resolve since this path doesn't exist in the
            development server &#x2192; Development server will handle this case
            for you and fallback to `index.html` through which you load the
            application and the react-router is resolving the correct page
            components.
          </span>
        ),
      },
      {
        id: 32,
        content: (
          <span>
            &#x25CF; <b>HTMLWebpackPlugin</b> &#x2192; tells the webpack to
            inject the bundled files it generates into an HTML file called
            index.html
          </span>
        ),
      },
    ],
  },
];

export const benefits = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>Benefits of using Bundlers</b>.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>- Build (different build for development & production)</span>
        ),
      },
      {
        id: 12,
        content: (
          <span>- It creates local server which is needed for deleopment.</span>
        ),
      },
      {
        id: 13,
        content: (
          <span>
            - HMR (Hot Module Replacement) refreshes the page automatically.
          </span>
        ),
      },
      {
        id: 14,
        content: <span>- File watching algorithm (written in C++).</span>,
      },
      {
        id: 15,
        content: (
          <span>- It gives faster build (because it is doing caching).</span>
        ),
      },
      {
        id: 16,
        content: <span>- It does image optimization.</span>,
      },
      {
        id: 17,
        content: (
          <span>
            - Bundling (It will do minification of our file). Compress (It will
            also compress the file).
          </span>
        ),
      },
      {
        id: 18,
        content: <span>- It does consistent Hashing.</span>,
      },
      {
        id: 19,
        content: <span>- Code Splitting.</span>,
      },
      {
        id: 20,
        content: (
          <span>
            - Differential Bundling (based on different kind of browser, it can
            generates different bundle for different browser).
          </span>
        ),
      },
      {
        id: 21,
        content: <span>- Tree Shaking (remove unused code).</span>,
      },
      {
        id: 22,
        content: <span>- Better error handling. Supports HTTPS</span>,
      },
    ],
  },
];
