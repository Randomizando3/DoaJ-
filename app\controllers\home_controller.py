from flask import flash, redirect, render_template, session, url_for

from app.services import auth_service, item_service, request_service
from app.utils.security import user_is_logged


def index():
    itens = item_service.list_items()
    return render_template("index.html", itens=itens)


def dashboard():
    if not user_is_logged():
        flash("Faca login para entrar no dashboard.")
        return redirect(url_for("auth.login"))

    resumo = item_service.get_dashboard_data()
    usuario = auth_service.get_user_by_id(session.get("user_id"))
    meus_itens = item_service.list_items_by_user(session.get("user_id"))
    meus_pedidos = request_service.list_requests_by_user(session.get("user_id"))

    return render_template(
        "dashboard.html",
        resumo=resumo,
        usuario=usuario,
        meus_itens=meus_itens,
        meus_pedidos=meus_pedidos,
    )


def chat():
    if not user_is_logged():
        flash("Entre primeiro para ver o chat.")
        return redirect(url_for("auth.login"))

    return render_template("chat.html")


def profile():
    if not user_is_logged():
        flash("Entre primeiro para ver o perfil.")
        return redirect(url_for("auth.login"))

    usuario_id = session.get("user_id")
    usuario = auth_service.get_user_by_id(usuario_id)
    itens = item_service.list_items_by_user(usuario_id)

    return render_template(
        "profile.html",
        usuario=usuario,
        itens=itens,
        publico=False,
    )


def public_profile(usuario_id):
    usuario = auth_service.get_user_by_id(usuario_id)

    if usuario is None:
        flash("Perfil nao encontrado.")
        return redirect(url_for("home.index"))

    itens = item_service.list_items_by_user(usuario_id)

    return render_template(
        "profile.html",
        usuario=usuario,
        itens=itens,
        publico=True,
    )
