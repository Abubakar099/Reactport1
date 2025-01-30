import React from 'react';
import { FaSearch } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
import {useState } from 'react';


const blogPosts = [
  {
    "id": 1,
    "title": "E-commerce Website",
    "image": "https://i.pinimg.com/736x/ba/a2/07/baa207731e664afb0c7aaff5c6e0ef09.jpg",
    "description": [
      "Developed a fully functional e-commerce platform with product listings,",
      "shopping cart, and secure checkout process. Implemented user authentication",
      "and order management features."
    ],
    "date": "2024-07-15"
  },
 
  {
    "id": 2,
    "title": "Online Learning Platform",
    "image": "https://i.pinimg.com/736x/e0/28/73/e02873faa280440b8ab9b40ca50efe33.jpg",
    "description": [
      "Designed and built an online learning platform offering courses,",
      "video lectures, quizzes, and progress tracking. Implemented user",
      "authentication and content management functionalities."
    ],
    "date": "2024-01-02"
  },
  {
    "id": 3,
    "title": "Portfolio Website",
    "image": "https://i.pinimg.com/736x/cd/e7/e3/cde7e38ee64fcd5016018dd546716e6b.jpg",
    "description": [
      "Designed and developed a personal portfolio website to showcase",
      "projects, skills, and experience. Implemented a responsive design for",
      "optimal viewing across devices."
    ],
    "date": "2024-05-05"
  },
  {
    "id": 4,
    "title": "Social Media App",
    "image": "https://i.pinimg.com/736x/3e/41/1f/3e411f88abcc41d20ebfe6c75fe96305.jpg",
    "description": [
      "Built a social media application featuring user profiles, posts,",
      "commenting, and a real-time news feed. Integrated push notifications",
      "for enhanced user engagement."
    ],
    "date": "2024-04-10"
  },
  {
    "id": 5,
    "title": "CRM System",
    "image": "https://i.pinimg.com/originals/0a/ab/19/0aab190d9bd4990fda7e7b5772e5b4c9.gif",
    "description": [
      "Developed a Customer Relationship Management (CRM) system to",
      "manage customer interactions, track leads, and automate sales",
      "processes. Implemented reporting and analytics dashboards."
    ],
    "date": "2024-03-25"
  },
  {
    "id": 6,
    "title": "Project Management Tool",
    "image": "https://i.pinimg.com/736x/d4/6c/9c/d46c9c161992cce2dd47bda5256f9a02.jpg",
    "description": [
      "Created a web-based project management tool to facilitate team",
      "collaboration, task assignment, and project tracking. Integrated",
      "file sharing and progress visualization features."
    ],
    "date": "2024-02-18"
  },
  {
    "id": 7,
    "title": "Blog Platform",
    "image": "https://i.pinimg.com/736x/7d/bd/6c/7dbd6c199c2e383e82f319a0cd479265.jpg",
    "description": [
      "Created a dynamic blog platform enabling content creators to publish",
      "articles, manage user comments, and categorize posts. Integrated SEO",
      "optimization features for improved search visibility."
    ],
    "date": "2024-06-20"
  },
  {
    "id": 7,
    "title": "Ai Robot",
    "image": "https://i.pinimg.com/736x/9f/ea/7d/9fea7d0aff47db9e75a32d3eb60a9703.jpg",
    "description": [
      "Designed and built an online learning platform offering courses,",
      "video lectures, quizzes, and progress tracking. Implemented user",
      "authentication and content management functionalities."
    ],
    "date": "2024-01-02"
  }
];
// *************************
// api data end

export function BlogInterface() {
const [Search , setSearch]= useState('');

const FetchData = setSearch !== "" ? blogPosts.filter((item)=>{
return item.title.toLowerCase().includes(Search.toLowerCase())

}) : blogPosts;


  return (
    <div className="min-h-screen bg-black text-white">  
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12 flex items-end border-b-2 border-gray-800 pb-9 justify-evenly lg:text-left transition-all duration-300 hover:tracking-tighter md:justify-between">
  <h1 className="text-6xl  md:text-4xl sm:text-3xl font-medium">My Blog</h1>
  <div className="max-w-md hidden lg:block">
    <p className="text-gray-400">
      Mattis in dui euismod sit egestas ac sit. Mollis eu urna pulvinar
      mi duis donec felis consectetur.
    </p>
  </div>
</div>

        {/* Navigation */}
        <div className="mb-12 flex flex-wrap items-center justify-between m-14 gap-4">
          <div className="flex gap-4">
            {["All Topics", "Most Popular", "Last Year"].map((item) => (
              <div key={item} className="dropdown dropdown-hover">
                <button className="btn btn-ghost text-gray-400 hover:text-white">
                  {item}
                </button>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="p-5 overflow-hidden w-[60px] h-[60px] hover:w-[270px] bg-blue-500 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300">
              <div  className="flex items-center justify-center fill-white">
                <FaSearch  className="text-lg"  />
              </div>
              <input onChange={(e)=>setSearch(e.target.value)}
                type="text" 
                className=  "outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
              />
            </div>
            {/* <h2>Hello{Search}</h2> */}
          </div>
        </div>

        {FetchData.length === 0 ? (
  <div className="bg-black text-white">
    <h2>No Data Found</h2>
  </div>
) : (
 <div className="mb-12 px-4 md:px-6 lg:px-8 cursor-pointer"> {/* Added padding for responsiveness */}
  <div className="flex items-center justify-between"> {/* Changed to flexbox for better control */}
    <button className="btn btn-circle btn-ghost">
      {/* <FaArrowLeft /> */}
    </button>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto scroll-smooth"> {/* Responsive grid */}
      {FetchData.map((post, index) => (
        <div key={index} className="shrink-0"> {/* Added shrink-0 to prevent content from shrinking */}
          <div className="card bg-zinc-900 border-0 w-full"> {/* w-full to ensure cards fill their container */}
            <figure>
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="aspect-video w-full object-cover"
              />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title mb-2 text-xl font-semibold line-clamp-1">
                {post.title}
              </h2>
              <p className="text-gray-400 line-clamp-4"> {/* Added line-clamp-4 */}
                {post.description && post.description.length > 0 ? (
                  post.description.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br /> {/* Add line breaks for each line */}
                    </React.Fragment>
                  ))
                ) : (
                  "No description available" // Or handle the case where there is no description
                )}
              </p>
            </div>
            <div className="card-footer p-6 pt-0">
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <button className="btn btn-circle btn-ghost">
      {/* <FaArrowRight /> */}
    </button>
  </div>
</div>
)}

        {/* All Articles Button */}
        <div className="text-center">
          <button className="btn btn-primary px-7 py-3 rounded-full text-sm bg-blue-600 text-white hover:bg-purple-700">
            ALL ARTICLES
          </button>
        </div>
      </div>
    </div>
    
  );
}

