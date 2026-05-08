from flask import Flask

from app.database.connection import init_database
from app.routes.admin_routes import admin_bp
from app.routes.auth_routes import auth_bp
from app.routes.home_routes import home_bp
from app.routes.item_routes import item_bp
from app.routes.request_routes import request_bp


def create_app():
    app = Flask(__name__)
    app.secret_key = "doa-ja-2026"

    init_database()

    app.register_blueprint(home_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(item_bp)
    app.register_blueprint(request_bp)
    app.register_blueprint(admin_bp)

    return app
