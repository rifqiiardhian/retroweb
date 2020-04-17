// ---------------------------------------
// Copyright 2020
// Created and Designed by Rifqi Ardhian
//
// Authentic Design
// Retro - Old Camera Website
// ---------------------------------------

<template>
    <div class="app">
        <section class="login">
            <div class="container">
                <div class="row flex-auto">
                    <div class="col-md-12">
                        <div class="card login-card">
                            <div class="card-body">
                                <h1 class="login-title">Login.</h1>
                                <form action="" name="" method="" class="login-form mt-4">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control login-input"
                                            name="username"
                                            id="username"
                                            placeholder="Username">
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input
                                                type="password"
                                                class="form-control login-input"
                                                name="password"
                                                id="password"
                                                placeholder="Password">
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
                                        <button
                                            type="submit"
                                            class="btn btn-login mt-4">LOGIN
                                        </button>
                                    </div>
                                    Dont have any account ?
                                    <a href="/register"
                                            class="register-link mt-4"
                                            style="text-decoration: none; color: #616161">
                                            Register
                                        </a>
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
