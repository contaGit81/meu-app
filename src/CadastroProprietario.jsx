import React, { useState } from 'react';

// Estilos básicos para o componente
const styles = {
    formContainer: {
        padding: '25px',
        maxWidth: '600px',
        margin: '30px auto',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#f9f9f9'
    },
    title: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px'
    },
    inputGroup: {
        marginBottom: '15px'
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: '600',
        color: '#555'
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box'
    },
    button: {
        backgroundColor: '#007bff', // Azul para 'Cadastrar Proprietário'
        color: 'white',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
        fontSize: '16px',
        marginTop: '15px'
    },
    separator: {
        margin: '25px 0',
        border: '0',
        borderTop: '1px solid #eee'
    },
    row: {
        display: 'flex',
        gap: '15px',
    },
    half: {
        flex: 1,
    }
};

// Componente renomeado de CadastroCondominio para CadastroProprietario
const CadastroProprietario = () => {
    // 1. Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        bloco: '',
        apartamento: '',
        vagasGaragem: 1,
    });

    // 2. Manipulador genérico para atualizar o estado ao digitar
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    // 3. Manipulador de envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Log dos dados para verificar no console
        console.log("Dados do Proprietário para envio:", formData);
        
        // Simulação de envio para a API
        alert(`Proprietário(a) ${formData.nome} do Ap. ${formData.apartamento} (Bloco ${formData.bloco}) cadastrado(a) com sucesso!`);
        
        // Opcional: Limpar o formulário após o envio
        // setFormData({
        //     nome: '', cpf: '', email: '', telefone: '', 
        //     bloco: '', apartamento: '', vagasGaragem: 1,
        // });
    };

    return (
        <div style={styles.formContainer}>
            <h2 style={styles.title}>Cadastro de Proprietário</h2>
            <form onSubmit={handleSubmit}>
                
                {/* DADOS PESSOAIS */}
                <div style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="nome">Nome Completo</label>
                    <input 
                        style={styles.input}
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="cpf">CPF</label>
                    <input 
                        style={styles.input}
                        type="text"
                        id="cpf"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        placeholder="Ex: 000.000.000-00"
                        maxLength="14"
                        required
                    />
                </div>

                <div style={styles.row}>
                    <div style={styles.half}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label} htmlFor="email">E-mail</label>
                            <input 
                                style={styles.input}
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div style={styles.half}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label} htmlFor="telefone">Telefone</label>
                            <input 
                                style={styles.input}
                                type="tel"
                                id="telefone"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                                placeholder="(XX) 9XXXX-XXXX"
                            />
                        </div>
                    </div>
                </div>
                
                <hr style={styles.separator}/>

                {/* DADOS DA UNIDADE */}
                <h3 style={{ ...styles.title, fontSize: '1.2em' }}>Dados da Unidade</h3>
                
                <div style={styles.row}>
                    <div style={styles.half}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label} htmlFor="bloco">Bloco/Torre</label>
                            <input 
                                style={styles.input}
                                type="text"
                                id="bloco"
                                name="bloco"
                                value={formData.bloco}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div style={styles.half}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label} htmlFor="apartamento">Apartamento/Unidade</label>
                            <input 
                                style={styles.input}
                                type="text"
                                id="apartamento"
                                name="apartamento"
                                value={formData.apartamento}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="vagasGaragem">Vagas de Garagem</label>
                    <input 
                        style={styles.input}
                        type="number"
                        id="vagasGaragem"
                        name="vagasGaragem"
                        value={formData.vagasGaragem}
                        onChange={handleChange}
                        min="0"
                        required
                    />
                </div>

                <button style={styles.button} type="submit">
                    Cadastrar Proprietário
                </button>
            </form>
        </div>
    );
};

export default CadastroProprietario;