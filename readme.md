# Chrome Extension created with React Typescript to display snowflakes on a website

## Getting started

Create a project based on this boilerplate.

```
$ npx degit https://github.com/sivertschou/react-typescript-chrome-extension-boilerplate.git#christmas <project-name>
```

Navigate to the project directory and install the dependencies.

```
$ npm install
```

To build the extension, and rebuild it when the files are changed, run

```
$ npm start
```

After the project has been built, a directory named `dist` has been created. You have to add this directory to your Chrome browser:

1. Open Chrome.
2. Navigate to `chrome://extensions`.
3. Enable _Developer mode_.
4. Click _Load unpacked_.
5. Select the `dist` directory.

Project created following this guide:  
[Creating a Chrome Extension with React and TypeScript](https://react.christmas/2020/12)