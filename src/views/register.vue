// ---------------------------------------
// Copyright 2020
// Created and Designed by Rifqi Ardhian
//
// Authentic Design
// Retro - Old Camera Website
// ---------------------------------------

<template>
    <div class="app">
        <section class="register">
            <div class="container">
                <div class="row flex-auto">
                    <div class="col-md-12">
                        <div class="card register-card">
                            <div class="card-body">
                                <h1 class="register-title">Register.</h1>
                                <form action="" name="" method="" class="login-form mt-4">
                                    <div class="form-group">
                                        <label for="first_name"><b>First Name</b></label>
                                        <input
                                            type="text"
                                            class="form-control register-input"
                                            name="first_name"
                                            id="first_name">
                                    </div>
                                    <div class="form-group">
                                        <label for="last_name"><b>Last Name</b></label>
                                        <input
                                            type="text"
                                            class="form-control register-input"
                                            name="last_name"
                                            id="last_name">
                                    </div>
                                    <div class="form-group">
                                        <label for="username"><b>Username</b></label>
                                        <input
                                            type="text"
                                            class="form-control register-input"
                                            name="username"
                                            id="username">
                                    </div>
                                    <div class="form-group">
                                        <label for="email"><b>Email</b></label>
                                        <input
                                            type="email"
                                            class="form-control register-input"
                                            name="email"
                                            id="email">
                                    </div>
                                    <div class="form-group">
                                        <label for="password"><b>Password</b></label>
                                        <div class="input-group">
                                            <input
                                                type="password"
                                                class="form-control register-input"
                                                name="password"
                                                id="password">
                                            <div class="input-group-append">
                                                <span class="input-group-text bg-transparent">
                                                <span
                                                    class="zmdi zmdi-eye toggle-password">
                                                </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="pass_confirm"><b>Confirm Password</b></label>
                                        <div class="input-group">
                                            <input
                                                type="password"
                                                class="form-control register-input"
                                                name="pass_confirm"
                                                id="pass_confirm">
                                            <div class="input-group-append">
                                                <span class="input-group-text bg-transparent">
                                                <span
                                                    class="zmdi zmdi-eye toggle-password">
                                                </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group text-center">
                                        <button
                                            type="submit"
                                            class="btn btn-register mt-4">REGISTER
                                        </button>
                                    </div>
                                    <div class="text-center">
                                        <a href="/login"
                                            class="login-link text-center mt-4"
                                            style="text-decoration: none; color: #616161">
                                            BACK TO LOGIN
                                        </a>
                                    </div>
                                </form>
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
