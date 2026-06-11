import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ServiceDetailPage from './pages/ServiceDetailPage.jsx';
import CaseDetailPage from './pages/CaseDetailPage.jsx';
import { services, getServiceById } from './data/services.js';
import { cases, getCaseById } from './data/cases.js';

function ServiceRoute({ id }) {
  const service = getServiceById(id);
  if (!service) return <NotFound />;
  return <ServiceDetailPage service={service} />;
}

function CaseRoute({ id }) {
  const caseData = getCaseById(id);
  if (!caseData) return <NotFound />;
  return <CaseDetailPage caseData={caseData} />;
}

function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <h1>404</h1>
        <p>Page not found.</p>
        <a href="/" className="hero-cta-primary">Back to home</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Service routes */}
          <Route path="/services/landing-pages-websites" element={<ServiceRoute id="landing-pages-websites" />} />
          <Route path="/services/seo-local-search" element={<ServiceRoute id="seo-local-search" />} />
          <Route path="/services/paid-advertising-lead-gen" element={<ServiceRoute id="paid-advertising-lead-gen" />} />
          <Route path="/services/smm-content-systems" element={<ServiceRoute id="smm-content-systems" />} />
          <Route path="/services/analytics-reporting" element={<ServiceRoute id="analytics-reporting" />} />
          <Route path="/services/market-research" element={<ServiceRoute id="market-research" />} />
          <Route path="/services/ai-assisted-production" element={<ServiceRoute id="ai-assisted-production" />} />

          {/* Case routes */}
          <Route path="/cases/real-estate-bangkok" element={<CaseRoute id="real-estate-bangkok" />} />
          <Route path="/cases/wellness-clinic-phuket" element={<CaseRoute id="wellness-clinic-phuket" />} />
          <Route path="/cases/tourism-hospitality" element={<CaseRoute id="tourism-hospitality" />} />
          <Route path="/cases/b2b-services-asia" element={<CaseRoute id="b2b-services-asia" />} />
          <Route path="/cases/education-asia" element={<CaseRoute id="education-asia" />} />
          <Route path="/cases/legal-and-visa-services" element={<CaseRoute id="legal-and-visa-services" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
