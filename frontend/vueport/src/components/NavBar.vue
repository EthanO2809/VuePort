<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid navbarr">
          <div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex">
          <div class="log">
            <li class="nav-item">
              <router-link to="/Register">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Login">Login</router-link>
            </li>
          </div>
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">AboutUs</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">ContactUs</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/profile">Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/checkout">Check Out</router-link>
          </li>
          <li class="nav-item">
          <button>Logout</button>
          </li>
        </ul>
      </div>
      <a class="nav-link text-white" href="/">ShopUs</a>
      <router-link to="/cart"
        ><img
          src="https://i.postimg.cc/T16mtZ7N/pngwing-com-29.png"
          alt=""
          class="img-02 img-fluid"
      /></router-link>
      </div>
  </nav>
</template>

<script>
export default {
  
};
</script>

<style scoped>
button {
  font-weight: 600;
  background: #e1e1e100;
  color: white;
  border: #e1e1e100;
}
.log{
  display: flex;
  
}
.img-01 {
  width: 7.4rem;
  height: 7rem;
}

a {
  text-decoration: none !important;
  color: white !important;
}

.navbarr {
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0);
  position: relative;
  font-size: 1rem;
  margin-top: 0px;
  padding-top: 0px;
  font-weight: 700;
  width: 100%;
  opacity: 100% !important;
  box-shadow: none !important;
}

.flex {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

li {
  padding-right: 1.2rem;
}

.img-02 {
  width: 3rem;
  height: 3.4rem;
}

.dd {
  margin-right: 2rem;
}

.nav-item {
  color: #e1e1e1;
  font-family: inherit;
  font-size: 1.2vw;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
}

.nav-item:focus,
.nav-item:hover {
  color: #fff;
}

.nav-item:focus:after,
.nav-item:hover:after {
  width: 0%;
  left: 0%;
}

.nav-item:after {
  content: "";
  pointer-events: none;
  bottom: 0px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}

.nav-link {
  position: relative;
  right: 0%;
  padding-right: 0rem;
  font-size: 1.2vw
}
@media (width < 701px) {
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar-nav {
    flex-direction: row;
    justify-content: space-between;
  }

  .nav-item {
    padding: 0.5rem ; 
    font-size: .6rem;
  }

  .nav-link {
    font-size: .6rem; 
  }

  .img-02 {
    margin-top: 1rem; 
    width: 1.4rem;
    height: 1.4rem;
  }

  .img-01 {
    width: 2.8rem;
    height: 2.8rem;
    padding: 0
  }
}

@media (max-width: 300px) {
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar-nav {
    flex-direction: row;
    justify-content: space-between;
  }

  .nav-item {
    padding: 0.5rem ; 
    font-size: .4rem;
  }

  .nav-link {
    font-size: .4rem; 
  }

  .img-02 {
    margin-top: 1rem; 
    width: 1.4rem;
    height: 1.4rem;
  }

  .img-01 {
    width: 2.8rem;
    height: 2.8rem;
    padding: 0
  }

@import url("https://fonts.cdnfonts.com/css/khula");
}
</style>