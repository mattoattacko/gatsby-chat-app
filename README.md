![CF](http://i.imgur.com/7v5ASc8.png) JS Framework Comparative Analysis: Vue.js vs React
=======================================================================

# Vue.js

#### Research Conducted By: Kevin O'Halloran, Matthew McQuain, James Denton, Brandon Haynes

##### Overall Score (Out of 10): 9

## General

#### Gatsby.js

* Usually when you visit a website that has some dynamic content, the browser sends a request for that page to a server. The server receives our request, fetches the data for the page we want from a database, and then loads a user interface template. The template and the data are then combined and a response for that page is sent. This is how a dynamic site works.

* Gatsby is static site generator for React. So you get to build a React app and get server side rendering. This means that Gatsby gives the browser a complete page as a single file. All the necessary CSS and images are embedded in the page. Only the CSS really needed for that page is included. 

* Gatsby also performs prefetching. After a page is loaded, it fetches data for all the other pages that are linked on the loaded page. This makes our user's navigation experience much faster overall. 

#### Vue.js

* Vue.js is a progressive, incrementally-adoptable JavaScript framework for building ueser interfaces on the web. 

* Vue is incrementally adoptable, and can easily scale between a library and a framework depending on different use cases. It uses a core library that focuses on the view layer only, and an ecosystem of supporting libraries that helps you tackle complexity in large Single-Page Applications.

### Comparison of Vue & React

* React and Vue are both popular JavaScript frameworks for building interactive applications. React is backed and used by Facebook, and although Vue isn’t backed by a corporation, it's very popular in the open source community.

* Both frameworks are full-featured and would work well for most developers. There are really no major drawbacks between Vue and React, it more boils down which approach you prefer.

* React is still more JavaScript-y in how you render components and pass properties around. You’re definitely more decoupled from your templates.

* Vue is still template and attribute based, and is probably a better choice if you’re looking to integrate a new framework into an existing JavaScript application.

### Pros

* Easily migrate code from a React app. 

* Static build makes for fast-loading pages. 

* Ranked #4 according to github stars among Static Site Generatorss.

* Server-side rendering (SSR) is the ability of a front-end framework to render markup while running on a back-end system. Templates are rendered on the server with front-end interactivity handled by the JavaScript framework. 

* Vue seems to take SSR a bit more seriously with their community-built SSR library – Nuxt.js, and provide docs on how to render Vue templates with PHP. It’s basically a server rendering your JS templates to HTML, and setting up state management (if you’re using it) and routing on the server.

### Cons

* As far as I can tell there is no equivalent in Vue for React’s Context API. That’s not too surprising because Vuex largely provides similar functionality with a ‘store pattern’ making shared state a bit easier for simpler applications.

### Verdict

* We more lean toward Vue.js over React due to the ease of setup and pluging-in to a WordPress theme. When we have multiple components on the same or different pages, Vue.js feels more flexible and light weight. 

* We also like the way of using template in Vue.js, such as inline templates. 

### Ratings and Reviews
#### Documentation
The documentation is easy to navigate and contains helpful walkthroughs

#### Systems Requirements
Above and beyond 'node' and 'linux', what dependencies or core requirements exist for this framework?  Can it play at  AWS/Heroku?  Does it require a certain database?

#### Ramp-Up Projections
How long would/should it take a team of mid-junior developers to become productive?

#### Community Support and Adoption levels
How popular is this framework? What big companies are running on it? How is it "seen" in the general JS community?  Is there an active community of developers supporting and growing it?


### Links and Resources
* [Gatsby](https://www.gatsbyjs.org/)
* [docs](https://www.gatsbyjs.org/docs/)
* [tutorial](https://www.gatsbyjs.org/tutorial/)
* [pros/cons](http://russelljanderson.com/choosing-gatsby/)
* [top 10 SSGs](https://www.netlify.com/blog/2018/08/24/the-top-10-ssgs-of-2018-according-to-staticgen-and-github/)

### Code Demos
* [live/running application](http://xyz.com)
* [code repository](https://github.com/mattoattacko/gatsby-chat-app)

### Operating Instructions
If someone were to download your repo (above), what steps do they need to take to run the application
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
