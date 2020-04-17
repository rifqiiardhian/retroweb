// ---------------------------------------
// Copyright 2020
// Created and Designed by Rifqi Ardhian
//
// Authentic Design
// Retro - Old Camera Website
// ---------------------------------------

<template>
    <div class="app">
        <section class="detail_product">
            <div class="container">
                <div class="row flex-auto">
                    <div class="col-md-6">
                        <div class="card card-product-detail">
                            <div class="product-detail-img text-center">
                                <span class="badge badge-pill badge-product-detail">
                                    POPULAR</span>
                                <img
                                    src="../assets/images/yeye7.png"
                                    class="img-product-detail img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h3 class="product-title">Hasselblad 500cm</h3>
                        <h5>IDR 47.750.000</h5>
                        <span class="fa fa-star star-checked"></span>
                        <span class="fa fa-star star-checked"></span>
                        <span class="fa fa-star star-checked"></span>
                        <span class="fa fa-star star-checked"></span>
                        <span class="fa fa-star"></span>
                        <p class="about-text text-justify mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button class="btn btn-add-cart mt-5">ADD TO CART</button>
                    </div>
                </div>
                <div class="row flex-auto">
                    <div class="col-md-12 mt-5">
                        <h1 class="product-title text-center mt-5">Related Products</h1>
                    </div>
                </div>
                <div class="row row-product">
                    <div class="col-md-4">
                        <div class="card card-product">
                            <div class="product-img text-center">
                                <img
                                    src="../assets/images/yeye.png"
                                    class="img-product img-fluid"
                                >
                            </div>
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
                            <div class="product-img text-center">
                                <span class="badge badge-pill badge-product">
                                    POPULAR</span>
                                <img
                                    src="../assets/images/yeye7.png"
                                    class="img-product img-fluid"
                                >
                            </div>
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
                            <div class="product-img text-center">
                                <span class="badge badge-pill badge-product">
                                    POPULAR</span>
                                <img
                                    src="../assets/images/yeye8.png"
                                        class="img-product img-fluid"
                                    >
                            </div>
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
