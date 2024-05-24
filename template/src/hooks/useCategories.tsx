import { useEffect, useState } from "react";
import { Category } from "../models/Category";
import { getAllCategories } from "../api/CategoryAPI";

export const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        getAllCategories()
            .then((response) => {
                setCategories(response);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, []);
    return categories;
}