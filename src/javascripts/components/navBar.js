const renderNavbar = () => {
  const domString = $('#navbarContainer').html(`
      <div class="fixed-top">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-link" href="#" id='Bio'>Bio</a>
          <a class="nav-link" href="#" id='Technologies'>Technologies</a>
          <a class="nav-link" href="#" id='Projects'>Projects</a>
        </div>
      </div>
    </nav>`);
  return domString;
};

export default { renderNavbar };
