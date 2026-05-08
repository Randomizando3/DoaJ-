from flask import flash, redirect, render_template, url_for

from app.services import admin_service
from app.utils.security import user_is_admin


def dashboard():
    if not user_is_admin():
        flash("Somente o admin pode entrar nessa parte.")
        return redirect(url_for("home.index"))

    resumo = admin_service.get_admin_data()
    usuarios = admin_service.list_users()
    itens = admin_service.list_items()
    pedidos = admin_service.list_requests()

    return render_template(
        "admin/admin_dashboard.html",
        resumo=resumo,
        usuarios=usuarios,
        itens=itens,
        pedidos=pedidos,
    )


def users():
    if not user_is_admin():
        flash("Somente o admin pode entrar nessa parte.")
        return redirect(url_for("home.index"))

    usuarios = admin_service.list_users()
    return render_template("admin/admin_users.html", usuarios=usuarios)


def items():
    if not user_is_admin():
        flash("Somente o admin pode entrar nessa parte.")
        return redirect(url_for("home.index"))

    itens = admin_service.list_items()
    return render_template("admin/admin_items.html", itens=itens)


def requests():
    if not user_is_admin():
        flash("Somente o admin pode entrar nessa parte.")
        return redirect(url_for("home.index"))

    pedidos = admin_service.list_requests()
    return render_template("admin/admin_requests.html", pedidos=pedidos)
