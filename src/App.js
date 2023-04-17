import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
// import Testimonial from './pages/Testimonial';
// import Contact from './pages/Contact';

import Navbar from "./components/Navbar";

import Modal from "./components/Modal";
import ProjectContent from "./components/ProjectContent";

export default function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    setExperience([
      {
        year: "2023 - Present",
        position: "Full Stack Developer",
        company: "Wizard Code",
        description:
          "Maintaning the company's websites.",
      },
      {
        year: "2022 - Present",
        position: "Full Stack Web Developer",
        company: "Freelance",
        description:
          `
        <ul class="list-disc pl-5 font-semibold">
          <li>Developed/debugged websites for customers from the US.</li>
          <li>Helped/tutored students about programming/database structure from the US.</li>
        </ul>`,
      },
      {
        year: "2019 - 2023",
        position: "Web Application Developer II",
        company: "Caspio Representative Philippines",
        description:
          "Developed numerous web applications for the company's clients across the world using Caspio's platform with the support of wed development technologies.",
      },
      {
        year: "2017 - 2019",
        position: "Full-Stack Web Developer",
        company: "Shinra Software Solutions Inc.",
        description: `
        <ul class="list-disc pl-5 font-semibold">
          <li>Developed 2 projects for the company's client.</li>
          <li>Debugged and created features for the company's existing projects.</li>
          <li>Took part as a System's Analyst for the company's existing projects.</li>
        </ul>`,
      },
      {
        year: "2016",
        position: "Systems Administrator",
        company: "Maxcor Publishing House Inc.",
        description: `Developed an Inventory Backend System for the company.`,
      },
    ]);

    setEducation([
      {
        year: "2013 - 2015",
        course: "Bachelor of Science in Information Technology",
        school: "Informatics Diliman",
      },
      {
        year: "2011 - 2013",
        course: "Advanced Diploma in Information Technology",
        school: "Informatics Valenzuela",
      },
    ]);

    setSkills([
      {
        skill: "Web Design",
        rate: 50,
      },
      {
        skill: "Database Design",
        rate: 70,
      },
      {
        skill: "C#",
        rate: 65,
      },
      {
        skill: "ASP.NET/.NET Core",
        rate: 65,
      },
      {
        skill: "SQL",
        rate: 70,
      },
      {
        skill: "HTML/CSS",
        rate: 90,
      },
      {
        skill: "Bootstrap",
        rate: 90,
      },
      {
        skill: "Tailwind CSS",
        rate: 40,
      },
      {
        skill: "Sass",
        rate: 10,
      },
      {
        skill: "Javascript",
        rate: 85,
      },
      {
        skill: "jQuery",
        rate: 80,
      },
      {
        skill: "React JS",
        rate: 65,
      },
      {
        skill: "PHP",
        rate: 30,
      },
      {
        skill: "Laravel",
        rate: 50,
      },
      {
        skill: "Zapier",
        rate: 20,
      },
      {
        skill: "Caspio",
        rate: 95,
      },
    ]);

    setProjects([
      {
        id: 1,
        name: "Peoplelink Backend System",
        client: "Peoplelink",
        technologies: "C#, ASP.NET, HTML/CSS, Bootstrap, Javascript, jQuery",
        description: `<p class="mb-3">A backend web application that is capable of the following:</p>
        <ul class="list-disc pl-5">
        <li>Inventory Management</li>
        <li>Discounts Management</li>
        <li>Sales Invoice</li>
        <li>Delivery Order</li>
        <li>CRM</li>
        <li>Mobile App User Management</li>
        <li>Mobile App Content Management</li>
        <li>Mobile App Subscription Management</li>
        <li>Mobile App Navigation Management</li>
        <li>Reports</li>
        <li>Updating Terms and Conditions</li>
        </ul>`,
        isPublicView: false,
        url: "",
        images: [
          {
            fileName: "pl-dashboard.png",
          },
          {
            fileName: "pl-packages.png",
          },
          {
            fileName: "pl-products.png",
          },
          {
            fileName: "pl-sales-order.png",
          },
          {
            fileName: "pl-subscriptions.png",
          },
          {
            fileName: "pl-users.png",
          },
        ],
      },
      {
        id: 2,
        name: "Magsaysay World",
        client: "Magsaysay",
        technologies: "C#, ASP.NET, HTML/CSS, Bootstrap, Javascript, jQuery",
        description: `<p class="mb-3">A backend web application that is capable of the following:</p>
        <ul class="list-disc pl-5">
        <li>Mobile App User Management</li>
        <li>Mobile App Send Notifications</li>
        <li>Mobile App Content Management</li>
        <li>Mobile App Navigation Management</li>
        <li>Updating Privacy Policy</li>
        <li>Updating Terms and Conditions</li>
        </ul>`,
        isPublicView: false,
        url: "",
        images: [
          {
            fileName: "mw-dashboard.png",
          },
          {
            fileName: "mw-login.png",
          },
          {
            fileName: "mw-mobile-news.png",
          },
          {
            fileName: "mw-mobile-notifications.png",
          },
          {
            fileName: "mw-news.png",
          },
          {
            fileName: "mw-users.png",
          },
        ],
      },
      {
        id: 3,
        name: "HighSeasMarket",
        client: "HighSeasMarket",
        technologies: "PHP, Laravel, React JS, HTML/CSS, Bootstrap, Javascript",
        description: `An e-commerce web site that is capable of letting buyers request for a product from a seller, then proceeds with the negotiation via a chat system. After settling, the seller will generate a sales invoice and let the buyer proceed with the payment. The web site also has a dashboard that let sellers manage their products and see all the total pending requests.`,
        isPublicView: true,
        url: "www.highseasmarket.com",
        images: [
          {
            fileName: "hsm-public.png",
          },
        ],
      },
      {
        id: 4,
        name: "Cereza",
        client: "Cereza",
        technologies: "React JS, HTML/CSS, Bootstrap, Javascript",
        description: `An e-commerce website with shopping cart and payment capabilities.`,
        isPublicView: true,
        url: "www.cereza.store",
        images: [
          {
            fileName: "cereza-public.png",
          },
        ],
      },
    ]);

    setServices([
      {
        id: 1,
        name: "Frontend Development",
        icon: "fas fa-desktop",
        description:
          "HTML/CSS, Javascript, jQuery, Bootstrap, Tailwind CSS, SASS, React JS",
      },
      {
        id: 2,
        name: "Backend Development",
        icon: "fas fa-server",
        description: "C#, .NET Framework, PHP, Laravel",
      },
      {
        id: 3,
        name: "Mobile App Development",
        icon: "fas fa-mobile-alt",
        description: "React Native",
      },
      {
        id: 4,
        name: "Database Design",
        icon: "fas fa-database",
        description: "MySQL, MS SQL Server",
      },
      {
        id: 5,
        name: "Others",
        icon: "fas fa-laptop-code",
        description: "Caspio, Zapier",
      },
    ]);
  }, []);

  const handleToggle = (e) => {
    setToggleMenu((prev) => (prev = !prev));
  };

  const toggleModal = (projectId) => {
    setShowModal((prev) => (prev = !prev));

    let selectedProject = projects.filter((item) => {
      if (item.id !== projectId) {
        return false;
      }

      return true;
    })[0];

    setModalContent(<ProjectContent project={selectedProject} />);
  };

  const handleCloseModal = (e) => {
    setShowModal((prev) => (prev = !prev));
  };

  return (
    <div className="App relative">
      <div
        className="wrapper w-auto h-screen inherit"
        style={{
          backgroundImage: `url(./assets/images/bg.jpg)`,
          overflow: showModal ? "hidden" : "auto",
          ...wrapperStyles,
        }}>
        <div className="flex bg-zinc-900/[85%] flex-col lg:flex-row">
          <div className="w-full lg:w-[260px] fixed z-[48]">
            <Navbar showMenu={toggleMenu} onHandleToggle={handleToggle} />
          </div>
          <div className="w-full lg:w-[calc(100%-260px)] lg:ml-[260px]">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route
                path="/services"
                element={<Services services={services} />}></Route>
              <Route
                path="/resume"
                element={
                  <Resume
                    experience={experience}
                    education={education}
                    skills={skills}
                  />
                }></Route>
              <Route
                path="/works"
                element={
                  <Works
                    projects={projects}
                    onHandleToggleModal={toggleModal}
                  />
                }></Route>
              {/* <Route path="/testimonial" element={<Testimonial />}></Route>
              <Route path="/contact" element={<Contact />}></Route> */}
            </Routes>
          </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        onHandleCloseModal={handleCloseModal}
        body={modalContent}
      />
    </div>
  );
}

const wrapperStyles = {
  backgroundSize: "cover",
};
