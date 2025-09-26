"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PlayfulHero from '@/components/sections/layouts/hero/PlayfulHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import LogoFooter from '@/components/sections/layouts/footer/LogoFooter';

export default function Home() {
  return (
    <SiteThemeProvider 
      theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={
            [
              { name: 'Hero', id: 'hero' },
              { name: 'About', id: 'about' },
              { name: 'How To Buy', id: 'how-to-buy' },
              { name: 'Tokenomics', id: 'tokenomics' },
              { name: 'Footer', id: 'footer' }
            ]
          }
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/theme-funandtrendy-section-nav-slot-cont-1758884013331-a58c7bb5.jpg"
          logoWidth={120}
          logoHeight={40}
          buttonText="Buy MemePulse"
          onButtonClick={() => console.log('CTA clicked')}
        />
      </div>
      <div id="hero" data-section="hero">
        <PlayfulHero title="Welcome to MemePulse" subtitle="A playful memecoin experience at your fingertips!" />
      </div>
      <div id="about" data-section="about">
        <BaseAbout 
          title="About MemePulse"
          descriptions={[
            "MemePulse is the next gen memecoin that brings fun to the cryptocurrency world.",
            "Join our vibrant community and let’s create something amazing together!",
            "With your participation, we aim to keep the fun going!"
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="Tokenomics"
          description="Our tokenomics are designed to ensure sustainability and growth."
          tokenData={[
            { value: "100M", description: "Total Supply" },
            { value: "70M", description: "Circulating Supply" },
            { value: "30M", description: "Reserved for Development" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <LogoFooter
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/theme-funandtrendy-section-nav-slot-cont-1758884013331-a58c7bb5.jpg"
          logoAlt="MemePulse Logo"
          logoText="MemePulse"
          columns={[
            {
              title: 'Company',
              items: [
                { label: 'About Us', onClick: () => console.log('About Clicked') },
                { label: 'Contact', onClick: () => console.log('Contact Clicked') },
                { label: 'Privacy Policy', onClick: () => console.log('Privacy Policy Clicked') }
              ]
            },
            {
              title: 'Resources',
              items: [
                { label: 'Blog', onClick: () => console.log('Blog Clicked') },
                { label: 'Documentation', onClick: () => console.log('Documentation Clicked') }
              ]
            },
            {
              title: 'Community',
              items: [
                { label: 'Discord', onClick: () => console.log('Discord Clicked') },
                { label: 'Twitter', onClick: () => console.log('Twitter Clicked') }
              ]
            },
          ]}
          copyrightText="© 2023 MemePulse. All rights reserved."
          onPrivacyClick={() => console.log('Privacy Policy Clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}
