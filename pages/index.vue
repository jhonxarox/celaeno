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
            <!-- Search Bar with Icon -->
            <div class="flex justify-end items-center mb-4">
                <div class="relative">
                    <!-- Search Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <!-- Search Input -->
                    <input v-model="searchQuery" type="text" placeholder="Search..."
                        class="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 outline-none w-64" />
                </div>
            </div>

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
    (companyStore.companies || []).filter((c) =>
        [c.name, c.about, c.description].some((field) =>
            field?.toLowerCase().includes(searchQuery.value?.toLowerCase() || '')
        )
    )
);
</script>