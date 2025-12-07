import Image from "next/image";
import MYPHOTO from "@/public/images/dp-me.jpg";
export default function About() {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Full Stack Developer specializing in SaaS, dashboards, and
                business solutions. I've worked at Softlets Group and Vacayoo
                Sdn Bhd building large-scale production systems for travel and
                resort management.
              </p>
              <p>
                I love building scalable, fast, and user-centric applications
                that solve real business problems. My approach combines
                technical excellence with a deep understanding of user needs.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">10+</p>
                <p className="text-sm text-muted-foreground">
                  Production Projects
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">∞</p>
                <p className="text-sm text-muted-foreground">Knowledge</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Image
                src={MYPHOTO}
                width={256}
                height={256}
                alt="Asif Iqbal Munna"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
