export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "What I've Fixed", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I build across the stack, because one layer of problems is never enough.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with time zone communications.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast who enjoys building things that actually ship.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building things that work better than my sleep schedule.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to build something together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "TraceIQ",
    des: "Debug AI agents with precision. Visualize every tool call, trace execution flows, and replay any interaction.",
    img: "/p1.png",
    iconLists: [],
    link: "https://traceiq-taupe.vercel.app"
  },
  {
    id: 2,
    title: "CodeByte",
    des: "Platform that teaches coding through interface programming and visualizes code execution.",
    img: "/p2.png",
    iconLists: [],
    link: "https://startup-mvp-two.vercel.app"
  },
  {
    id:3,
    title: "Chain Lens - Bitcoin Transaction & Block Visualizer",
    des: "Bitcoin parser with SegWit, Taproot, Merkle validation, plus a CLI tool, REST API, and web visualizer.",
    img: "/p3.png",
    iconLists: [],
    link: "https://github.com/chain-lens-bitcoin-transaction-visualizer"
  },
  {
    id: 4,
    title: "Safe PSBT Transaction Builder",
    des: "BIP-174 PSBT builder using bitcoinjs-lib with coin selection, RBF, locktime support, and tests.",
    img: "/p4.png",
    iconLists: [],
    link: "https://github.com/safe-pbst-transaction-builder"
  },
];

export const testimonials = [
  {
    quote:
      "Contributed fixes across Writer, Calc, Impress, Draw, and Base, including type-safety improvements, modernization work, and correctness patches.",
    name: "LibreOffice",
    title: "Open-source contributor",
  },
  {
    quote:
      "Fixed caching issues, mobile overflow, data-loss edge cases, stale docs, and small rough edges that are only small after they are fixed.",
    name: "OpenTelemetry Ecosystem Explorer",
    title: "Open-source contributor",
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Open Source Contributor - OpenTelemetry Ecosystem Explorer",
    description:
      "Shipped fixes for CORS, caching, responsive layout bugs, stale documentation, and production-facing edge cases.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Open Source Contributor - LibreOffice",
    description:
      "Worked in a large C++ codebase across Writer, Calc, Impress, Draw, and Base with careful, reviewable patches.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Google Student Ambassador",
    description:
      "Represent developer programs on campus and help organize workshops, tech talks, and community events.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Head of Partnerships - Tesseract Tech Club",
    description:
      "Handle outreach, sponsorship conversations, partnerships, and event execution for the college tech club.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/MeloveGupta",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/meloovegupta",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/melovegupta",
  }
];
