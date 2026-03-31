export interface Meeting {
  id?: number
  visitor: string
  purposeOfMeeting: string
  requestedTime: string
  date: string
  priority: string
  status: string
  mobileNumber?: string | null,
  meetingId: number | null
}