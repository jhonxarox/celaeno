<template>
    <table class="w-full bg-white rounded shadow">
        <thead>
            <tr class="bg-gray-200 text-left">
                <!-- Header Checkbox -->
                <th class="p-3">
                    <input type="checkbox" ref="selectAllCheckbox" @change="toggleSelectAll" :checked="isAllSelected"
                        class="w-5 h-5 rounded border-gray-300 focus:ring-0" />
                </th>
                <th class="p-3">Company</th>
                <th class="p-3">License Use</th>
                <th class="p-3">Status</th>
                <th class="p-3">Users</th>
                <th class="p-3">About</th>
                <th class="p-3"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="company in companies" :key="company.id" class="border-b">
                <!-- Row Checkbox -->
                <td class="p-3">
                    <input type="checkbox" v-model="selectedCompanies" :value="company.id"
                        @change="updateHeaderCheckbox" class="w-5 h-5 rounded border-gray-300 focus:ring-0" />
                </td>

                <!-- Left-aligned Company Column with Logo + Name -->
                <td class="p-3 flex items-center space-x-3">
                    <img :src="company.imageUrl" :alt="company.name" class="w-12 h-12 rounded-full shadow" />
                    <span class="font-medium">{{ company.name }}</span>
                </td>

                <!-- License Use with Progress Bar -->
                <td class="p-3">
                    <div class="relative w-40 h-3 bg-gray-300 rounded">
                        <div class="absolute top-0 left-0 h-full bg-gray-900 rounded"
                            :style="{ width: company.licenseUse + '%' }"></div>
                    </div>
                </td>

                <!-- Status Badge -->
                <td class="p-3">
                    <span class="px-3 py-1 text-sm font-medium rounded-full" :class="{
                        'bg-green-100 text-green-700': company.status === 'customer',
                        'bg-gray-200 text-gray-700': company.status === 'churned'
                    }">
                        {{ company.status.charAt(0).toUpperCase() + company.status.slice(1) }}
                    </span>
                </td>

                <!-- Users Section -->
                <td class="p-3">
                    <div class="flex items-center">
                        <div v-for="(user, index) in company.userImages.slice(0, 5)" :key="index" class="-ml-2">
                            <img :src="user" class="w-8 h-8 rounded-full border-2 border-white shadow" />
                        </div>

                        <!-- Remaining User Count -->
                        <div v-if="company.users > 5"
                            class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-xs font-medium border-2 border-white shadow">
                            +{{ company.users - 5 }}
                        </div>
                    </div>
                </td>

                <!-- About Section (Two-Line Format) -->
                <td class="p-3">
                    <p class="font-medium text-gray-800">{{ company.about }}</p>
                    <p class="text-gray-400 text-sm">{{ company.description }}</p>
                </td>

                <!-- Actions Column with Edit & Delete Icons -->
                <td class="p-3 text-right flex justify-end space-x-4">
                    <!-- Edit Button -->
                    <button @click="editCompany(company)" class="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>

                    <!-- Delete Button -->
                    <button @click="deleteCompany(company.id)" class="text-gray-500 hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

// **✅ Fix: Use Props for Companies**
const props = defineProps({ companies: Array });

const selectedCompanies = ref([]);
const selectAllCheckbox = ref(null);

// Computed state for Select All Checkbox
const isAllSelected = ref(false);

const toggleSelectAll = () => {
    if (isAllSelected.value) {
        selectedCompanies.value = [];
    } else {
        selectedCompanies.value = props.companies.map((company) => company.id);
    }
};

// Watch for changes in selectedCompanies to update header checkbox
watch(selectedCompanies, () => {
    if (selectedCompanies.value.length === props.companies.length) {
        isAllSelected.value = true;
        selectAllCheckbox.value.indeterminate = false;
    } else if (selectedCompanies.value.length > 0) {
        isAllSelected.value = false;
        selectAllCheckbox.value.indeterminate = true;
    } else {
        isAllSelected.value = false;
        selectAllCheckbox.value.indeterminate = false;
    }
});

// Ensure indeterminate state is set correctly on mount
onMounted(() => {
    updateHeaderCheckbox();
});

// Update Header Checkbox State
const updateHeaderCheckbox = () => {
    if (!selectAllCheckbox.value) return;
    if (selectedCompanies.value.length === props.companies.length) {
        isAllSelected.value = true;
        selectAllCheckbox.value.indeterminate = false;
    } else if (selectedCompanies.value.length > 0) {
        isAllSelected.value = false;
        selectAllCheckbox.value.indeterminate = true;
    } else {
        isAllSelected.value = false;
        selectAllCheckbox.value.indeterminate = false;
    }
};

// Edit & Delete Placeholder Functions
const editCompany = (company) => {
    alert(`Editing ${company.name}`);
};

const deleteCompany = (id) => {
    alert(`Deleting company ID: ${id}`);
};
</script>
