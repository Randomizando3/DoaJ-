from flask import Blueprint

from app.controllers import admin_controller, home_controller

home_bp = Blueprint("home", __name__)


@home_bp.route("/")
def index():
    return home_controller.index()


@home_bp.route("/dashboard")
def dashboard():
    return home_controller.dashboard()


@home_bp.route("/chat")
def chat():
    return home_controller.chat()


@home_bp.route("/perfil")
def profile():
    return home_controller.profile()


@home_bp.route("/perfil-publico/<int:usuario_id>")
def public_profile(usuario_id):
    return home_controller.public_profile(usuario_id)


@home_bp.route("/admin")
def admin_dashboard_redirect():
    return admin_controller.dashboard()
