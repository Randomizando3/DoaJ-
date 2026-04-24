from app.database.connection import get_connection


def list_items():
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute(
        """
        SELECT
            anuncios.*,
            usuarios.nome AS nome_usuario,
            usuarios.tipo AS tipo_usuario
        FROM anuncios
        INNER JOIN usuarios ON usuarios.id = anuncios.usuario_id
        ORDER BY anuncios.id DESC
        """
    )
    itens = cursor.fetchall()
    conexao.close()
    return itens


def get_item_by_id(item_id):
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute(
        """
        SELECT
            anuncios.*,
            usuarios.nome AS nome_usuario,
            usuarios.tipo AS tipo_usuario
        FROM anuncios
        INNER JOIN usuarios ON usuarios.id = anuncios.usuario_id
        WHERE anuncios.id = ?
        """,
        (item_id,),
    )
    item = cursor.fetchone()
    conexao.close()
    return item


def list_items_by_user(user_id):
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute(
        """
        SELECT
            anuncios.*,
            usuarios.nome AS nome_usuario
        FROM anuncios
        INNER JOIN usuarios ON usuarios.id = anuncios.usuario_id
        WHERE anuncios.usuario_id = ?
        ORDER BY anuncios.id DESC
        """,
        (user_id,),
    )
    itens = cursor.fetchall()
    conexao.close()
    return itens


def create_item(
    nome,
    localizacao,
    foto,
    descricao,
    doador_nome,
    categoria,
    avaliacao_doador,
    usuario_id,
):
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute(
        """
        INSERT INTO anuncios
        (nome, localizacao, foto, descricao, doador_nome, categoria, avaliacao_doador, status, usuario_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (
            nome,
            localizacao,
            foto,
            descricao,
            doador_nome,
            categoria,
            avaliacao_doador,
            "disponivel",
            usuario_id,
        ),
    )
    conexao.commit()
    conexao.close()


def count_all_items():
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute("SELECT COUNT(*) AS total FROM anuncios")
    total = cursor.fetchone()["total"]
    conexao.close()
    return total


def count_donated_items():
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute("SELECT COUNT(*) AS total FROM anuncios WHERE status = 'doado'")
    total = cursor.fetchone()["total"]
    conexao.close()
    return total


def count_available_items():
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute("SELECT COUNT(*) AS total FROM anuncios WHERE status = 'disponivel'")
    total = cursor.fetchone()["total"]
    conexao.close()
    return total
