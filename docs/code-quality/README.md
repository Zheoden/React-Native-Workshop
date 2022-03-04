# Code quality tools

- [Linting tools](#Linting-tools)
  - [ESLint vs TSLint](#ESLint-vs-TSLint)
- [Formatting tools](#Formatting-tools)
- [Setup](#Setup)
  - [Setup ESLint](#Setup-ESLint)
  - [Setup Prettier](#Setup-Prettier)
  - [Setup EditorConfig](#Setup-EditorConfig)
  - [Plugins](#Plugins)
- [References](#References)

## Linting tools
Linting is a very important part of our developing process. After every push, we should run it to analyze the source code looking for errors such as style and programming errors to name a few. For that reason is vital to setup this tools.

### ESLint vs TSLint
There are tons of articles about it but [Palantir itself](https://medium.com/palantir/tslint-in-2019-1a144c2317a9) (TSLint's creator) stated that `TSLint` is planned to be **deprecated** and they will be focusing on improving `ESLint`.

We think that this is enough reason to use `ESLint` over `TSLint`.


## Formatting tools
Here, the thing gets trickier because formatting is a little more subjective. The most famous tool is [Prettier](https://prettier.io) that formats the code following specific rules.

However, there is another tool that is very interesting called [EditorConfig](https://editorconfig.org/). Like they state in their own page: 
> EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs

Combining both of them, we can write code more fluently and also fix formatting issues automatically.


## Setup
### Setup ESLint
First we must add ESLint dependencies to the project:
```powershell
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-config-airbnb-typescript eslint-plugin-import  eslint-plugin-react-hooks eslint-plugin-jsx-a11y --dev
```
Then, project's root directory, create *`.eslintrc.js`* with the following code:
```js
module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': ['off'],
    'class-methods-use-this': ['off'],
    'import/prefer-default-export': ['off'],
    'react/destructuring-assignment': ['off'],
    'react/state-in-constructor': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/display-name': ['off']
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
```

### Setup Prettier
We do the same with Prettier, first run yarn:
```
yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev
```

On the root project directory create *`.prettierrc.js`* with the following code:
```js
module.exports = {
  tabWidth: 2,      // Specify the number of spaces per indentation-level.
  useTabs: false,   // Indent lines with tabs instead of spaces.
  printWidth: 120,  // Specify the line length that the printer will wrap on.
  singleQuote: true,// Use single quotes instead of double quotes.
  endOfLine: 'auto',// Set EOF to follow files predominant EOF character(s)
  bracketSpacing: true,     // Set spacing between brackets
  jsxBracketSameLine: false // Unset brackets to be on the same line for JSX
};
```

### Setup EditorConfig
On the same folder, create *`.editorconfig`* with this code:
```properties
# top-most EditorConfig file
root = true

# Newline style (Win in this case) with a newline ending every file. Also delete trailing whitespace
[*]
end_of_line = crlf
insert_final_newline = true
trim_trailing_whitespace = true
max_line_length = 80

# Set default charset
[*]
charset = utf-8

# 2 space indentation
[*]
indent_style = space
indent_size = 2

# Markdown styles
[*.md]
max_line_length = 0
trim_trailing_whitespace = false
```
EditorConfig doesn't require us to run yarn, but we will need to install its plugin.

### Plugins
In order to completely integrate these tools in our daily work, assuming we use VS Code, we need to install the following plugins:
- [*EditorConfig*](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [*Prettier*](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [*ESLint*](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## References
- [EditorConfig vs ESLint vs Prettier ](https://stackoverflow.com/a/48471763)
- [From ESLint to TSLint and back again - Medium article](https://codeburst.io/from-eslint-to-tslint-and-back-again-bf259c2e7437)
- [NPM Trends - ESLint vs TSLint](https://www.npmtrends.com/eslint-vs-tslint)
- [ESLint rules](https://eslint.org/docs/rules/)
- [Using ESLint and Prettier in a TS Project](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
