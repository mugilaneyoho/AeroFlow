import { ArrowDownToLine, IndianRupee } from "lucide-react";
import type { Payment } from "../types/feeInterface";

interface PaymentHistoryProps {
    payments: Payment[];
}

const PaymentHistory = ({ payments }: PaymentHistoryProps) => {
    return (
        <div className="flex-1 shadow-[0px_0px_15px_0px_#00000040] p-3 rounded-2xl">
            <h2 className="font-bold text-2xl">Payment History</h2>
            {payments?.map((item) => (
                <div key={item.transaction_id} className="shadow-[0px_0px_15px_0px_#00000040] flex-1 p-4 rounded-2xl m-4">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="font-medium">{item.paymentpurpose}</div>
                            <div className="text-sm text-[#8F8F8F]">{item.transaction_id}</div>
                            <div className="font-medium">{new Date(item.date).toLocaleDateString()}</div>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                            <div className="font-medium flex items-center">
                                <IndianRupee className="h-4 w-4" />
                                <span className="text-xl">{item.amount}</span>
                            </div>
                            <button className="flex text-white gap-2 bg-[#1A7B9D] rounded px-4 py-1">
                                <ArrowDownToLine className="h-4 w-4 mt-0.5" />
                                <span>Receipt</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PaymentHistory;
