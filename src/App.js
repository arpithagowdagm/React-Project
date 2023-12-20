import React,{lazy,Suspense, useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantsMenu from "./components/RestaurantsMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from './utils/reduxStore';
import CartItem from './components/CartItem';
//import Grocery from "./components/Grocery";

const Grocery = lazy(()=> import("./components/Grocery"))
  const AppLayout = () => {
    const [username, setUserName] = useState("");

    useEffect(()=>{
        const user = {
            name: "Arpitha GM "
        }
        setUserName(user.name);
    },[])


    return (
        <Provider store={appStore}>       
         <UserContext.Provider value={{loggedInuser:username ,setUserName} }>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>

    )
  }
const root = ReactDOM.createRoot(document.getElementById("root"))

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h2>Loading....</h2>}><Grocery/></Suspense>
            },
            {
                path:'/Restaurant/:id',
                element:<RestaurantsMenu/>
            },
            {
                path:'/cart',
                element:<CartItem/>
            }
        ],
        errorElement: <Error/>
    },
   
])
root.render(<RouterProvider router={appRouter}/>);

/* 
<div id="parent">
<div id="child1">
<h1> Hi i am a H1 tag<h1>
<h2> Hi i am a H2 tag<h2>
</div>
<div id="child1">
<h1> Hi i am a H1 tag<h1>
</div>
<div>

// In React

import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div",{id:'parent'},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"Hi iam H1 tag from child 1"),
            React.createElement("h2",{},"Hi iam H2 tag from child 1")]),
            React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"Hi iam H1 tag from child 2"),
                React.createElement("h2",{},"Hi iam H2 tag from child 2")])
            ]);

console.log('heading',heading);
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(heading);

/* const heading = React.createElement("h1", {id:"heading",xyz:"abcdefghi"}, "hello world from React");
console.log('heading',heading);
const Root = ReactDOM.createRoot(document.getElementById("root"));
console.log('Root',Root);
Root.render(heading); */