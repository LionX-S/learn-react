import About from "../pages/About";
import Home from "../pages/Home";


const routes = [
  {
    path:'/',
    exact: true,
    components: Home
  },
  {
    path: '/about',
    components: About
  }
];

export default routes;