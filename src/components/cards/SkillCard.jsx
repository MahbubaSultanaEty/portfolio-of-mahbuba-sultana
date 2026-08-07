import React from 'react'

function SkillCard({section, varients, index, Icon}) {
  return (
    <div
      key={section.id}
      className="
        w-full
        flex items-center
        border border-gray-200/80
        bg-white
        pb-25
        md:pb-2
        backdrop-blur-xl
        overflow-hidden
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      "
    >
      <div className="
        grid grid-cols-1 lg:grid-cols-12
        gap-8 lg:gap-12
        w-full
        p-6 sm:p-10 lg:p-16
        items-center
      ">

        {/* IMAGE (শুধুমাত্র এই অংশটি সেন্টারে আনা হয়েছে) */}
        <div className="w-full lg:col-span-4 xl:col-span-3 flex justify-center items-center">
          <div className="
            relative overflow-hidden rounded-3xl group
            w-[200px] h-[200px] sm:w-[240px] sm:h-[240px]
            flex-shrink-0
          ">
            <img
              src={section.image}
              alt={section.title}
              className="
                w-full
                h-full
                object-cover
                transition-transform duration-700
                group-hover:scale-105
              "
            />

            <div className="
              absolute bottom-4 left-4
              w-10 h-10 sm:w-12 sm:h-12
              rounded-2xl
              bg-black
              text-white
              flex items-center justify-center
              z-10
            ">
              <Icon size={20}/>
            </div>
          </div>
        </div>


        {/* CONTENT (আগের মতোই লেফট-অ্যালাইন রাখা হয়েছে) */}
        <div className="
          lg:col-span-8 xl:col-span-9
          space-y-5
        ">
          <h3 className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-black
            tracking-tight
            text-black
          ">
            {section.title}
          </h3>

          <p className="
            text-base
            sm:text-lg
            text-gray-600
            leading-relaxed
          ">
            {section.description}
          </p>
                  
          {/* SKILLS */}
          <div className="
            lg:col-span-3
            flex
            lg:justify-end
          ">
            <div className="
              flex flex-wrap
              gap-2
              lg:justify-end
            ">
              {section.allSkills.map((skill)=>(
                <span
                  key={skill}
                  className="
                    px-4 py-2
                    border-2 rounded-tr-[1.75rem] rounded-bl-[1.75rem] border-gray-200
                    bg-black
                    text-sm
                    font-medium
                    text-white
                    hover:bg-black
                    hover:text-white
                    transition-colors duration-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SkillCard