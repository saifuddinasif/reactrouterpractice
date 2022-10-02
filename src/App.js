// import logo from './logo.svg';
import './App.css';

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
// import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Main from './layout/Main';
import Friend from './Components/Friends/Friend';
import FreindDetails from './Components/FrienddetAILS/FreindDetails';
import Post from './Components/Post/Post';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {


  const router = createBrowserRouter([

    {
      path: '/', element: <Main></Main>, 
    
    children : [

      {path: '/', element:   <Home></Home>},
      {path: 'home', element:   <Home></Home>},

      {path: 'products', element: <Products></Products>},

      {path: 'friends', 
      
      loader:  async () => {

          return fetch('https://jsonplaceholder.typicode.com/users')

        },
        element:<Friend></Friend>

      },

/* :friendId this is called params , it is dynamic id with colons it becomes dynamic  */

      {
        path:'/friend/:friendId',

        loader: async({params}) => {
          
         
  
           return  fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        },
        element: <FreindDetails></FreindDetails>
      },


      {

        path:'post',

        loader:async() => {
          return fetch(`https://jsonplaceholder.typicode.com/posts`)
        },
        element:<Post></Post>
        
      },

      {

        path:'/post/:postId',

        loader:async({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        },
        element: <PostDetails></PostDetails>
        
      }

      
   
    ]
  
  
  },



    {path: '/about', element: <About></About>},

    {path: '*', element: <div>This route is not found </div>},

    

      

  ])

  return (
    <div className="App">
   

<RouterProvider router={router}></RouterProvider>


          
    </div>
  );
}

export default App;
