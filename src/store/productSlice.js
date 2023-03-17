    import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

    export const STATUSES = Object.freeze({
        IDLE: 'idle',
        LOADING: 'loading',
        ERROR: 'error'
    })

    const initialState = {
        data: [],
        status: STATUSES.IDLE 
    }



    const productSlice = createSlice({
        name: "product",
        initialState,
        reducers:{},
        extraReducers: (builder) => {
            builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state,action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR
            })
        }

    })

    export const fetchProducts = createAsyncThunk(
        'products/fetchProducts',
        async() => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            return data;
        }
    )

    export default productSlice.reducer;



