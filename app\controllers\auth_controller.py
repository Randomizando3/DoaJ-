from flask import flash, redirect, render_template, request, session, url_for

from app.services import auth_service


def login():
    if session.get("user_id"):
        if session.get("user_type") == "admin":
            return redirect(url_for("admin.dashboard"))
        return redirect(url_for("home.dashboard"))

    if request.method == "POST":
        email = request.form.get("email", "")
        senha = request.form.get("senha", "")

        deu_certo, resposta = auth_service.login_user(email, senha)

        if deu_certo:
            session["user_id"] = resposta["id"]
            session["user_name"] = resposta["nome"]
            session["user_type"] = resposta["tipo"]
            flash("Login feito com sucesso.")

            if resposta["tipo"] == "admin":
                return redirect(url_for("admin.dashboard"))
            return redirect(url_for("home.dashboard"))

        flash(resposta)

    return render_template("login.html")


def register():
    if request.method == "POST":
        nome = request.form.get("nome", "")
        email = request.form.get("email", "")
        senha = request.form.get("senha", "")
        tipo = request.form.get("tipo", "receptor")
        localizacao = request.form.get("localizacao", "")

        deu_certo, resposta = auth_service.register_user(
            nome,
            email,
            senha,
            tipo,
            localizacao,
        )

        flash(resposta)

        if deu_certo:
            return redirect(url_for("auth.login"))

    return render_template("register.html")


def logout():
    session.clear()
    flash("Voce saiu da conta.")
    return redirect(url_for("home.index"))
