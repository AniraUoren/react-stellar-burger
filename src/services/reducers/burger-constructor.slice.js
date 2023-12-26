import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {cartData} from "../../utils/data";

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
    constructor: [...cartData],
    orderId: null,
    isOrderSending: false,
    isOrderSendingError: false,
    orderSendingErrorText: ""
};

export const burgerConstructorSlice = createSlice({
    name: "burgerConstructor",
    initialState,
    reducers: {
        adding: () => {},
        updating: () => {},
        deleting: () => {}
    },
    extraReducers: {}
});

export const {} = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;
