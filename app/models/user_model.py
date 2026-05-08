import sqlite3

from app.database.connection import get_connection


def get_user_by_email_and_password(email, senha):
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute(
        "SELECT * FROM usuarios WHERE email = ? AND senha = ?",
        (email, senha),
    )
    usuario = cursor.fetchone()
    conexao.close()
    return usuario


def get_user_by_email(email):
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute("SELECT * FROM usuarios WHERE email = ?", (email,))
    usuario = cursor.fetchone()
    conexao.close()
    return usuario


def get_user_by_id(user_id):
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute("SELECT * FROM usuarios WHERE id = ?", (user_id,))
    usuario = cursor.fetchone()
    conexao.close()
    return usuario


def list_users():
    conexao = get_connection()
    cursor = conexao.cursor()
    cursor.execute("SELECT * FROM usuarios ORDER BY id")
    usuarios = cursor.fetchall()
    conexao.close()
    return usuarios


def create_user(nome, email, senha, tipo, localizacao):
    conexao = get_connection()
    cursor = conexao.cursor()

    try:
        cursor.execute(
            """
            INSERT INTO usuarios (nome, email, senha, tipo, localizacao, avaliacao, bio)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            """,
            (nome, email, senha, tipo, localizacao, 5.0, "Usuario novo da plataforma."),
        )
        conexao.commit()
        deu_certo = True
    except sqlite3.IntegrityError:
        deu_certo = False

    conexao.close()
    return deu_certo
