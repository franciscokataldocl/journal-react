import React from 'react';
import { AppRouter } from './routers/AppRouter';

//PROVIDER ES EL QUE PROVEE DE INFORMACION A LA APP
//EL PROVIDDER RECIBE EL STORE CREADO ANTERIORMENTE
import {Provider} from 'react-redux';
import { store } from './store/store';

export const JournalApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}

