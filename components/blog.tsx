import ComingSoon from "@/components/coming-soon";

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Insights and stories about full stack development, SaaS
            architecture, and building scalable applications.
          </p>
        </div>

        <div className="flex justify-center">
          <ComingSoon
            title="Blog Coming Soon"
            description="I'm preparing insightful articles about full stack development, SaaS architecture, and building scalable applications. Stay tuned!"
          />
        </div>
      </div>
    </section>
  );
}
