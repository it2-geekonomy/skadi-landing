export type Testimonial = {
  name: string;
  company: string;
  title: string;
  quote: string;
  avatar: string;
  logo: string;
  featured?: boolean;
};

export const testimonialColumns: Testimonial[][] = [
  [
    {
      name: "Cagatayhan Kurt",
      company: "Beew Studio",
      title: "Boosted Workflow",
      quote: "Agents helped us automate tasks we didn't even know we could.",
      avatar: "/images/v96_482.png",
      logo: "/images/v96_486.png",
      featured: true,
    },
    {
      name: "Isabella Hart",
      company: "Cloudbeam",
      title: "Team Productivity Win",
      quote:
        "Before Skadi, many potential patients called after hours and never followed up. Now every call is answered instantly, appointment requests are captured automatically, and our team starts each morning with qualified bookings already waiting in the system.",
      avatar: "/images/v96_493.png",
      logo: "/images/v96_497.png",
      featured: true,
    },
  ],
  [
    {
      name: "Liam Patel",
      company: "ScaleWise",
      title: "Boosted Workflow",
      quote:
        "Membership inquiries and class bookings used to consume hours of staff time every..",
      avatar: "/images/v96_543.png",
      logo: "/images/v96_547.png",
      featured: true,
    },
    {
      name: "Sarah Kim",
      company: "Launchlane",
      title: "Team Productivity Win",
      quote:
        "Our team saves hours every week thanks to the AI agent automation.",
      avatar: "/images/v96_504.png",
      logo: "/images/v96_508.png",
    },
    {
      name: "David Chen",
      company: "Optiq Systems",
      title: "Massive Time Saver",
      quote: "Cut our manual task load in half within the first two weeks.",
      avatar: "/images/v96_513.png",
      logo: "/images/v96_517.png",
    },
  ],
  [
    {
      name: "Ethan Moore",
      company: "SignalCraft",
      title: "Huge ROI",
      quote:
        "The biggest advantage isn't just automation—it's the opportunities we no longer lose. Every caller receives an immediate response, even outside business hours, helping us convert more inquiries into paying customers and protect valuable revenue.",
      avatar: "/images/v96_524.png",
      logo: "/images/v96_528.png",
      featured: true,
    },
    {
      name: "Ana Moretti",
      company: "Brightlabs",
      title: "Effortless Integration",
      quote:
        "We connected all our tools seamlessly and started automating immediately.",
      avatar: "/images/v96_533.png",
      logo: "/images/v96_537.png",
    },
  ],
];

/** Featured quotes for the /demo social-proof strip */
export const demoTestimonials: Testimonial[] = [
  testimonialColumns[0][1],
  testimonialColumns[2][0],
  testimonialColumns[1][0],
];
