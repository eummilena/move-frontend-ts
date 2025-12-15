export type OrcamentoRequest = {
    nome: string;
    email: string;
    tipo: "Residencial" | "Industrial";
    tamanho: {
        id: string;
        nome: "Pequeno" | "Médio" | "Grande";
    };
    endereco: {
        cidade: string;
        estado: string;
    };
    data: string;
    observacao?: string;
};

export type OrcamentoResponse = {
    id: string;
    valor: number;
    moeda: "BRL";
    prazoDias: number;
    validoAte: string;
};
