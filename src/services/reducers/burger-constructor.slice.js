import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {cartData} from "../../utils/data";
import {element} from "prop-types";

export const getOrder = createAsyncThunk(
"order/create",
    async (arg, thunkAPI) => {
        try {
            //TODO Написать запрос на создание заказа
        } catch (e){
            thunkAPI.rejectWithValue(null)
        }
    }
)

//TODO В initialState корзина пока берется из фейковых данных, когда перетаскивание будет - поправить
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
    extraReducers: {}
});

export const {adding, deleting} = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;
