import ErrorPage from "./components/ErrorPage.jsx";


const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            { path: "/level/:imageId", element: <Level/> },
        ]
    }
]