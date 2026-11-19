export const profile = {
  name: 'Gurpreet Ram',
  role: 'Software Developer | GenAI Engineer (Fresher)',
  location: 'Mumbai, India',
  intro: 'Software developer based in Mumbai with hands-on experience in full-stack web applications using React, Next.js, Node.js and Python. Focused on AI/ML, currently developing an AI-assisted intraday trading platform with FastAPI, React and the Gemini API. Seeking fresher and internship roles in AI / GenAI.',
  email: 'gurupreetram080@gmail.com',
  phone: '+91-9702370674',
  github: 'https://github.com/gurpreetram',
  linkedin: 'https://linkedin.com/in/gurpreetram',
  youtube: 'https://youtube.com/@cracknaukari/videos',
};
export const experience = [
  { role: 'Fullstack Developer (Team Lead)', company: 'Neel Ambulance', dates: 'Mar 2025 – Aug 2025', bullets: ['Led development of a responsive website showcasing services and helping customers contact the team easily.', 'Integrated inquiry forms with email delivery, sending customer messages directly to the owner’s inbox.'] },
  { role: 'Fullstack Developer Intern', company: 'Asian Elevators (Singapore) · Remote', dates: 'Dec 2024 – Feb 2025', bullets: ['Developed a full-stack web app to monitor and control IoT devices with real-time data and device status.', 'Designed a dynamic, responsive React UI and integrated AWS services for backend functionality.', 'Implemented secure API communication, device state management and role-based access for device control.'] },
  { role: 'Fullstack Developer Intern', company: 'Pawaskar Enterprises', dates: '2024 – Feb 2025', bullets: ['Created a responsive website for an AC and electronics repair business to present services and work.', 'Added a contact section for customers to request repair services directly from the site.'] },
];
export const projects = [
  { number:'01', name:'NAMEK Intelligence', type:'AI-assisted Intraday Trading Platform', description:'A full-stack intraday trading platform with a FastAPI backend and React/Vite dashboard, using Upstox API market data and Gemini AI analysis. Dashboard modules include Best Picks, Crash Watch and Partial Exit Tracker.', stack:['Python','FastAPI','React','Upstox API','Gemini'], status:'Present / In development', link:'https://github.com/gurpreetram' },
  { number:'02', name:'Namek Trading / TradeIQ India', type:'Trading Research & Scoring', description:'An early platform version built on Cloudflare Worker with React/Vite, a scoring engine and Daily Top Picks filter. Backtested 30+ strategies and retained only components with replicable positive risk-adjusted results.', stack:['Cloudflare Worker','React','Vite','JavaScript'], status:'Early version', link:'https://github.com/gurpreetram' },
  { number:'03', name:'AI Shopping Agent', type:'Tool-using Shopping Assistant', description:'A product discovery and review assistant with search/review tools and a SQLite-backed store, built around an LLM agent workflow.', stack:['Python','Streamlit','ChatGroq','SQLite','Agents'], status:'Built / iterating', link:'https://github.com/gurpreetram/Ai_shopping_agent' },
  { number:'04', name:'Telecom RAG Chatbot', type:'Retrieval-Augmented Customer Support', description:'A telecom-focused assistant that retrieves answers from FAQs, guides and support tickets, with a domain guardrail and escalation-oriented context.', stack:['Python','RAG','ChromaDB','Groq','Streamlit'], status:'Built', link:'https://github.com/gurpreetram' },
];
export const skillGroups = [
  { label:'AI & GenAI', skills:['Generative AI','Prompt Engineering','Context Engineering','RAG','LLM Integration','AI Agents','AI-powered coding','Debugging'] },
  { label:'Programming & Tools', skills:['JavaScript','TypeScript','Python','SQL','CSS','SCSS','Git','GitHub'] },
  { label:'Frontend', skills:['Next.js','React.js','React Native','TailwindCSS','Material UI','Bootstrap','Redux','React Query'] },
  { label:'Backend & Data', skills:['Express.js','FastAPI','MongoDB','REST APIs'] },
  { label:'AI Tools', skills:['ChatGPT','Claude','Google Gemini','Perplexity'] },
];
export const skills = skillGroups.flatMap(group => group.skills);
export const education = { degree:'Bachelor of Computer Applications', institution:'Chandigarh University', dates:'Aug 2023 – May 2026', cgpa:'7/10', specialization:'AI / ML' };
