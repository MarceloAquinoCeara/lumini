var Board = {

    eixo: [
        '*DCBA*IHGFE*ONMLKJ*VUTSRQP*baZYXW*gfedc*kjih*', // 0
        '*AEJP*BFKQW*CGLRXc*DHMSYdh*INTZei*OUafj*Vbgk*', // 1
        '*PWch*JQXdi*EKRYej*AFLSZfk*BGMTag*CHNUb*DIOV*', // 2
        '*ABCD*EFGHI*JKLMNO*PQRSTUV*WXYZab*cdefg*hijk*', // 3
        '*PJEA*WQKFB*cXRLGC*hdYSMHD*ieZTNI*jfaUO*kgbV*', // 4
        '*hcWP*idXQJ*jeYRKE*kfZSLFA*gaTMGB*bUNHC*VOID*'],// 5

    linhaDePares: '*ABCD*EFGHI*JKLMNO*PQRSTUV*WXYZab*cdefg*hijk*AEJP*BFKQW*CGLRXc*DHMSYdh*INTZei*OUafj*Vbgk*PWch*JQXdi*EKRYej*AFLSZfk*BGMTag*CHNUb*DIOV*',

    colunaEsquerda: '******ABCD**EFGHI**JKLMNO**QRSTUV*XYZab*defg*',
    colunaMestra:   '*ABCD*EFGHI*JKLMNO*PQRSTUV*WXYZab*cdefg*hijk*',
    colunaDireita:  '*FGHI*KLMNO*QRSTUV*WXYZab**cdefg**hijk*******',

    mover(situacao, de, direcao) {
        var para = this.casaDestino(de, situacao, direcao);
        if (para == null) {
            return null;
        }
        var i = situacao.indexOf(de);
        return situacao.substring(0, i) + para + situacao.substring(i + 1, 8);;
    },

    isOcupada(casa, situacao) {
        return situacao.indexOf(casa) >= 0;
    },

    isForaDaMesa(casa) {
        return casa == '*';
    },

    proximaCasa(casa, eixo) {
        var i = eixo.indexOf(casa);
        return eixo.charAt(i + 1);
    },

    casaDestino(casa, situacao, direcao) {
        var eixo = this.eixo[direcao]
        var destino = this.proximaCasa(casa, eixo);
        if (this.isForaDaMesa(destino)) {
            return null;
        }
        if (this.isOcupada(destino, situacao)) {
            return null;
        }
        var freio;
        while (true) {
            freio = this.proximaCasa(destino, eixo);
            if (this.isForaDaMesa(freio)) {
                return null;
            }
            if (this.isOcupada(freio, situacao)) {
                return destino;
            }
            destino = freio;
        }
    },

    podeMoverPara(situacao, de, para) {
        for (var direcao = 0; direcao < 6; direcao++) {
            var casa = Board.casaDestino(de, situacao, direcao);
            if (casa == para) {
                return true;
            }
        }
    },

    getMove(situacaoInicial, situacaoFinal) {
        for (var i = 0; i <= 7; i++) {
            var de = situacaoInicial.charAt(i);
            var para = situacaoFinal.charAt(i);
            if (de != para) {
                for (var d = 0; d < 6; d++) {
                    if (para == this.casaDestino(de, situacaoInicial, d)) {
                        return 'ABCDEFGH'.charAt(i) + '-' + (d);
                    }
                }
            }
        }
    },

    getMoves(pilha) {
        var move, nave;
        var naveAnterior = '';
        var i = 0;
        var anterior = pilha[i++];
        var proxima = i < pilha.length ? pilha[i++] : null;
        var moves = '';
        while (proxima != null) {
            move = this.getMove(anterior, proxima);
            nave = move.charAt(0);
            if (nave != naveAnterior) {
                moves += ' ' + nave + '-';
                naveAnterior = nave;
            }
            moves += move.charAt(2);
            anterior = proxima;
            proxima = i < pilha.length ? pilha[i++] : null;
        }
        return moves.substring(1);
    },

    valida4Pares(situacao) {
        var par;
        par = situacao.substring(0, 2).split('').sort().join('');
        if (this.linhaDePares.indexOf(par) < 0) {
            return false;
        }
        par = situacao.substring(2, 4).split('').sort().join('');
        if (this.linhaDePares.indexOf(par) < 0) {
            return false;
        }
        par = situacao.substring(4, 6).split('').sort().join('');
        if (this.linhaDePares.indexOf(par) < 0) {
            return false;
        }
        par = situacao.substring(6, 8).split('').sort().join('');
        if (this.linhaDePares.indexOf(par) < 0) {
            return false;
        }
        return true;
    },

    contarJuncoes(situacao) {
        var par, pos, casaDireita, casaEsquerda;
        var casas = situacao.split('').sort((a, b) => a > b ? 1 : -1).join('');
        var contador = 0;
        for (var i = 0; i < 7; i++) {
            par = casas.substr(i, 2);
            pos = this.colunaMestra.indexOf(par);
            if (pos >= 0) {
                casaEsquerda = this.colunaEsquerda.charAt(pos);
                casaDireita = this.colunaDireita.charAt(pos);
                if (casas.indexOf(casaEsquerda) >= 0) {
                    contador++;
                }
                if (casas.indexOf(casaDireita) >= 0) {
                    contador++;
                }
            }
        }
        return contador;
    },
}
