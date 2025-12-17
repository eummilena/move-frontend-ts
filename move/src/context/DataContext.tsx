import React, { createContext, useContext, useState, type PropsWithChildren } from 'react'
import { useForm, type Control, type UseFormWatch, type Resolver } from 'react-hook-form';
import type { IFormData } from '../schema/formSchema';
import { formSchema } from '../schema/formSchema';
import { zodResolver } from "@hookform/resolvers/zod"
import type { OrcamentoResponse } from '../types/orcamento';



type IDataContext = {
    slide: number;
    setSlide: React.Dispatch<React.SetStateAction<number>>;
    showVideo: boolean;
    setShowVideo: React.Dispatch<React.SetStateAction<boolean>>;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    form: boolean;
    setForm: React.Dispatch<React.SetStateAction<boolean>>;
    handleSubmit: ReturnType<typeof useForm<IFormData>>['handleSubmit'];
    register: ReturnType<typeof useForm<IFormData>>['register'];
    errors: ReturnType<typeof useForm<IFormData>>['formState']['errors'];
    isDirty: ReturnType<typeof useForm<IFormData>>['formState']['isDirty'];
    isValid: ReturnType<typeof useForm<IFormData>>['formState']['isValid'];
    control: Control<IFormData>;
    watch: UseFormWatch<IFormData>;
    trigger: ReturnType<typeof useForm<IFormData>>["trigger"];
    touchedFields: ReturnType<typeof useForm<IFormData>>['formState']['touchedFields'];
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
    orcamento: OrcamentoResponse | null;
    setOrcamento: React.Dispatch<React.SetStateAction<OrcamentoResponse | null>>;
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
    const [loading, setLoading] = useState(false);
    const [orcamento, setOrcamento] = useState<OrcamentoResponse | null>(null);
    const [error, setError] = useState("");

    const { handleSubmit, register, control, watch, trigger, formState: { errors, isDirty, isValid, touchedFields }
    } = useForm<IFormData>({
        resolver: zodResolver(formSchema) as Resolver<IFormData>,
        mode: 'onChange',
        reValidateMode: 'onChange'
    });


    return (
        <DataContext.Provider value={{
            slide, setSlide, showVideo, setShowVideo,
            value, setValue, form, setForm,
            handleSubmit, errors, register,
            isDirty, isValid, control,
            trigger, watch, touchedFields,
            loading, setLoading, orcamento,
            setOrcamento, error, setError
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext