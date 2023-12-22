
<template>
    <div class="home-text">
        
        <h2>Welcome To</h2>
        <h1><span>ICTDU Space</span></h1>
        <h3> Martin Rey Tolang </h3>
        <a href="About.html" class="visit-btn">About Us</a>

        <div class="contact-icons">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-twitter' ></i></a>
            <a href="#"><i class='bx bxl-instagram-alt' ></i></a>
        </div>
    </div>
</template>

<style scoped>
*{
padding: 0;
margin: 0;
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
text-decoration: none;
list-style: none;
scroll-behavior: smooth;
}
:root{
--bg-color: #2a2a2a;
--second-bg-color: #202020;
--text-color: #fffcfc;
--second-color: #ffffff;
--main-color: #ffa31a;
--big-font: 5rem;
--h2-font: 3rem;
--p-font: 1.1rem;
}
.visit-btn{
display: inline-block;
text-decoration: none;
color: #fff;
border: 1px solid #fff;
padding: 12px 34px;
font-size: 30px;
background: transparent;
position: relative;
cursor: pointer;
margin-bottom: 30px;
}
.visit-btn:hover{
border: 1px solid var(--text-color);
background: #F489A6;
transition: 1s;
}

span{
color: pink;
}

.slide{
margin-bottom: 20px;
}
.home-text h1{
font-size: var(--big-font);
font-weight: 700;
color: var(--text-color);
line-height: 1.1;
margin: 0 0 8px;
}
.home-text h2{
font-size: 7 rem;
color: #fff;
margin: 0 0 20px;
line-height: 1.1;
font-weight: 700;
}
.home-text h3{
color: var(--text-color);
margin: 0 0 35px;
font-size: 3rem;
font-weight: 700;
line-height: 1.1;
}
.home-text p{
color: var(--text-color);
font-size: var(--p-font);
line-height: 1.8;
margin-bottom: 40px;
}
</style>
