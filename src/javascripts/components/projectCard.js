import projectData from '..helpers/projectData';

const createProjectCards = () => {
  let domString = '';
  for (let i = 0; i < projectData.length; i+) {
    if (projectData[i].available === true) {
      domString += `<div class="card my-2" style="width: 18rem;" id="${i}">  
              <p class="title">${projectData[i].title}</p>
              <img src=${projectData[i].url} class="card-img-top" 
              alt="This is an image of ${projectData[i].screenshot}">
             <div class="card-body">
             <p class="description">${projectData[i].description}</p>
             <p class="description">${projectData[i].technologiesUsed}</p>
             <p class="available">${projectData[i].available}</p>
             <img src=${projectData[i].githubUrl} class="card-img-bottom" alt="This is an image of ${projectData[i].githubUrl}">
             </div>
             </div>`;
    }
  }
};

export default { createProjectCards };