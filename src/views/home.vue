// ---------------------------------------
// Copyright 2020
// Created and Designed by Rifqi Ardhian
//
// Authentic Design
// Retro - Old Camera Website
// ---------------------------------------

<template>
    <div class="app">
        <div class="banner">
            <img
                class="d-block img-fluid w-100 img-banner"
                src="../assets/images/banner3.png"
                alt="image slot"
            >
            <div class="text-banner">retro.</div>
        </div>
        <section class="features">
            <div class="container">
                <div class="row flex-auto">
                    <div class="col-md-4 text-center p-4">
                        <i class="zmdi zmdi-camera-party-mode feature-icon zmdi-hc-5x"></i>
                        <h4 class="feature-title p-3">Vintage Camera</h4>
                        <p class="feature-subtitle">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                    <div class="col-md-4 text-center p-4">
                        <i class="zmdi zmdi-camera-roll feature-icon zmdi-hc-5x"></i>
                        <h4 class="feature-title p-3">Best Roll Film</h4>
                        <p class="feature-subtitle">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                    <div class="col-md-4 text-center p-4">
                        <i class="zmdi zmdi-camera-alt feature-icon zmdi-hc-5x"></i>
                        <h4 class="feature-title p-3">Accessories</h4>
                        <p class="feature-subtitle">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="about">
            <div class="container">
                <div class="row flex auto">
                    <div class="col-md-6">
                        <div class="about-content">
                            <h1 class="about-title">Vintage Style</h1>
                            <p class="about-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <button class="btn btn-see-more mb-4">SEE MORE</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="about-photo">
                            <img src="../assets/images/yeye6.jpg" class="img-about img-fluid">
                            <div class="text-image">retro.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="product">
            <div class="container">
                <div class="row flex-auto">
                    <div class="col-md-12">
                        <h1 class="product-title text-center">Latest Products</h1>
                        <b-tabs
                            align="center"
                            no-key-nav
                            class="mt-4"
                            no-nav-style
                            small
                            active-nav-item-class="
                            category-item-active text-secondary font-weight-bold"
                            >
                            <b-tab>
                                <template v-slot:title>
                                    <div class="category-item">All</div>
                                </template>
                                <div class="container-fluid container-product">
                                    <div class="row row-product">
                                        <div class="col-md-4">
                                            <div class="card card-product">
                                                <a href="/p/detail">
                                                <div class="product-img text-center">
                                                    <img
                                                        src="../assets/images/yeye.png"
                                                        class="img-product img-fluid"
                                                    >
                                                </div>
                                                </a>
                                                <div class="card-body text-center">
                                                    <h5 class="card-title card-product-title">
                                                        Leica M6 + Kit
                                                    </h5>
                                                    <p class="card-text card-product-price">
                                                        <b>IDR. 49.999.000</b></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card card-product">
                                                <a href="/p/detail">
                                                <div class="product-img text-center">
                                                    <span class="badge badge-pill badge-product">
                                                        POPULAR</span>
                                                    <img
                                                        src="../assets/images/yeye7.png"
                                                        class="img-product img-fluid"
                                                    >
                                                </div>
                                                </a>
                                                <div class="card-body text-center">
                                                    <h5 class="card-title card-product-title">
                                                        Hasselblad 500cm
                                                    </h5>
                                                    <p class="card-text card-product-price">
                                                        <b>IDR. 47.750.000</b></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card card-product">
                                                <a href="/p/detail">
                                                <div class="product-img text-center">
                                                    <span class="badge badge-pill badge-product">
                                                        POPULAR</span>
                                                    <img
                                                        src="../assets/images/yeye8.png"
                                                        class="img-product img-fluid"
                                                    >
                                                </div>
                                                </a>
                                                <div class="card-body text-center">
                                                    <h5 class="card-title card-product-title">
                                                        Nikon F3 + Kit
                                                    </h5>
                                                    <p class="card-text card-product-price">
                                                        <b>IDR. 4.599.000</b></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-product">
                                        <div class="col-md-4">
                                            <div class="card card-product">
                                                <a href="/p/detail">
                                                <div class="product-img text-center">
                                                    <img
                                                        src="../assets/images/yeye2.png"
                                                        class="img-product img-fluid"
                                                    >
                                                </div>
                                                </a>
                                                <div class="card-body text-center">
                                                    <h5 class="card-title card-product-title">
                                                        canon QL17
                                                    </h5>
                                                    <p class="card-text card-product-price">
                                                        <b>IDR. 1.250.000</b></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card card-product">
                                                <a href="/p/detail">
                                                <div class="product-img text-center">
                                                    <span class="badge badge-pill badge-product">
                                                        POPULAR</span>
                                                    <img
                                                        src="../assets/images/yeye9.png"
                                                        class="img-product img-fluid"
                                                    >
                                                </div>
                                                </a>
                                                <div class="card-body text-center">
                                                    <h5 class="card-title card-product-title">
                                                        Rolleiflex 2,8 GX
                                                    </h5>
                                                    <p class="card-text card-product-price">
                                                        <b>IDR. 37.500.000</b></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab>
                                <template v-slot:title>
                                    <div class="category-item">Camera</div>
                                </template>
                            </b-tab>
                            <b-tab>
                                <template v-slot:title>
                                    <div class="category-item">Roll Film</div>
                                </template>
                            </b-tab>
                            <b-tab>
                                <template v-slot:title>
                                    <div class="category-item">Accessories</div>
                                </template>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
            </div>
        </section>
        <section class="colour-palette">
            <div class="container">
                <div class="row flex-auto">
                    <div class="col-md-12 text-center">
                        <h1>Colour Palettes</h1>
                        <img
                            class="img-fluid img-palette mt-4"
                            src="../assets/images/retro-color-palette.png"
                            alt="image slot"
                        >
                        <p class="about-text mb-5">
                            Calm Monochrome ( #080808, #222222, #616161, #aaaaaa, #ececec )
                        </p>
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
