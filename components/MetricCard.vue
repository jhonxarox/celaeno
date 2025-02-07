<template>
    <div class="bg-white p-4 rounded shadow">
        <h3 class="text-gray-500">{{ title }}</h3>
        <p class="text-2xl font-semibold">{{ value }}</p>
    </div>
</template>

<script setup>
defineProps({ title: String, value: String });
</script>