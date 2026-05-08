from flask import Blueprint

from app.controllers import request_controller

request_bp = Blueprint("request", __name__)


@request_bp.route("/solicitar/<int:item_id>", methods=["POST"])
def request_item(item_id):
    return request_controller.request_item(item_id)


@request_bp.route("/meus-pedidos")
def my_requests():
    return request_controller.my_requests()
