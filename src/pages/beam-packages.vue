<template>
  <div class="container">
    <div class="card mb-3 h-100">
      <div class="row g-0 h-100 flex-grow-1">
        <div class="col-md-4 texture order-md-1 order-1" style="min-height: 150px;">
          <!-- Left side content if needed -->
        </div>
        <div class="col-md-8 d-flex flex-column order-md-2 order-2">
          <div class="card-body flex-grow-1 px-5 py-5">
            <h3 class="card-title mb-3">BEAM Packages</h3>
            <p class="card-text">
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
          </div>
          <div class="card-footer">
            <p class="mb-0">Curious about it? Check out the <a href="https://github.com/beam-packages">GitHub organization</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>

  <style scoped>
  .texture {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 18c0-1.105.887-2 1.998-2 1.104 0 2-.895 2.002-1.994V14v6h-4v-2zM0 13.998C0 12.895.888 12 2 12c1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2 .888 2 2v2H0v-6.002zm16 4.004A1.994 1.994 0 0 1 14 20c-1.105 0-2-.887-2-1.998v-4.004A1.994 1.994 0 0 0 10 12c-1.105 0-2-.888-2-2 0-1.105-.888-2-2-2-1.105 0-2-.887-2-1.998V1.998A1.994 1.994 0 0 0 2 0a2 2 0 0 0-2 2V0h8v2c0 1.105.888 2 2 2 1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2-.888 2-2 0-1.105.888-2 2-2 1.105 0 2-.888 2-2V0h4v6.002A1.994 1.994 0 0 1 22 8c-1.105 0-2 .888-2 2 0 1.105-.888 2-2 2-1.105 0-2 .887-2 1.998v4.004z' fill='%23000000' fill-opacity='0.66' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
  .card {
    min-height: 500px;
  }
  </style>
