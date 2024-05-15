import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

type Produto = {
    id: number;
    nome: string;
    preco: number;
};

const useProduto = () => {
    let nav = useNavigate();

    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('/produtos');
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao buscar os produtos:', error);
            }
        };

        fetchProdutos();
    }, []);

    const adicionarProduto = async (nome: string, valor: number, tipo: string, raca: string) => {
        try {
            const response = await api.post("/produto/cadastrar", { nome, valor, tipo, raca });
            if (response.status === 201) {

                alert("Produto cadastrado com sucesso!");
                nav("/produto");
                return true;
            }
        } catch (error) {
            alert("Erro ao cadastrar produto!");
            return false;
        }
    };

    const atualizarProduto = async (id: number, nome: string, valor: number, tipo: string, raca: string) => {
        try {

            const response = await api
                .put(`/produto/${id}`, { nome, valor, tipo, raca })

            if (response.status === 200) {
                alert("Produto atualizado com sucesso!");
                nav("/produto");
            }
        } catch (error) {
            alert("Erro ao atualizar produto!");
        }
    };

    const removerProduto = (id: number) => {
    };

    return {
        produtos,
        adicionarProduto,
        atualizarProduto,
        removerProduto,
    };
};

export default useProduto;