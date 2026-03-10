import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { barchart } from "../../dummyData/dashboard";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DepartmentPerformance = () => {
    
    const data = {
        labels: barchart.map((item) => item.label),
        datasets: [
            {
                label: "Students",
                data: barchart.map((item) => item.values[0]),
                backgroundColor: ["#8B5CF6", "#10B981", "#3B82F6","#10B981"],
                borderRadius: 6
            },
            {
                label: "Batches",
                data: barchart.map((item) => item.values[1]),
                backgroundColor: ["#6366F1","#34D399","#60A5FA","#34D399"],
                borderRadius: 6
            },
            {
                label: "Attendance",
                data: barchart.map((item) => item.values[2]),
                backgroundColor: ["#A78BFA","#059669","#2563EB","#F59E0B"],
                borderRadius: 6
            },
        ]
    }
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {grid: {display: false}},
            y: {grid: { display: false }}
        }
    }
    
    return (
    <div className="p-4 rounded-xl mt-5 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <h2 className="text-lg font-semibold mb-4">Department Performance Analytics</h2>
        <Bar data={data} options={options} />
        <div className="grid grid-cols-4 gap-10 mt-6 text-sm text-center mx-5">
            <div>
                <div className="flex justify-center gap-4 mt-2 shadow-[0_0_15px_rgba(0,0,0,0.1)] p-2">
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-purple-500 rounded-md"></span>
                        <span>Students</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-indigo-500 rounded-md"></span>
                        <span>Batches</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-purple-300 rounded-md"></span>
                        <span>Attendance</span>
                    </div>
                </div>
            </div>
            
            <div>
                <div className="flex justify-center gap-4 mt-2 shadow-[0_0_15px_rgba(0,0,0,0.1)] p-2">
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-green-500 rounded-md"></span>
                        <span>Calls</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-green-400 rounded-md"></span>
                        <span>Interested</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-green-700 rounded-md"></span>
                        <span>Converted</span>
                    </div>
                    </div>
                </div>
            <div>
                
                <div className="flex justify-center gap-4 mt-2 shadow-[0_0_15px_rgba(0,0,0,0.1)] p-2">
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-blue-400 rounded-md"></span>
                        <span>Eligible</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-blue-500 rounded-md"></span>
                        <span>Companies</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-blue-700 rounded-md"></span>
                        <span>Placed</span>
                    </div>
                </div>
            </div>
            
            <div>
                <div className="flex justify-center gap-4 mt-2 shadow-[0_0_15px_rgba(0,0,0,0.1)] p-2">
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-green-500 rounded-md"></span>
                        <span>Collection</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-green-400 rounded-md"></span>
                        <span>Paid</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-orange-400 rounded-md"></span>
                        <span>Pending</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DepartmentPerformance;