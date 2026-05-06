import BlogDetailClient from "@/app/components/BlogDetailClient";

export async function generateStaticParams() {
  return [
    { blogId: 'meet-gen-api' },
    { blogId: 'integrated-ecosystems' },
    { blogId: 'scaling-cloud-hub' },
  ];
}

const posts = [
  {
    id: "meet-gen-api",
    title: "Introducing the Meet Gen API",
    content: "The Meet Gen API represents a massive leap forward in integrated video communication. By exposing the underlying engine that powers our internal meeting platform, we are enabling developers to build high-quality, research-driven video experiences directly into their own workflows. The API features low-latency streaming, real-time noise cancellation, and seamless integration with Cloud Hub storage.",
    date: "May 1, 2026",
    category: "Technical",
    icon: "bi-cpu"
  },
  {
    id: "integrated-ecosystems",
    title: "The Power of Integrated Ecosystems",
    content: "The future of professional growth lies in connected tools. At Creative-Hub, we believe that data shouldn't be siloed. Our integrated ecosystem approach ensures that every project, every community interaction, and every learning step is shared across a unified data layer. This synergy accelerates personal development and operational efficiency in ways that fragmented tools simply cannot.",
    date: "April 28, 2026",
    category: "Philosophy",
    icon: "bi-diagram-3"
  },
  {
    id: "scaling-cloud-hub",
    title: "Scaling Cloud Hub for Global Users",
    content: "Infrastructure is the silent backbone of innovation. Scaling Cloud Hub to support millions of concurrent users required a complete rethink of distributed storage architectures. We've implemented a multi-region, zero-trust infrastructure that ensures your data is always available, always secure, and always fast, regardless of where you are in the world.",
    date: "April 20, 2026",
    category: "Infrastructure",
    icon: "bi-cloud-check"
  }
];

export default async function BlogDetailPage({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;
  const post = posts.find((p) => p.id === blogId) || posts[0];

  return <BlogDetailClient post={post} />;
}
