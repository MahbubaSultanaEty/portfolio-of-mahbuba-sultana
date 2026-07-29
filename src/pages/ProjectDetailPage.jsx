import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft, CheckCircle2, AlertCircle, Sparkles, Check, Home, FolderGit2, RocketIcon, FlameIcon } from 'lucide-react';
import { BsGithub } from 'react-icons/bs';
import { projects } from '../data/projects';

function ProjectDetailPage() {
  const { slug } = useParams();
  
  // Find project by slug or fallback to the first project
  const project = projects.find((p) => p.slug === slug) || projects[0];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#07080c] text-white flex flex-col items-center justify-center p-6 text-center">
        <p className="text-slate-400 text-lg">Project not found.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-lg"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    );
  }

  // Safe accessor fallbacks
  const name = project.name || project.title || 'Featured Project';
  const description = project.description || project.subtitle || 'Modern full-stack web application built with precision and modern UI standards.';
  const category = project.category || 'Web Application';
  const live = project.live || project.liveUrl || 'https://example.com';
  const github = project.github || project.githubUrl || 'https://github.com';
  const techList = project.tech || project.tags || ['React.js', 'Tailwind CSS', 'Node.js'];
  const client = project.client || 'X_Design Studio';
  const location = project.location || 'Melbourne, Australia';
  const published = project.published || 'September 25, 2023';

  

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 relative overflow-hidden font-sans pb-24 selection:bg-lime-400 selection:text-slate-950">
      {/* Background subtle glow & vertical grid accent lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* TOP HEADER & BREADCRUMB  */}
      <header className="relative z-10 pt-16 pb-12 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight"
        >
          {name}
        </motion.h1>

        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold mt-4 text-slate-400"
        >
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Home size={14} />
            Home
          </Link>
          <span className="text-slate-600">•</span>
          <span className="text-[#a3e635] font-bold underline decoration-2 underline-offset-4">
            {name}
          </span>
        </motion.div>
      </header>

      {/* HERO SCREENSHOT BANNER  */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950 group relative"
        >
          <img
            src={project.image}
            alt={name}
            className="w-full max-h-[520px] sm:max-h-[600px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent opacity-40 pointer-events-none" />
        </motion.div>
      </div>

      {/* TWO-COLUMN CONTENT GRID */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Main Description & Features List */}
          <div className="lg:col-span-7 space-y-10">
           
            <div>      
              {/* Lead Paragraph with Initial Drop Cap Badge */}
              <div className="flex items-start gap-4 mb-6">
                <span className="shrink-0 w-10 h-10 rounded-lg bg-[#a3e635] text-slate-950 font-black text-xl flex items-center justify-center shadow-lg">
                  {name.charAt(0)}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {description}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                Built with modern web standards, modular component architecture, and crisp micro-interactions.
                Designed for high conversion rates, fast page loads, and seamless multi-device responsiveness.
              </p>
            </div>

           

            {/* TECH STACK BADGES */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <Sparkles size={14} className="text-[#a3e635]" />
                Technologies & Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {techList.map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-200 hover:border-[#a3e635]/40 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

           
          </div>

          {/* RIGHT COLUMN: */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* ACTION REDIRECT BUTTONS */}
            <div className="space-y-3 pt-2">
              {/* Live Demo Button */}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm tracking-wide transition-all shadow-xl hover:-translate-y-0.5 active:scale-98"
                >
                  <ExternalLink size={18} />
                  Visit Live Project
                </a>
              )}

              {/* GitHub Source Button */}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm border border-white/10 hover:border-white/20 transition-all shadow-lg hover:-translate-y-0.5 active:scale-98"
                >
                  <BsGithub size={18} />
                  View Source Code
                </a>
              )}

              {/* Back to Home Button */}
              <Link
                to="/"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-sm border border-white/10 transition-all active:scale-98 mt-2"
              >
                <ArrowLeft size={16} />
                Back to All Projects
              </Link>
            </div>
          </div>

        </div>
      </main>

       {/* TECHNICAL CHALLENGES & FUTURE IMPROVEMENTS */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4 max-w-6xl mx-auto px-4">
              {/* Technical Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="rounded-2xl p-6 bg-slate-900/80 border border-emerald-200/50 backdrop-blur-md">
                  <div className="flex items-center gap-2.5 mb-4 text-[#a3e635]">
                    <CheckCircle2 size={20} />
                    <h3 className="font-bold text-base text-white">Technical Challenges</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.challenges.map((item, index) => (
                      <li key={index} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                        <span className="text-[#a3e635] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Future Improvements */}
              {project.improvements && project.improvements.length > 0 && (
                <div className="rounded-2xl p-6 bg-slate-900/80 border border-[#C0C0C0]/80 backdrop-blur-md">
                  <div className="flex items-center gap-2.5 mb-4 text-[#C0C0C0]">
                    <FlameIcon size={20}/>                   
                    <h3 className="font-bold text-base text-white">Future Improvements</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.improvements.map((item, index) => (
                      <li key={index} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                        <span className="text-[#C0C0C0] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
    </div>
  );
}

export default ProjectDetailPage;