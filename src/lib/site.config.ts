export const siteConfig = {
  name: "Birds Are Dinosaurs",
  description: "A modern weblog with answers, tutorials, tips and tricks and maybe an occasional opinion or two. ",
  url: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000",
  ogImage: process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/og.jpg` : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/og.jpg` : "http://localhost:3000/og.jpg",
  links: {
    twitter: "https://twitter.com/jpotter702", // confirm or update this handle
    github: "https://github.com/jpotter702",
    linkedin: "https://linkedin.com/in/jpotter702", // or update with correct one
  },
  author: {
    name: "Jason Potter",
    email: "selectbynature@gmail.com",
    twitter: "@jpotter702", // match with above
    avatar: "/avatar.jpg",
},
  // Theme customization
  theme: {
    // Typography settings
    typography: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      lineHeight: {
        tight: "1.25",
        normal: "1.5",
        relaxed: "1.75",
      },
    },
    // Color palette
    colors: {
      brand: {
        primary: "#3b82f6",
        secondary: "#6b7280",
        accent: "#10b981",
      },
      content: {
        primary: "#171717",
        secondary: "#6b7280",
        muted: "#9ca3af",
        inverse: "#ffffff",
      },
      background: {
        primary: "#ffffff",
        secondary: "#f9fafb",
        muted: "#f3f4f6",
        inverse: "#111827",
      },
      border: {
        primary: "#e5e7eb",
        secondary: "#d1d5db",
        muted: "#f3f4f6",
      },
    },
    // Spacing and layout
    spacing: {
      header: "6rem",
      container: "2rem",
      section: "4rem",
      component: "1.5rem",
    },
    // Border radius
    borderRadius: {
      sm: "0.25rem",
      md: "0.5rem",
      lg: "0.75rem",
      xl: "1rem",
    },
    // Shadows
    shadows: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    },
  },
  // Blog settings
  blog: {
    postsPerPage: 6,
    showReadingTime: true,
    showAuthor: true,
    showDate: true,
    showTags: true,
    showExcerpt: true,
    excerptLength: 160,
    defaultImage: "/banner.jpg",
  },
  // SEO settings
  seo: {
    titleTemplate: "%s | Birds Are Dinosaurs",
    defaultTitle: "Birds Are Dinosaurs",
    defaultDescription: "A modern blog exploring code, AI, and the weirdness of the world.",
    keywords: ["jason potter", "ai", "javascript", "python", "mdx", "blog", "tailwind", "openai"] as string[],
    twitterCard: "summary_large_image",
    canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000",
  },
  // Navigation
  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    footer: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "RSS", href: "/rss.xml" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig
