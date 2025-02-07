import { defineStore } from "pinia";

export const useCompanyStore = defineStore("companyStore", {
  state: () => ({
    companies: [], // Holds the list of companies
  }),
  actions: {
    async fetchCompanies() {
      this.companies = [
        [
          {
            id: 1,
            name: "Streamly",
            url: "streamly.io",
            licenseUse: 32,
            status: "customer",
            users: 28,
            about: "Streaming service",
            description: "Live and on-demand video streaming",
            imageUrl:
              "https://img.freepik.com/free-vector/bicycle-shop-logo-design-vector_53876-40626.jpg?t=st=1738925675~exp=1738929275~hmac=0f406a754f628e71806940d807ad04c80722da8bacae275086c6bf74bfc8f851&w=240",
          },
          {
            id: 2,
            name: "DesignGrid",
            url: "designgrid.com",
            licenseUse: 57,
            status: "churned",
            users: 42,
            about: "Graphic design platform",
            description: "Lightweight and powerful design tool",
            imageUrl:
              "https://img.freepik.com/free-vector/funny-banana-character-illustrated-logo_23-2148721720.jpg?t=st=1738925809~exp=1738929409~hmac=0bed2de9edfdf45b23aed385e8b4b2d4e613597e166d2cb779e9a133bad61d9a&w=240",
          },
          {
            id: 3,
            name: "DataSync",
            url: "datasync.ai",
            licenseUse: 20,
            status: "customer",
            users: 15,
            about: "Data analytics",
            description: "AI-powered data prediction and insights",
            imageUrl:
              "https://img.freepik.com/free-vector/hand-drawn-y2k-logo-design_23-2150585065.jpg?t=st=1738925855~exp=1738929455~hmac=534f9350768f92ca726b20a913cfd2c416ee90e2e1c84049032bbe182094c341&w=240",
          },
          {
            id: 4,
            name: "TimeFlow",
            url: "timeflow.app",
            licenseUse: 39,
            status: "customer",
            users: 33,
            about: "Time management",
            description: "Boost productivity with smart scheduling",
            imageUrl:
              "https://img.freepik.com/free-vector/gradient-abstract-logo_52683-8517.jpg?t=st=1738925875~exp=1738929475~hmac=558fe52f5e32d7a74a3a293c12b74c4760427c92148c9d332e6b752ccbed4236&w=240",
          },
          {
            id: 5,
            name: "WebBridge",
            url: "webbridge.io",
            licenseUse: 18,
            status: "churned",
            users: 12,
            about: "Web app integration",
            description: "Seamlessly connect web applications",
            imageUrl:
              "https://img.freepik.com/free-vector/bicycle-shop-logo-design-vector_53876-40626.jpg?t=st=1738925675~exp=1738929275~hmac=0f406a754f628e71806940d807ad04c80722da8bacae275086c6bf74bfc8f851&w=240",
          },
          {
            id: 6,
            name: "TaskMaster",
            url: "taskmaster.io",
            licenseUse: 45,
            status: "customer",
            users: 40,
            about: "Project management",
            description: "Organize and track tasks effortlessly",
            imageUrl:
              "https://img.freepik.com/free-vector/funny-banana-character-illustrated-logo_23-2148721720.jpg?t=st=1738925809~exp=1738929409~hmac=0bed2de9edfdf45b23aed385e8b4b2d4e613597e166d2cb779e9a133bad61d9a&w=240",
          },
          {
            id: 7,
            name: "SecureNet",
            url: "securenet.com",
            licenseUse: 22,
            status: "churned",
            users: 18,
            about: "Cybersecurity platform",
            description: "Advanced security for online transactions",
            imageUrl:
              "https://img.freepik.com/free-vector/hand-drawn-y2k-logo-design_23-2150585065.jpg?t=st=1738925855~exp=1738929455~hmac=534f9350768f92ca726b20a913cfd2c416ee90e2e1c84049032bbe182094c341&w=240",
          },
        ],
      ];
    },
  },
});
