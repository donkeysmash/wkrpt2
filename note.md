React v16
https://code.facebook.com/posts/1716776591680069/react-16-a-look-inside-an-api-compatible-rewrite-of-our-frontend-ui-library/

v16 ready yet?
http://isfiberreadyyet.com/

What is different in React Fiber 
https://www.infoq.com/news/2017/05/react-fiber-closer-look

https://reactjs.org/docs/optimizing-performance.html

https://medium.com/@arikmaor/react-redux-performance-tuning-tips-cef1a6c50759

https://github.com/acdlite/react-fiber-architecture

https://benchling.engineering/a-deep-dive-into-react-perf-debugging-fd2063f5a667

http://somebody32.github.io/high-performance-redux/



1. Introduction
  1.1. COMPASS
  1.2. Backend and Frontend
  1.3. Frontend stack
    1.3.1. Single Page Application
    1.3.2. React and Redux
    1.3.3. Development and Deployment
  1.4. Scope
  1.5. Outline

2. Current situation and Test plan
  - current version v15 
  - looking to upgrade v16
  2.1. Production Environment
    2.1.1. Webpack
    2.1.2. Bundle size
  2.2. Test Plan
    - changing states
    - changing props
    - updating subcomponent
    - updating parents
    - pure components
  2.3. React-perf
    - disabled

3. V15 performance
4. V16 
  4.1. why v16? Fiber
  4.2. performance analysis
    - same as above
5. Preact
  5.1. What is Preact?
  5.2. Breaking changes
  5.3. Performance analysis
    - same as above

6. Redux Performance Optimizations
  - how to render
  - naive approach
  - better approach
  - using mapStateToProps
  - using reselect

7. Conclusions
8. Recommendations


