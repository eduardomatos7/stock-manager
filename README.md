# Gerenciamento de Estoque

## Motivo
Este projeto foi desenvolvido com o objetivo de aplicar conhecimentos em **React** e no uso do **LocalStorage** para criar uma aplicação funcional e prática. Ele serve como um exemplo de como gerenciar estados, criar componentes reutilizáveis e manipular dados localmente no navegador.

## Stacks
As principais tecnologias utilizadas neste projeto são:
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Gerenciamento de rotas para navegação entre páginas.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build rápida para desenvolvimento.
- **CSS**: Estilização da interface do usuário, utilizando em módulos e o css tradicional.

## O que o site faz
O site é uma aplicação de gerenciamento de estoque que permite:
1. **Adicionar Itens**: Adicione novos itens ao estoque com informações como nome, quantidade, preço, categoria, descrição e datas de cadastro/atualização.
2. **Remover Itens**: Exclua itens do estoque de forma simples.
3. **Editar Itens**: Atualize as informações de itens existentes.
4. **Listar Itens**: Veja uma lista completa de todos os itens cadastrados.
5. **Dashboard**: Visualize dados consolidados, como:
   - Diversidade de itens (quantidade de itens únicos).
   - Inventário total (soma das quantidades de todos os itens).
   - Itens recentes (adicionados nos últimos 10 dias).
   - Itens acabando (quantidade menor que 10).
6. **Detalhes de Itens**: Veja informações detalhadas de um item específico.

## Estrutura do Projeto
- **Páginas**:
  - `Home`: Exibe o dashboard e tabelas com itens recentes e itens acabando.
  - `Items`: Permite adicionar novos itens, listar todos os itens e visualizar detalhes de itens específicos.
- **Componentes**:
  - `Dashboard`: Mostra os dados consolidados do estoque.
  - `Tables`: Exibe tabelas com itens recentes e itens acabando.
  - `NewItem`: Formulário para adicionar ou editar itens.
  - `ListItem`: Lista todos os itens cadastrados.
  - `ShowDetails`: Exibe os detalhes de um item específico.
  - `Header`: Navegação entre as páginas.
  - `Title`: Exibe títulos das páginas.
- **Contexto**:
  - `StockContext`: Gerencia o estado global do estoque e fornece funções para manipulação dos itens.
- **Estilização**:
  - CSS modularizado para cada componente e página.

## Como funciona
Os dados do estoque são armazenados no **LocalStorage**, garantindo que as informações persistam mesmo após o fechamento do navegador. Todas as operações (adicionar, editar, excluir) atualizam automaticamente o LocalStorage.

## Como executar o projeto
1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse o site no navegador em: [http://localhost:5173](http://localhost:5173)

## Contribuição
Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades. Para isso:
1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade:
   ```bash
   git checkout -b minha-nova-funcionalidade
   ```
3. Faça o commit das alterações:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie as alterações:
   ```bash
   git push origin minha-nova-funcionalidade
   ```
5. Abra um Pull Request.

## Licença
Este projeto é de uso livre e aberto para aprendizado e desenvolvimento pessoal.

