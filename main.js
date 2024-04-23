function Produto(id, fornecedora, paisDeOrigem, logradouro) {
    let _id = id;
    this.getId = () => {
        return _id;
    }
    this.fornecedora = fornecedora;
    this.paisDeOrigem = paisDeOrigem;
    this.logradouro = logradouro;
}

function Tenis(id, fornecedora, paisDeOrigem, logradouro, nome, preco, marca, modelo, tamanho, cor) {
    Produto.call(this, id, fornecedora, paisDeOrigem, logradouro);
    this.nome = nome;
    this.preco = preco;
    this.marca = marca;
    this.modelo = modelo;
    this.tamanho = tamanho;
    this.cor = cor;
}

function CuboMagico(id, fornecedora, paisDeOrigem, logradouro, nome, preco, marca, tipo) {
    Produto.call(this, id, fornecedora, paisDeOrigem, logradouro);
    this.nome = nome;
    this.preco = preco;
    this.marca = marca;
    this.tipo = tipo;
}

const vansOldSkoolNavy = new Tenis(
    6543, 
    'fornecedoraX',
    'China',
    'Qujing, Guanposi St',
    'Vans Old Skool Navy',
    399.99,
    'Vans',
    'Old Skool',
    40,
    'azul'
);

const ultrarangeRapidweldPewterTrueWhite = new Tenis(
    4536, 
    'fornecedoraY',
    'China',
    'Nanning, Jiabin Rd',
    'Ultrarange Rapid Weld Pewter True White',
    399.99,
    'Vans',
    'Ultrarange',
    40,
    'gray'
);

const cuboMagicoGan3x3x3 = new CuboMagico(
    8587, 
    'fornecedoraZ',
    'China',
    'Kunming, Tuofeng St',
    'Cubo Profissional Magnético 3x3x3 Gan',
    172.40,
    'Gan',
    'magnetico'
);

console.log(vansOldSkoolNavy, '\n\n', ultrarangeRapidweldPewterTrueWhite, '\n\n', cuboMagicoGan3x3x3);