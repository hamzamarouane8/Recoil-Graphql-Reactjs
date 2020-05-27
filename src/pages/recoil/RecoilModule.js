import React from 'react';
import { atom, selector } from 'recoil';
import memoize from 'memoize-one';
import {provider,reducer} from './Session';

export const resize = atom({
    key: 'resizeX',
    default: {
        width: 100,
        height: 100,
        top: 100,
        left: 100,
        rotateAngle: 0
    }
});

export const backgroundColor = memoize(color => atom({
    key: 'backgroundColor',
    default: color
}));



export const resizeItemWithId = id => atom({
    key: `item${id}`,
    default: {
        width: 100,
        height: 100,
        top: 100,
        left: 100,
        rotateAngle: 0
    }
});




export const userState =  (state)=>atom({
    key: "authentication",
    default: {
        user: state.user,
        authenticated: state.authenticated,
    }
});

export const authenticationUser = memoize(()=>{
    let state = provider({});
    console.log('###### ',state)
     return selector({
        key: 'MyMultipliedNumber',
        get: ({ get }) => {
            return get(userState({user:state.user,authenticated: state.authenticated}));
        },
    
        set: ({ set }, state) => {
            return set(userState({user:state.user,authenticated: state.authenticated}),()=>{
                return state;
            });
        },
    });

}
);

export const switchTheme = atom({
    key: 'switchTheme',
    default: true
});

export const switcherThemeFamily = selector({
        key: 'MyMultipliedNumber1',
        get: ({ get }) => {

            return get(switchTheme);
        },
    
        set: ({ set }, switcher) => {
            console.log('swwww',switcher.checkedA)
            return set(switchTheme ,switcher.checkedA);
        },
    });




/*export const authenticationUser = selectorFamily({
    key: 'MyMultipliedNumber',
    get: ({user,authenticated}) => ({get}) => {
      return get(userState);
    },

    // optional set
    set: ({user,authenticated}) => ({set}, newValue) => {
      set(userState, newValue);
    },
  });*/
