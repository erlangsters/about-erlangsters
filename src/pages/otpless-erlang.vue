<template>
<div class="container">
  <div class="card mb-3 h-100">
    <div class="row g-0 h-100 flex-grow-1">
      <div class="col-md-4 texture order-md-1 order-1" style="min-height: 150px;">
        <!-- Left side content if needed -->
      </div>
      <div class="col-md-8 d-flex flex-column order-md-2 order-2">
        <div class="card-body flex-grow-1 px-5 py-5">
          <h3 class="card-title mb-3">OTPless Erlang</h3>
          <p class="card-text">
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
        </div>
        <div class="card-footer">
          <p class="mb-0">Curious about it? Check out the <a href="https://github.com/otpless-erlang">GitHub organization</a>.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.texture {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%23000000' fill-opacity='0.66' fill-rule='evenodd'/%3E%3C/svg%3E");
}
.card {
  min-height: 500px;
}
</style>
