# 📂 Projeto Documentação API

API REST construída com **NestJS** e **Prisma** para gerenciar **colaboradores**, **tipos de documentos** e o **status da documentação** enviada.

---

## ⚡ Funcionalidades

- 👨‍💼 **Colaboradores** → Cadastro, listagem e atualização  
- 📑 **Document Types** → Cadastro e listagem de tipos de documentos (CPF, CTPS, RG...)  
- 🔗 **Vinculação** → Associar e remover documentos de um colaborador  
- 📤 **Upload** → Enviar documento (apenas referência de arquivo, sem conteúdo binário)  
- 📊 **Status** → Obter status de documentação de um colaborador  
- 🕓 **Pendentes** → Listar documentos pendentes de todos os colaboradores, com paginação e filtros  

---

## 🛠️ Tecnologias Utilizadas

- ⚙️ **NestJS** (framework Node.js)  
- 🗄️ **Prisma ORM**  
- 🐘 **PostgreSQL** (banco de dados)  
- 🐳 **Docker & Docker Compose**  
- ✅ **Interceptores, filtros e utils personalizados** (erro HTTP, erro Prisma, logging, timeout, transform)  

---

## 🚀 Como Rodar Localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/projeto-documentacao-api.git
cd projeto-documentacao-api
