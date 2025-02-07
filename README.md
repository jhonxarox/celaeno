# 🏢 Nuxt 3 Company Dashboard

This is a **Nuxt 3 Company Management Dashboard** that provides:
- ✅ **Dynamic Sorting** (Sort by company name)
- ✅ **Pagination** (Custom number of rows per page)
- ✅ **Search Functionality** (Live filtering)
- ✅ **User List with Profile Images** (Random avatars)
- ✅ **Company Status Badges** (Customer / Churned)
- ✅ **Progress Bars** (For license usage)
- ✅ **Checkbox Selection with Indeterminate State**
- ✅ **Edit & Delete Actions for Each Company**

---

## 🚀 **Live Demo**
👉 *(Deployment instructions are below, live demo link will be added after hosting.)*

---

## 📦 **Installation & Setup**
**1️⃣ Clone the Repository**
```sh
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
```

**2️⃣ Install Dependencies**
```sh
npm install
```

**3️⃣ Run Locally**
```sh
npm run dev
```

Then, open http://localhost:3000 in your browser.

## 🏗 Project Structure
```bash
📂 nuxt-company-dashboard
├── 📁 components
│   ├── 📄 CompanyTable.vue  # Table UI & functionality
│   ├── 📄 MetricCard.vue    # Dashboard cards
│   ├── 📄 SearchBar.vue     # Search input with icon
├── 📁 pages
│   ├── 📄 index.vue         # Main dashboard page
├── 📁 stores
│   ├── 📄 companyStore.js   # Pinia store for company data
├── 📄 nuxt.config.ts        # Nuxt 3 configuration
└── 📄 README.md             # Project documentation
```

## 🛠 Built With
- Nuxt 3 - Modern Vue framework
- Tailwind CSS - Utility-first styling
- Vue.js 3 - Component-based UI
- Pinia - State management


## 🔍 Features
### ✅ Company Table
- Displays company name, logo, website, users, status, and license use.
- Sorting (Click header to toggle ascending/descending).
- Pagination (5 rows per page by default).
- Checkbox Selection:
    - Select all companies.
    - Indeterminate state when some companies are selected.
### ✅ Search Functionality
- Live filtering using an input field with an icon.

### ✅ Status Badges
- Green for "Customer".
- Gray for "Churned".

### ✅ License Progress Bar
- Displays a visual indicator of license use.

### ✅ User Avatars
- Shows profile images of users.
- If users exceed 5, a “+X” badge is displayed.

## 🔧 Development Workflow
### 🛠 Making Changes
1. Create a new branch:
```sh
git checkout -b feature-branch
```

2. Make your changes & commit:
```sh
git add .
git commit -m "Added new feature"
```

3. Push your branch:
```sh
git push origin feature-branch
```

4. Open a Pull Request (PR) on GitHub.

## 📝 License
This project is licensed under the MIT License.
Feel free to modify and use it for personal or commercial projects.

## 📧 Contact
For support or collaboration, reach out:
- Email: jhonarox22@gmail.com
- GitHub: jhonxarox