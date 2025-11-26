"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Wilderness Wedding",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    size: "large", // spans 2 cols
  },
  {
    id: 2,
    title: "Urban Portraits",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
    size: "small",
  },
  {
    id: 3,
    title: "Golden Hour",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop",
    size: "small",
  },
  {
    id: 4,
    title: "Studio Session",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    size: "tall", // spans 2 rows
  },
  {
    id: 5,
    title: "Mountain Elopement",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    size: "small",
  },
];

const FeaturedWork = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-secondary font-medium tracking-wider uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
              Selected Works
            </h3>
            <p className="text-lg text-neutral-500 max-w-xl">
              A collection of our favorite moments captured through the lens.
              Each image tells a unique story of love, life, and beauty.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 text-lg font-bold text-primary hover:text-secondary transition-colors"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[300px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative group overflow-hidden rounded-3xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ${project.size === "large"
                  ? "md:col-span-2"
                  : project.size === "tall"
                    ? "md:row-span-2"
                    : ""
                }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 bg-secondary/90 text-primary text-xs font-bold rounded-full w-fit mb-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Layout */}
        <div className="md:hidden relative w-full -mx-4 sm:-mx-6 px-4 sm:px-6">
          <div className="flex gap-6 animate-scroll w-max hover:pause">
            {/* First Set */}
            {projects.map((project) => (
              <div
                key={`m1-${project.id}`}
                className="relative w-[85vw] sm:w-[60vw] h-[400px] flex-shrink-0 rounded-3xl overflow-hidden shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="85vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 bg-secondary/90 text-primary text-xs font-bold rounded-full w-fit mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
            {/* Duplicate Set for Infinite Scroll */}
            {projects.map((project) => (
              <div
                key={`m2-${project.id}`}
                className="relative w-[85vw] sm:w-[60vw] h-[400px] flex-shrink-0 rounded-3xl overflow-hidden shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="85vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 bg-secondary/90 text-primary text-xs font-bold rounded-full w-fit mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
