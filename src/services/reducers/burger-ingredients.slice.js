import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getIngredientsAPI} from "../../utils/api";

export const getIngredients = createAsyncThunk(
    "burgerIngredients/getIngredients",
    async (arg, thunkAPI) => {
        try {
            return await getIngredientsAPI();
        } catch (e) {
            thunkAPI.rejectWithValue([])
        }
    }
)

const initialState = {
    burgerIngredients: [],
    burgerIngredientsLoading: false,
    burgerIngredientsLoaded: false,
    burgerIngredientsError: false,
    burgerIngredientsErrorText: null,
    viewedIngredient: {},
    showModal: false
};

export const burgerIngredientsSlice = createSlice({
    name: "burgerIngredients",
    initialState,
    reducers: {
        showIngredient: (state, {payload: ingredient}) => {
            state.viewedIngredient = ingredient;
            state.showModal = true;
        },
        hideIngredient: (state) => {
            state.viewedIngredient = {};
            state.showModal = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getIngredients.pending, (state) => {
                state.burgerIngredientsLoading = true;
            } )
            .addCase(getIngredients.fulfilled, (state, action) => {
                state.burgerIngredientsLoaded = true;
                state.burgerIngredientsLoading = false;
                state.burgerIngredients = [...action.payload.data];
            })
            .addCase(getIngredients.rejected, (state, action) => {
                state.burgerIngredientsLoading = false;
                state.burgerIngredientsError = true;
                state.burgerIngredients = {};
                state.burgerIngredientsErrorText = action.payload.error;
            })
    }
})

export const {hideIngredient, showIngredient} = burgerIngredientsSlice.actions;

export default burgerIngredientsSlice.reducer;