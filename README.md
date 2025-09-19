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

2. Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto com:

DATABASE_URL="postgresql://usuario:senha@localhost:5432/documentacao_db"
PORT=3000

3. Subir banco via Docker

docker-compose up -d

4. Instalar dependências

npm install

5. Rodar migrations

npx prisma migrate dev

6. Iniciar a API

npm run start:dev

## 📖 Exemplos de Endpoints

### 👨‍💼 Employees
- `POST /employees` → Criar colaborador  
- `GET /employees` → Listar colaboradores  
- `GET /employees/:id` → Buscar colaborador por ID  
- `PUT /employees/:id` → Atualizar colaborador  
- `DELETE /employees/:id` → Remover colaborador  

### 📑 Document Types
- `POST /document-types` → Criar tipo de documento  
- `GET /document-types` → Listar tipos de documentos  
- `GET /document-types/:id` → Buscar tipo de documento por ID  
- `PUT /document-types/:id` → Atualizar tipo de documento  
- `DELETE /document-types/:id` → Remover tipo de documento  

### 🔗 Employee Documents
- `POST /employee-documents/link` → Vincular documentos a um colaborador  
- `POST /employee-documents/unlink` → Desvincular documentos de um colaborador  
- `POST /employee-documents/upload` → Upload de documento (referência de arquivo)  
- `GET /employee-documents/status/:employeeId` → Obter status de documentação de um colaborador  
- `GET /employee-documents/pending` → Listar documentos pendentes (com paginação e filtros)  

✨ Melhorias Futuras

🧪 Testes Automatizados (unitários e e2e com Jest e Supertest)

🔒 Autenticação & Autorização com JWT

🌍 Internacionalização (i18n) para mensagens de erro

📊 Documentação da API com Swagger/OpenAPI

☁️ Deploy em ambiente Cloud (Heroku, Render ou AWS ECS)

📦 CI/CD com GitHub Actions

👨‍💻 Autor

Desenvolvido por Lucas Meinen 🧑‍💻
