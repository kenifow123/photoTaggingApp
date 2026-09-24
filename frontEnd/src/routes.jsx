import ErrorPage from "./components/ErrorPage.jsx";
import App from "./App.jsx";
import Level from "./components/Level.jsx";
import Home from "./components/Home.jsx";


const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            { index: true, element: <Home/> },
            { path: "/level/:imageId", element: <Level/> },
        ]
    }
]

export default routes;