from app.models import donation_request_model, item_model


def create_request(item_id, user_id, mensagem):
    item = item_model.get_item_by_id(item_id)

    if item is None:
        return False, "Produto nao encontrado."

    if item["usuario_id"] == user_id:
        return False, "Voce nao pode pedir o seu proprio anuncio."

    if item["status"] != "disponivel":
        return False, "Esse item nao esta disponivel agora."

    pedido = donation_request_model.find_request(item_id, user_id)

    if pedido is not None:
        return False, "Voce ja pediu esse item."

    if mensagem is None or mensagem.strip() == "":
        mensagem = "Tenho interesse nessa doacao."

    donation_request_model.create_request(item_id, user_id, mensagem.strip())
    return True, "Pedido enviado com sucesso."


def list_requests_by_user(user_id):
    return donation_request_model.list_requests_by_user(user_id)


def count_requests_by_user(user_id):
    return donation_request_model.count_requests_by_user(user_id)
