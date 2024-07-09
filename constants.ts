const courses_examples = [
    {
      id: 1,
      title: "Introduction to Web Development",
      description: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
      fullPrice: 99.99,
      monthlyPrice: 9.99,
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Dive deeper into JavaScript concepts, including ES6+, async/await, and modern frameworks.",
      fullPrice: 149.99,
      monthlyPrice: 14.99,
    },
    {
      id: 3,
      title: "React and Redux",
      description: "Master React and Redux to build dynamic and complex web applications.",
      fullPrice: 199.99,
      monthlyPrice: 19.99,
    },
    {
      id: 4,
      title: "Full-Stack Development with Node.js",
      description: "Learn how to build server-side applications using Node.js, Express, and MongoDB.",
      fullPrice: 249.99,
      monthlyPrice: 24.99,
    },
    {
      id: 5,
      title: "Python for Data Science",
      description: "Explore data analysis, visualization, and machine learning using Python and its libraries.",
      fullPrice: 179.99,
      monthlyPrice: 17.99,
    },
    {
      id: 6,
      title: "DevOps and Cloud Computing",
      description: "Understand DevOps practices and cloud services to streamline development and deployment.",
      fullPrice: 229.99,
      monthlyPrice: 22.99,
    }
  ];
  

  const quizzes_examples = [
    // Quizzes for Course 1: Introduction to Web Development
    {
      id: 1,
      title: "HTML Basics Quiz",
      courseId: 1,
    },
    {
      id: 2,
      title: "CSS Fundamentals Quiz",
      courseId: 1,
    },
    {
      id: 3,
      title: "JavaScript Introduction Quiz",
      courseId: 1,
    },
    {
      id: 4,
      title: "Building Your First Web Page Quiz",
      courseId: 1,
    },
    {
      id: 5,
      title: "Responsive Design Quiz",
      courseId: 1,
    },
    
    // Quizzes for Course 2: Advanced JavaScript
    {
      id: 6,
      title: "ES6 Features Quiz",
      courseId: 2,
    },
    {
      id: 7,
      title: "Async/Await Quiz",
      courseId: 2,
    },
    {
      id: 8,
      title: "JavaScript Design Patterns Quiz",
      courseId: 2,
    },
    {
      id: 9,
      title: "Error Handling Quiz",
      courseId: 2,
    },
    {
      id: 10,
      title: "JavaScript Performance Quiz",
      courseId: 2,
    },
    
    // Quizzes for Course 3: React and Redux
    {
      id: 11,
      title: "React Basics Quiz",
      courseId: 3,
    },
    {
      id: 12,
      title: "Component Lifecycle Quiz",
      courseId: 3,
    },
    {
      id: 13,
      title: "State Management with Redux Quiz",
      courseId: 3,
    },
    {
      id: 14,
      title: "React Router Quiz",
      courseId: 3,
    },
    {
      id: 15,
      title: "Hooks and Context Quiz",
      courseId: 3,
    },
    
    // Quizzes for Course 4: Full-Stack Development with Node.js
    {
      id: 16,
      title: "Node.js Basics Quiz",
      courseId: 4,
    },
    {
      id: 17,
      title: "Express.js Fundamentals Quiz",
      courseId: 4,
    },
    {
      id: 18,
      title: "RESTful API Quiz",
      courseId: 4,
    },
    {
      id: 19,
      title: "MongoDB Quiz",
      courseId: 4,
    },
    {
      id: 20,
      title: "Authentication and Authorization Quiz",
      courseId: 4,
    },
    
    // Quizzes for Course 5: Python for Data Science
    {
      id: 21,
      title: "Python Basics Quiz",
      courseId: 5,
    },
    {
      id: 22,
      title: "Data Analysis with Pandas Quiz",
      courseId: 5,
    },
    {
      id: 23,
      title: "Data Visualization with Matplotlib Quiz",
      courseId: 5,
    },
    {
      id: 24,
      title: "Machine Learning Basics Quiz",
      courseId: 5,
    },
    {
      id: 25,
      title: "SciKit-Learn Quiz",
      courseId: 5,
    },
    
    // Quizzes for Course 6: DevOps and Cloud Computing
    {
      id: 26,
      title: "DevOps Fundamentals Quiz",
      courseId: 6,
    },
    {
      id: 27,
      title: "Continuous Integration/Continuous Deployment Quiz",
      courseId: 6,
    },
    {
      id: 28,
      title: "Docker and Containers Quiz",
      courseId: 6,
    },
    {
      id: 29,
      title: "Cloud Services Overview Quiz",
      courseId: 6,
    },
    {
      id: 30,
      title: "Infrastructure as Code Quiz",
      courseId: 6,
    },
];

const questions_examples = [
    // Questions for HTML Basics Quiz
    {
      id: 1,
      label: "What does HTML stand for?",
      quizId: 1,
    },
    {
      id: 2,
      label: "What is the correct HTML element for inserting a line break?",
      quizId: 1,
    },
    {
      id: 3,
      label: "What is the correct HTML for creating a hyperlink?",
      quizId: 1,
    },
    {
      id: 4,
      label: "How can you make a numbered list?",
      quizId: 1,
    },
    {
      id: 5,
      label: "How can you make a bulleted list?",
      quizId: 1,
    },
    {
      id: 6,
      label: "What is the correct HTML for adding a background color?",
      quizId: 1,
    },
    {
      id: 7,
      label: "Choose the correct HTML element to define important text",
      quizId: 1,
    },
    {
      id: 8,
      label: "What is the correct HTML element for the largest heading?",
      quizId: 1,
    },
    {
      id: 9,
      label: "What is the correct HTML element for defining emphasized text?",
      quizId: 1,
    },
    {
      id: 10,
      label: "Which HTML element is used to specify a footer for a document or section?",
      quizId: 1,
    },
    
    // Questions for CSS Fundamentals Quiz
    {
      id: 11,
      label: "What does CSS stand for?",
      quizId: 2,
    },
    {
      id: 12,
      label: "Which HTML attribute is used to define inline styles?",
      quizId: 2,
    },
    {
      id: 13,
      label: "Which is the correct CSS syntax?",
      quizId: 2,
    },
    {
      id: 14,
      label: "How do you insert a comment in a CSS file?",
      quizId: 2,
    },
    {
      id: 15,
      label: "Which property is used to change the background color?",
      quizId: 2,
    },
    {
      id: 16,
      label: "How do you add a background color for all <h1> elements?",
      quizId: 2,
    },
    {
      id: 17,
      label: "Which CSS property is used to change the text color of an element?",
      quizId: 2,
    },
    {
      id: 18,
      label: "Which CSS property controls the text size?",
      quizId: 2,
    },
    {
      id: 19,
      label: "What is the correct CSS syntax for making all the <p> elements bold?",
      quizId: 2,
    },
    {
      id: 20,
      label: "How do you display hyperlinks without an underline?",
      quizId: 2,
    },
  
    // Questions for JavaScript Introduction Quiz
    {
      id: 21,
      label: "Inside which HTML element do we put the JavaScript?",
      quizId: 3,
    },
    {
      id: 22,
      label: "What is the correct JavaScript syntax to change the content of the HTML element below?",
      quizId: 3,
    },
    {
      id: 23,
      label: "Where is the correct place to insert a JavaScript?",
      quizId: 3,
    },
    {
      id: 24,
      label: "What is the correct syntax for referring to an external script called 'xxx.js'?",
      quizId: 3,
    },
    {
      id: 25,
      label: "The external JavaScript file must contain the <script> tag.",
      quizId: 3,
    },
    {
      id: 26,
      label: "How do you write 'Hello World' in an alert box?",
      quizId: 3,
    },
    {
      id: 27,
      label: "How do you create a function in JavaScript?",
      quizId: 3,
    },
    {
      id: 28,
      label: "How do you call a function named 'myFunction'?",
      quizId: 3,
    },
    {
      id: 29,
      label: "How to write an IF statement in JavaScript?",
      quizId: 3,
    },
    {
      id: 30,
      label: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
      quizId: 3,
    },
  
    // Questions for Building Your First Web Page Quiz
    {
      id: 31,
      label: "What is the correct HTML for creating a hyperlink?",
      quizId: 4,
    },
    {
      id: 32,
      label: "What does HTML stand for?",
      quizId: 4,
    },
    {
      id: 33,
      label: "Which HTML attribute is used to define inline styles?",
      quizId: 4,
    },
    {
      id: 34,
      label: "Which is the correct CSS syntax?",
      quizId: 4,
    },
    {
      id: 35,
      label: "What is the correct JavaScript syntax to change the content of the HTML element below?",
      quizId: 4,
    },
    {
      id: 36,
      label: "How do you insert a comment in a CSS file?",
      quizId: 4,
    },
    {
      id: 37,
      label: "Which property is used to change the background color?",
      quizId: 4,
    },
    {
      id: 38,
      label: "How do you add a background color for all <h1> elements?",
      quizId: 4,
    },
    {
      id: 39,
      label: "Which CSS property controls the text size?",
      quizId: 4,
    },
    {
      id: 40,
      label: "What is the correct CSS syntax for making all the <p> elements bold?",
      quizId: 4,
    },
  
    // Questions for Responsive Design Quiz
    {
      id: 41,
      label: "What is responsive web design?",
      quizId: 5,
    },
    {
      id: 42,
      label: "Which CSS property is used to control the layout of a responsive design?",
      quizId: 5,
    },
    {
      id: 43,
      label: "What is a media query?",
      quizId: 5,
    },
    {
      id: 44,
      label: "How can you make a website responsive?",
      quizId: 5,
    },
    {
      id: 45,
      label: "What is the difference between responsive design and adaptive design?",
      quizId: 5,
    },
    {
      id: 46,
      label: "Which HTML element is used to specify a container for responsive design?",
      quizId: 5,
    },
    {
      id: 47,
      label: "What is the purpose of the viewport meta tag?",
      quizId: 5,
    },
    {
      id: 48,
      label: "How do you make an image responsive?",
      quizId: 5,
    },
    {
      id: 49,
      label: "What is the difference between max-width and min-width in media queries?",
      quizId: 5,
    },
    {
      id: 50,
      label: "How can you use flexbox for responsive design?",
      quizId: 5,
    },
  
    // Questions for ES6 Features Quiz
    {
      id: 51,
      label: "What is a let statement?",
      quizId: 6,
    },
    {
      id: 52,
      label: "What are arrow functions?",
      quizId: 6,
    },
    {
      id: 53,
      label: "What is the spread operator?",
      quizId: 6,
    },
    {
      id: 54,
      label: "What are template literals?",
      quizId: 6,
    },
    {
      id: 55,
      label: "What is destructuring assignment?",
      quizId: 6,
    },
    {
      id: 56,
      label: "What are default parameters?",
      quizId: 6,
    },
    {
      id: 57,
      label: "What is a promise?",
      quizId: 6,
    },
    {
      id: 58,
      label: "What is a class in ES6?",
      quizId: 6,
    },
    {
      id: 59,
      label: "What is a module in ES6?",
      quizId: 6,
    },
    {
      id: 60,
      label: "What are rest parameters?",
      quizId: 6,
    },
  
    // Questions for Async/Await Quiz
    {
      id: 61,
      label: "What is async/await?",
      quizId: 7,
    },
    {
      id: 62,
      label: "How do you declare an async function?",
      quizId: 7,
    },
    {
      id: 63,
      label: "How do you use the await keyword?",
      quizId: 7,
    },
    {
      id: 64,
      label: "What is the purpose of async/await?",
      quizId: 7,
    },
    {
      id: 65,
      label: "How do you handle errors in async/await?",
      quizId: 7,
    },
    {
      id: 66,
      label: "What is the difference between async/await and promises?",
      quizId: 7,
    },
    {
      id: 67,
      label: "Can you use await in a regular function?",
      quizId: 7,
    },
    {
      id: 68,
      label: "How do you run multiple async functions in parallel?",
      quizId: 7,
    },
    {
      id: 69,
      label: "What is the difference between async/await and generators?",
      quizId: 7,
    },
    {
      id: 70,
      label: "How do you use async/await with fetch?",
      quizId: 7,
    },
  
    // Questions for JavaScript Design Patterns Quiz
    {
      id: 71,
      label: "What is a design pattern?",
      quizId: 8,
    },
    {
      id: 72,
      label: "What is the singleton pattern?",
      quizId: 8,
    },
    {
      id: 73,
      label: "What is the factory pattern?",
      quizId: 8,
    },
    {
      id: 74,
      label: "What is the observer pattern?",
      quizId: 8,
    },
    {
      id: 75,
      label: "What is the module pattern?",
      quizId: 8,
    },
    {
      id: 76,
      label: "What is the revealing module pattern?",
      quizId: 8,
    },
    {
      id: 77,
      label: "What is the prototype pattern?",
      quizId: 8,
    },
    {
      id: 78,
      label: "What is the command pattern?",
      quizId: 8,
    },
    {
      id: 79,
      label: "What is the strategy pattern?",
      quizId: 8,
    },
    {
      id: 80,
      label: "What is the decorator pattern?",
      quizId: 8,
    },
  
    // Questions for Error Handling Quiz
    {
      id: 81,
      label: "What is error handling?",
      quizId: 9,
    },
    {
      id: 82,
      label: "What is a try-catch block?",
      quizId: 9,
    },
    {
      id: 83,
      label: "How do you throw an error?",
      quizId: 9,
    },
    {
      id: 84,
      label: "What is the finally block?",
      quizId: 9,
    },
    {
      id: 85,
      label: "How do you create a custom error?",
      quizId: 9,
    },
    {
      id: 86,
      label: "What is a promise rejection?",
      quizId: 9,
    },
    {
      id: 87,
      label: "How do you handle promise rejections?",
      quizId: 9,
    },
    {
      id: 88,
      label: "What is the error object?",
      quizId: 9,
    },
    {
      id: 89,
      label: "What is the difference between synchronous and asynchronous error handling?",
      quizId: 9,
    },
    {
      id: 90,
      label: "How do you debug errors in JavaScript?",
      quizId: 9,
    },
  
    // Questions for JavaScript Performance Quiz
    {
      id: 91,
      label: "What is performance optimization?",
      quizId: 10,
    },
    {
      id: 92,
      label: "How do you measure performance in JavaScript?",
      quizId: 10,
    },
    {
      id: 93,
      label: "What is the difference between profiling and benchmarking?",
      quizId: 10,
    },
    {
      id: 94,
      label: "What is the event loop?",
      quizId: 10,
    },
    {
      id: 95,
      label: "How do you optimize loops in JavaScript?",
      quizId: 10,
    },
    {
      id: 96,
      label: "What is the difference between setTimeout and setImmediate?",
      quizId: 10,
    },
    {
      id: 97,
      label: "How do you optimize memory usage in JavaScript?",
      quizId: 10,
    },
    {
      id: 98,
      label: "What is garbage collection?",
      quizId: 10,
    },
    {
      id: 99,
      label: "How do you reduce DOM manipulation?",
      quizId: 10,
    },
    {
      id: 100,
      label: "What is the difference between debouncing and throttling?",
      quizId: 10,
    },
  
    // Questions for React Basics Quiz
    {
      id: 101,
      label: "What is React?",
      quizId: 11,
    },
    {
      id: 102,
      label: "What is JSX?",
      quizId: 11,
    },
    {
      id: 103,
      label: "What is the difference between a class component and a functional component?",
      quizId: 11,
    },
    {
      id: 104,
      label: "What is a state in React?",
      quizId: 11,
    },
    {
      id: 105,
      label: "What are props in React?",
      quizId: 11,
    },
    {
      id: 106,
      label: "What is a component lifecycle?",
      quizId: 11,
    },
    {
      id: 107,
      label: "What is the virtual DOM?",
      quizId: 11,
    },
    {
      id: 108,
      label: "How do you handle events in React?",
      quizId: 11,
    },
    {
      id: 109,
      label: "What is conditional rendering?",
      quizId: 11,
    },
    {
      id: 110,
      label: "How do you create a React app?",
      quizId: 11,
    },
  
    // Questions for Component Lifecycle Quiz
    {
      id: 111,
      label: "What are React lifecycle methods?",
      quizId: 12,
    },
    {
      id: 112,
      label: "What is the difference between componentDidMount and componentWillUnmount?",
      quizId: 12,
    },
    {
      id: 113,
      label: "What is componentDidUpdate used for?",
      quizId: 12,
    },
    {
      id: 114,
      label: "What is the useEffect hook?",
      quizId: 12,
    },
    {
      id: 115,
      label: "How do you perform cleanup in useEffect?",
      quizId: 12,
    },
    {
      id: 116,
      label: "What is the getDerivedStateFromProps method?",
      quizId: 12,
    },
    {
      id: 117,
      label: "What is the purpose of shouldComponentUpdate?",
      quizId: 12,
    },
    {
      id: 118,
      label: "How do you use getSnapshotBeforeUpdate?",
      quizId: 12,
    },
    {
      id: 119,
      label: "What is the difference between useEffect and useLayoutEffect?",
      quizId: 12,
    },
    {
      id: 120,
      label: "What is the significance of the key prop in React?",
      quizId: 12,
    },
  
    // Questions for State Management with Redux Quiz
    {
      id: 121,
      label: "What is Redux?",
      quizId: 13,
    },
    {
      id: 122,
      label: "What are the core principles of Redux?",
      quizId: 13,
    },
    {
      id: 123,
      label: "What is a reducer in Redux?",
      quizId: 13,
    },
    {
      id: 124,
      label: "What is an action in Redux?",
      quizId: 13,
    },
    {
      id: 125,
      label: "What is the Redux store?",
      quizId: 13,
    },
    {
      id: 126,
      label: "How do you connect a React component to Redux?",
      quizId: 13,
    },
    {
      id: 127,
      label: "What is middleware in Redux?",
      quizId: 13,
    },
    {
      id: 128,
      label: "What is the purpose of the combineReducers function?",
      quizId: 13,
    },
    {
      id: 129,
      label: "How do you handle asynchronous actions in Redux?",
      quizId: 13,
    },
    {
      id: 130,
      label: "What is the useSelector hook in Redux?",
      quizId: 13,
    },
  
    // Questions for React Router Quiz
    {
      id: 131,
      label: "What is React Router?",
      quizId: 14,
    },
    {
      id: 132,
      label: "How do you set up React Router in a React app?",
      quizId: 14,
    },
    {
      id: 133,
      label: "What is a Route in React Router?",
      quizId: 14,
    },
    {
      id: 134,
      label: "What is the Link component used for?",
      quizId: 14,
    },
    {
      id: 135,
      label: "How do you handle nested routes in React Router?",
      quizId: 14,
    },
    {
      id: 136,
      label: "What is the useHistory hook?",
      quizId: 14,
    },
    {
      id: 137,
      label: "How do you handle programmatic navigation in React Router?",
      quizId: 14,
    },
    {
      id: 138,
      label: "What is the difference between BrowserRouter and HashRouter?",
      quizId: 14,
    },
    {
      id: 139,
      label: "How do you handle route parameters in React Router?",
      quizId: 14,
    },
    {
      id: 140,
      label: "What is the Switch component used for?",
      quizId: 14,
    },
  
    // Questions for Advanced React Patterns Quiz
    {
      id: 141,
      label: "What are higher-order components (HOCs)?",
      quizId: 15,
    },
    {
      id: 142,
      label: "What are render props?",
      quizId: 15,
    },
    {
      id: 143,
      label: "What are controlled and uncontrolled components?",
      quizId: 15,
    },
    {
      id: 144,
      label: "What is the context API?",
      quizId: 15,
    },
    {
      id: 145,
      label: "What is the useCallback hook?",
      quizId: 15,
    },
    {
      id: 146,
      label: "What is the useMemo hook?",
      quizId: 15,
    },
    {
      id: 147,
      label: "What is a custom hook?",
      quizId: 15,
    },
    {
      id: 148,
      label: "What is code splitting?",
      quizId: 15,
    },
    {
      id: 149,
      label: "What is lazy loading in React?",
      quizId: 15,
    },
    {
      id: 150,
      label: "What is the useReducer hook?",
      quizId: 15,
    },
  
    // Questions for React Testing Quiz
    {
      id: 151,
      label: "What is Jest?",
      quizId: 16,
    },
    {
      id: 152,
      label: "What is the purpose of the act function in React testing?",
      quizId: 16,
    },
    {
      id: 153,
      label: "How do you test a React component?",
      quizId: 16,
    },
    {
      id: 154,
      label: "What is the difference between shallow rendering and full rendering?",
      quizId: 16,
    },
    {
      id: 155,
      label: "How do you mock dependencies in React testing?",
      quizId: 16,
    },
    {
      id: 156,
      label: "What is the purpose of the render function in testing?",
      quizId: 16,
    },
    {
      id: 157,
      label: "How do you test event handlers in React?",
      quizId: 16,
    },
    {
      id: 158,
      label: "What is the purpose of the waitFor function in testing?",
      quizId: 16,
    },
    {
      id: 159,
      label: "How do you test asynchronous code in React?",
      quizId: 16,
    },
    {
      id: 160,
      label: "What is the purpose of the getByText method in testing?",
      quizId: 16,
    },
  
    // Questions for Node.js Basics Quiz
    {
      id: 161,
      label: "What is Node.js?",
      quizId: 17,
    },
    {
      id: 162,
      label: "How do you install Node.js?",
      quizId: 17,
    },
    {
      id: 163,
      label: "What is npm?",
      quizId: 17,
    },
    {
      id: 164,
      label: "How do you create a Node.js project?",
      quizId: 17,
    },
    {
      id: 165,
      label: "What is the purpose of the package.json file?",
      quizId: 17,
    },
    {
      id: 166,
      label: "How do you install a package using npm?",
      quizId: 17,
    },
    {
      id: 167,
      label: "What is the difference between require and import?",
      quizId: 17,
    },
    {
      id: 168,
      label: "How do you create a simple server in Node.js?",
      quizId: 17,
    },
    {
      id: 169,
      label: "What is the purpose of the fs module?",
      quizId: 17,
    },
    {
      id: 170,
      label: "How do you read a file using Node.js?",
      quizId: 17,
    },
  
    // Questions for Express.js Basics Quiz
    {
      id: 171,
      label: "What is Express.js?",
      quizId: 18,
    },
    {
      id: 172,
      label: "How do you install Express.js?",
      quizId: 18,
    },
    {
      id: 173,
      label: "How do you create a simple Express.js server?",
      quizId: 18,
    },
    {
      id: 174,
      label: "What is a middleware in Express.js?",
      quizId: 18,
    },
    {
      id: 175,
      label: "How do you define a route in Express.js?",
      quizId: 18,
    },
    {
      id: 176,
      label: "What is the purpose of the next function in Express.js?",
      quizId: 18,
    },
    {
      id: 177,
      label: "How do you handle errors in Express.js?",
      quizId: 18,
    },
    {
      id: 178,
      label: "How do you parse request body in Express.js?",
      quizId: 18,
    },
    {
      id: 179,
      label: "How do you serve static files in Express.js?",
      quizId: 18,
    },
    {
      id: 180,
      label: "What is the purpose of the app.listen method in Express.js?",
      quizId: 18,
    },
  
    // Questions for MongoDB with Node.js Quiz
    {
      id: 181,
      label: "What is MongoDB?",
      quizId: 19,
    },
    {
      id: 182,
      label: "How do you connect to MongoDB using Node.js?",
      quizId: 19,
    },
    {
      id: 183,
      label: "What is the purpose of the mongoose library?",
      quizId: 19,
    },
    {
      id: 184,
      label: "How do you define a schema in mongoose?",
      quizId: 19,
    },
    {
      id: 185,
      label: "How do you create a model in mongoose?",
      quizId: 19,
    },
    {
      id: 186,
      label: "How do you perform CRUD operations using mongoose?",
      quizId: 19,
    },
    {
      id: 187,
      label: "What is the purpose of the find method in mongoose?",
      quizId: 19,
    },
    {
      id: 188,
      label: "How do you update a document using mongoose?",
      quizId: 19,
    },
    {
      id: 189,
      label: "How do you delete a document using mongoose?",
      quizId: 19,
    },
    {
      id: 190,
      label: "What is the difference between save and insertMany in mongoose?",
      quizId: 19,
    },
  
    // Questions for Building REST APIs with Express Quiz
    {
      id: 191,
      label: "What is a REST API?",
      quizId: 20,
    },
    {
      id: 192,
      label: "How do you create a REST API using Express.js?",
      quizId: 20,
    },
    {
      id: 193,
      label: "What is the purpose of the HTTP methods GET, POST, PUT, and DELETE?",
      quizId: 20,
    },
    {
      id: 194,
      label: "How do you handle different HTTP methods in Express.js?",
      quizId: 20,
    },
    {
      id: 195,
      label: "How do you define routes in Express.js?",
      quizId: 20,
    },
    {
      id: 196,
      label: "What is the purpose of the req and res objects in Express.js?",
      quizId: 20,
    },
    {
      id: 197,
      label: "How do you send a JSON response in Express.js?",
      quizId: 20,
    },
    {
      id: 198,
      label: "How do you handle query parameters in Express.js?",
      quizId: 20,
    },
    {
      id: 199,
      label: "How do you handle route parameters in Express.js?",
      quizId: 20,
    },
    {
      id: 200,
      label: "How do you implement authentication in an Express.js REST API?",
      quizId: 20,
    },
  ];
  

  const options_examples = [
    // Options for HTML Basics Quiz
    {
      questionId: 1,
      options: [
        { id: 1, label: "Hyper Text Markup Language", isCorrect: true },
        { id: 2, label: "Home Tool Markup Language", isCorrect: false },
        { id: 3, label: "Hyperlinks and Text Markup Language", isCorrect: false },
        { id: 4, label: "Hyperlinking Text Mark Language", isCorrect: false },
      ],
    },
    {
      questionId: 2,
      options: [
        { id: 5, label: "<html>", isCorrect: false },
        { id: 6, label: "<head>", isCorrect: false },
        { id: 7, label: "<title>", isCorrect: false },
        { id: 8, label: "<body>", isCorrect: true },
      ],
    },
    {
      questionId: 3,
      options: [
        { id: 9, label: "<head>", isCorrect: false },
        { id: 10, label: "<title>", isCorrect: false },
        { id: 11, label: "<header>", isCorrect: false },
        { id: 12, label: "<meta>", isCorrect: true },
      ],
    },
    {
      questionId: 4,
      options: [
        { id: 13, label: "<table>", isCorrect: true },
        { id: 14, label: "<tbl>", isCorrect: false },
        { id: 15, label: "<tab>", isCorrect: false },
        { id: 16, label: "<grid>", isCorrect: false },
      ],
    },
    {
      questionId: 5,
      options: [
        { id: 17, label: "<p>", isCorrect: true },
        { id: 18, label: "<par>", isCorrect: false },
        { id: 19, label: "<paragraph>", isCorrect: false },
        { id: 20, label: "<para>", isCorrect: false },
      ],
    },
  
    // Options for CSS Basics Quiz
    {
      questionId: 6,
      options: [
        { id: 21, label: "Cascading Style Sheets", isCorrect: true },
        { id: 22, label: "Colorful Style Sheets", isCorrect: false },
        { id: 23, label: "Computer Style Sheets", isCorrect: false },
        { id: 24, label: "Creative Style Sheets", isCorrect: false },
      ],
    },
    {
      questionId: 7,
      options: [
        { id: 25, label: "<style>", isCorrect: true },
        { id: 26, label: "<css>", isCorrect: false },
        { id: 27, label: "<script>", isCorrect: false },
        { id: 28, label: "<link>", isCorrect: false },
      ],
    },
    {
      questionId: 8,
      options: [
        { id: 29, label: "color", isCorrect: true },
        { id: 30, label: "font", isCorrect: false },
        { id: 31, label: "text", isCorrect: false },
        { id: 32, label: "bgcolor", isCorrect: false },
      ],
    },
    {
      questionId: 9,
      options: [
        { id: 33, label: "margin", isCorrect: false },
        { id: 34, label: "padding", isCorrect: true },
        { id: 35, label: "border", isCorrect: false },
        { id: 36, label: "spacing", isCorrect: false },
      ],
    },
    {
      questionId: 10,
      options: [
        { id: 37, label: "background-color", isCorrect: true },
        { id: 38, label: "color", isCorrect: false },
        { id: 39, label: "font-style", isCorrect: false },
        { id: 40, label: "text-color", isCorrect: false },
      ],
    },
  
    // Options for JavaScript Basics Quiz
    {
      questionId: 11,
      options: [
        { id: 41, label: "Script tag", isCorrect: true },
        { id: 42, label: "Script.js", isCorrect: false },
        { id: 43, label: "JavaScript tag", isCorrect: false },
        { id: 44, label: "Js tag", isCorrect: false },
      ],
    },
    {
      questionId: 12,
      options: [
        { id: 45, label: "var", isCorrect: true },
        { id: 46, label: "int", isCorrect: false },
        { id: 47, label: "string", isCorrect: false },
        { id: 48, label: "boolean", isCorrect: false },
      ],
    },
    {
      questionId: 13,
      options: [
        { id: 49, label: "if", isCorrect: true },
        { id: 50, label: "while", isCorrect: false },
        { id: 51, label: "for", isCorrect: false },
        { id: 52, label: "switch", isCorrect: false },
      ],
    },
    {
      questionId: 14,
      options: [
        { id: 53, label: "=", isCorrect: false },
        { id: 54, label: "==", isCorrect: false },
        { id: 55, label: "===", isCorrect: true },
        { id: 56, label: "=>", isCorrect: false },
      ],
    },
    {
      questionId: 15,
      options: [
        { id: 57, label: "for", isCorrect: true },
        { id: 58, label: "loop", isCorrect: false },
        { id: 59, label: "while", isCorrect: false },
        { id: 60, label: "repeat", isCorrect: false },
      ],
    },
  
    // Options for React Basics Quiz
    {
      questionId: 16,
      options: [
        { id: 61, label: "A JavaScript library for building user interfaces", isCorrect: true },
        { id: 62, label: "A CSS framework", isCorrect: false },
        { id: 63, label: "A back-end framework", isCorrect: false },
        { id: 64, label: "A database management tool", isCorrect: false },
      ],
    },
    {
      questionId: 17,
      options: [
        { id: 65, label: "Virtual DOM", isCorrect: true },
        { id: 66, label: "Real DOM", isCorrect: false },
        { id: 67, label: "Shadow DOM", isCorrect: false },
        { id: 68, label: "HTML DOM", isCorrect: false },
      ],
    },
    {
      questionId: 18,
      options: [
        { id: 69, label: "Props", isCorrect: true },
        { id: 70, label: "State", isCorrect: false },
        { id: 71, label: "Hooks", isCorrect: false },
        { id: 72, label: "Context", isCorrect: false },
      ],
    },
    {
      questionId: 19,
      options: [
        { id: 73, label: "State", isCorrect: true },
        { id: 74, label: "Props", isCorrect: false },
        { id: 75, label: "Hooks", isCorrect: false },
        { id: 76, label: "Context", isCorrect: false },
      ],
    },
    {
      questionId: 20,
      options: [
        { id: 77, label: "useState", isCorrect: true },
        { id: 78, label: "useEffect", isCorrect: false },
        { id: 79, label: "useContext", isCorrect: false },
        { id: 80, label: "useReducer", isCorrect: false },
      ],
    },
  
    // Options for React Router Quiz
    {
      questionId: 21,
      options: [
        { id: 81, label: "React Router", isCorrect: true },
        { id: 82, label: "React Link", isCorrect: false },
        { id: 83, label: "React Route", isCorrect: false },
        { id: 84, label: "React Navigation", isCorrect: false },
      ],
    },
    {
      questionId: 22,
      options: [
        { id: 85, label: "<BrowserRouter>", isCorrect: true },
        { id: 86, label: "<HashRouter>", isCorrect: false },
        { id: 87, label: "<Router>", isCorrect: false },
        { id: 88, label: "<Route>", isCorrect: false },
      ],
    },
    {
      questionId: 23,
      options: [
        { id: 89, label: "Switch", isCorrect: true },
        { id: 90, label: "Router", isCorrect: false },
        { id: 91, label: "Route", isCorrect: false },
        { id: 92, label: "Link", isCorrect: false },
      ],
    },
    {
      questionId: 24,
      options: [
        { id: 93, label: "<Link>", isCorrect: true },
        { id: 94, label: "<NavLink>", isCorrect: false },
        { id: 95, label: "<RouterLink>", isCorrect: false },
        { id: 96, label: "<AnchorLink>", isCorrect: false },
      ],
    },
    {
      questionId: 25,
      options: [
        { id: 97, label: "useHistory", isCorrect: true },
        { id: 98, label: "useRouter", isCorrect: false },
        { id: 99, label: "useLink", isCorrect: false },
        { id: 100, label: "useNavigate", isCorrect: false },
      ],
    },
  
    // Options for Node.js Basics Quiz
    {
      questionId: 26,
      options: [
        { id: 101, label: "JavaScript runtime built on Chrome's V8 JavaScript engine", isCorrect: true },
        { id: 102, label: "JavaScript framework for building user interfaces", isCorrect: false },
        { id: 103, label: "JavaScript library for data manipulation", isCorrect: false },
        { id: 104, label: "JavaScript module bundler", isCorrect: false },
      ],
    },
    {
      questionId: 27,
      options: [
        { id: 105, label: "npm", isCorrect: true },
        { id: 106, label: "nvm", isCorrect: false },
        { id: 107, label: "nodemon", isCorrect: false },
        { id: 108, label: "nginx", isCorrect: false },
      ],
    },
    {
      questionId: 28,
      options: [
        { id: 109, label: "require()", isCorrect: true },
        { id: 110, label: "import()", isCorrect: false },
        { id: 111, label: "include()", isCorrect: false },
        { id: 112, label: "load()", isCorrect: false },
      ],
    },
    {
      questionId: 29,
      options: [
        { id: 113, label: "const", isCorrect: true },
        { id: 114, label: "var", isCorrect: false },
        { id: 115, label: "let", isCorrect: false },
        { id: 116, label: "function", isCorrect: false },
      ],
    },
    {
      questionId: 30,
      options: [
        { id: 117, label: "Express.js", isCorrect: true },
        { id: 118, label: "Koa.js", isCorrect: false },
        { id: 119, label: "Hapi.js", isCorrect: false },
        { id: 120, label: "Nest.js", isCorrect: false },
      ],
    },
  ];
  
  

export { courses_examples, quizzes_examples, questions_examples, options_examples };
  