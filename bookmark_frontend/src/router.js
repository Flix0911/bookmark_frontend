import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from './App'
import Index from './pages/Index'
import Show from './pages/Show'
import {} from './loaders'
import { updateAction, createAction, deleteAction } from './actions/actions'

const router = createBrowserRouter(

    createRoutesFromElements(

        <Route path='/' element={<App/>}>

            <Route path='' element={<Index/>}/>

            <Route path=':id' element={<Show/>}/>

            <Route path='create' element={createAction}/>

            <Route path='update/:id' element={updateAction}/>

            <Route path='delete/:id' element={deleteAction}/>

        </Route>
    )
)

export default router