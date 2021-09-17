<p align="center">
  <img src="https://cdn.discordapp.com/attachments/797112544682573886/887682768371339274/SkrikPanik1.png" />
</p>


## Installation
- Run `npm install` in terminal to get node_modules and package.json.
- Run `npm start` in terminal to launch the app that will open on localhost port 3000.

### Dependencies:
- [React](https://facebook.github.io/create-react-app/docs/getting-started)
- [Material-Ui](https://material-ui.com/getting-started/installation/)
- [Material-Ui-Icons](https://material-ui.com/components/material-icons/)
- [Typescript](https://www.typescriptlang.org/)
- [Yup](https://www.npmjs.com/package/yup)
- [Formik](https://formik.org/docs/overview)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Uuid](https://www.npmjs.com/package/uuid)
### About the project:
___
We made a storepage for selling nerdbrew beer for programmers (and for others with good taste).
The name of the page and logo is based of a Swedish alcohol distributer, SystemBolaget, but the design and layout is our own.

For this project we have used `Material UI`,`React` and `Typescript` to deliver an application with shopping cart
features. The cart consists of various components which includes Product items to add to a cart, checkout forms with validations, and an admin-mode page to alter and add products which then is stored in `localstorage`.

The page is fully responsive, meaning that we have considered any device, such as tablets, smartphones and widescreen monitors. We used `React Router` to navigate between the different pages.

All product data is firstly mocked through a `Typescript Interface`. Afterwards the data is handled through `localstorage`.

For styling the page and it's layout we used `Material UI` components and `Css`.

### Restrains:
___
We have taken no mearsuments for payment options, calculation on taxes or delivery fees.
No shipping functionallity, no login system or saving of customer details for order notification.
Also no value excange depending on where you live. 

Everything is in Euro and the only calculation functionallity used is to calculate amount and cost for price per unit.

### Required speccs for the project:
___
By teachers standars and speccs.
#### Pass
1. &#9745; Git & Github has been used
2. &#9745; Your project map has a README.md file
3. &#9745; Assignment is handed in on time
4. &#9745; Typescript & Material-UI has been used
5. &#9745; React Router has been used for navigation
6. &#9745; Checkout form can be autofilled
7. &#9745; Every field in checkout form has validation
8. &#9745; Homepage is fully responsive
9. &#9745; Mocked products has its own file and should be implemented with TS interface
10. &#9745; Prodject is up on Netlify or other service

#### Extra credit
1. &#9745; All tasks for a passable grade have been met
2. &#9745; Admin page where you can edit, add & remove products
3. &#9745; Every product is stored in localstorage (if localstorage is empty when page 
is loaded, all products need to be pre-saved there

___
https://github.com/JonathanMarkert/systemutvecklarbolaget
