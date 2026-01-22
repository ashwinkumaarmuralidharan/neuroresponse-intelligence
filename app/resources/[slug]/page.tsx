import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SectionHeader from "@/components/sections/SectionHeader";
import Card from "@/components/ui/Card";
import { getPostBySlug, getPostSlugs } from "@/lib/markdown";
import { Calendar, ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | NS-Predict.ai`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <Link
              href="/resources"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors hover-lift"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-300">
              <Calendar className="w-5 h-5 mr-2" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card>
              <div
                className="prose prose-lg max-w-none text-text-secondary"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            </Card>

            {/* Disclaimer Footer */}
            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Disclaimer:</strong> This article is for informational
                purposes only and does not constitute medical advice. Our
                products are in development and are not yet cleared for clinical
                use. Always consult with qualified healthcare professionals for
                medical decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
