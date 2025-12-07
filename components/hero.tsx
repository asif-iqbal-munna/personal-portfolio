"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const handleResumeDownload = () => {
    const driveLink =
      "https://drive.google.com/file/d/162x3h96kPzyssOyNUwKhRH3X6__sP3N2/view?usp=sharing";

    let fileId = driveLink;
    if (driveLink.includes("/d/")) {
      fileId = driveLink.split("/d/")[1].split("/")[0];
    } else if (driveLink.includes("id=")) {
      fileId = driveLink.split("id=")[1].split("&")[0];
    }

    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Asif_Iqbal_Munna_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Asif Iqbal Munna
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer (MERN) with 3+ Years Experience building
            scalable Resort Management System, SaaS platforms, dashboards, and
            business solutions using React, Next.js, Node.js, PostgreSQL &
            MongoDB, Prisma, Zustand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Hire Me
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer"
              onClick={handleResumeDownload}
            >
              Download Resume
              <Download className="ml-2" size={18} />
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
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
      </div>
    </section>
  );
}
