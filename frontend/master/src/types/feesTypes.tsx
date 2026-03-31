export interface FeesType{
    studentID: string
    uuid: string
    name: string
    course: string
    totalFee: number
    paidAmount: number
    pendingAmount: number
    status: string
    lastPayment: string
    actions?: string
    
}