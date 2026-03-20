import type { Payment } from "../../types/feeInterface";
import Client from "../../api/index"

export interface FeeSummary {
  paymentHistory: Payment[];
  totalFees: number;
  paidAmount: number;
  pendingAmount: number;
  admissionFees: number;
}
export const feeService = async(): Promise<FeeSummary> =>{
    const response = await Client.fees.GetAll()
    console.log("get fees response :", response)
    return response?.data
}