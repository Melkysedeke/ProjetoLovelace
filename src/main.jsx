import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateActivity from './components/pages/CreateActivity'
import AccessActivity from './components/pages/AccessActivity'
import Home from './components/pages/Home';
import Activity from './components/pages/Activity';
import AccessCode from './components/pages/AccessCode';
import Register from './components/pages/Register.jsx';
import Login from './components/pages/Login.jsx';
import UserArea from './components/pages/UserArea.jsx';

const router = createBrowserRouter([
	{
		path: "/ProjetoLovelace/",
		element: <App/>,
		children: [
			{
				path: "/ProjetoLovelace/",
				element: <Home/>,
			},
			{
				path: "/ProjetoLovelace/createactivity",
				element: <CreateActivity/>,
			},
			{
				path: "/ProjetoLovelace/access/:id",
				element: <AccessActivity/>,
			},
			{
				path: "/ProjetoLovelace/activity/:id",
				element: <Activity/>,
			},
			{
				path: "/ProjetoLovelace/accesscode",
				element: <AccessCode/>,
			},
			{
				path: "/ProjetoLovelace/register",
				element: <Register/>,
			},
			{
				path: "/ProjetoLovelace/login",
				element: <Login/>,
			},
			{
				path: "/ProjetoLovelace/Ua",
				element: <UserArea/>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  <App />
</RouterProvider>,
)