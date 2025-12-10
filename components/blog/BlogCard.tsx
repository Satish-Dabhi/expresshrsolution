import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Blog {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  link?: string;
}

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Card className="cursor-pointer flex flex-col h-full bg-card border border-border rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <CardContent className="flex flex-col flex-1 p-6">
        <h3 className="text-2xl font-bold mb-2 text-primary">{blog.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {blog.date} • {blog.author}
        </p>
        <p className="text-foreground mb-6 flex-1">{blog.excerpt}</p>
        {blog.link && (
          <Button className="bg-primary hover:bg-pumpkin-orange text-white mt-auto">
            Read More
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
