import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <p>Hello</p>;

ReactDOM.render(<App />,
    document.getElementById('root'));



// class App {

//     run = async (name = 'World') => {
//         console.log(`Hello ${name}`);
//         console.log([1, 2, [2, 3]].flat());
//     };

// };
// const app = new App();
// app.run()
//     .then(() => console.log('done'))
//     .catch(()=> console.log('Error'));