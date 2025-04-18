<template>
<div class="container">
  <div class="text-center text-white mb-5">
    <p class="fs-2">Community of Erlang developers.</p>
    <p class="fs-4 w-75 mx-auto">
A group of highly-trained Erlang monkey coders who aims to bring quality tools
to the community.
    </p>
  </div>
  <div class="row">
    <div class="col-4">
<!-- library collection card -->
<div
  class="card text-center mb-3"
  style="height: 500px;"
>
  <div class="card-body d-flex flex-column justify-content-between">
    <h5 class="card-title">Packages Collection</h5>
    <p class="card-text text-start">
A collection of high-quality Erlang libraries and applications for BEAM-based
projects.
<br><br>
Just a curated list of libraries and applications that are well-tested,
well-documented, and (should) have a good reputation in the BEAM community.
<br><br>
They're installable via Spark, the BEAM package manager, but are also fully
compatible with rebar3 and erlang.mk.
    </p>
    <div>
      <router-link to="/packages-collection" class="btn btn-primary me-2">Browse Collection</router-link>
      <a href="https://github.com/orgs/erlangsters/repositories" class="btn btn-outline-primary">Github Repositories</a>
    </div>
  </div>
</div>
    </div>
    <div class="col-4">
<!-- otpless erlang card -->
<div
  class="card text-center mb-3"
  style="height: 500px;"
>
  <div class="card-body d-flex flex-column justify-content-between">
    <h5 class="card-title">OTPless Erlang</h5>
    <p class="card-text text-start">
A streamlined Erlang distribution designed to deliver the core of Erlang/OTP -
the Erlang runtime system, also known as the BEAM.
<br><br>
Unlike Erlang/OTP, this distribution does not come bundled with the OTP
framework. Instead, it's distributed with Spark, the BEAM package manager that
allows you to install the bits of the OTP framework your application actually
needs.
<br><br>
By decluttering Erang/OTP, we increase modularity which allows better build on
top of it, and we reduce the attack surface of the runtime system.
    </p>
    <div>
      <router-link to="/otpless-erlang" class="btn btn-primary me-2">Learn More</router-link>
      <a href="https://otpless-erlang.org" class="btn btn-outline-primary">Go Website</a>
    </div>
  </div>
</div>
    </div>
    <div class="col-4">
<!-- beam package registry card -->
<div
  class="card text-center mb-3"
  style="height: 500px;"
>
  <div class="card-body d-flex flex-column justify-content-between">
    <h5 class="card-title">BEAM Packages</h5>
    <p class="card-text text-start">
Heavily inspired by Node.js and npm, the BEAM Package Registry is a public
registry of BEAM packages.
<br><br>
It defines the BEAM package format and comes with a BEAM package manager, Spark,
allowing you to work exactly like you would in JavaScript.
<br><br>
At the price of breaking compatibility, we leverage a well-known and widely used
packaging system, which provides not only a familiar experience to developers
but also opens door to executing BEAM-based scripts trivially.
    </p>
    <div>
      <router-link to="/beam-packages" class="btn btn-primary me-2">Learn More</router-link>
      <a href="https://beam-packages.org" class="btn btn-outline-primary">Go Website</a>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
</template>