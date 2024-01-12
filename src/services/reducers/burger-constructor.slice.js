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
    bun: null,
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
               state.bun = action.payload;
           } else {
               state.constructor.push(action.payload);
           }
        },
        updating: (state, action) => {
            state.constructor.splice(action.payload.dragged, 0,  state.constructor.splice(action.payload.hovered, 1)[0]);
        },
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
                state.orderId = action.payload.order.number;
                console.log(action.payload)
            })
            .addCase(getOrder.rejected, (state, action) => {
                state.isOrderSending = false;
                state.isOrderSendingError = true;
                state.orderSendingErrorText = action.payload;
            })
    }
});

export const {adding, updating, deleting} = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;
