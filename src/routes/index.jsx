import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

// Pages
import { Home } from '../Pages/Home/Home'
import { NewPost } from '../Pages/NewPost/NewPost'
import { Single } from '../pages/Single/Single'

// Routes
export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/new",
				element: <NewPost />
			},
			{
				path: "posts/:id",
				element: <Single />
			}
		]
	}
])
