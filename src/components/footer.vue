<template>
    <div class="foot-container">
        <div class="footer-items">
            <div class="foot-item-one">
                <h1 class="footer-logo">ICTDU Space</h1><br>
                <p>Book. Meet. Repeat. Your Easy Online Meeting Room Solution!.</p>
                <p>Come and taste our remarkable food.</p>
            </div>

            <div class="foot-item-two">
                <h3>CONTACT US</h3><br>
                <p>(+63) 09053941250</p><br>
                <p>info@uic.edu.ph</p>
            </div>

            <div class="foot-item-three">
                <h3>OPEN HOURS</h3><br>
                <h2>Morning</h2>
                <p>8:00 AM to 12:00 PM</p><br>
                <h2>Afternoon</h2>
                <p>1:00 PM to 5:00 PM</p>
            </div>

            <div class="foot-item-four">
                <h3>MORE INFO</h3><br>
                <p>Get in touch</p>
                <p>Privacy policy</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.foot-container{
padding: 20px 15%;
background-color: #FD9DA1;
color: white;
}
.footer-items{
display: flex;
justify-content: space-between;
padding: 20px 0;
}
.foot-item-one{
width: 30%;
}
.foot-item-two{
width: 20%;    
}
.foot-item-three{
width: 20%;
}
.foot-item-four{
width: 20%;
}
.footer-logo{
font-size: 30px;
color: #901430;
font-weight: 900;
}
.footer-text p{
color: #000;
font-size: 14px;
}
.top i{
padding: 10px;
border-radius: 8px;
font-size: 15px;
color: var(--text-color);
background: var(--main-color);
}
.footer-icons i{
height: 45px;
width: 45px;
background: var(--main-color);
color: #000;
font-size: 22px;
display: inline-flex;
align-items: center;
justify-content: center;
border-radius: 8px;
margin-right: 15px;
transition: all .45s ease;
} 
.foot-container p{
color: #000;
}
.foot-container h2{
color: #000;
font-size: 20px;
font-weight: bold;
}
.foot-container h3{
font-size: 25px;
color: #000;
font-weight: bold;
}
span{
color: pink;
}</style>