function textoComTamanhoEntre(max){
    return function(min){
        return function (erro){
            return function(texto){
                const tamanho = (texto || '').trim().length;
                if(tamanho < min || tamanho > max){
                    throw erro;
                }
            }
        }
    }
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido')

const produto1 = {nome:'A', preco:18.99, desconto: 0.05}
forcarNomeProdutoValido(produto1.nome);

