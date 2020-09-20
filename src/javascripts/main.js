import '../styles/main.scss';
import navbar from './components/navBar';
import projectCard from './components/projectCard';
import projectData from './helpers/data/projectData';
import technologies from './components/technologies';

const init = () => {
  navbar.renderNavbar();
  technologies.techUsed();
  projectCard.projectCard(projectData.projectArray());
};

init();
