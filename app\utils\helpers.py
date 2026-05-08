def normalize_text(valor):
    if valor is None:
        return ""

    return str(valor).strip()


def get_default_image(link):
    if link is None:
        return "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80"

    link = str(link).strip()

    if link == "":
        return "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80"

    return link
