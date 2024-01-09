import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getOrderIdAPI} from "../../utils/api";

export const getOrder = createAsyncThunk(
"order/create",
    async (cart, thunkAPI) => {
        try {
            return await getOrderIdAPI(cart);
        } catch (e){
            thunkAPI.rejectWithValue(null)
        }
    }
)

const initialState = {
    constructor: [],
    orderId: null,
    isOrderSending: false,
    isOrderSendingError: false,
    orderSendingErrorText: ""
};

export const burgerConstructorSlice = createSlice({
    name: "burgerConstructor",
    initialState,
    reducers: {
        adding: (state, action) => {
           if (action.payload.type === "bun"){
               const index = state.constructor.findIndex(el => el.type === "bun");
               state.constructor.splice(index, 1);
           }
            state.constructor.push(action.payload);
        },
        updating: () => {},
        deleting: (state, action) => {
            const index = state.constructor.findIndex(el => el.type === action.payload.type);
            state.constructor.splice(index, 1);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getOrder.pending, state => {
                state.isOrderSending = true;
                console.log("pending")
            })
            .addCase(getOrder.fulfilled, (state, action) => {
                state.isOrderSending = false;
                // state.orderId = [...action.payload];
                console.log(action.payload)
            })
            .addCase(getOrder.rejected, (state, action) => {
                state.isOrderSending = false;
                state.isOrderSendingError = true;
                state.orderSendingErrorText = action.payload;
            })
    }
});

export const {adding, deleting} = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;
