from flask import Blueprint

from app.controllers import admin_controller

admin_bp = Blueprint("admin", __name__, url_prefix="/admin")


@admin_bp.route("/")
def dashboard():
    return admin_controller.dashboard()


@admin_bp.route("/usuarios")
def users():
    return admin_controller.users()


@admin_bp.route("/anuncios")
def items():
    return admin_controller.items()


@admin_bp.route("/pedidos")
def requests():
    return admin_controller.requests()
