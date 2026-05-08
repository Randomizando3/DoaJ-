from app.models import user_model
from app.utils.validators import email_is_valid, text_is_filled


def login_user(email, senha):
    if not text_is_filled(email) or not text_is_filled(senha):
        return False, "Preencha email e senha."

    usuario = user_model.get_user_by_email_and_password(email.strip(), senha.strip())

    if usuario is None:
        return False, "Email ou senha invalidos."

    return True, usuario


def register_user(nome, email, senha, tipo, localizacao):
    if not text_is_filled(nome):
        return False, "Preencha o nome."

    if not email_is_valid(email):
        return False, "Digite um email valido."

    if not text_is_filled(senha) or len(senha.strip()) < 6:
        return False, "A senha precisa ter pelo menos 6 caracteres."

    if not text_is_filled(localizacao):
        return False, "Preencha a localizacao."

    if tipo != "doador" and tipo != "receptor":
        tipo = "receptor"

    deu_certo = user_model.create_user(
        nome.strip(),
        email.strip().lower(),
        senha.strip(),
        tipo,
        localizacao.strip(),
    )

    if not deu_certo:
        return False, "Ja existe um usuario com esse email."

    return True, "Cadastro feito com sucesso."


def get_user_by_id(user_id):
    if not user_id:
        return None
    return user_model.get_user_by_id(user_id)
