import FeeDetails from "./FeeDetails";
import PaymentHistory from "./PaymentHistory";
import { useEffect, useState } from "react";
import { IndianRupee, DockIcon, Smartphone, Building2, X } from "lucide-react";
import { feeService } from "../features/services/index";
import type { Payment } from "../types/feeInterface";

const STUDENT_UUID = "03e86acf-105b-4e0c-a36e-27a9bfb24ff1";

const Fees = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [totalFees, setTotalFees] = useState(0);
    const [paidAmount, setPaidAmount] = useState(0);
    const [pendingAmount, setPendingAmount] = useState(0);
    const [admissionFees, setAdmissionFees] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [paymentHistory, setPaymentHistory] = useState<Payment[]>([])

    useEffect(() => {
        const fetchFees = async () => {
            try {
                const data = await feeService(STUDENT_UUID);
                if (!data) return;
                setTotalFees(data.total_fees);
                setPaidAmount(data.paid_amount);
                setPendingAmount(data.pending_amount);
                setAdmissionFees(data.admission_fees);
                setPaymentHistory(data.records);
            } catch (err) {
                console.log("failed to fetch fees:", err);
                setError("Unable to Load files");
            } finally {
                setLoading(false);
            }
        };
        fetchFees();
    }, [])

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

    return (
        <div className="p-5 relative">
            <div className="my-3">
                <h1 className="text-2xl font-medium">Fees Management</h1>
                <p className="text-[#7C7979]">View and manage your fee payments</p>
            </div>
            <FeeDetails
                totalFees={totalFees}
                admissionFees={admissionFees}
                paidAmount={paidAmount}
                pendingAmount={pendingAmount}
            />
            {pendingAmount > 0 && (
                <div className="bg-[#FEF5EF] rounded-2xl my-5 border-l-6 border-[#F81A1A] p-3 shadow-[0px_0px_15px_0px_#00000040]">
                    <div className="mb-3">
                        <h2 className="font-medium text-lg">Outstanding Payment Required</h2>
                        <h3 className="text-[#807F7E]">You have a pending payment of Rs.{pendingAmount}.Settle this to maintain course eligibility.</h3>
                    </div>
                    <button className="bg-[#1A7B9D] rounded flex py-1 px-2 text-white" onClick={() => setIsOpen(true)}>
                        Pay Now - <IndianRupee className="h-6 w-4 mx-1 font-bold" />  {pendingAmount}
                    </button>
                </div>
            )}
            <PaymentHistory payments = {paymentHistory}/>

            {isOpen && (
                <div className="fixed inset-0 bg-[#6C6C6C80] flex justify-center items-center p-2">
                    <div className="bg-white p-5 rounded-lg flex flex-col gap-3">
                        <div className="flex justify-between">
                            <div className="mb-3 flex flex-col gap-3">
                                <h1 className="text-xl font-medium">Select Payment Method</h1>
                                <h3 className="text-[#7C7C7C]">Choose how you want to pay Rs.{pendingAmount}</h3>
                            </div>
                            <X onClick={() => setIsOpen(false)} />
                        </div>
                        <div className="border-2 border-[#BFBCBC] rounded-2xl p-2 h-20 w-80">
                            <div className="flex items-center gap-3">
                                <DockIcon className="text-[#1717D9] bg-[#A8A5FE] rounded-full p-1 h-10 w-10" />
                                <div>
                                    <h1 className="text-lg font-bold">Credit/Debit Card</h1>
                                    <h3 className="text-[#474747] text-md">Master,Rupay or visa card</h3>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-[#BFBCBC] rounded-2xl p-2 h-20 w-80">
                            <div className="flex items-center gap-3">
                                <Smartphone className="text-[#3B8D96] bg-[#E7E6FF] rounded-full p-1 h-10 w-10" />
                                <div>
                                    <h1 className="text-lg font-bold">UPI</h1>
                                    <h3 className="text-[#474747] text-md">Phonepe,Googlepay,Paytm</h3>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-[#BFBCBC] rounded-2xl p-2 h-20 w-80">
                            <div className="flex items-center gap-3">
                                <Building2 className="text-[#172A13] bg-[#599E2E] rounded-full p-1 h-10 w-10" />
                                <div>
                                    <h1 className="text-lg font-bold">Bank Transfer</h1>
                                    <h3 className="text-[#474747] text-md">Direct NEFT/RTGS transfer</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Fees;