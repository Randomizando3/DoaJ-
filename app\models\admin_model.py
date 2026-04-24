from app.database.connection import get_connection


def get_admin_data():
    conexao = get_connection()
    cursor = conexao.cursor()

    cursor.execute("SELECT COUNT(*) AS total FROM usuarios")
    total_usuarios = cursor.fetchone()["total"]

    cursor.execute("SELECT COUNT(*) AS total FROM anuncios")
    total_anuncios = cursor.fetchone()["total"]

    cursor.execute("SELECT COUNT(*) AS total FROM solicitacoes")
    total_pedidos = cursor.fetchone()["total"]

    conexao.close()

    return {
        "total_usuarios": total_usuarios,
        "total_anuncios": total_anuncios,
        "total_pedidos": total_pedidos,
    }
