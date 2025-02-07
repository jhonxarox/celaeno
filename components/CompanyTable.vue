<template>
    <div>
        <table class="w-full bg-white rounded shadow">
            <thead>
                <tr class="bg-gray-200 text-left">
                    <!-- Header Checkbox -->
                    <th class="p-3">
                        <input type="checkbox" ref="selectAllCheckbox" @change="toggleSelectAll"
                            :checked="isAllSelected" class="w-5 h-5 rounded border-gray-300 focus:ring-0" />
                    </th>

                    <!-- ✅ Company Column with Sorting -->
                    <th class="p-3 cursor-pointer flex items-center space-x-2" @click="toggleSort">
                        <span>Company</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4 text-gray-500 transition-transform duration-200"
                            :class="sortOrder === 'desc' ? 'rotate-180' : ''">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </th>

                    <th class="p-3">License Use</th>
                    <th class="p-3">Status</th>
                    <th class="p-3">Users</th>
                    <th class="p-3">About</th>
                    <th class="p-3"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="company in paginatedCompanies" :key="company.id" class="border-b">
                    <td class="p-3">
                        <input type="checkbox" v-model="selectedCompanies" :value="company.id"
                            @change="updateHeaderCheckbox" class="w-5 h-5 rounded border-gray-300 focus:ring-0" />
                    </td>

                    <td class="p-3 flex items-center space-x-3">
                        <img :src="company.imageUrl" :alt="company.name" class="w-12 h-12 rounded-full shadow" />
                        <div>
                            <span class="font-medium block">{{ company.name }}</span>
                            <span class="text-gray-500 text-sm">{{ company.url }}</span>
                        </div>
                    </td>

                    <td class="p-3">
                        <div class="relative w-40 h-3 bg-gray-300 rounded">
                            <div class="absolute top-0 left-0 h-full bg-gray-900 rounded"
                                :style="{ width: company.licenseUse + '%' }"></div>
                        </div>
                    </td>

                    <td class="p-3">
                        <span class="px-3 py-1 text-sm font-medium rounded-full" :class="{
                            'bg-green-100 text-green-700': company.status === 'customer',
                            'bg-gray-200 text-gray-700': company.status === 'churned'
                        }">
                            {{ company.status.charAt(0).toUpperCase() + company.status.slice(1) }}
                        </span>
                    </td>

                    <td class="p-3">
                        <div class="flex items-center">
                            <div v-for="(user, index) in company.userImages.slice(0, 5)" :key="index" class="-ml-2">
                                <img :src="user" class="w-8 h-8 rounded-full border-2 border-white shadow" />
                            </div>

                            <div v-if="company.users > 5"
                                class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-xs font-medium border-2 border-white shadow">
                                +{{ company.users - 5 }}
                            </div>
                        </div>
                    </td>

                    <td class="p-3">
                        <p class="font-medium text-gray-800">{{ company.about }}</p>
                        <p class="text-gray-400 text-sm">{{ company.description }}</p>
                    </td>

                    <td class="p-3 text-right flex justify-end space-x-4">
                        <button @click="editCompany(company)" class="text-gray-500 hover:text-gray-700">
                            📝
                        </button>
                        <button @click="deleteCompany(company.id)" class="text-gray-500 hover:text-red-500">
                            🗑️
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- ✅ Pagination Controls -->
        <div class="flex justify-between items-center mt-4">
            <button @click="prevPage" :disabled="currentPage === 1"
                class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
                Previous
            </button>

            <span class="text-gray-600">Page {{ currentPage }} of {{ totalPages }}</span>

            <button @click="nextPage" :disabled="currentPage === totalPages"
                class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
                Next
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({ companies: Array });

const selectedCompanies = ref([]);
const sortOrder = ref("asc");
const currentPage = ref(1);
const itemsPerPage = 5; // Show 5 rows per page

// **Sort Companies**
const sortedCompanies = computed(() => {
    return [...(props.companies || [])].sort((a, b) => {
        if (sortOrder.value === "asc") {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
});

// **Pagination Logic**
const totalPages = computed(() => Math.ceil(sortedCompanies.value.length / itemsPerPage));

const paginatedCompanies = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedCompanies.value.slice(start, end);
});

// **Pagination Functions**
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

// **Sorting Toggle**
const toggleSort = () => {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
};

// **Placeholder Functions**
const editCompany = (company) => alert(`Editing ${company.name}`);
const deleteCompany = (id) => alert(`Deleting company ID: ${id}`);
</script>
