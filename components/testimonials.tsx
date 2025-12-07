import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "Asif is an exceptional developer who brings both technical expertise and creative problem-solving to every project. His work on our SaaS platform significantly improved our user experience.",
      author: "Senior Product Manager",
      company: "Vacayoo Sdn Bhd",
      image: "/professional-avatar-1.png",
    },
    {
      content:
        "Working with Asif was a game-changer for our team. His clean code practices and attention to detail set a high standard for our codebase. Highly recommended!",
      author: "Tech Lead",
      company: "Softlets Group",
      image: "/professional-avatar-2.png",
    },
    {
      content:
        "Asif delivered a complex booking system on time and exceeded our expectations. His communication and technical skills are outstanding.",
      author: "Client Manager",
      company: "Enterprise Client",
      image: "/professional-avatar-3.png",
    },
  ]

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
