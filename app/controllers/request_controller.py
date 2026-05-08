from flask import flash, redirect, render_template, request, session, url_for

from app.services import request_service
from app.utils.security import user_is_logged


def request_item(item_id):
    if not user_is_logged():
        flash("Entre primeiro para pedir uma doacao.")
        return redirect(url_for("auth.login"))

    mensagem = request.form.get("mensagem", "")
    deu_certo, resposta = request_service.create_request(
        item_id,
        session.get("user_id"),
        mensagem,
    )
    flash(resposta)
    return redirect(url_for("item.item_detail", item_id=item_id))


def my_requests():
    if not user_is_logged():
        flash("Entre primeiro para ver seus pedidos.")
        return redirect(url_for("auth.login"))

    pedidos = request_service.list_requests_by_user(session.get("user_id"))
    return render_template("my_requests.html", pedidos=pedidos)
