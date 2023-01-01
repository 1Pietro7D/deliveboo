<template>

    <header class="container-fluid pt-3">
        <div class="custom-shape-divider-top-1671124742">

            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>

        </div>
        <div class="container-fluid px-5">
            <nav>
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex">
                        <img src="./images/DeliveBoo-Logo.png" alt="logo" class="fl-logo d-flex">
                        <h2 class="title pt-3">DELIVEBOO</h2>
                    </div>
                    <div class="d-flex">
                        <a class="btn btn-danger mx-3" href='/register'>AREA RISERVATA</a>
                    </div>
                </div>
            </nav>
        </div>
    </header>

</template>

<script>

    export default {
    name:'HeaderComponent',
    }

</script>

<style lang="scss" scoped>

@import '../../sass/app.scss';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.fl-logo {
    height: 50px;
    width: 50px;
    z-index: 999;
    animation: wiggle 2s linear infinite;

    @keyframes wiggle {
        0%, 7% {
            transform: rotateZ(0);
        }
        15% {
            transform: rotateZ(-15deg);
        }
        20% {
            transform: rotateZ(10deg);
        }
        25% {
            transform: rotateZ(-10deg);
        }
        30% {
            transform: rotateZ(6deg);
        }
        35% {
            transform: rotateZ(-4deg);
        }
        40%, 100% {
            transform: rotateZ(0);
        }

    }
}

header {
    height: 100px;
    background-color: $fl-dark;
    position: relative;
    z-index: 999;

    & div {
        position: relative;
        z-index: 999;
    }
}

.custom-shape-divider-top-1671124742 {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
        position: relative;
        display: block;
        width: calc(148% + 1.3px);
        height: 100px;
        transform: rotateY(180deg);
    }

    .shape-fill {
        fill: #D0EB99;
    }
}

.title {
    color: $fl-primary;
    font-family: 'Kanit', sans-serif;
    font-weight: 500;
}

</style>
