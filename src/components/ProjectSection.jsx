import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles, ArrowUpRight, FileText } from 'lucide-react';
import { BsGithub } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { projects } from '../data/projects';
import { profile } from '../data/profile';
import { Link } from 'react-router-dom';

function ProjectsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-20 py-10 text-slate-100 overflow-hidden">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
            <Sparkles size={14} /> Selected Work
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-4">
            Work Showcase
            <span className="block mt-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
              & Featured Applications
            </span>
          </h2>
        </div>

        {/* RIGHT SIDE ACTION & SWIPER NAV BUTTONS */}
        <div className="flex items-center gap-4">
          {/* GitHub Profile Button */}
          <a
            href={profile?.socials?.github || "https://github.com"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 text-xs font-bold text-slate-200 bg-slate-900/80 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full hover:border-emerald-500/40 hover:text-emerald-400 transition-all shadow-lg hover:-translate-y-0.5"
          >
            <BsGithub size={16} />
            View GitHub Profile
            <span>→</span>
          </a>

          {/* SWIPER NAVIGATION BUTTONS */}
          <div className="flex items-center gap-2 bg-slate-900/90 border border-white/10 p-1.5 rounded-full shadow-lg">
            <button
              ref={prevRef}
              aria-label="Previous Slide"
              className="prev-btn w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-300 border border-white/10 active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              ref={nextRef}
              aria-label="Next Slide"
              className="next-btn w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-300 border border-white/10 active:scale-95 cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* SWIPER JS SLIDER (COVERFLOW LAYOUT) */}
      <div className="relative pt-4 pb-8">
        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          speed={600}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 1.3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 1.55,
              spaceBetween: 32,
            },
          }}
          onInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          className="w-full !overflow-visible py-4"
        >
          {projects.map((project) => {
            const detailsLink = `/projects/${project.slug}`;
            const liveLink = project.live ;
            const githubLink = project.github ;

            return (
              <SwiperSlide key={project.slug} className="transition-all duration-500">
                {({ isActive }) => (
                  <div
                    className={`relative bg-[#0d0f15]/90 border rounded-3xl p-4 sm:p-6 transition-all duration-500 shadow-2xl backdrop-blur-xl flex flex-col justify-between ${
                      isActive
                        ? 'border-emerald-500/40 ring-1 ring-emerald-500/20 shadow-emerald-500/10 opacity-100 scale-100'
                        : 'border-white/10 opacity-50 scale-95 hover:opacity-75'
                    }`}
                  >
                    {/* PROJECT PREVIEW SCREENSHOT CONTAINER */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-slate-950 to-emerald-900/20 opacity-80" />

                      <a href={liveLink} target="_blank" rel="noreferrer" className="block cursor-pointer">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="relative z-10 w-full h-[220px] sm:h-[300px] md:h-[360px] object-cover object-top group-hover:scale-102 transition-transform duration-700 filter brightness-95 contrast-105"
                        />
                      </a>

                      <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none" />

                      {/* Top Overlay Category Tag */}
                      <div className="absolute top-3 left-3 z-30">
                        <span className="text-[11px] font-bold text-emerald-300 bg-slate-950/80 border border-emerald-500/30 px-3 py-1 rounded-full backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* TITLE & DESCRIPTION */}
                    <div className="mt-5 space-y-2 px-1">
                      <a
                        href={liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="group/title inline-block"
                      >
                        <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight group-hover/title:text-emerald-400 transition-colors flex items-center gap-2">
                          {project.title}
                          <ArrowUpRight size={18} className="text-slate-400 group-hover/title:text-emerald-400 transition-colors shrink-0" />
                        </h3>
                      </a>
                      
                      {project.subtitle && (
                        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    {/* TECH TAGS */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5 px-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium text-slate-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* EXPLICIT REDIRECT ACTION BUTTONS (Details, Live Demo, GitHub) */}
                    <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 sm:gap-3">
                      {/* Details Page Link */}
                      <Link

            to={`/projects/${project.slug}`}

             className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-white/10 hover:border-white/20 px-3.5 py-2.5 rounded-xl transition-all shadow-md active:scale-95"

          >

            View Technical Case Study            
          </Link>

                      {/* Live Demo Link */}
                      <a
                        href={liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 px-3.5 py-2.5 rounded-xl transition-all shadow-md active:scale-95"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>

                      {/* GitHub Repo Link */}
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-200 bg-slate-900 border border-white/10 hover:border-emerald-500/40 hover:text-emerald-400 px-3.5 py-2.5 rounded-xl transition-all shadow-md active:scale-95"
                        title="GitHub Repository"
                      >
                        <BsGithub size={15} />
                        <span className="hidden sm:inline">Code</span>
                      </a>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default ProjectsSection;
