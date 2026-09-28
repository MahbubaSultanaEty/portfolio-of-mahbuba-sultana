import React from "react";
import { Card } from "@heroui/react";


function SkillCard({ section, Icon }) {
  return (
    <Card
      className="
        w-full
        h-full
        border border-white/10
        bg-black/40
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,0.35)]
        overflow-hidden
      "
    >
      <Card.Content
        className="
          flex
          flex-col
          items-center
          text-center
          w-full
          p-2
          sm:p-5
          lg:p-10
        "
      >

        {/* IMAGE */}
        <div
          className="
            relative
            w-[220px]
            h-[220px]
            sm:w-[260px]
            sm:h-[260px]
            md:w-[280px]
            md:h-[280px]
            lg:w-[300px]
            lg:h-[300px]
            flex-shrink-0
            overflow-visible
          "
        >
          <img
            src={section.image}
            alt={section.title}
            className="
              w-full
              h-full
              object-contain
              scale-125
              transition-transform
              duration-700
              hover:scale-[1.35]
            "
          />

          {/* ICON */}
          <div
            className="
              absolute
              bottom-2
              left-2
              sm:bottom-4
              sm:left-4
              w-10
              h-10
              rounded-2xl           
              border
              border-white/20
              backdrop-blur-xl
              text-green-400
              flex
              items-center
              justify-center
              z-10
            "
          >
            <Icon size={20} />
          </div>
        </div>


        {/* CONTENT */}
        <div className="w-full mt-2 sm:mt-6">

          <Card.Header className="p-0">
            <Card.Title
              className="
                text-2xl
                sm:text-3xl
                leading-normal
                font-black
                tracking-tight
                text-white
              "
            >
              {section.title}
            </Card.Title>

            <Card.Description
              className="
                mt-3
                text-sm
                sm:text-base
                text-gray-400
                leading-relaxed
                max-w-2xl
                mx-auto
              "
            >
              {section.description}
            </Card.Description>
          </Card.Header>


          {/* SKILLS */}
          <Card.Footer
            className="
              p-0
              mt-5
              sm:mt-6
              justify-center
            "
          >
            <div className="w-full flex justify-center">
              
            </div>
          </Card.Footer>

        </div>

      </Card.Content>
    </Card>
  );
}

export default SkillCard;