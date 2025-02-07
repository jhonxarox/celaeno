<template>
    <div class="w-64 bg-gray-900 text-white h-screen p-5">
        <h2 class="text-xl font-semibold">Visa Indonesia</h2>
        <ul class="mt-6 space-y-4">
            <li v-for="item in menuItems" :key="item.name">
                <NuxtLink :to="item.link" class="flex items-center gap-2 p-2 hover:bg-gray-800 rounded">
                    <span>{{ item.icon }}</span>
                    <span>{{ item.name }}</span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const menuItems = [
    { name: 'Dashboard', link: '/', icon: '🏠' },
    { name: 'Service', link: '/service', icon: '📦' },
    { name: 'Order', link: '/order', icon: '🛒' },
    { name: 'Customer', link: '/customer', icon: '👤' },
    { name: 'Promo Code', link: '/promo', icon: '🎟' },
    { name: 'Admin User', link: '/admin', icon: '👨‍💻' },
];
</script>