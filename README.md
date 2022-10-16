Table of Contents
---

- [product-analysis-website-crescentpartha](#product-analysis-website-crescentpartha)
  - [Product Analysis Website](#product-analysis-website)
    - [`Project Descriptions:`](#project-descriptions)
    - [`Tasks Checklist:`](#tasks-checklist)
    - [`Optional tasks checklist:`](#optional-tasks-checklist)
    - [`Bonus tasks checklist:`](#bonus-tasks-checklist)
    - [`Some Conditions:`](#some-conditions)
  - [Special Notes](#special-notes)
  - [Inefficient Regular Expression Complexity in nth-check (`Fix vulnerabilities`)](#inefficient-regular-expression-complexity-in-nth-check-fix-vulnerabilities)
    - [`Solutions`](#solutions)

# product-analysis-website-crescentpartha

## Product Analysis Website

> [Repository Link](https://github.com/programming-hero-web-course-4/product-analysis-website-crescentpartha "Product Analysis Website - Assignment 09 | Client-Side Code") <br> [Live-Website Link](https://product-analysis-website-crescentpartha.netlify.app/ "Product Analysis Website - Assignment 09 | Live-Website")

**[🔼Back to Top](#table-of-contents)**

### `Project Descriptions:`
- This is a ___Product Review website___.
- Customers ___Reviews___ are given.
- Display analytical information about ___Investment Vs Revenue___ according to ___charts___ in dashboard.
- Blogs contains some ___modern web development technology___ related posts.
- Meaningful ___documentations___ of this project.

**[🔼Back to Top](#table-of-contents)**

### `Tasks Checklist:`
- [x] ___Header___ or ___Navigation___ contains (HOME, REVIEWS, DASHBOARD, BLOGS, ABOUT, NOT FOUND)
- [x] Use ___Vanilla CSS___ or ___Tailwind-React___ or ___React-Bootstrap___ or other ___CSS Framework___
- [x] ___Customer Reviews (3)___ with ___See All Reviews___ button, if you clicked, then it take you to another route called ___Reviews___.
- [x] Create Review Related Data like ___name___, ___description___, ___rating___, ___image___, ___date___
- [x] ___Meaningful commit___, minimum ___six___ commit should be required
- [x] ___404___ or ___Not Found___ Route
- [x] Fix the ___Page Not found error___ when reload the page
- [x] ___Dashboard___ contain at least ___2 chart___ like ___Line___, ___Area___, ___Bar___, ___Column___, ___Pie___, ___Donut___ chart.
- [x] Chart data could be found in ___data.json___, it is modifiable.
- [x] Give the meaningful ___title name___ and change the ___favicon___.

**[🔼Back to Top](#table-of-contents)**

### `Optional tasks checklist:`
- [x] ___Live demo___ button 
- [x] Header or Navigation ___style___ is optional, functionality is mandatory.
- [x] ___favicon___
- [x] ___Active Route___ (Custom Active Link)
- [x] ___Responsive___ the site
- [x] ___Conditional Rendering___
- [x] Create ___more route___ as your wish

**[🔼Back to Top](#table-of-contents)**

### `Bonus tasks checklist:`
- [x] ___Modify README.md___ file 
  - Project-Name
  - Live-Website Link
  - What I did in this project (minimum 4 bullet point)
- [x] ___Destructuring___
- [x] ___Meaningful___ components and variable ___names___
- [x] ___Custom Hook___ for Home-Reviews & Review route
  - ___Home-Reviews___ route shows __3__ reviews
  - ___Reviews___ route shows all reviews (__12__)
- [x] Answer the ___three (3) questions___ in the blogs route (at least 2)
  - What is ___Context API___? What is the ___purpose___ of Context API?
  - What is ___Semantic Tag___?
  - Difference among ___inline, block, inline-block___ elements?

**[🔼Back to Top](#table-of-contents)**

### `Some Conditions:`
- Product Review Website ___except Phone___
- Use ___meaningful text___ rather than ___Lorem Ipsum___

**[🔼Back to Top](#table-of-contents)**

---

## Special Notes

1. ___To install recharts run:___

   - `npm install recharts --force` (if I got error)
   - `npm install recharts` (otherwise)

2. ___If you see the following warning, ignore it for now.___

   - `Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot`

3. For the ___dashboard___, you can modify the data provided in `data.json` and you can load the data the way you want. 

4. __[optional]__ To display ___ratings___, you can use `font-awesome stars` or you can use `react ratings website` [___class component___ might make it confusing] <br> [react rating github](https://github.com/dreyescat/react-rating)
   - [react rating demo](https://dreyescat.github.io/react-rating/)

``` Terminal
npm install --save react-rating
```

``` Terminal
install font-awesome for react
```

``` JavaScript
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<Rating
    initialRating={3.5}
    emptySymbol={<FontAwesomeIcon icon={faStar} />}
    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
    readonly
></Rating>
```

Please note, you will see an warning while using react rating <br> 
`react-dom.development.js:86 Warning: Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.`

**[🔼Back to Top](#table-of-contents)**

## Inefficient Regular Expression Complexity in nth-check (`Fix vulnerabilities`)

- [Help, npm audit says I have a vulnerability in react-scripts!](https://github.com/facebook/create-react-app/issues/11174 "facebook/create-react-app - github")
- [github Dependabot alert: Inefficient Regular Expression Complexity in nth-check](https://stackoverflow.com/questions/71282206/github-dependabot-alert-inefficient-regular-expression-complexity-in-nth-check "stackoverflow.com")

**[🔼Back to Top](#table-of-contents)**

### `Solutions`

`npm audit` says there's a warning about ___vulnerabilities___ in my project
Open `package.json`. You will find this:

``` JSON
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3"
  }
```

Take `react-scripts` and move it to `devDependencies` (if you **don't have** it, **create it**):

``` JSON
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "react-scripts": "4.0.3"
  },
```

Then, ensure you run `npm audit --production` rather than `npm audit`.

This will fix your warnings.

**[🔼Back to Top](#table-of-contents)**
