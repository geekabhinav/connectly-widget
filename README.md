# Connectly Widget

---

## Prerequisites
* NodeJS >= 14.x
* Yarn


### Tech stack

1. React
2. Webpack
3. SCSS
4. Jest with React-Testing-Library
5. No UI frameworks used

### Steps to run
* Clone repo and run the following commands in the folder
* `yarn install`
* `yarn start`
* To run test suite `yarn test`
* To create production build `yarn build`

### How to include the widget in 3rd party websites?

On running `yarn build`, Webpack will create a single minified JS file 190KB (62KB gzipped) which can be imported in any HTML page 

```
<script defer="defer" src="/path/to/filename.js">
```

Beyond this, the website owner has the ability to initialize the widget and they can pass certain configuration options as well.

```
  <script type="application/javascript">
    window.addEventListener('load', function() {
      if (!window["Connectly"]) {
        return;
      }

      const config = {
        selector: "#root",
        accessKey: "access",
        secret: "secret",
        user: {
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@gmail.com",
          username: "john222",
        }
      };
      var connectly = new Connectly.WidgetApp(config);
      connectly.init();
    })
  </script>

```

### Unit tests

Unit testing has been implemented using React Testing Library and Jest. Only 2 files are being tested for the sake of display and more can be added easily if required. To run the unit tests locally, use `yarn test`
