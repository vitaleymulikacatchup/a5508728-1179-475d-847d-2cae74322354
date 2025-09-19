use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Solutions"
          buttonText="Get Demo"
        />
      </div>

      <div id="hero" data-section="hero">
        <TokenBillboardHero
          title="Welcome to Xeven Solutions"
          subtitle="Innovative solutions for a futuristic world"
          contractAddress="0xABC123..."
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          description="At Xeven, we are committed to providing top-notch solutions that empower businesses to thrive in the digital landscape."
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Create an account", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Convert assets", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Complete your purchase", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <NumberGridTokenomics
          title="Tokenomics Overview"
          description="Understanding the key metrics of our token model"
          kpiItems={[
            { value: "1M", description: "Total Supply" },
            { value: "500K", description: "Circulating Supply" },
            { value: "50%", description: "Community Allocation" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Solutions"
          logoText="Xeven Solutions"
        />
      </div>
    </SiteThemeProvider>
  );
}
