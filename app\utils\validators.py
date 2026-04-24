def text_is_filled(texto):
    if texto is None:
        return False

    if str(texto).strip() == "":
        return False

    return True


def email_is_valid(email):
    if not text_is_filled(email):
        return False

    email = str(email).strip()

    if "@" not in email:
        return False

    if "." not in email:
        return False

    return True
