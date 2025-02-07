<template>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
        <Sidebar />

        <!-- Main Content -->
        <div class="flex-1 p-6">
            <slot />
        </div>
    </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue';
</script>