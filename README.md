# Hook -- useModal

## You can see the tutorial here
--- Coming soon ---

## You can see a live demo here
* [Custom Hooks usePortal With createPortal](https://codesandbox.io/s/custom-hooks-useportal-with-createportal-zjcqb)


## Examples
Basic example:
```javascript
import React from "react";
import usePortal from "./Hooks/usePortal";

function App() {
  const { Portal } = usePortal({});
  return (
    <div className="App">
      <Portal>Hello Portal!!</Portal>
    </div>
  );
}

export default App;
```

Advanced example:
```javascript
import React from "react";
import usePortal from "./Hooks/usePortal";

function App() {
  const { Portal, isShow, show, hide, toggle } = usePortal({
    defaultShow: false,
    onShow: () => {
      console.log("Show");
    },
    onHide: () => {
      console.log("Hide");
    },
  });
  return (
    <div className="App">
      <button onClick={show}>Show</button>
      <button onClick={hide}>Hide</button>
      <button onClick={toggle}>Toogle</button>
      <p>Status => {isShow.toString()}</p>
      <hr />
      <Portal>Hello World!!</Portal>
    </div>
  );
}
export default App;
```

### `usePortal` accepts:
* `containerId` - Container Id (default "use-portal-react")
* `defaultShow` - Show/hide component at startup (default true)
* `onShow` - Function that runs when the component is rendered
* `onHide` - Function that runs when the component is unmounted

### `usePortal` returns:
* `Portal` - React Component
* `isShow` - Component status 
* `show` - Function Showing Component
* `hide` - Function that hides the Component
* `toggle` - Function Showing/hides Component


## Available Scripts

In the project directory, you can run:

### `yarn start`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

