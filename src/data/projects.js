import rootedImg from '../assets/Rooted.png'
import skillswapImg from '../assets/SkillSwap.png'
import voluntreeImg from '../assets/voluntree.png'
import nexdriveImg from '../assets/NexDrive.png'

export const projects = [
    {
      slug: "rooted",
      name: "Rooted",
      image: rootedImg,
      featured: true,
      live: "https://rooted-client.vercel.app/",
      github: "https://github.com/MahbubaSultanaEty/rooted-client",
      description:
        "A premium real-estate platform that helps users discover, search, and explore properties through an intuitive interface, enhanced by an AI-powered assistant named Sage for conversational property discovery.",
      tech: ["Next.js", "Tailwind CSS", "TanStack Query", "Better Auth", "Node.js", "Express.js", "MongoDB", "Mongoose"],
      challenges: [
        "Building a dynamic property exploration experience with advanced filtering, URL-based search parameters, and server-side pagination.",
        "Managing efficient data fetching and server-state synchronization using TanStack Query for a smoother user experience.",
        "Designing a structured backend architecture using Express.js, MongoDB, and Mongoose for managing property data efficiently.",
        "Integrating an AI-powered assistant that understands natural language queries and helps users discover relevant properties.",
        "Managing authentication, role-based user experiences, and seamless communication between frontend and backend systems.",
      ],
      improvements: [
        "Enhance Sage with more advanced recommendation capabilities and personalized property suggestions.",
        "Add richer analytics for users and property agents.",
        "Optimize performance and scalability for handling larger property datasets.",
      ],
    },
    {
      slug: "skillswap",
      name: "SkillSwap",
      image: skillswapImg,
      featured: false,
      live: "https://skill-swap-by-mahbuba.vercel.app/",
      github: "https://github.com/MahbubaSultanaEty/skill-swap-client",
      description:
        "A full-stack freelance micro-task platform that connects clients and freelancers. Users can post tasks, submit proposals, manage workflows, process payments, and build professional profiles through a role-based system.",
      tech: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js", "Better Auth", "Stripe", "JWT", "React Query"],
      challenges: [
        "Designing and connecting three separate dashboards for Admin, Client, and Freelancer roles while maintaining a consistent application flow between them.",
        "Managing complex task workflows where client actions, freelancer proposals, task completion, reviews, and payments are connected across multiple user experiences.",
        "Implementing role-based permissions, including admin controls, client task management, freelancer applications, and protected dashboard features.",
        "Integrating Stripe payment flow so accepted proposals can generate payment records and update freelancer earnings.",
        "Building a complete review system where client feedback appears on freelancer public profiles.",
      ],
      improvements: [
        "Transform SkillSwap into a complete freelance marketplace with real-world features and production-level payment handling.",
        "Add freelancer resume upload and profile enhancement features.",
        "Introduce advanced search, filtering, and recommendation systems for better client-freelancer matching.",
        "Add real-time messaging and notification systems between clients and freelancers.",
        "Improve payment functionality for real transactions instead of test mode.",
      ],
    },
    {
      slug: "voluntree",
      name: "VolunTree",
      image: voluntreeImg,
      featured: false,
      live: "https://voluntree-built-with-hope.vercel.app/",
      github: "https://github.com/MahbubaSultanaEty/voluntree-client",
      description:
        "A community volunteering platform that connects people with local volunteer opportunities. Users can discover, create, and manage volunteering events while admins can monitor and manage the platform through role-based experiences.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "HeroUI", "Better Auth", "Node.js", "Express.js", "MongoDB"],
      challenges: [
        "Building a complete TypeScript-based application with type safety across components, data handling, and API integration.",
        "Implementing role-based functionality where users and admins have different permissions and dashboard experiences.",
        "Creating protected routes and authentication flows with Better Auth while maintaining a smooth user experience.",
        "Developing a dynamic opportunity discovery system with search, category filters, location filters, sorting, and loading states.",
        "Managing communication between the frontend and backend while keeping the application structure scalable and maintainable.",
      ],
      improvements: [
        "Add real-time notifications for new volunteer opportunities and application updates.",
        "Implement a volunteer application tracking system with approval workflows.",
        "Add advanced analytics to show community impact and volunteer engagement.",
        "Improve recommendation features to suggest opportunities based on user interests and location.",
        "Introduce image uploads and richer profiles for volunteers and organizations.",
      ],
    },
    {
      slug: "nexdrive",
      name: "NexDrive",
      image: nexdriveImg,
      featured: false,
      live: "https://nex-drive-phi.vercel.app",
      github: "https://github.com/MahbubaSultanaEty/nexdrive-client",
      description:
        "A premium car rental platform where users can explore, book, and manage rental cars through a seamless experience — my first complete CRUD-based full-stack project, self-designed from scratch.",
      tech: ["Next.js", "Tailwind CSS", "HeroUI", "Better Auth", "Node.js", "Express.js", "MongoDB", "JWT"],
      challenges: [
        "Building my first complete CRUD-based application with features for creating, updating, deleting, and managing car listings.",
        "Designing the full interface myself while maintaining a consistent premium look and user experience.",
        "Implementing secure authentication with Better Auth, Google OAuth, and JWT-based protected routes.",
        "Developing a booking workflow where users can reserve cars, select options, add notes, and manage their bookings.",
        "Creating efficient search and filtering functionality using MongoDB queries for better car discovery.",
      ],
      improvements: [
        "Add online payment integration for real-world car rental transactions.",
        "Implement advanced booking management features for both customers and car owners.",
        "Add reviews and ratings for cars and rental experiences.",
        "Introduce location-based search and availability tracking.",
        "Optimize performance and add more scalable rental management features.",
      ],
    },
  ]