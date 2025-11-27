import React, { createContext, useContext, useState, type PropsWithChildren } from 'react'

type IDataContext = {
    slide: number;
    setSlide: React.Dispatch<React.SetStateAction<number>>;
    showVideo: boolean;
    setShowVideo: React.Dispatch<React.SetStateAction<boolean>>;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    form: boolean;
    setForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error('useContext deve estar dentro do Provider');
    return context;
};

export const DataContextProvider = ({ children }: PropsWithChildren) => {

    const [showVideo, setShowVideo] = useState(false);
    const [slide, setSlide] = useState(1);
    const [value, setValue] = useState('');
    const [form, setForm] = useState(false);

    return (
        <DataContext.Provider value={{
            slide, setSlide, showVideo, setShowVideo, value, setValue, form, setForm
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext