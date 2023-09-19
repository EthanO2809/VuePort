<template>
    <div class="footer">
        <div class="container">
    <div class="row justify-content-center">
        <div class="col-sm-4 col-md-3 item">
            <img src="https://i.postimg.cc/g0RxWngQ/14-removebg-preview.png" loading="lazy" alt="logo" class="logo img-fluid">
        </div>
        <div class="col-sm-4 col-md-3 item">
            <h3>Account</h3>
            <br>
            <ul>
                <li><a class="text-white" href="/"><p class="text-white">My Account</p></a></li><br>
                <li><a href="./"><p class="text-white">My Orders</p></a></li><br>
                <li><a href="/"><p class="text-white">Log in || Register</p></a></li>
            </ul>
        </div>
        <div class="col-sm-4 col-md-3 item">
            <h3>What We Offer</h3>
            <br>
            <ul class="text-white">
                <li><a href="/"><p class="text-white">PC / Monitor Range</p></a></li><br>
                <li><a href="#"><p class="text-white">Laptop Range</p></a></li><br>
                <li><a href="#"><p class="text-white">Accessories Range</p></a></li>
            </ul>
        </div>
        <div class="col-sm-4 col-md-3 item">
            <h3>Contact Us</h3>
            <br>
            <ul class="text-white fw-2">
                <li>PC_Wizard@gmail.com
                </li><br>
                <li>Tel.: 021 656 7495</li><br>
                <li>Address: 4376 Lavender Cresc. <br>
                    Cape Town, 7680</li>
            </ul>
        </div>
    </div>
</div>

    </div>
        
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
li{
  font-weight: 500;
}

.footer {
    padding:10px 0;
    background: radial-gradient(64.51% 64.5% at 53.78% 51.32%, #1D0091 0%, #000 100%), radial-gradient(100% 100% at 50% 0%, #4400B2 0%, #000 96.93%), linear-gradient(117deg, rgba(66, 0, 255, 0.20) 35.25%, rgba(0, 0, 0, 0.00) 100.74%), #000;
    opacity: 75%;
    color:black !important;
  }

  .footer-social-icon{
    float: right;
  }
  
  #media{
    margin:5px;
  }

  .footer h3 {
    margin-top:0;
    margin-bottom:12px;
    font-weight:bold;
    font-size:14px;
    color: gold;
  }
  
  .footer ul {
    padding:0;
    list-style:none;
    line-height:1.6;
    font-size:10px;
    margin-bottom:0;
  }
  .logo{
    height: 8rem;
    width: 8rem;
  }

  .item{
    padding: 1rem;
  }
  
  .footer ul a {
    color: black !important;
    text-decoration:none;
    opacity:0.8;
  }
  
  .footer ul a:hover {
    opacity:1;
    color: rgb(255, 255, 255) !important;
  }
  
  @media (max-width: 300px) {
  .footer {
    /* padding: 1rem 0; */
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: row;
    height: 100%;
  }

  .footer h3 {
    font-size: .6rem;
  }

  .footer ul {
    font-size: .4rem;
  }

  .logo {
    height: 4rem;
    width: 4rem;
  }

  .item {
    padding: 0.5rem;
  }
}
</style>