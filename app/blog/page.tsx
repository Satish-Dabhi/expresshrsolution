import AnimatedBlogList from "@/components/blog/AnimatedBlogList";
import ParallaxHero from "@/components/ParallaxHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Express HR Solution | Blog",
  description: "Read our latest blog posts.",
};

interface Blog {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  link?: string;
}

const blogs: Blog[] = [
  {
    title: "How HR Solutions Can Transform Your Business",
    excerpt:
      "Discover the impact of effective HR solutions on organizational growth and employee satisfaction.",
    image: "/images/about.jpg",
    date: "September 20, 2025",
    author: "Admin",
  },
  {
    title: "Payroll Management Tips for Small Businesses",
    excerpt:
      "Learn key payroll management strategies that save time and reduce errors for small businesses.",
    image: "/images/bulk-cargo.jpg",
    date: "September 15, 2025",
    author: "Admin",
  },
  {
    title: "Top Recruitment Strategies in 2025",
    excerpt:
      "Explore the latest recruitment trends and strategies to attract top talent this year.",
    image: "/images/transportation.jpg",
    date: "September 10, 2025",
    author: "Admin",
  },
  {
    title: "Labour Law Compliance Made Easy",
    excerpt:
      "Stay compliant with labor laws effortlessly using these essential HR practices.",
    image: "/images/warehouse-management.jpg",
    date: "September 5, 2025",
    author: "Admin",
  },
];

export default function BlogsPage() {
  return (
    <>
      <ParallaxHero
        title="Our Blog"
        backgroundImage="/images/bg2.jpg"
      />
      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedBlogList blogs={blogs} />
        </div>
      </section>
    </>
  );
}
