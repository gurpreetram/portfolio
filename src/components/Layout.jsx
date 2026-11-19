import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
const links=[['Projects','/projects'],['About','/about'],['Research','/research'],['Notes','/notes'],['Resume','/resume'],['Contact','/contact']];
export function PageFrame({children}){
 const location=useLocation();
 useEffect(()=>{window.scrollTo({top:0,left:0,behavior:'auto'});},[location.pathname]);
 return <motion.main key={location.pathname} className="page-shell" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.32,ease:[.22,1,.36,1]}}>{children}</motion.main>;
}
export default function Layout(){
 const [open,setOpen]=useState(false);const location=useLocation();
 useEffect(()=>{setOpen(false);},[location.pathname]);
 useEffect(()=>{const progress=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;document.documentElement.style.setProperty('--scroll-progress',`${max>0?Math.min(100,window.scrollY/max*100):0}%`)};window.addEventListener('scroll',progress,{passive:true});window.addEventListener('resize',progress);progress();return()=>{window.removeEventListener('scroll',progress);window.removeEventListener('resize',progress)};},[]);
 return <div className="app-wrap editorial-shell"><div className="scroll-progress"/><header className="topbar editorial-nav"><Link to="/" className="brand"><span className="brand-mark">GR.</span><span>GURPREET RAM</span></Link><nav className={open?'nav-links open':'nav-links'} aria-label="Primary navigation">{links.map(([label,path])=><NavLink key={path} to={path} className={({isActive})=>isActive?'nav-link active':'nav-link'}>{label}</NavLink>)}</nav><div className="nav-actions"><Link className="talk-link" to="/contact">LET'S TALK <ArrowUpRight size={15}/></Link><button className="menu-toggle" onClick={()=>setOpen(v=>!v)} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open}>{open?<X/>:<Menu/>}</button></div></header><PageFrame><Outlet/></PageFrame><footer className="footer editorial-footer"><span>© {new Date().getFullYear()} GURPREET RAM</span><span>DESIGNED WITH INTENTION <b>✳</b></span><a href="#top" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});}}>BACK TO TOP ↑</a></footer></div>;
}
