from flask import Blueprint

from app.controllers import auth_controller

auth_bp = Blueprint("auth", __name__)


@auth_bp.route("/login", methods=["GET", "POST"])
def login():
    return auth_controller.login()


@auth_bp.route("/registro", methods=["GET", "POST"])
def register():
    return auth_controller.register()


@auth_bp.route("/logout")
def logout():
    return auth_controller.logout()
