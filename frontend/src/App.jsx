import ExactNavbar from './components/ExactNavbar';
import ExactHero from './components/ExactHero';
import ExactVideoIntro from './components/ExactVideoIntro';
import ExactStatsSplit from './components/ExactStatsSplit';
import ExactCommerce from './components/ExactCommerce';
import ExactValues from './components/ExactValues';
import ExactServices from './components/ExactServices';
import ExactExcellence from './components/ExactExcellence';
import ExactPartners from './components/ExactPartners';
import ExactCtaBanner from './components/ExactCtaBanner';
import ExactTechFeatures from './components/ExactTechFeatures';
import ExactStatsBanner from './components/ExactStatsBanner';
import ExactPricing from './components/ExactPricing';
import ExactBlog from './components/ExactBlog';
import ExactBuildDream from './components/ExactBuildDream';
import ExactFooter from './components/ExactFooter';
import './App.css';

function App() {
  return (
    <div className="app">
      <ExactNavbar />
      <main>
        <ExactHero />
        <ExactVideoIntro />
        <ExactStatsSplit />
        <ExactCommerce />
        <ExactValues />
        <ExactServices />
        <ExactExcellence />
        <ExactPartners />
        <ExactCtaBanner />
        <ExactTechFeatures />
        <ExactStatsBanner />
        <ExactPricing />
        <ExactBlog />
        <ExactBuildDream />
      </main>
      <ExactFooter />
    </div>
  );
}

export default App;
