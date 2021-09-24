import React from 'react';

function Work () {
    return (
        <div className="work-section">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../../images/broadcastr.png" default className="d-block w-100" alt="broadcastr app" />
    </div>
    <div className="carousel-item">
      <img src="../../images/movie-date.png" default className="d-block w-100" alt="Movie Date app" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
};

export default Work;