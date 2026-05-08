CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    avaliação REAL,
);

CREATE TABLE anuncios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descricao TEXT,
    categoria TEXT NOT NULL, -- brinquedo, camiseta, calca, calcado
    imagem_url TEXT NOT NULL,
    localização TEXT NOT NULL,
    usuario_id INTEGER,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Inserindo um usuário de teste (para simular o login)
INSERT INTO usuarios (nome, email, senha, avaliação) 
VALUES ('Noam Felix', 'noam@email.com', '123456', '4,1');
VALUES ('Gabriel Neres', 'gabriel@email.com', '111111', '4,1');
VALUES ('Gabreil landi', 'landi@email.com', '133336', '4,1');
VALUES ('Maxmiliano', 'max@email.com', '654321', '4,1');

-- Inserindo anúncios iniciais vinculados ao usuário 1
INSERT INTO anuncios (titulo, descricao, categoria, imagem_url, localização, usuario_id) 
VALUES ('Urso de Pelúcia Gigante', 'Perfeito para crianças, em ótimo estado.', 'brinquedo', 'https://exemplo.com', 'SP', 1);

INSERT INTO anuncios (titulo, descricao, categoria, imagem_url, localização, usuario_id) 
VALUES ('Camiseta Básica Branca', 'Tamanho M, sem manchas.', 'camiseta', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600', 'SP', 1);