import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from "./pages/Home";
import {Project} from "./UI/Project";
import { ErrorPage } from "./pages/Error";
import {Layout} from "./UI/Layout";
import { BlogInterface } from "./UI/Blog";
import { Hireme } from "./UI/HIreme";
import { Contact } from "./UI/Contact";


const SkillDetails = {skillName : "Webdevelopment", icon : "CSS"};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout skill={SkillDetails} />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/blog",
        element: <BlogInterface />,
      },

      {
        path: "/hire",
        element: <Hireme />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {

  return (
    <>

      <RouterProvider router={router} />
    </>
  );
};

export default App;
