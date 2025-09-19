<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Projeto Documentação API - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 40px;
      color: #333;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    code {
      background: #f4f4f4;
      padding: 3px 6px;
      border-radius: 4px;
      font-size: 14px;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 15px;
      border-radius: 6px;
      overflow-x: auto;
    }
    ul {
      margin-left: 20px;
    }
    .badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: bold;
      margin-right: 8px;
      background: #3498db;
      color: #fff;
    }
    .section {
      margin-bottom: 40px;
    }
  </style>
</head>
<body>

  <h1>📂 Projeto Documentação API</h1>
  <p>
    API REST construída com <strong>NestJS</strong> e <strong>Prisma</strong> para gerenciar 
    <em>colaboradores</em>, <em>tipos de documentos</em> e o <em>status da documentação</em> enviada.
  </p>

  <div class="section">
    <h2>⚡ Funcionalidades</h2>
    <ul>
      <li><span class="badge">Colaboradores</span> Cadastro, listagem e atualização.</li>
      <li><span class="badge">Document Types</span> Cadastro e listagem de tipos de documentos (CPF, CTPS, RG...).</li>
      <li><span class="badge">Vinculação</span> Associar e remover documentos de um colaborador.</li>
      <li><span class="badge">Upload</span> Enviar documento (apenas referência de arquivo, sem conteúdo binário).</li>
      <li><span class="badge">Status</span> Obter status de documentação de um colaborador.</li>
      <li><span class="badge">Pendentes</span> Listar documentos pendentes de todos os colaboradores, com paginação e filtros.</li>
    </ul>
  </div>

  <div class="section">
    <h2>🛠️ Tecnologias Utilizadas</h2>
    <ul>
      <li>⚙️ <strong>NestJS</strong> (framework Node.js)</li>
      <li>🗄️ <strong>Prisma ORM</strong></li>
      <li>🐘 <strong>PostgreSQL</strong> (banco de dados)</li>
      <li>🐳 <strong>Docker & Docker Compose</strong></li>
      <li>✅ Interceptores, filtros e utils personalizados (erro HTTP, erro Prisma, logging, timeout, transform)</li>
    </ul>
  </div>

  <div class="section">
    <h2>🚀 Como Rodar Localmente</h2>
    <h3>1. Clonar o repositório</h3>
    <pre><code>git clone https://github.com/seu-usuario/projeto-documentacao-api.git
cd projeto-documentacao-api</code></pre>

    <h3>2. Configurar variáveis de ambiente</h3>
    <p>Crie um arquivo <code>.env</code> na raiz do projeto com:</p>
    <pre><code>DATABASE_URL="postgresql://usuario:senha@localhost:5432/documentacao_db"
PORT=3000</code></pre>

    <h3>3. Subir banco via Docker</h3>
    <pre><code>docker-compose up -d</code></pre>

    <h3>4. Instalar dependências</h3>
    <pre><code>npm install</code></pre>

    <h3>5. Rodar migrations</h3>
    <pre><code>npx prisma migrate dev</code></pre>

    <h3>6. Iniciar a API</h3>
    <pre><code>npm run start:dev</code></pre>
  </div>

  <div class="section">
    <h2>📖 Exemplos de Endpoints</h2>
    <ul>
      <li><code>POST /employees</code> → Cadastrar colaborador</li>
      <li><code>PUT /employees/:id</code> → Atualizar colaborador</li>
      <li><code>POST /document-types</code> → Criar tipo de documento</li>
      <li><code>POST /employee-documents/link</code> → Vincular documentos</li>
      <li><code>POST /employee-documents/unlink</code> → Desvincular documentos</li>
      <li><code>POST /employee-documents/:employeeId/:documentTypeId/upload</code> → Upload de documento</li>
      <li><code>GET /employee-documents/status/:employeeId</code> → Status de documentação</li>
      <li><code>GET /employee-documents/pending</code> → Listar pendentes</li>
    </ul>
  </div>

  <div class="section">
    <h2>✨ Melhorias Futuras</h2>
    <ul>
      <li>🧪 **Testes Automatizados** (unitários e e2e com Jest e Supertest).</li>
      <li>🔒 **Autenticação & Autorização** usando JWT.</li>
      <li>🌍 **Internacionalização (i18n)** para mensagens de erro.</li>
      <li>📊 **Documentação da API** com Swagger/OpenAPI.</li>
      <li>☁️ **Deploy em ambiente Cloud** (Heroku, Render ou AWS ECS).</li>
      <li>📦 **CI/CD** com GitHub Actions.</li>
    </ul>
  </div>

  <div class="section">
    <h2>👨‍💻 Autor</h2>
    <p>
      Desenvolvido por <strong>Lucas Meinen</strong> 🧑‍💻 <br>
      <a href="https://www.linkedin.com/in/lucasmeinen/" target="_blank">LinkedIn</a> | 
      <a href="mailto:lucas@email.com">Email</a>
    </p>
  </div>

</body>
</html>
