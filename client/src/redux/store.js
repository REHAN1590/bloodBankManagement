import {configureStore} from'@reduxjs/toolkit'
import authSlice from './features/auth/authslice'

const store = configureStore({
    reducer:{
      auth:authSlice.reducer,
    }
})

export default store