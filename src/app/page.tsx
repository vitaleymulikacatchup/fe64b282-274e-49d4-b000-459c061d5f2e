"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import GradientFooter from '@/components/sections/layouts/footer/GradientFooter';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: "funAndTrendy",
      colorTemplate: 1,
      textAnimation: "slide"
    }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="MemePulse"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1758885637835-540af468.jpg"
          logoAlt="MemePulse Logo"
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <VoidHero
          title="Welcome to MemePulse"
          description="Join the fun with our engaging memecoin!"
          tagLabel="Mint Here"
          primaryButtonText="Buy Now"
          secondaryButtonText="Explore"
        />
      </div>
      <div id="about" data-section="about">
        <BaseAbout
          title="About MemePulse"
          descriptions={["MemePulse is your gateway to playful cryptocurrency interactions!", "Join a vibrant community and start your journey with our simple buying guide."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics
          title="Tokenomics Overview"
          description="Discover the fundamentals behind MemePulse token distribution and utility."
          items={[{ value: "1M", description: "Total Supply" }, { value: "20%", description: "Initial Liquidity" }]}
        />
      </div>
      <div id="footer" data-section="footer">
        <GradientFooter
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1758885637835-540af468.jpg"
          logoAlt="MemePulse Logo"
          copyrightText="© 2023 MemePulse"
          columns={[
            { title: "Links", items: [{ label: "Home", onClick: () => {} }, { label: "Buy now", onClick: () => {} }] },
            { title: "Community", items: [{ label: "Telegram", onClick: () => {} }, { label: "Discord", onClick: () => {} }] },
            { title: "More", items: [{ label: "Tokenomics", onClick: () => {} }, { label: "FAQs", onClick: () => {} }] }
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}
