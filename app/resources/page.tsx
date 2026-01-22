import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/sections/SectionHeader";
import Card from "@/components/ui/Card";
import { getAllPosts } from "@/lib/markdown";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources | NS-Predict.ai",
  description: "Articles, insights, and resources about neurostimulation, predictive analytics, and clinical decision support.",
};

export default async function ResourcesPage() {
  const posts = await getAllPosts();

  return (
    <>
      {/* Hero */}
      <section 
        className="section-padding bg-gradient-hero text-white"
        style={{
          background: 'linear-gradient(135deg, #0A1929 0%, #051422 50%, #0A1929 100%)',
          backgroundSize: '200% 200%',
        }}
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-gray-200">
              Articles, insights, and resources about neurostimulation,
              predictive analytics, and clinical decision support
            </p>
          </div>
        </div>
      </section>

      {/* Posts Listing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Articles & Insights"
            description="Explore our latest articles and resources"
          />
          {posts.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center text-text-secondary">
              <p>No articles available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/resources/${post.slug}`}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-navy mb-3">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-text-secondary">
                      <Calendar className="w-4 h-4 mr-2" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
