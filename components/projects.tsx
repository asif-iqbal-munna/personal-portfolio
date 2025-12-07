import ComingSoon from "@/components/coming-soon";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="flex justify-center">
          <ComingSoon
            title="Projects Coming Soon"
            description="Exciting projects are in the works. Coming soon with latest work and portfolio pieces."
          />
        </div>
      </div>
    </section>
  );
}
