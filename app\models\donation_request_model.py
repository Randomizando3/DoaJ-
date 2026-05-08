from app.database.connection import get_connection


def create_request(item_id, user_id, mensagem):
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute(
        "INSERT INTO solicitacoes (anuncio_id, usuario_id, mensagem, status) VALUES (?, ?, ?, ?)",
        (item_id, user_id, mensagem, "pendente"),
    )
    conexao.commit()
    conexao.close()


def find_request(item_id, user_id):
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute(
        "SELECT * FROM solicitacoes WHERE anuncio_id = ? AND usuario_id = ?",
        (item_id, user_id),
    )
    pedido = cursor.fetchone()
    conexao.close()
    return pedido


def list_requests_by_user(user_id):
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute(
        """
        SELECT
            solicitacoes.*,
            anuncios.nome AS nome_anuncio,
            anuncios.localizacao AS localizacao_anuncio,
            usuarios.nome AS nome_doador
        FROM solicitacoes
        INNER JOIN anuncios ON anuncios.id = solicitacoes.anuncio_id
        INNER JOIN usuarios ON usuarios.id = anuncios.usuario_id
        WHERE solicitacoes.usuario_id = ?
        ORDER BY solicitacoes.id DESC
        """,
        (user_id,),
    )
    pedidos = cursor.fetchall()
    conexao.close()
    return pedidos


def list_all_requests():
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute(
        """
        SELECT
            solicitacoes.*,
            anuncios.nome AS nome_anuncio,
            solicitante.nome AS nome_solicitante,
            dono.nome AS nome_doador
        FROM solicitacoes
        INNER JOIN anuncios ON anuncios.id = solicitacoes.anuncio_id
        INNER JOIN usuarios AS solicitante ON solicitante.id = solicitacoes.usuario_id
        INNER JOIN usuarios AS dono ON dono.id = anuncios.usuario_id
        ORDER BY solicitacoes.id DESC
        """
    )
    pedidos = cursor.fetchall()
    conexao.close()
    return pedidos


def count_requests_by_user(user_id):
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute(
        "SELECT COUNT(*) AS total FROM solicitacoes WHERE usuario_id = ?",
        (user_id,),
    )
    total = cursor.fetchone()["total"]
    conexao.close()
    return total
