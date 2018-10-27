# Notes

**The multiple contributors to this repo are just my different computers I worked on / different GitHub accounts that belong to me. I didn't collaborate with other devs on this. :-)**

There are two branches in this repo. `master` and `import-export`.
The `master` branch solves the minimum requirements of the exercise and the `import-export` branch begins to solve for importing and exporting the state of the application via an Express server.

**The structure of the two branches is different enough that one probably needs to destroy the project folder and re-run `git clone` and `npm install` when switching to the `import-export` branch.**

## master branch

For this branch, there are no external modules installed outside of the requirements for `create-react-app`. I solved the primary tree creation via a recursive function named `buildRecursiveList`. 

The CSS approach is fairly simple, as I wanted to focus on the JS side of things for this project. CSS is scoped per component, and thanks to `create-react-app` is concatenated into a single file when the `build` command is run.

I used semantic HTML elements throughout the application, and added a couple of accessibility features such as `.visually-hidden` content and a clear focus state for clickable elements. The application should be completely usable via keyboard without the use of a mouse. Screen reader technology should also be pretty capable of using the application. If accessibility is a priority I would extend these features by adding `aria-labels` and other `aria` attributes to help users with screenreaders to understand what elements are expanded etc.

# import-export branch

This branch adds an Express server, and fetches the `data.json` via the Fetch API in order to support importing and exporting data.

The main limitation of this solution, which makes it incomplete, is that state is not importable/exportable. The structure of the tree is fully importable and exportable though.

The `import` functionality uses the FormData API, and `export` uses a standard non-ajax Form GET to interact with the Express server. 
