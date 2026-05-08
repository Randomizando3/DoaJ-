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
(1, 'Urso de Pelucia Gigante', 'Sao Paulo - SP', 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'Urso em otimo estado, recem lavado. Perfeito para criancas.', 'Carlos Doador', 'brinquedo', 4.9, 'disponivel', 2),
(2, 'Camiseta Basica Branca', 'Sao Paulo - SP', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'Tamanho M. Usada apenas duas vezes, sem manchas.', 'Carlos Doador', 'camiseta', 4.9, 'disponivel', 2),
(3, 'Calca Jeans Skinny', 'Sao Paulo - SP', 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'Calca jeans masculina tamanho 40. Otimo caimento.', 'Carlos Doador', 'calca', 4.9, 'disponivel', 2),
(4, 'Tenis Esportivo Nike', 'Sao Paulo - SP', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'Tenis de corrida tamanho 41. Solado ainda muito bom.', 'Carlos Doador', 'calcado', 4.9, 'disponivel', 2),
(5, 'Blocos de Montar', 'Sao Paulo - SP', 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'Caixa com 500 pecas coloridas. Algumas pecas faltando.', 'Carlos Doador', 'brinquedo', 4.9, 'disponivel', 2),
(6, 'Jaqueta Corta Vento', 'Sao Paulo - SP', 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'Tamanho G. Impermeavel e super leve.', 'Carlos Doador', 'camiseta', 4.9, 'disponivel', 2);

INSERT OR IGNORE INTO solicitacoes
(id, anuncio_id, usuario_id, mensagem, status)
VALUES
(1, 1, 3, 'Tenho interesse para usar nos estudos em casa.', 'pendente');
