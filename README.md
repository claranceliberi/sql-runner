# SQL-runner
SQL runner is a tool to run SQL queries and get result in tabular form

## Tech stack
 1. ### Framework 
    I used [Vue.js](https://vuejs.org/) on top of [Vite.js](https://vitejs.dev/).
 2. ### Other plugins
    1. [Eslint](https://eslint.org/) for linting
    2. [Prettier](https://prettier.io/) for code formatting
    3. [TailwindCss](https://tailwindcss.com/) for styling
    4. [Moment.js](https://momentjs.com/) for date formatting 

## Page load time
I did 5 experiments to measure the page load time. The result is shown below. Data was measured using [Page load time](https://chrome.google.com/webstore/detail/page-load-time/fploionmjgeclbkemipmkogoaohcdbig/related?hl=en) chrome extension.

Note: to ensure transparent and fair results and avoid extension disruption, I used chrome incognito .

No. | Time | comment
--- | ---  | ---
1 | 930 ms | Initial load time nothing has ever cached
2 | 471 ms  |
3 | 477 ms |
4 | 273 ms |
5 | 309 ms |

## Optimization
    - [x] I changed the `RUN` button color to ensure good accessibility   
    - [x] I  added meta `description` to ensure high SEO score