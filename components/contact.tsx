import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg">
            Open to remote jobs, freelance work, and SaaS collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="glass p-8 flex flex-col items-center text-center">
            <Mail className="text-primary mb-4" size={32} />
            <h3 className="font-semibold mb-2">Email</h3>
            <a
              href="mailto:asifiqbalmunna.me@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              asifiqbalmunna.me@gmail.com
            </a>
          </Card>

          <Card className="glass p-8 flex flex-col items-center text-center">
            <MessageCircle className="text-accent mb-4" size={32} />
            <h3 className="font-semibold mb-2">Quick Connect</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Available for immediate discussions
            </p>
            <a
              href="https://wa.me/+8801707742317"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-smooth text-sm"
            >
              WhatsApp Me
            </a>
          </Card>
        </div>

        {/* <Card className="glass p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Send Message
            </Button>
          </form>
        </Card> */}

        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://github.com/asif-iqbal-munna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ai-munna/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:asifiqbalmunna.me@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
