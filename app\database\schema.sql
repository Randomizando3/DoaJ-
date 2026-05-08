CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    tipo TEXT NOT NULL,
    localizacao TEXT NOT NULL,
    avaliacao REAL DEFAULT 0,
    bio TEXT
);

CREATE TABLE IF NOT EXISTS anuncios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    localizacao TEXT NOT NULL,
    foto TEXT,
    descricao TEXT NOT NULL,
    doador_nome TEXT NOT NULL,
    categoria TEXT NOT NULL,
    avaliacao_doador REAL DEFAULT 0,
    status TEXT NOT NULL DEFAULT 'disponivel',
    usuario_id INTEGER NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);

CREATE TABLE IF NOT EXISTS solicitacoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    anuncio_id INTEGER NOT NULL,
    usuario_id INTEGER NOT NULL,
    mensagem TEXT,
    status TEXT NOT NULL DEFAULT 'pendente',
    FOREIGN KEY (anuncio_id) REFERENCES anuncios (id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);

INSERT OR IGNORE INTO usuarios
(id, nome, email, senha, tipo, localizacao, avaliacao, bio)
VALUES
(1, 'Admin Doa Ja', 'admin@doaja.com', '123456', 'admin', 'Sao Paulo - SP', 5.0, 'Usuario admin para teste.'),
(2, 'Carlos Doador', 'doador@doaja.com', '123456', 'doador', 'Campinas - SP', 4.9, 'Gosta de doar itens em bom estado.'),
(3, 'Mariana Receptora', 'receptor@doaja.com', '123456', 'receptor', 'Santos - SP', 4.7, 'Procura itens para a familia.');

INSERT OR IGNORE INTO anuncios
(id, nome, localizacao, foto, descricao, doador_nome, categoria, avaliacao_doador, status, usuario_id)
VALUES
(1, 'Cadeira de escritorio', 'Campinas - SP', 'https://images.unsplash.com/photo-1505843490701-5be5d6b19f8f?auto=format&fit=crop&w=900&q=80', 'Cadeira usada mas em bom estado para estudo ou trabalho.', 'Carlos Doador', 'moveis', 4.9, 'disponivel', 2),
(2, 'Kit de roupas infantis', 'Campinas - SP', 'https://images.unsplash.com/photo-1519238359922-989348752efb?auto=format&fit=crop&w=900&q=80', 'Roupas infantis separadas por tamanho e bem conservadas.', 'Carlos Doador', 'roupa', 4.9, 'doado', 2),
(3, 'Tenis esportivo', 'Campinas - SP', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80', 'Tenis tamanho 40 em bom estado para uso diario.', 'Carlos Doador', 'calcado', 4.9, 'disponivel', 2);

INSERT OR IGNORE INTO solicitacoes
(id, anuncio_id, usuario_id, mensagem, status)
VALUES
(1, 1, 3, 'Tenho interesse para usar nos estudos em casa.', 'pendente');
