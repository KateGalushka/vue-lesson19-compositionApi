<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
         <nav>
            <router-link to="/">Home</router-link> |
				<router-link :to="{ name: 'friends' }">Друзі</router-link> |
            <router-link :to="{ name: 'gifts' }">Подарунки</router-link> |
            <router-link :to="{ name: 'divider' }">Призначення подарунків</router-link> 
         </nav>
    </header>

    <RouterView />
</template>

<style scoped>
header {
    line-height: 1.5;
	 margin-bottom: 3rem;
}

nav {
    display: flex;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
