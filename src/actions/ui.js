
import { types } from '../types/types';

//set errors on form
export const setError = (err) =>({
        type:types.uiSetError,
        payload: err
    });

    //remove errors on form
export const removeError = () =>(
    {
        type:types.uiRemoveError
    }
)

//put loading on form
export const startLoading = () =>(
    {
        type:types.uiStartLoading
    }
)

//remove loading on form
export const finishLoading  = () =>(
    {
        type:types.uiFinishLoading
    }
)


