import {configureStore} from "@reduxjs/toolkit"

const TelecallerStore = configureStore({
    reducer:{

    }
})

export default TelecallerStore
export type TelecallerRootState = ReturnType<typeof TelecallerStore.getState>
export type TelecallerAppDispatch = typeof TelecallerStore.dispatch