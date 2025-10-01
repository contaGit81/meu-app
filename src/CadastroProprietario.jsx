import React, { useState } from 'react';

/* Estilos básicos para o exemplo (Corrigido o erro de sintaxe nos objetos JS)*/
const styles = {
  form: {
    padding: '20px',
    maxWidth: '500px',
    margin: '30px auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }, // <--- Faltava a vírgula aqui
  inputGroup: { // <--- A chave precisa de dois pontos (:) após o nome da propriedade
    marginBottom: '15px' // <--- Faltava o sinal de dois pontos (:)
  }, // <--- Faltava a vírgula aqui
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box'
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

const CadastroProprietario = () => {
  // 1. Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    bloco: '',
    apartamento: '',
    vagas: 1,
  });

  // 2. Manipulador genérico de mudança de input
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
    console.log("Dados do Proprietário Cadastrados:", formData);
    // Aqui você faria a chamada à API para salvar os dados
    alert(`Proprietário ${formData.nome} do Bloco ${formData.bloco}, Ap. ${formData.apartamento} cadastrado com sucesso!`);

    // Opcional: Limpar o formulário após o envio
    // setFormData({
    //   nome: '', email: '', telefone: '', cpf: '', 
    //   bloco: '', apartamento: '', vagas: 1,
    // });
  };

  return (
    <div style={styles.form}>
      <h2>Cadastro de Proprietário</h2>
      <form onSubmit={handleSubmit}>
        
        {/* INFORMAÇÕES PESSOAIS */}
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
            maxLength="14" // Para incluir máscara, se usar uma
            required
          />
        </div>

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

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="telefone">Telefone</label>
          <input 
            style={styles.input}
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>

        <hr style={{ margin: '20px 0' }}/>
        
        {/* INFORMAÇÕES DA UNIDADE - Adicionado campos bloco, apartamento e vagas */}
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="bloco">Bloco</label>
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

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="apartamento">Apartamento</label>
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
        
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="vagas">Número de Vagas</label>
          <input 
            style={styles.input}
            type="number"
            id="vagas"
            name="vagas"
            value={formData.vagas}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        
        <button style={styles.button} type="submit">Cadastrar Proprietário</button>
      </form>
    </div>
  );
};

export default CadastroProprietario;
