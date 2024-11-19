<template>
    <div>
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-content__left">
                    <p>© 2024 - Built with Nuxt.js and love</p>
                    <p>Designed by Mellyssa. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer> 
    </div>
</template>

<script>
</script>

<style>
    .footer {
        margin-top:50px;
        background-color: var(--black);
        color: var(--white);
        padding: 1rem 0;
        text-align: center;
    }

    .footer-content {
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }

    .footer-content__left {
        font-size: 0.8rem;
    }
</style>