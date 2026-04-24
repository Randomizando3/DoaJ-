from app.models import item_model
from app.utils.helpers import get_default_image, normalize_text
from app.utils.validators import text_is_filled


def list_items():
    return item_model.list_items()


def get_item_by_id(item_id):
    return item_model.get_item_by_id(item_id)


def list_items_by_user(user_id):
    return item_model.list_items_by_user(user_id)


def create_item(formulario, user_id, user_name):
    nome = normalize_text(formulario.get("nome"))
    localizacao = normalize_text(formulario.get("localizacao"))
    foto = normalize_text(formulario.get("foto"))
    descricao = normalize_text(formulario.get("descricao"))
    doador_nome = normalize_text(formulario.get("doador_nome"))
    categoria = normalize_text(formulario.get("categoria"))
    avaliacao = normalize_text(formulario.get("avaliacao_doador"))

    if not text_is_filled(nome):
        return False, "Preencha o nome do produto."

    if not text_is_filled(localizacao):
        return False, "Preencha a localizacao."

    if not text_is_filled(descricao):
        return False, "Preencha a descricao."

    if not text_is_filled(categoria):
        return False, "Escolha uma categoria."

    if not text_is_filled(doador_nome):
        doador_nome = user_name

    if not text_is_filled(avaliacao):
        avaliacao = "5.0"

    foto = get_default_image(foto)

    item_model.create_item(
        nome,
        localizacao,
        foto,
        descricao,
        doador_nome,
        categoria,
        avaliacao,
        user_id,
    )

    return True, "Anuncio criado com sucesso."


def get_dashboard_data():
    total = item_model.count_all_items()
    doados = item_model.count_donated_items()
    restantes = item_model.count_available_items()

    return {
        "total": total,
        "doados": doados,
        "restantes": restantes,
    }
