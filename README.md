###Documentação Técnica: Projeto “Hotel Crystal Palace”

-Índice
-Visão Geral
-Tecnologias Utilizadas
-Estrutura do Projeto
-Configuração e Execução
-Funcionalidades
-APIs
-Considerações Finais

###1. Visão Geral
O Hotel Crystal Palace é um sistema de gerenciamento hoteleiro completo, projetado para otimizar a administração de hotéis. Com este sistema, você pode gerenciar reservas, clientes, quartos, e diversas operações administrativas com facilidade. Ele é desenvolvido para oferecer uma interface intuitiva e uma robusta estrutura de backend que garante eficiência e segurança.

###2. Tecnologias Utilizadas
-Backend:
-Node.js: Plataforma para execução de código JavaScript no servidor.
-Express.js: Framework para construção de APIs e servidores HTTP.
-MongoDB: Banco de dados NoSQL para armazenamento de dados.
-Mongoose: Biblioteca para modelagem de dados em MongoDB.
-Frontend:
-React.js: Biblioteca para construção de interfaces de usuário.
-Redux: Biblioteca para gerenciamento de estado.
-Bootstrap: Framework CSS para estilização e responsividade.
-Autenticação:
-JWT (JsonWebToken): Para autenticação e autorização seguras.

###3. Estrutura do Projeto
Abaixo, está a estrutura detalhada do projeto, dividida em backend e frontend:

Hotel_Crystal_Palace-main/
│
├── backend/
│   ├── controllers/            # Lógica de controle do servidor
│   ├── models/                 # Modelos de dados
│   ├── routes/                 # Definição das rotas da API
│   ├── config/                 # Configurações gerais (ex: banco de dados)
│   ├── app.js                  # Arquivo principal do servidor
│   └── package.json            # Gerenciamento de dependências
│
├── frontend/
│   ├── public/                 # Arquivos públicos estáticos
│   ├── src/
│   │   ├── components/         # Componentes React
│   │   ├── redux/              # Arquivos Redux
│   │   ├── App.js              # Componente principal
│   │   └── index.js            # Ponto de entrada da aplicação React
│   └── package.json            # Gerenciamento de dependências
│
├── README.md                   # Documentação inicial do projeto
└── .gitignore                  # Arquivos e pastas ignoradas pelo Git


4. Configuração e Execução
Backend
Instalação das Dependências:
Acesse o diretório backend:

cd backend


Instale as dependências necessárias:

npm install


Configuração do Banco de Dados:
Configure o MongoDB no arquivo backend/config/database.js de acordo com as suas credenciais e URI do MongoDB.
Execução:
Inicie o servidor:

npm start


O servidor estará disponível em http://localhost:5000.
Frontend
Instalação das Dependências:
Acesse o diretório frontend:

cd frontend


Instale as dependências:

npm install


Execução:
Inicie o servidor de desenvolvimento do React:

npm start


- A aplicação estará disponível em http://localhost:3000.

###5. Funcionalidades
O sistema “Hotel Crystal Palace” oferece as seguintes funcionalidades:
Gestão de Reservas:
Criar, atualizar e cancelar reservas.
Verificar disponibilidade de quartos.
Administração de Quartos:
Adicionar, editar e remover informações de quartos.
Gerenciar características dos quartos, como tipo e status.
Gerenciamento de Clientes:
Visualizar e editar informações dos clientes.
Registro e autenticação de clientes.
Interface de Usuário:
Painel de controle intuitivo para visualização e gerenciamento das operações do hotel.

###6. APIs
O backend do “Hotel Crystal Palace” fornece uma API RESTful para comunicação com o frontend. Abaixo estão os principais endpoints disponíveis:
Reservas:
GET /reservas: Retorna todas as reservas.
POST /reservas: Cria uma nova reserva.
PUT /reservas/:id: Atualiza uma reserva existente.
DELETE /reservas/:id: Exclui uma reserva.
Quartos:
GET /quartos: Retorna todos os quartos.
POST /quartos: Adiciona um novo quarto.
PUT /quartos/:id: Atualiza as informações de um quarto.
DELETE /quartos/:id: Remove um quarto.
Clientes:
GET /clientes: Lista todos os clientes.
POST /clientes: Adiciona um novo cliente.
PUT /clientes/:id: Atualiza os dados de um cliente.
DELETE /clientes/:id: Remove um cliente.

###7. Considerações Finais
Segurança: A autenticação JWT deve ser corretamente configurada para garantir a segurança das rotas protegidas.
Manutenção: O sistema deve ser regularmente monitorado e atualizado para assegurar o bom funcionamento e a incorporação de novas funcionalidades.
Melhorias Futuras: Recomenda-se a implementação de testes unitários e funcionais para aumentar a robustez e confiabilidade do sistema.
Para qualquer dúvida ou suporte, entre em contato com a equipe de desenvolvimento ou consulte a documentação no arquivo README.md do repositório principal.

Hotel Crystal Palace - Sistema de Gerenciamento Hoteleiro

Preparado por: Vivianne Christi
Data:16 de Junho de 2024

