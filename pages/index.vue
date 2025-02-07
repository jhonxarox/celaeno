<template>
    <div>
        <h1 class="text-2xl font-semibold">Welcome back, Administrator</h1>

        <!-- Metrics -->
        <div class="grid grid-cols-3 gap-4 mt-4">
            <MetricCard title="Revenue in Percentage" value="40% ↑" />
            <MetricCard title="Total Orders" value="400 Orders" />
            <MetricCard title="Pending Customers" value="20 Customers" />
        </div>

        <!-- Search & Table -->
        <div class="mt-6">
            <input v-model="searchQuery" placeholder="Search..." class="p-2 border rounded w-full mb-4" />

            <CompanyTable :companies="filteredCompanies" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useCompanyStore } from '~/stores/companyStore';
import MetricCard from '~/components/MetricCard.vue';
import CompanyTable from '~/components/CompanyTable.vue';

const searchQuery = ref('');
const companyStore = useCompanyStore();

// Fetch company data when the page loads
onMounted(() => {
    companyStore.fetchCompanies();
});

// Filter the companies dynamically
const filteredCompanies = computed(() =>
    companyStore.companies.filter((c) => c.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
);
</script>