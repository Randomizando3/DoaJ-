from flask import Blueprint

from app.controllers import item_controller

item_bp = Blueprint("item", __name__)


@item_bp.route("/anuncios")
def items():
    return item_controller.items()


@item_bp.route("/produto/<int:item_id>")
def item_detail(item_id):
    return item_controller.item_detail(item_id)


@item_bp.route("/anunciar", methods=["GET", "POST"])
def create_item():
    return item_controller.create_item()


@item_bp.route("/meus-anuncios")
def my_items():
    return item_controller.my_items()
