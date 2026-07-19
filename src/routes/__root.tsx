import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://hello-warm-fuzz.lovable.app";
const SITE_TITLE = "IPTvvv — Premium IPTV Streaming | 15,000+ Live Channels in 4K";
const SITE_DESCRIPTION = "Stream 15,000+ live TV channels and 60,000+ movies & series in Full HD and 4K. Works on Smart TV, Fire Stick, Android, iOS, Apple TV & MAG. Instant activation, 24h money-back guarantee.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "keywords", content: "IPTV, IPTV subscription, live TV streaming, 4K IPTV, Smart TV IPTV, Fire Stick IPTV, premium IPTV, IPTV channels, sports IPTV, movies streaming" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "author", content: "IPTvvv" },
      { name: "theme-color", content: "#0a0f1a" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "IPTvvv" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800;900&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "IPTvvv",
              url: SITE_URL,
              description: SITE_DESCRIPTION,
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@iptvvv.tv",
                contactType: "customer support",
                availableLanguage: ["English"],
              },
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "IPTvvv",
              description: SITE_DESCRIPTION,
              publisher: { "@id": `${SITE_URL}/#organization` },
              inLanguage: "en-US",
            },
            {
              "@type": "Product",
              name: "IPTvvv Premium IPTV Subscription",
              description: "Premium IPTV streaming service with 15,000+ live channels and 60,000+ movies & series in Full HD and 4K.",
              brand: { "@type": "Brand", name: "IPTvvv" },
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                lowPrice: "12",
                highPrice: "69",
                offerCount: "4",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "12000",
                bestRating: "5",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "What is IPTV?", acceptedAnswer: { "@type": "Answer", text: "IPTV (Internet Protocol Television) delivers live TV channels and on-demand content over the internet instead of traditional cable or satellite. All you need is an internet connection and a compatible device." } },
                { "@type": "Question", name: "What devices are supported?", acceptedAnswer: { "@type": "Answer", text: "Smart TVs (Samsung, LG, Android TV), Amazon Fire Stick, Apple TV, Roku, Android/iOS phones and tablets, MAG boxes, and any device with a compatible IPTV player app." } },
                { "@type": "Question", name: "How fast does my internet need to be?", acceptedAnswer: { "@type": "Answer", text: "We recommend a minimum of 10 Mbps for Full HD streaming and 25 Mbps for 4K. Most modern broadband connections easily meet these requirements." } },
                { "@type": "Question", name: "How quickly is my subscription activated?", acceptedAnswer: { "@type": "Answer", text: "Your account is activated automatically within minutes of payment. You will receive your login credentials and setup instructions by email immediately." } },
                { "@type": "Question", name: "Can I use the service while traveling?", acceptedAnswer: { "@type": "Answer", text: "Yes! IPTvvv works worldwide. As long as you have an internet connection, you can stream your channels from any country." } },
                { "@type": "Question", name: "How many connections can I use at once?", acceptedAnswer: { "@type": "Answer", text: "All plans include 1 simultaneous connection. You can add extra connections during checkout if needed." } },
              ],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
