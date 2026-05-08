from flask import session


def user_is_logged():
    if session.get("user_id"):
        return True
    return False


def user_is_admin():
    if session.get("user_type") == "admin":
        return True
    return False
