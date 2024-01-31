import { useState, useEffect } from "react";

function getSavedValue(key, initialState) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

}

export default function useLocalStorage(key, initialState) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialState)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}