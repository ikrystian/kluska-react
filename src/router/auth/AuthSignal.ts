import { signal, computed } from "@preact/signals-react";

export const token = signal(localStorage.getItem('token')); //the default state

//derived state based on whether a token exists
export const isLoggedIn = computed(() => {
    return !!token.value;
});
