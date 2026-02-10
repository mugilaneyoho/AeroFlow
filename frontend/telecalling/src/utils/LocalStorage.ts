import storages from 'react-secure-storage'

export const GetLocalStorage =(key:string)=>{
    return storages.getItem(key)
}

export const StoreLocalStorage = (key:string,data:any)=>{
    storages.setItem(key,data)
}

export const RemoveLocalStorage =(key:string)=>{
    storages.removeItem(key)
}

export const ClearLocalStorage = (key:string)=>{
    storages.clear()
}