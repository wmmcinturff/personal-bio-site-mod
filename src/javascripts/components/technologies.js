const techUsed = () => {
  const domString = $('#technologiesPage').html(`
  <h3>Technology Used</h3>
  <ul class="list-group">
    <li class="list-group-item">HTML 5</li>
    <li class="list-group-item">CSS</li>
    <li class="list-group-item">JavaScript</li>
    <li class="list-group-item">jQuery</li>
    <li class="list-group-item">GitHub</li>
    <li class="list-group-item">Firebase</li>
    <li class="list-group-item">Axios</li>
  </ul>`);
  return domString;
};

export default { techUsed };
