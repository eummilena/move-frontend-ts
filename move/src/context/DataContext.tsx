import React, { createContext, useContext, useState, type PropsWithChildren } from 'react'

type IDataContext = {

    slide: number;
    setSlide: React.Dispatch<React.SetStateAction<number>>
    showVideo: boolean;
    setShowVideo: React.Dispatch<React.SetStateAction<boolean>>;
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

    return (
        <DataContext.Provider value={{
            slide, setSlide, showVideo, setShowVideo
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext