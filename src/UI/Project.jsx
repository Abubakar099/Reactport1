import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { Button3 } from "../component/Button3";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const Project = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const projectRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const Animate = gsap.context(() => {
      gsap.fromTo(
        ".AnimeProject",
        { x: "-100%", opacity: 0 },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".AnimeProject",
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: true,
          },
        }
      );
    }, projectRef);

    return () => Animate.revert();
  }, []);
  // scroll Trigger END

  // Active color

  const [activeIndex, setActiveIndex] = useState(null);
  const handleActive = (index) => {
    setActiveIndex(index);
  };

  const projects = [
    {
      id: 1,
      name: "E-commerce Web Application",
      date: "May 2024",
      image:
        "https://i.pinimg.com/736x/43/85/11/43851151ed815204265c755eb0bd1d16.jpg",
      description:
        "Developed a full-stack e-commerce web application with product browsing, shopping cart, secure checkout, user authentication, and admin ",
      type: "web",
    },
    {
      id: 2,
      name: "Blog Platform",
      date: "March 2024",
      image:
        "https://i.pinimg.com/736x/7d/bd/6c/7dbd6c199c2e383e82f319a0cd479265.jpg",
      description:
        "Built a content-rich blog platform using Next.js for server-side rendering and SEO optimization. Integrated Sanity CMS for content management and Tailwind CSS for styling. Features ",
      type: "web",
    },
    {
      id: 3,
      name: "Cross-Platform Mobile App",
      date: "Jan 2024",
      image:
        "https://i.pinimg.com/736x/18/2d/3e/182d3e102f2021cab86cd224323cd741.jpg",
      description:
        "Developed a cross-platform mobile application for iOS and Android using React Native. Integrated features like user authentication, data synchronization, push n",
      type: "mobile",
    },
    {
      id: 4,
      name: "Data-Driven Web Dashboard",
      date: "Sep 2023",
      image:
        "https://i.pinimg.com/originals/0a/ab/19/0aab190d9bd4990fda7e7b5772e5b4c9.gif",
      description:
        "Created an interactive web dashboard for visualizing and analyzing large datasets. Utilized charting libraries and data processing techniques to present key",
      type: "web",
    },
    {
      id: 5,
      name: "Backend API for Mobile App",
      date: "Sep 2023",
      image:
        "https://i.pinimg.com/736x/37/ae/5a/37ae5a348dafe560e68b045102722b7a.jpg",
      description:
        "Designed and implemented a robust backend API to support a mobile application. Developed RESTful endpoints for data retrieval, user authentication, and business logic. Bu",
      type: "backend",
    },
    {
      id: 6,
      name: "iOS Mobile App",
      date: "Aug 2023",
      image:
        "https://i.pinimg.com/736x/30/b3/1e/30b31efaf0cf561b0349d2f65662df79.jpg",
      description:
        "Developed a native iOS mobile application using Swift. Implemented features such as data fetching, local storage, UI design, and user interactions. Integrated with third-party libr",
      type: "ios",
    },
  ];

  return (
    <>
      <div
        ref={projectRef}
        className="text-gray-300 HeroColor text-center py-10"
      >
        <div className="container mx-auto p-4">
          <h2 className="AnimeProject text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            My Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              { title: "iOS", subtitle: "Development" },
              { title: "Website", subtitle: "Development" },
              { title: "Android", subtitle: "Development" },
              { title: "Backend", subtitle: "Development" },
              { title: "Webflow", subtitle: "Development" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-4 border-2 border-gray-600 bg-gray-950 text-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 cursor-pointer ${
                  activeIndex === index ? "border-white bg-blue-500" : "" // Highlight active filter
                }`}
                onClick={() => handleActive(index)}
              >
                <p>{item.title}</p>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/*****************************
             Rounded imges
          ****************************/}

        <div className="min-h-screen bg-gradient-to-br from-black to-blue-900/20 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative aspect-square"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="absolute inset-0 rounded-full overflow-hidden group cursor-pointer">
                  <div className="relative w-full h-full">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className={`w-full h-full object-cover transition-all duration-300
                    ${
                      !project.isHighlighted && hoveredId !== project.id
                        ? "grayscale"
                        : ""
                    }
                    ${hoveredId === project.id ? "scale-110" : "scale-100"}
                  `}
                    />
                    <div
                      className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300
                  ${hoveredId === project.id ? "opacity-100" : ""}
                `}
                    >
                      <p className="text-sm tracking-wider mb-2">
                        {project.date}
                      </p>
                      <p className="flex items-center gap-2 text-lg font-medium">
                        {project.name}
                        <FiArrowDownRight className="w-4 h-4" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button3 />
        </div>
      </div>
    </>
  );
};

{
  /* Project Display Area */
}
{
  /* <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => {
                if (activeIndex === null) return true // Show all if no filter is selected
                const selectedType = ["iOS", "Website", "Android", "Backend", "Webflow"][activeIndex]
                return project.type.toLowerCase().includes(selectedType.toLowerCase())
              })
              .map((project) => (
                <div key={project.id} className="bg-gray-900 p-4 rounded-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-96 h-48 object-cover rounded-t-lg"
                  />
                  <h3 className="text-xl text-left mx-5 font-semibold mt-4 clamp-1">{project.name}</h3>
                  <p className="text-gray-400 text-left mx-5 mt-1">{project.date}</p>
                  <p className="mt-2 mx-5 text-left line-clamp-4">{project.description}</p>
                </div>
              ))}
          </div> */
}
