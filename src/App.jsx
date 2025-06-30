
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import { Page } from './pages/Page'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Page/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
