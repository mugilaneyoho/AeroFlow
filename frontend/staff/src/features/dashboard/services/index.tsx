import Client from "../../../api/index";

const dashboardService = {
  getStaffDashboard: async () => {
    try {
      const response = await Client.dashboard.getStaffDashboard();  
      console.log("Dashboard API response service:", response); 
      return response; 
    } catch (error) {
      console.error("Error fetching dashboard:", error);
      throw error;
    }
  },
};

export default dashboardService;