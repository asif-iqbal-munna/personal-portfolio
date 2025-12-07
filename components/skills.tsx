import { Card } from "@/components/ui/card";
import { Code, Database, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      icon: Code,
      skills: [
        "React",
        "Next.js",
        "Redux Toolkit",
        "Zustand",
        "Tanstack Query",
        "Tailwind",
        "Shadcn",
        "Chakra UI",
      ],
    },
    {
      name: "Backend",
      icon: Database,
      skills: [
        "Node.js",
        "Express",
        "NestJS",
        "Prisma",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      name: "Other",
      icon: Wrench,
      skills: ["TypeScript", "Git", "Jira", "OOP", "Vitest"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="glass p-6 hover:border-primary/50 transition-smooth group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon
                    className="text-primary group-hover:scale-110 transition-transform"
                    size={24}
                  />
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
