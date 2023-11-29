import { signal, computed } from "@preact/signals-react";

export const token = signal(localStorage.getItem('token')); //the default state

export const user = signal(null);

//derived state based on whether a token exists
export const isLoggedIn = computed(() => {
    return !!token.value;
});

export const getUser = computed(() => {
    return !!user;
});
