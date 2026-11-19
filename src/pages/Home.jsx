import { ArrowDownRight, ArrowUpRight, MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import ParticlePortrait from '../components/ParticlePortrait.jsx';
import { profile, projects, skillGroups } from '../data/content.js';
gsap.registerPlugin(ScrollTrigger);
const capabilities = ['Generative AI', 'AI Agents', 'RAG Systems', 'Python', 'FastAPI', 'React', 'LLM Integration', 'Prompt Engineering', 'API Design', 'Automation'];
export default function Home() {
 const root = useRef(null);
 useEffect(() => {
  const ctx = gsap.context(() => {
   gsap.from('.editorial-kicker,.hero-copy,.hero-side-note',{y:22,opacity:0,duration:.8,stagger:.1,ease:'power3.out'});
   gsap.from('.hero-word-line',{yPercent:110,opacity:0,duration:1.1,stagger:.12,ease:'power4.out',delay:.12});
   gsap.from('.hero-scroll',{opacity:0,y:15,duration:.8,delay:.8});
   gsap.to('.marquee-track',{xPercent:-30,ease:'none',duration:22,repeat:-1});
   gsap.utils.toArray('.reveal-on-scroll').forEach(el => gsap.from(el,{y:48,opacity:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 85%',once:true}}));
  }, root);
  return () => ctx.revert();
 }, []);
 return <div ref={root} className="editorial-home">
  <section className="editorial-hero">
   <div className="hero-topline"><span className="editorial-kicker">INDEPENDENT DEVELOPER <i/> {profile.location.toUpperCase()}</span><span className="hero-counter">01 <b>//</b> 04</span></div>
   <div className="hero-headline" aria-label="AI Engineer and creative problem solver"><div className="hero-word-mask"><div className="hero-word-line">AI <span>AI</span></div></div><div className="hero-word-mask"><div className="hero-word-line">ENGINEER <span>ENGINEER</span></div></div><div className="hero-word-mask hero-last-line"><div className="hero-word-line">& BUILDER<span className="hero-outline">& BUILDER</span></div></div></div>
   <div className="hero-bottomline"><p className="hero-copy">I turn complex ideas into useful digital experiences — building with AI, code and a curiosity for how things work.</p><div className="hero-side-note">SOFTWARE DEVELOPER<br/>GENERATIVE AI · FULL STACK</div><a href="#about" className="hero-scroll">SCROLL TO EXPLORE <ArrowDownRight size={18}/></a></div><div className="hero-decoration">GR<span>®</span></div>
  </section>
  <div className="marquee-band" aria-hidden="true"><div className="marquee-track">GURPREET RAM <span>✳</span> AI ENGINEER <span>✳</span> CREATIVE DEVELOPER <span>✳</span> GURPREET RAM <span>✳</span> AI ENGINEER <span>✳</span> CREATIVE DEVELOPER <span>✳</span></div></div>
  <section className="editorial-section about-preview reveal-on-scroll" id="about"><div className="section-index"><span>02 /</span><span>ABOUT</span></div><div className="about-preview-grid"><div className="about-image-panel"><div className="portrait-stage"><ParticlePortrait/><div className="portrait-overlay-caption">PIXELS · PARTICLES · PERSON</div></div><div className="image-caption">A LITTLE ABOUT THE PERSON BEHIND THE BUILDS <ArrowUpRight size={15}/></div></div><div className="about-preview-copy"><p className="small-label">HELLO, I'M GURPREET.</p><h2>Curious by nature.<br/><em>Builder by choice.</em></h2><p className="about-lead">I'm a software developer based in Mumbai, with hands-on experience in full-stack web applications and a growing focus on AI/ML and Generative AI.</p><p className="about-detail">From responsive web apps and IoT interfaces to RAG systems, AI agents and trading research tools, I learn by building, testing and improving. I care about thoughtful interfaces just as much as what happens behind them.</p><Link to="/about" className="editorial-link">MORE ABOUT ME <MoveUpRight size={17}/></Link></div></div></section>
  <section className="work-section editorial-section reveal-on-scroll" id="work"><div className="section-index"><span>03 /</span><span>SELECTED WORK</span></div><div className="work-intro"><h2>Selected work.<br/><em>Real problems, built out.</em></h2><p>A few projects that reflect how I think, explore and build with technology.</p></div><div className="project-cards">{projects.slice(0,3).map((p,i)=><Link to="/projects" className={`project-card project-card-${i+1}`} key={p.number}><div className="project-card-art"><span className="project-art-index">{p.number} / 0{projects.length}</span><div className="project-art-symbol">{['N.','T.','AI.'][i]}</div><span className="project-art-open"><ArrowUpRight/></span></div><div className="project-card-meta"><div><span>{p.type}</span><h3>{p.name}</h3></div><span className="project-card-arrow"><ArrowUpRight size={20}/></span></div><p>{p.description}</p></Link>)}</div><Link to="/projects" className="all-work-link">VIEW ALL PROJECTS <ArrowUpRight size={17}/></Link></section>
  <section className="capabilities-section editorial-section reveal-on-scroll"><div className="section-index"><span>04 /</span><span>CAPABILITIES</span></div><div className="capabilities-grid"><div><p className="small-label">WHAT I LIKE TO WORK WITH</p><h2>Curiosity is<br/>my <em>toolkit.</em></h2><p className="capabilities-note">A growing set of tools and disciplines I use to turn ideas into working products. Drag the tags around.</p><div className="skill-groups-mini">{skillGroups.slice(0,3).map(g=><p key={g.label}><b>{g.label}</b><span>{g.skills.slice(0,4).join(' · ')}</span></p>)}</div></div><div className="capability-cloud" aria-label="Draggable skills">{capabilities.map((s,i)=><motion.span drag dragMomentum={false} key={s} className={`capability-chip chip-${i%4}`} style={{'--chip-rotate':`${(i%5-2)*2}deg`}} whileHover={{scale:1.06}}>{s}<span>↗</span></motion.span>)}</div></div></section>
  <section className="contact-cta reveal-on-scroll"><p className="small-label">HAVE A PROJECT IN MIND?</p><h2>Let's<br/><em>connect.</em></h2><div className="contact-cta-bottom"><p>Open to AI engineering opportunities, collaborations and good conversations.</p><Link to="/contact" className="contact-circle">SAY HELLO <ArrowUpRight size={25}/></Link></div></section>
 </div>;
}
