# Marvel Comics Store

Loja virtual de quadrinhos da Marvel feita com React + Vite, estilização com Styled Components e gerenciamento de estado com Redux Toolkit. O projeto consome a [API oficial da Marvel](https://developer.marvel.com/) e simula funcionalidades de uma loja real como carrinho, visualização de detalhes, cupom de desconto.

## Funcionalidades

- 🔍 Listagem de HQs direto da API da Marvel
- 🛒 Carrinho de compras lateral com gerenciamento global via Redux
- 💬 Cupom de desconto com lógica de validação separada (pasta `helpers`)
- 💅 Estilização com Styled Components
- ⚙️ Preparação com Docker (opcional)

---

## Tecnologias Utilizadas

- [ReactJS](https://reactjs.org/) com [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Styled Components](https://styled-components.com/)
- [Lucide Icons](https://lucide.dev/)
- [Docker](https://www.docker.com/)

## Estrutura de Pastas

src/
├── assets/ # Imagens e logos
├── components/ # Componentes reutilizáveis (Header, Card, etc.)
├── features/ # Páginas principais e estilização (Home, Detalhes, etc.)
├── slices/ # Store + Slices
├── routes/ # Rotas da aplicação
├── helpers/ # Lógicas isoladas (ex: validação de cupom)

---

## Docker

Este projeto conta com um `Dockerfile` para facilitar o deploy em ambientes que suportam containers. A Vercel **não suporta** diretamente containers Docker, mas o Docker foi incluído no projeto para fins de **demonstração técnica**.
