# Doa Ja

Projeto academico simples para cadastro e busca de itens de doacao.

## O que ja esta feito

- Tela inicial com navbar, rodape, busca e filtros.
- Login com SQLite.
- Registro de usuario.
- Dashboard com total de itens, itens doados e itens restantes.
- Pagina de produto.
- Pagina de anunciar.
- Lista dos meus anuncios.
- Lista dos meus pedidos.
- Perfil do usuario e perfil publico.
- Chat visual.
- Area admin simples.

## Tecnologias

- Python
- Flask
- SQLite
- HTML
- CSS
- JavaScript

## Como rodar

1. Tenha o Python 3 instalado.
2. Abra o terminal na pasta do projeto.
3. Instale as dependencias:

```bash
pip install -r requirements.txt
```

4. Rode o projeto:

```bash
python run.py
```

5. Abra no navegador:

```text
http://127.0.0.1:5000
```

## Usuarios de teste

- Admin
  - Email: `admin@doaja.com`
  - Senha: `123456`
- Doador
  - Email: `doador@doaja.com`
  - Senha: `123456`
- Receptor
  - Email: `receptor@doaja.com`
  - Senha: `123456`

Esses usuarios sao criados pelo arquivo [app/database/schema.sql](/D:/PROJETOS/004%20-%20PIM%20FATEC/app/database/schema.sql) quando o sistema inicia.

## Arquivos principais para editar

- [run.py](/D:/PROJETOS/004%20-%20PIM%20FATEC/run.py): ponto de entrada.
- [app/main.py](/D:/PROJETOS/004%20-%20PIM%20FATEC/app/main.py): cria a aplicacao Flask.
- [app/database/connection.py](/D:/PROJETOS/004%20-%20PIM%20FATEC/app/database/connection.py): conexao com SQLite.
- [app/database/schema.sql](/D:/PROJETOS/004%20-%20PIM%20FATEC/app/database/schema.sql): tabelas e usuarios iniciais.
- [app/routes](</D:/PROJETOS/004%20-%20PIM%20FATEC/app/routes>): rotas da aplicacao.
- [app/controllers](</D:/PROJETOS/004%20-%20PIM%20FATEC/app/controllers>): controle das paginas.
- [app/services](</D:/PROJETOS/004%20-%20PIM%20FATEC/app/services>): regras simples de negocio.
- [app/models](</D:/PROJETOS/004%20-%20PIM%20FATEC/app/models>): consultas no banco.
- [app/templates](</D:/PROJETOS/004%20-%20PIM%20FATEC/app/templates>): paginas HTML.
- [app/static/css/style.css](/D:/PROJETOS/004%20-%20PIM%20FATEC/app/static/css/style.css): estilo geral.
- [app/static/css/auth.css](/D:/PROJETOS/004%20-%20PIM%20FATEC/app/static/css/auth.css): estilo do login e registro.
- [app/static/js/app.js](/D:/PROJETOS/004%20-%20PIM%20FATEC/app/static/js/app.js): menu, busca, filtros, preview da foto e chat.

## Estrutura basica

```text
app/
  controllers/
  database/
  models/
  routes/
  services/
  static/
  templates/
  utils/
```

## Observacao

O banco e iniciado automaticamente ao abrir o projeto. Se quiser limpar tudo e recriar os dados iniciais, basta apagar o arquivo `app/database/doa_ja.db` e rodar o `python run.py` de novo.
