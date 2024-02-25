
<template>
    <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">      
                        <router-link  class="nav-link active" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Desafios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Quem somos</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.navbar{
    padding-bottom: 20px;
}
.nav-link {
  color: #708028;
}

.active {
  color: #d0d058 !important;
  border-bottom: 2px solid #d0d058;
}

.nav-link:hover {
  color: #708028;
}
</style>