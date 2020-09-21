import '../styles/main.scss';
import navbar from './components/navBar';
import projectCard from './components/projectCard';
import projectData from './helpers/data/projectData';
import technologies from './components/technologies';
import bioInfo from './components/bioInfo';

const init = () => {
  navbar.renderNavbar();
  bioInfo.bioInfo();
  technologies.techUsed();
  projectCard.projectCard(projectData.projectArray());
};

init();
