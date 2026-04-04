import Client from "../../../api/index"

export const fetchAllNotification = async()=>{
    const response = await Client.notification.getAllNotification()
    return response
}