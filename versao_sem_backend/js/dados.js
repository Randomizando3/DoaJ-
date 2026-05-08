var usuarios = [
    {
        id: 1,
        nome: "Admin Doa Ja",
        email: "admin@doaja.com",
        senha: "123456",
        tipo: "admin",
        localizacao: "Sao Paulo - SP",
        avaliacao: "5.0"
    },
    {
        id: 2,
        nome: "Carlos Doador",
        email: "doador@doaja.com",
        senha: "123456",
        tipo: "doador",
        localizacao: "Campinas - SP",
        avaliacao: "4.9"
    },
    {
        id: 3,
        nome: "Mariana Receptora",
        email: "receptor@doaja.com",
        senha: "123456",
        tipo: "receptor",
        localizacao: "Santos - SP",
        avaliacao: "4.7"
    }
];

var produtos = [
    {
        id: 1,
        nome: "Urso de Pelucia Gigante",
        descricao: "Urso em otimo estado, recem lavado. Perfeito para criancas.",
        categoria: "brinquedo",
        localizacao: "Sao Paulo - SP",
        foto: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        doador: "Carlos Doador",
        avaliacao: "4.9",
        status: "disponivel"
    },
    {
        id: 2,
        nome: "Camiseta Basica Branca",
        descricao: "Tamanho M. Usada apenas duas vezes, sem manchas.",
        categoria: "camiseta",
        localizacao: "Sao Paulo - SP",
        foto: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        doador: "Carlos Doador",
        avaliacao: "4.9",
        status: "disponivel"
    },
    {
        id: 3,
        nome: "Calca Jeans Skinny",
        descricao: "Calca jeans masculina tamanho 40. Otimo caimento.",
        categoria: "calca",
        localizacao: "Sao Paulo - SP",
        foto: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        doador: "Carlos Doador",
        avaliacao: "4.9",
        status: "disponivel"
    },
    {
        id: 4,
        nome: "Tenis Esportivo Nike",
        descricao: "Tenis de corrida tamanho 41. Solado ainda muito bom.",
        categoria: "calcado",
        localizacao: "Sao Paulo - SP",
        foto: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        doador: "Carlos Doador",
        avaliacao: "4.9",
        status: "disponivel"
    },
    {
        id: 5,
        nome: "Blocos de Montar",
        descricao: "Caixa com 500 pecas coloridas. Algumas pecas faltando.",
        categoria: "brinquedo",
        localizacao: "Sao Paulo - SP",
        foto: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        doador: "Carlos Doador",
        avaliacao: "4.9",
        status: "disponivel"
    },
    {
        id: 6,
        nome: "Jaqueta Corta Vento",
        descricao: "Tamanho G. Impermeavel e super leve.",
        categoria: "camiseta",
        localizacao: "Sao Paulo - SP",
        foto: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        doador: "Carlos Doador",
        avaliacao: "4.9",
        status: "doado"
    }
];

var pedidos = [
    {
        id: 1,
        produto: "Urso de Pelucia Gigante",
        doador: "Carlos Doador",
        mensagem: "Tenho interesse para ajudar minha familia.",
        status: "pendente"
    }
];
