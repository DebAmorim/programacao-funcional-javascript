function textoComTamanhoEntre(min){
    return function(max){
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

const forcarTamanhoPadrao = textoComTamanhoEntre(2)(255)
const forcarTamanhoPadraoMaior = textoComTamanhoEntre(10)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido')

const produto1 = {nome:'caderno', preco:18.99, desconto: 0.05}
forcarNomeProdutoValido(produto1.nome);

