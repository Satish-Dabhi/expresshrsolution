"use client";

import { motion, Variants, easeOut } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import BlogCard from "./BlogCard";

interface Blog {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  link?: string;
}

export default function AnimatedBlogList({ blogs }: { blogs: Blog[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {blogs.map((blog, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex"
        >
          <BlogCard blog={blog} />
        </motion.div>
      ))}
    </motion.div>
  );
}
