import Axios from "axios";
import {
    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    ORDER_ADD_ITEM,
    ORDER_REMOVE_ITEM,
    ORDER_CLEAR,
    ORDER_SET_TYPE,
    ORDER_SET_PAYMENT_TYPE,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_QUEUE_LIST_REQUEST,
    ORDER_QUEUE_LIST_SUCCESS,
    ORDER_QUEUE_LIST_FAIL,
    SCREEN_SET_WIDTH,
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL,
  } from './constants';
export const setOrderType = (dispatch, OrderType) => {
    return dispatch({
        type: ORDER_SET_TYPE,
        payload: OrderType,
    });
}

export const listCategories = async (dispatch) => {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    try {
        const { data } = await Axios.get('https://142.93.14.110:5000/api/categories');
        return dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        return dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.message,
        })
    }
}

export const listProducts = async (dispatch, categoryName = '') => {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    try {
        const { data } = await Axios.get(`https://142.93.14.110:5000/api/products?category=${categoryName}`);
        return dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
        });
    } catch(error) {
        return dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.message,
        });
    }
}