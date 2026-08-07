import React from 'react'


function SkillCard({section, varients, index, Icon}) {
  return (
    <div
  key={section.id}
  
  
className="
  
  w-full
  flex items-center
  border border-gray-200/80
  bg-white/80
  backdrop-blur-xl
  rounded-3xl
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

    {/* IMAGE */}
    <div className="lg:col-span-5">
      <div className="
        relative overflow-hidden mx-auto rounded-3xl group
      ">
        <img
          src={section.image}
          alt={section.title}
          className="
            w-full
            h-[320px]
            sm:h-[420px]
            lg:h-[520px]
            object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />

       

        <div className="
          absolute bottom-5 left-5
          w-12 h-12
          rounded-2xl
          bg-black
          text-white
          flex items-center justify-center
        ">
          <Icon size={20}/>
        </div>
      </div>
    </div>


    {/* CONTENT */}
    <div className="
      col-span-7
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
              rounded-full
              border border-gray-200
              bg-gray-50
              text-sm
              font-medium
              text-gray-700
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