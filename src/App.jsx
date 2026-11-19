import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import { About, Projects, Research, Blog, Resume, Contact } from './pages/Pages.jsx';
function NotFound(){return <div className="content-page not-found"><h1>Lost in the interface.</h1><p>That route doesn't exist. Let's get you back to the homepage.</p><a href="/">Return home ↗</a></div>}
export default function App(){return <Routes><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="projects" element={<Projects/>}/><Route path="research" element={<Research/>}/><Route path="blog" element={<Blog/>}/><Route path="notes" element={<Blog/>}/><Route path="resume" element={<Resume/>}/><Route path="contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Route></Routes>}
