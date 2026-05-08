import sqlite3
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "doa_ja.db"
SCHEMA_PATH = BASE_DIR / "schema.sql"


def get_connection():
    conexao = sqlite3.connect(DB_PATH)
    conexao.row_factory = sqlite3.Row
    return conexao


def init_database():
    script = SCHEMA_PATH.read_text(encoding="utf-8")
    conexao = None

    try:
        conexao = get_connection()
        conexao.executescript(script)
        conexao.commit()
    except sqlite3.DatabaseError:
        if conexao is not None:
            conexao.close()

        if DB_PATH.exists():
            DB_PATH.unlink()

        conexao = get_connection()
        conexao.executescript(script)
        conexao.commit()
    finally:
        if conexao is not None:
            conexao.close()
