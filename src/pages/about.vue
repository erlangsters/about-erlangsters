<template>
<div class="container">
  <div class="text-center text-white mb-4">
    <img src="@/assets/image.svg" class="img-fluid" style="max-height: 250px;" alt="Erlangsters logo"/>
    <p class="fs-2">Community of Erlang developers.</p>
    <p class="fs-5 w-100 w-md-75 mx-auto px-2">
      A group of highly-trained Erlang monkey coders who aims to bring quality tools
      to the community.
    </p>
  </div>
  <div class="row g-4">
    <div class="col-12 col-md-6 col-lg-4">
      <!-- library collection card -->
      <div class="card text-center h-100">
        <div class="card-body d-flex flex-column justify-content-between py-4 px-3 px-sm-5">
          <h4 class="card-title">Packages Collection</h4>
          <p class="card-text text-start">
            A collection of high-quality Erlang libraries and applications for BEAM-based
            projects.
          </p>
          <div class="d-grid gap-2 d-sm-block">
            <router-link to="/packages-collection" class="btn btn-primary mb-2 mb-sm-0 me-sm-2">Browse It</router-link>
            <a href="https://github.com/orgs/erlangsters/repositories" class="btn btn-outline-primary">Visit Github</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <!-- otpless erlang card -->
      <div class="card text-center h-100">
        <div class="card-body d-flex flex-column justify-content-between py-4 px-3 px-sm-5">
          <h4 class="card-title">OTPless Erlang*</h4>
          <p class="card-text text-start">
            A streamlined Erlang distribution designed to deliver the core of Erlang/OTP -
            the Erlang runtime system, also known as the BEAM.
          </p>
          <div>
            <div class="d-grid gap-2 d-sm-block">
              <router-link to="/otpless-erlang" class="btn btn-primary mb-2 mb-sm-0 me-sm-2">Learn More</router-link>
              <a href="https://otpless-erlang.org" class="btn btn-outline-primary">Go Website</a>
            </div>
            <div class="mt-2">*In development</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <!-- beam package registry card -->
      <div class="card text-center h-100">
        <div class="card-body d-flex flex-column justify-content-between py-4 px-3 px-sm-5">
          <h4 class="card-title">BEAM Packages*</h4>
          <p class="card-text text-start">
            Heavily inspired by Node.js and npm, the BEAM Package Registry is a public
            registry of BEAM packages.
          </p>
          <div>
            <div class="d-grid gap-2 d-sm-block">
              <router-link to="/beam-packages" class="btn btn-primary mb-2 mb-sm-0 me-sm-2">Learn More</router-link>
              <a href="https://beam-packages.org" class="btn btn-outline-primary">Go Website</a>
            </div>
            <div class="mt-2">*In development</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>