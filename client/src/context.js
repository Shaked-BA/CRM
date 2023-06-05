
import { useState, useEffect, createContext, useMemo } from 'react';

export const TicketsContext = createContext([]);

export const ContextValue = () => {
    const [categories, setCategories] = useState([]);
    const [ticketsData, setTicketsData] = useState([]);

    const updateCategories = () => {
        setCategories
            (([...new Set(ticketsData?.map(({ category }) => category))]));
    }

    useEffect(() => 
    {
      updateCategories();
    }, [ticketsData]);

    const value = useMemo(() => {
        return {
            categories,
            setCategories,
            ticketsData,
            setTicketsData
        }
    }, [categories, ticketsData]);

    return value;
}

