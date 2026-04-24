from app.models import admin_model, donation_request_model, item_model, user_model


def get_admin_data():
    return admin_model.get_admin_data()


def list_users():
    return user_model.list_users()


def list_items():
    return item_model.list_items()


def list_requests():
    return donation_request_model.list_all_requests()
