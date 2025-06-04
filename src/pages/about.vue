<template>
<div class="container">
  <div class="text-center text-white mb-5">
    <img src="@/assets/image.svg" height="250" alt="Erlangsters logo"/>
    <p class="fs-2">Community of Erlang developers.</p>
    <p class="fs-4 w-75 mx-auto">
A group of highly-trained Erlang monkey coders who aims to bring quality tools
to the community.
    </p>
  </div>
  <div class="row gx-5">
    <div class="col-4">
<!-- library collection card -->
<div
  class="card text-center mb-3"
  style="height: 350px;"
>
  <div class="card-body d-flex flex-column justify-content-between py-5 px-5">
    <h4 class="card-title">Packages Collection</h4>
    <p class="card-text text-start">
A collection of high-quality Erlang libraries and applications for BEAM-based
projects.
    </p>
    <div>
      <router-link to="/packages-collection" class="btn btn-primary me-2">Browse It</router-link>
      <a href="https://github.com/orgs/erlangsters/repositories" class="btn btn-outline-primary">Visit Github</a>
    </div>
  </div>
</div>
    </div>
    <div class="col-4">
<!-- otpless erlang card -->
<div
  class="card text-center mb-3"
  style="height: 350px;"
>
  <div class="card-body d-flex flex-column justify-content-between py-5 px-5">
    <h4 class="card-title">OTPless Erlang*</h4>
    <p class="card-text text-start">
A streamlined Erlang distribution designed to deliver the core of Erlang/OTP -
the Erlang runtime system, also known as the BEAM.
    </p>
    <div>
      <router-link to="/otpless-erlang" class="btn btn-primary me-2">Learn More</router-link>
      <a href="https://otpless-erlang.org" class="btn btn-outline-primary">Go Website</a>
    </div>
    <div>*In development</div>
  </div>
</div>
    </div>
    <div class="col-4">
<!-- beam package registry card -->
<div
  class="card text-center mb-3"
  style="height: 350px;"
>
  <div class="card-body d-flex flex-column justify-content-between py-5 px-5">
    <h4 class="card-title">BEAM Packages*</h4>
    <p class="card-text text-start">
Heavily inspired by Node.js and npm, the BEAM Package Registry is a public
registry of BEAM packages.
    </p>
    <div>
      <router-link to="/beam-packages" class="btn btn-primary me-2">Learn More</router-link>
      <a href="https://beam-packages.org" class="btn btn-outline-primary">Go Website</a>
    </div>
    <div>*In development</div>
  </div>
</div>
    </div>
  </div>
</div>
</template>