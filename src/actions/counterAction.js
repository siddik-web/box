import { types } from "./types";

export const add = (payload = 1) => ({
    type: types.ADD_NUMBER,
    payload
})

export const remove = (payload = 1) => ({
    type: types.REMOVE_NUMBER,
    payload
})