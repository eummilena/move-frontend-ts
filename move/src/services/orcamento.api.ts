import type { IFormData } from "../schema/formSchema";
import { type OrcamentoResponse } from "../types/orcamento";

const API_URL = "https://6904cb216b8dabde49652b1a.mockapi.io/move/budget";

export async function criarOrcamento(
    data: IFormData
): Promise<OrcamentoResponse> {
    await new Promise((r) => setTimeout(r, 1000));

    let valor = 800;

    if (data.tipo === "Industrial") valor += 700;
    if (data.tamanho === "medio") valor += 300;
    if (data.tamanho === "grande") valor += 500;

    const payload = {
        ...data, valor,
        prazoDias: data.tipo === 'Industrial' ? 7 : 3
    }
    console.log(payload);

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error("Erro ao salvar orçamento");
    }
    return response.json();
}