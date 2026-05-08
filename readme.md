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
- Versao sem backend para abrir direto pelo navegador.

## Tecnologias

- Python
- Flask
- SQLite
- HTML
- CSS
- JavaScript

## Passo a passo para iniciar o projeto completo

### 1. Baixar o Python

1. Entre no site oficial:

```text
https://www.python.org/downloads/
```

2. Baixe a versao mais recente do Python para Windows.
3. Na instalacao, marque a opcao:

```text
Add python.exe to PATH
```

4. Depois de instalar, abra o PowerShell e teste:

```bash
python --version
```

Se aparecer a versao do Python, deu certo.

### 2. Baixar o Git

1. Entre no site oficial:

```text
https://git-scm.com/downloads
```

2. Instale o Git.
3. Depois teste no PowerShell:

```bash
git --version
```

### 3. Clonar o projeto

Escolha uma pasta no computador e rode:

```bash
git clone https://github.com/Randomizando3/DoaJ-.git
```

Depois entre na pasta:

```bash
cd DoaJ-
```

Se o projeto ja estiver baixado no computador, basta abrir o PowerShell dentro da pasta do projeto.

### 4. Instalar as dependencias

Dentro da pasta do projeto, rode:

```bash
pip install -r requirements.txt
```

Esse comando instala o Flask, que e usado para rodar o backend.

### 5. Iniciar o projeto

Rode:

```bash
python run.py
```

Depois abra no navegador:

```text
http://127.0.0.1:5000
```

### 6. Parar o projeto

No terminal onde o projeto esta rodando, aperte:

```text
CTRL + C
```

## Usuarios de teste do projeto completo

- Admin: `admin@doaja.com` / `123456`
- Doador: `doador@doaja.com` / `123456`
- Receptor: `receptor@doaja.com` / `123456`

Esses usuarios sao criados pelo arquivo `app/database/schema.sql` quando o sistema inicia.

## Como recriar o banco

Se quiser apagar dados de teste e voltar para o inicio:

1. Pare o projeto com `CTRL + C`.
2. Apague o arquivo:

```text
app/database/doa_ja.db
```

3. Rode de novo:

```bash
python run.py
```

## Versao sem backend

Tambem existe uma versao simples para editar rapido, sem Python, sem Flask e sem SQLite.

Ela fica na pasta:

```text
versao_sem_backend
```

Para usar:

1. Abra a pasta `versao_sem_backend`.
2. Abra o arquivo `index.html` no navegador.
3. Para testar login, use:

```text
admin@doaja.com / 123456
doador@doaja.com / 123456
receptor@doaja.com / 123456
```

Essa versao usa dados fixos no JavaScript. O login nao consulta banco de dados. Ela serve para colegas mexerem em HTML, CSS e JS mais rapido.

## Como mandar a versao sem backend por ZIP

Foi criado o arquivo:

```text
doa-ja-sem-backend.zip
```

Quem receber esse ZIP precisa apenas extrair a pasta e abrir:

```text
index.html
```

## Arquivos principais para editar no projeto completo

- `run.py`: ponto de entrada.
- `app/main.py`: cria a aplicacao Flask.
- `app/database/connection.py`: conexao com SQLite.
- `app/database/schema.sql`: tabelas e usuarios iniciais.
- `app/routes`: rotas da aplicacao.
- `app/controllers`: controle das paginas.
- `app/services`: regras simples de negocio.
- `app/models`: consultas no banco.
- `app/templates`: paginas HTML.
- `app/static/css/style.css`: estilo geral.
- `app/static/css/auth.css`: estilo do login e registro.
- `app/static/js/app.js`: menu, busca, filtros, preview da foto e chat.

## Arquivos principais para editar na versao sem backend

- `versao_sem_backend/index.html`: pagina inicial.
- `versao_sem_backend/login.html`: login fake com JavaScript.
- `versao_sem_backend/registro.html`: cadastro visual.
- `versao_sem_backend/produto.html`: pagina de produto.
- `versao_sem_backend/anunciar.html`: formulario visual de anuncio.
- `versao_sem_backend/css/style.css`: visual geral.
- `versao_sem_backend/css/auth.css`: visual do login e cadastro.
- `versao_sem_backend/js/dados.js`: usuarios e produtos fixos.
- `versao_sem_backend/js/site.js`: menu, busca, filtros e login fake.

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

versao_sem_backend/
  css/
  img/
  js/
  index.html
  login.html
```
