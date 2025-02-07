<template>
    <table class="w-full bg-white rounded shadow">
        <thead>
            <tr class="bg-gray-200">
                <th class="p-3">Company</th>
                <th class="p-3">License use</th>
                <th class="p-3">Status</th>
                <th class="p-3">Users</th>
                <th class="p-3">About</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="company in companies" :key="company.name" class="border-b">
                <td class="p-3">{{ company.name }}</td>
                <td class="p-3">{{ company.licenseUse }}</td>
                <td class="p-3">
                    <span :class="company.status === 'Customer' ? 'text-green-500' : 'text-red-500'">
                        {{ company.status }}
                    </span>
                </td>
                <td class="p-3">{{ company.users }}</td>
                <td class="p-3">{{ company.about }}</td>

            </tr>
        </tbody>
    </table>
</template>

<script setup>
defineProps({ companies: Array });
</script>