import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        // actions are provided inside reducers,logic to update the state
        addtowishlist:(state,action)=>{
            state.push(action.payload)
        },
        // to remove item frpm state
        removeFromWishlist:(state,action)=>{
            return state.filter(item=>item.id !=action.payload)
        }
    }
})
export  const {addtowishlist,removeFromWishlist}=wishlistSlice.actions;
export default wishlistSlice.reducer;