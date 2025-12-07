import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Development Engineer - II",
      company: "Vacayoo Sdn Bhd",
      period: "2024 - Present",
      highlights: [
        "Led frontend development for Travoxis travel SaaS platform",
        "Built scalable Next.js modules serving 10+ travel agencies",
        "Integrated payment gateways (Fiuu, Razorpay, iPay)",
        "Improved performance metrics by 40% through optimization",
        "Mentored junior developers and conducted technical interviews",
      ],
    },
    {
      title: "Junior MERN Stack Developer",
      company: "Softlets Group",
      period: "2022 - 2023",
      highlights: [
        "Developed Resort Management System handling 500+ bookings monthly",
        "Integrated payment gateways (EGHL, CIMB)",
        "Built comprehensive dashboards and reporting tools",
        "Created reusable UI component library",
      ],
    },
    {
      title: "MERN Trainee",
      company: "Zorg IT Group",
      period: "2022",
      highlights: [
        "Built modules for production client projects",
        "Participated in code reviews and architecture discussions",
        "Learned clean code principles and REST architecture",
        "Contributed to internal tools and utilities",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-x-visible md:snap-none md:gap-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="glass p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-smooth min-w-[340px] max-w-[400px] md:min-w-0 md:max-w-none shrink-0 snap-start group h-full flex flex-col"
            >
              <div className="flex flex-col mb-6">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium text-base">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-md w-fit">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3 flex-1">
                {exp.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors"
                  >
                    <CheckCircle2
                      className="text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                      size={16}
                    />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
