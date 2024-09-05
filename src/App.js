import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import VacanciesPage from "./pages/VacanciesPage";
import FinanceLogo from "../src/assets/icons/Union.svg";
import CarLogo from "../src/assets/icons/evaCarOutline2.svg";
import DesignLogo from "../src/assets/icons/Vector (1) copy 2.svg";
import RestoranLogo from "../src/assets/icons/Vector (1) copy 3.svg";
import MedicineLogo from "../src/assets/icons/Vector (1) copy 4.svg";
import MultimediaLogo from "../src/assets/icons/Vector (1) copy 5.svg";
import TechLogo from "../src/assets/icons/Vector (1) copy 6.svg";
import BussinesLogo from "../src/assets/icons/Union copy.svg";
import SaleLogo from "../src/assets/icons/Vector (1) copy 7.svg";
import { Routes, Route } from "react-router-dom";
import ModalWindow from "./components/ModalWindow";
const allCategories = [
  {
    src: FinanceLogo,
    alt: "Finance",
    title: "Finance",
  },
  {
    src: CarLogo,
    alt: "Transportation",
    title: "Trucking",
  },
  {
    src: DesignLogo,
    alt: "Design",
    title: "Design",
  },
  {
    src: RestoranLogo,
    alt: "Restaurant business",
    title: "Food & Beverage",
  },
  {
    src: MultimediaLogo,
    alt: "Multimedia",
    title: "Social Media",
  },
  {
    src: MedicineLogo,
    alt: "Medicine",
    title: "Medicine",
  },
  {
    src: TechLogo,
    alt: "Support",
    title: "Support",
  },
  {
    src: BussinesLogo,
    alt: "Management",
    title: "Management",
  },
  {
    src: SaleLogo,
    alt: "Sales",
    title: "Sales",
  },
  {
    src: TechLogo,
    alt: "Entertainment",
    title: "Entertainment",
  },
  {
    src: FinanceLogo,
    alt: "Education",
    title: "Education",
  },
  {
    src: DesignLogo,
    alt: "Real Estate",
    title: "Real Estate",
  },
  {
    src: MedicineLogo,
    alt: "Agriculture",
    title: "Agriculture",
  },
];
const allVacancies = [
  // Finance
  {
    id: 1,
    color: "pink",
    category: "Finance",
    title: "Financial Analyst",
    location: "New York, NY",
    company: "Goldman Sachs",
    companyLink: "https://www.goldmansachs.com/",
    postedDate: "2 days ago",
    featured: false,
  },
  {
    id: 2,
    color: "pink",
    category: "Finance",
    title: "Accountant",
    location: "San Francisco, CA",
    company: "Deloitte",
    companyLink: "https://www2.deloitte.com/us/en.html",
    postedDate: "1 week ago",
    featured: true,
  },
  {
    id: 3,
    category: "Finance",
    color: "pink",
    title: "Investment Banker",
    location: "London, UK",
    company: "J.P. Morgan",
    companyLink: "https://www.jpmorgan.com/",
    postedDate: "5 days ago",
    featured: false,
  },
  // Transportation
  {
    id: 4,
    category: "Trucking",
    color: "green",
    title: "Truck Driver",
    location: "Chicago, IL",
    company: "UPS",
    companyLink: "https://www.ups.com/",
    postedDate: "1 day ago",
    featured: true,
  },
  {
    id: 5,
    category: "Trucking",
    color: "green",
    title: "Delivery Driver",
    location: "Los Angeles, CA",
    company: "FedEx",
    companyLink: "https://www.fedex.com/",
    postedDate: "3 days ago",
    featured: false,
  },
  {
    id: 6,
    category: "Trucking",
    color: "green",
    title: "Logistics Manager",
    location: "Atlanta, GA",
    company: "DHL",
    companyLink: "https://www.dhl.com/us-en/home.html",
    postedDate: "1 week ago",
    featured: false,
  },
  // Design
  {
    id: 7,
    category: "Design",
    color: "yellow",
    title: "UI/UX Designer",
    location: "Seattle, WA",
    company: "Amazon",
    companyLink: "https://www.amazon.com/",
    postedDate: "2 days ago",
    featured: false,
  },
  {
    id: 8,
    category: "Design",
    color: "yellow",
    title: "Graphic Designer",
    location: "New York, NY",
    company: "Adobe",
    companyLink: "https://www.adobe.com/",
    postedDate: "4 days ago",
    featured: true,
  },
  {
    id: 9,
    category: "Design",
    color: "yellow",
    title: "Product Designer",
    location: "San Francisco, CA",
    company: "Google",
    companyLink: "https://www.google.com/",
    postedDate: "1 week ago",
    featured: false,
  },
  // Food & Beverage
  {
    id: 10,
    category: "Food & Beverage",
    color: "red",
    title: "Chef",
    location: "Chicago, IL",
    company: "McDonald's",
    companyLink: "https://www.mcdonalds.com/",
    postedDate: "3 days ago",
    featured: false,
  },
  {
    id: 11,
    category: "Food & Beverage",
    color: "red",
    title: "Restaurant Manager",
    location: "New York, NY",
    company: "Starbucks",
    companyLink: "https://www.starbucks.com/",
    postedDate: "1 day ago",
    featured: true,
  },
  {
    id: 12,
    category: "Food & Beverage",
    color: "red",
    title: "Barista",
    location: "Seattle, WA",
    company: "Dunkin' Donuts",
    companyLink: "https://www.dunkindonuts.com/",
    postedDate: "1 week ago",
    featured: false,
  },
  // Social Media
  {
    id: 13,
    category: "Social Media",
    color: "blue",
    title: "Social Media Manager",
    location: "San Francisco, CA",
    company: "Instagram",
    companyLink: "https://www.instagram.com/",
    postedDate: "5 days ago",
    featured: false,
  },
  {
    id: 14,
    category: "Social Media",
    color: "blue",
    title: "Content Creator",
    location: "New York, NY",
    company: "YouTube",
    companyLink: "https://www.youtube.com/",
    postedDate: "2 days ago",
    featured: true,
  },
  {
    id: 15,
    category: "Social Media",
    color: "blue",
    title: "Community Manager",
    location: "London, UK",
    company: "Twitter",
    companyLink: "https://www.twitter.com/",
    postedDate: "1 week ago",
    featured: false,
  },
  // Medicine
  {
    id: 16,
    category: "Medicine",
    color: "black",
    title: "Doctor",
    location: "New York, NY",
    company: "Johns Hopkins Medicine",
    companyLink: "https://www.hopkinsmedicine.org/",
    postedDate: "1 day ago",
    featured: true,
  },
  {
    id: 17,
    category: "Medicine",
    color: "black",
    title: "Nurse",
    location: "Chicago, IL",
    company: "Mayo Clinic",
    companyLink: "https://www.mayoclinic.org/",
    postedDate: "4 days ago",
    featured: false,
  },
  {
    id: 18,
    category: "Medicine",
    color: "black",
    title: "Pharmacist",
    location: "Los Angeles, CA",
    company: "CVS Health",
    companyLink: "https://www.cvs.com/",
    postedDate: "1 week ago",
    featured: false,
  },
  // Support
  {
    id: 19,
    category: "Support",
    color: "orange",
    title: "Customer Service Representative",
    location: "Atlanta, GA",
    company: "Amazon",
    companyLink: "https://www.amazon.com/",
    postedDate: "3 days ago",
    featured: false,
  },
  {
    id: 20,
    category: "Support",
    color: "orange",
    title: "Technical Support Specialist",
    location: "Seattle, WA",
    company: "Microsoft",
    companyLink: "https://www.microsoft.com/",
    postedDate: "1 day ago",
    featured: true,
  },
  {
    id: 21,
    category: "Support",
    color: "orange",
    title: "Help Desk Analyst",
    location: "San Francisco, CA",
    company: "Google",
    companyLink: "https://www.google.com/",
    postedDate: "1 week ago",
    featured: false,
  },
  // Management
  {
    id: 22,
    category: "Management",
    color: "purple",
    title: "Project Manager",
    location: "New York, NY",
    company: "Apple",
    companyLink: "https://www.apple.com/",
    postedDate: "2 days ago",
    featured: false,
  },
  {
    id: 23,
    category: "Management",
    color: "purple",
    title: "Operations Manager",
    location: "Chicago, IL",
    company: "Walmart",
    companyLink: "https://www.walmart.com/",
    postedDate: "1 day ago",
    featured: true,
  },
  {
    id: 24,
    category: "Management",
    color: "purple",
    title: "Human Resources Manager",
    location: "Los Angeles, CA",
    company: "Disney",
    companyLink: "https://www.disney.com/",
    postedDate: "1 week ago",
    featured: false,
  },
  // Sales
  {
    id: 25,
    category: "Sales",
    color: "gray",
    title: "Sales Representative",
    location: "Atlanta, GA",
    company: "Salesforce",
    companyLink: "https://www.salesforce.com/",
    postedDate: "4 days ago",
    featured: false,
  },
  {
    id: 26,
    category: "Sales",
    color: "gray",
    title: "Account Executive",
    location: "Seattle, WA",
    company: "Amazon",
    companyLink: "https://www.amazon.com/",
    postedDate: "1 day ago",
    featured: true,
  },
  {
    id: 27,
    category: "Sales",
    color: "gray",
    title: "Marketing Specialist",
    location: "San Francisco, CA",
    company: "Google",
    companyLink: "https://www.google.com/",
    postedDate: "1 week ago",
    featured: false,
  },
  // Entertainment
  {
    id: 28,
    category: "Entertainment",
    color: "aquamarine",
    title: "Film Director",
    location: "Los Angeles, CA",
    company: "Netflix",
    companyLink: "https://www.netflix.com/",
    postedDate: "3 days ago",
    featured: false,
  },
  {
    id: 29,
    category: "Entertainment",
    color: "aquamarine",
    title: "Music Producer",
    location: "New York, NY",
    company: "Spotify",
    companyLink: "https://www.spotify.com/",
    postedDate: "1 day ago",
    featured: true,
  },
  {
    id: 30,
    category: "Entertainment",
    color: "aquamarine",
    title: "Game Developer",
    location: "Seattle, WA",
    company: "Microsoft",
    companyLink: "https://www.microsoft.com/",
    postedDate: "1 week ago",
    featured: false,
  },
  // Education
  {
    id: 31,
    category: "Education",
    color: "brown",
    title: "Teacher",
    location: "Chicago, IL",
    company: "Chicago Public Schools",
    companyLink: "https://www.cps.edu/",
    postedDate: "4 days ago",
    featured: false,
  },
  {
    id: 32,
    category: "Education",
    color: "brown",
    title: "Professor",
    location: "New York, NY",
    company: "Columbia University",
    companyLink: "https://www.columbia.edu/",
    postedDate: "1 day ago",
    featured: true,
  },
  {
    id: 33,
    category: "Education",
    color: "brown",
    title: "Tutor",
    location: "Los Angeles, CA",
    company: "Khan Academy",
    companyLink: "https://www.khanacademy.org/",
    postedDate: "1 week ago",
    featured: false,
  },
  // Real Estate
  {
    id: 34,
    category: "Real Estate",
    color: "coral",
    title: "Real Estate Agent",
    location: "San Francisco, CA",
    company: "Realtor.com",
    companyLink: "https://www.realtor.com/",
    postedDate: "2 days ago",
    featured: false,
  },
  {
    id: 35,
    category: "Real Estate",
    color: "coral",
    title: "Property Manager",
    location: "New York, NY",
    company: "Zillow",
    companyLink: "https://www.zillow.com/",
    postedDate: "1 day ago",
    featured: true,
  },
  {
    id: 36,
    category: "Real Estate",
    color: "coral",
    title: "Construction Manager",
    location: "Chicago, IL",
    company: "HomeAdvisor",
    companyLink: "https://www.homeadvisor.com/",
    postedDate: "1 week ago",
    featured: false,
  },
  // Agriculture
  {
    id: 37,
    category: "Agriculture",
    color: "amber",
    title: "Farmer",
    location: "Iowa, USA",
    company: "John Deere",
    companyLink: "https://www.deere.com/",
    postedDate: "3 days ago",
    featured: false,
  },
  {
    id: 38,
    category: "Agriculture",
    color: "amber",
    title: "Agricultural Engineer",
    location: "California, USA",
    company: "Monsanto",
    companyLink: "https://www.monsanto.com/",
    postedDate: "1 day ago",
    featured: true,
  },
  {
    id: 39,
    category: "Agriculture",
    color: "amber",
    title: "Agronomist",
    location: "Illinois, USA",
    company: "Cargill",
    companyLink: "https://www.cargill.com/",
    postedDate: "1 week ago",
    featured: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              allCategories={allCategories}
              allVacancies={allVacancies}
            />
          }
        />
        <Route
          path="/vacancies"
          element={
            <VacanciesPage
              allCategories={allCategories}
              allVacancies={allVacancies}
            />
          }
        />
        <Route path="/modalwindow" element={<ModalWindow />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
