import { IndianRupee } from "lucide-react";

const FeeDetails = ({ totalFees = 0, admissionFees = 0, paidAmount = 0, pendingAmount = 0 }) => {

    const fees = [
        { feeName: "Total Fees", amount: totalFees.toString() }, 
        { feeName: "Admission Fees", amount: admissionFees.toString() },
        { feeName: "Paid Amount", amount: paidAmount.toString() }, 
        { feeName: "Pending Amount", amount: pendingAmount.toString() }
    ];

    return (
        <div className="flex gap-4 flex-1">
            {fees.map((item) => (
                <div key={item.feeName} className={`shadow-[0px_4px_24px_0px_#00000026] p-2 rounded-2xl flex-1 
                ${item.feeName === "Pending Amount"? "border-l-6 border-[#FF0909] rounded-l-2xl" : "border-none"} `}>

                    {item.feeName === "Total Fees" && (
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-3">
                                <div className="text-[#005180] bg-[#E5EEF2] w-fit p-2 rounded-md">
                                    <IndianRupee />
                                </div>
                                <div className="font-bold text-[#6A6767]">
                                    {item.feeName}
                                </div>
                            </div>
                            <div className="text-[#005180] font-bold text-2xl">
                                {item.amount}
                            </div>
                        </div>
                    )}

                    {item.feeName === "Admission Fees" && (
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-3">
                                <div className="text-[#50C656] bg-[#FCF9F7] w-fit p-2 rounded-md">
                                    <IndianRupee />
                                </div>
                                <div className="font-bold text-[#6A6767]">
                                    {item.feeName}
                                </div>
                            </div>
                            <div className="font-bold text-[#50C656] text-2xl">
                                {item.amount}
                            </div>
                        </div>
                    )}

                    {item.feeName === "Paid Amount" && (
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-3">
                                <div className="text-[#0AA2AC] bg-[#E7F6F7] w-fit p-2 rounded-md">
                                    <IndianRupee />
                                </div>
                                <div className="font-bold text-[#6A6767]">
                                    {item.feeName}
                                </div>
                            </div>
                            <div className="font-bold text-[#0AA2AC] text-2xl">
                                {item.amount}
                            </div>
                        </div>
                    )}

                    {item.feeName === "Pending Amount" && (
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-3">
                                <div className="text-[#E47D7D] bg-[#FCF9F7] w-fit p-2 rounded-md">
                                    <IndianRupee />
                                </div>
                                <div className="font-bold text-[#6A6767]">
                                    {item.feeName}
                                </div>
                            </div>
                            <div className="font-bold text-[#E47D7D] text-2xl">
                                {item.amount}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default FeeDetails;