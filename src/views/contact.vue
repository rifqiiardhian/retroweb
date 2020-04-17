// ---------------------------------------
// Copyright 2020
// Created and Designed by Rifqi Ardhian
//
// Authentic Design
// Retro - Old Camera Website
// ---------------------------------------

<template>
    <div class="app">
        <div class="banner-retro">
            <img
                class="d-block img-fluid w-100 img-banner-retro"
                src="../assets/images/banner2.png"
                alt="image slot"
            >
            <h1 class="title-retro-page">Contact Us</h1>
        </div>
        <section class="contact">
            <div class="container">
                <div class="row flex-auto">
                    <div class="col-md-8">
                        <form action="" name="" method="">
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control contact-input"
                                    name="first_name"
                                    placeholder="First Name"
                                    id="first_name">
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control contact-input"
                                    name="last_name"
                                    placeholder="Last Name"
                                    id="last_name">
                            </div>
                            <div class="form-group">
                                <input
                                    type="email"
                                    class="form-control contact-input"
                                    name="email"
                                    placeholder="Email"
                                    id="email">
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control contact-input"
                                    name="subject"
                                    placeholder="Subject"
                                    id="subject">
                            </div>
                            <div class="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    style="height: 200px"
                                    class="form-control contact-input">
                                </textarea>
                            </div>
                            <div class="form-group text-center">
                                <button
                                    type="submit"
                                    class="btn btn-register mt-4">SEND MESSAGE
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-contact">
                            <div class="card-body">
                                <h5 class="contact-title"><b>Address</b></h5>
                                <p class="contact-info">
                                    Jalan Bendungan Wlingi No. 30 Malang, Indonesia 65145</p>
                                <h5 class="contact-title"><b>Phone</b></h5>
                                <p class="contact-info">+6281 334 457 150</p>
                                <p class="contact-info">+6281 335 749 650</p>
                                <h5 class="contact-title"><b>Email</b></h5>
                                <p class="contact-info">rifqiardhian@gmail.com</p>
                                <h5 class="contact-title"><b>Website</b></h5>
                                <p class="contact-info">rifqiiardhian.my.id</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row flex-auto row-maps">
                    <div class="col-md-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.375872002614!2d112.60875131435857!3d-7.9600521815280745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78827c5559b751%3A0x9fdfd1429584e18b!2sJl.%20Bend.%20Wlingi%20No.30%2C%20Sumbersari%2C%20Kec.%20Lowokwaru%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065145!5e0!3m2!1sid!2sid!4v1587103064809!5m2!1sid!2sid" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
@import '../css/style.css';
</style>
