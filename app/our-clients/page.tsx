import ParallaxHero from "@/components/ParallaxHero";
import ClientLogos from "@/components/ClientLogos"; // Path may vary
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Express HR Solution | Our Clients",
  description: "See who we work with.",
};

interface Client {
  name: string;
  logo: string;
  website?: string;
}

export default function ClientsPage() {
  const clients: Client[] = Array.from({ length: 18 }, (_, index) => {
    const num = index + 1;
    return {
      name: `Client ${num}`,
      logo: `/images/our-clients/logo-${num}.png`,
    };
  });

  return (
    <>
      <ParallaxHero
        title="Our Clients"
        backgroundImage="/images/bg2.jpg"
      />

      <section className="py-20 bg-white text-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Trusted by Industry Leaders
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore the brands and businesses we proudly serve.
            </p>
          </div>

          {/* ✅ Client-side motion animation */}
          <ClientLogos clients={clients} />
        </div>
      </section>
    </>
  );
}
