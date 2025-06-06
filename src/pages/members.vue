<template>
<div class="container py-4">
  <div class="row gy-4">
    <div class="col-12 col-lg-6 text-white order-first order-lg-last">
      <div class="text-center py-4">
        <img src="@/assets/image.svg" class="img-fluid mb-4" style="max-height: 200px;" alt="Erlangsters logo"/>
        <h4>We're the members of the Erlangsters community</h4>
        <p>If our work resonates with you and you'd like to be part of the team, contact us!</p>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3 order-1 order-lg-first">
      <!-- member 1 -->
      <div class="card h-100" style="min-height: 400px;">
        <img
          src="https://avatars.githubusercontent.com/u/778121?v=4"
          class="card-img-top"
          alt="Jonathan De Wachter"
          style="height: 180px; object-fit: cover;"
        >
        <div class="card-body">
          <h5 class="card-title">Jonathan De Wachter</h5>
          <p class="card-text fst-italic">
            Just a monkey coder monkeying around with a vision.
          </p>
        </div>
        <div class="card-footer">
          <a href="https://www.intjelic.me/" class="card-link">My Website</a>
          <a href="https://github.com/intjelic" class="card-link">My Github</a>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3 order-2">
      <!-- member 2 -->
      <div class="card h-100" style="min-height: 400px;">
        <div class="card-body d-flex flex-column justify-content-center text-center">
          <h5 class="card-title">You?</h5>
          <p class="card-text">
            Contact us if you'd like to be part of the team.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
