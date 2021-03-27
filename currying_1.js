function textoComTamanhoEntre(min, max, erro, texto){
    const tamanho = (texto || '').trim().length;
    if(tamanho < min || tamanho > max){
        throw erro;
    }
}

const produto1 = {nome:'caderno', preco:18.99, desconto: 0.05}

textoComTamanhoEntre(4,255,'Nome inválido', produto1.nome);