<template>
<div class="container" data-aos="fade-up" data-aos-delay="100">
  <div class="row align-items-xl-center gy-5">

    <div class="col-xl-6">
      <div class="row gy-4 icon-boxes">

        <div class="col-md-6 first-column">
          <div class="icon-box">
            <img src="https://placeholder.pics/svg/150" alt="Person A" class="member-photo rounded-circle mb-3">
            <h5>Jonathan De Wachter</h5>
            <p class="member-description">
              Founder of the Erlangsters community.
            </p>
            <div class="social-links">
              <a href="https://github.com/person-a" target="_blank" class="social-link">
                <i class="bi bi-github"></i> GitHub
              </a>
              <a href="https://person-a.com" target="_blank" class="social-link">
                <i class="bi bi-globe"></i> Website
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-6 second-column">
          <div class="icon-box">
            <img src="https://placeholder.pics/svg/150" alt="Person B" class="member-photo rounded-circle mb-3" style="width: 60px; height: 60px; object-fit: cover;">
            <h5>Mercedes Sayson</h5>
            <p class="member-description">
              Full-time mom.
            </p>
            <div class="social-links">
              <a href="https://github.com/person-b" target="_blank" class="social-link">
                <i class="bi bi-github"></i> GitHub
              </a>
              <a href="https://person-b.com" target="_blank" class="social-link">
                <i class="bi bi-globe"></i> Website
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-6 first-column">
          <div class="icon-box">
            <img src="https://placeholder.pics/svg/150" alt="Person C" class="member-photo rounded-circle mb-3" style="width: 60px; height: 60px; object-fit: cover;">
            <h5>Chantal Defoort</h5>
            <p class="member-description">
              Author of several technical articles on functional programming.
            </p>
            <div class="social-links">
              <a href="https://github.com/person-c" target="_blank" class="social-link">
                <i class="bi bi-github"></i> GitHub
              </a>
              <a href="https://person-c.com" target="_blank" class="social-link">
                <i class="bi bi-globe"></i> Website
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-6 second-column">
          <div class="icon-box">
            <div class="placeholder-circle">
              <i class="bi bi-person-plus"></i>
            </div>
            <h4>You ?</h4>
            <p class="my-4 member-description">
              If you are interested in what we do, we would love to have you on board!
            </p>
          </div>
        </div>

      </div>
    </div>
    <div class="col-xl-1">
    </div>
    <div class="col-xl-5 content">
      <h3>We're the members of the Erlangsters community</h3>
      <p>If our work resonates with you and you'd like to be part of the team, contact us!</p>
    </div>
  </div>
</div>
</template>

<style scoped>
.icon-box {
  text-align: center;
  padding: 30px 25px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.member-photo {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 3px solid #4a6cf7;
  padding: 3px;
}

.social-links {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 15px;
}

.social-link {
  color: #4a6cf7;
  text-decoration: none;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;
  background: rgba(74, 108, 247, 0.1);
}

.social-link:hover {
  background: rgba(74, 108, 247, 0.2);
  color: #4a6cf7;
}

.member-description {
  margin: 12px 0;
  font-size: 0.9rem;
  color: #666;
}

.placeholder-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  background: #4a6cf7;
  color: white;
}

.placeholder-circle i {
  font-size: 32px;
}

.join-link {
  background: #000000;
  color: white !important;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.join-link:hover {
  background: #3a5bd9;
  transform: scale(1.05);
}

.first-column {
  margin-top: -20px;
}

.second-column {
  margin-top: 20px;
}
</style>
