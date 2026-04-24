from flask import flash, redirect, render_template, request, session, url_for

from app.services import item_service
from app.utils.security import user_is_logged


def items():
    itens = item_service.list_items()
    return render_template("item_list.html", itens=itens)


def item_detail(item_id):
    item = item_service.get_item_by_id(item_id)

    if item is None:
        flash("Produto nao encontrado.")
        return redirect(url_for("home.index"))

    return render_template("item_detail.html", item=item)


def create_item():
    if not user_is_logged():
        flash("Entre primeiro para criar um anuncio.")
        return redirect(url_for("auth.login"))

    if request.method == "POST":
        deu_certo, resposta = item_service.create_item(
            request.form,
            session.get("user_id"),
            session.get("user_name"),
        )
        flash(resposta)

        if deu_certo:
            return redirect(url_for("item.my_items"))

    return render_template("create_item.html")


def my_items():
    if not user_is_logged():
        flash("Entre primeiro para ver seus anuncios.")
        return redirect(url_for("auth.login"))

    itens = item_service.list_items_by_user(session.get("user_id"))
    return render_template("my_items.html", itens=itens)
