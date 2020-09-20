const projectCard = (array) => {
  $('#myProjects').html('');
  array.forEach((item) => {
    $('#myProjects').append(`<div class='card my-2' style='width: 18rem;'>  
      <p class='title'>${item.title}</p>
      <img src=${item.url} class='card-img-top' 
                alt='This is an image of ${item.screenshot}'>
               <img class='card-body'>
               <p class='description'>${item.description}</p>
               <p class='description'>${item.technologiesUsed}</p>
               <p class='available'>${item.available}</p>
              </div>`);
  });
};
export default { projectCard };
