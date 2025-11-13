import React, { createContext, useContext, useState, type PropsWithChildren } from 'react'

type Button = {
    showVideo: boolean;
    setShowVideo: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataContext = createContext<Button | null>(null);

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error('useContext deve estar dentro do Provider');
    return context;
};

export const DataContextProvider = ({ children }: PropsWithChildren) => {

    const [showVideo, setShowVideo] = useState(false);

    return (
        <DataContext.Provider value={{ showVideo, setShowVideo }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext