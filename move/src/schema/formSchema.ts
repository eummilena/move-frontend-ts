import { z } from "zod";


const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

// STEP 1 
export const schemaStep1 = z.object({
    nome: z.string()
        .min(2, "Nome muito curto")
        .max(50, "Nome muito longo"),


    sobrenome: z.string()
        .min(2, "Sobrenome muito curto")
        .max(50, "Sobrenome muito longo"),

    email: z.string()
        .email("Email inválido"),

    telefone: z.string()
        .regex(telefoneRegex, "Telefone inválido (ex: 11 99999-9999)"),
});

// Step 2

export const schemaStep2 = z.object({
    estados: z.string(),
    tamanho: z.string().min(1, "Selecione o tamanho"),

    tipo: z.enum(["Residencial", "Industrial"], {
        message: 'Selecione o tipo'
    }),

    descricao: z
        .string()
        .min(10, "Descreva melhor, mínimo 10 caracteres")
        .max(1000, "Descrição muito longa"),

    observacao: z.string().max(1000).optional().or(z.literal("")),
})


// Step 3

export const schemaStep3 = z.object({
    endereco: z
        .string()
        .min(3, "Endereço obrigatório"),

    cidade: z.string()
        .min(2, "Cidade obrigatória"),

    estados: z.string().min(1, "Selecione o estado"),

    cep: z.string()
        .regex(/^\d{5}-?\d{3}$/, "CEP inválido")
        .optional()
        .or(z.literal("")),

    data: z.date().refine((date) => date > new Date(), { message: 'Data inválida' })

})

export const formSchema = z.object({
    ...schemaStep1.shape,
    ...schemaStep2.shape,
    ...schemaStep3.shape,
});


export type IFormData = z.infer<typeof formSchema>;

