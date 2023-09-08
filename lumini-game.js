class Game {
    constructor(situacao, divName) {
        this.situacaoOriginal = situacao;
        if (divName) {
            this.display = new Display(this, divName, this.selecionarCasa);
        }
        this.restart();
    }
    changeSituacao(situacao) {
        this.situacaoOriginal = situacao;
        this.restart();
        this.displayIt();
    }
    displayIt() {
        if (this.display) {
            this.display.displaySituacao(this.situacao);
            if (this.solved()) {
                this.display.displayFinal(this.situacao);
            }
        }
    }
    restart() {
        this.situacao = this.situacaoOriginal;
        this.casaSelecionada = null;
        this.passosDados = [this.situacao];
        this.passosDesfeitos = [];
        this.displayIt();
    }
    undo() {
        if (this.passosDados.length > 1) {
            this.passosDesfeitos.push(this.situacao);
            this.passosDados.pop();
            this.situacao = this.passosDados.pop();
            this.passosDados.push(this.situacao);
            this.casaSelecionada = null;
            this.displayIt();
        }
    }
    redo() {
        if (this.passosDesfeitos.length > 0) {
            this.passosDados.push(this.situacao);
            this.situacao = this.passosDesfeitos.pop();
            this.casaSelecionada = null;
            this.displayIt();
        }
    }
    selecionarCasa(casa) {
        if (Board.isOcupada(casa, this.situacao)) {
            this.casaSelecionada = casa;
        } else if(this.casaSelecionada != null) {
            var casaOrigem = this.casaSelecionada;
            var casaDestino = casa;
            if (Board.podeMoverPara(this.situacao, casaOrigem, casaDestino)) {
                var i = this.situacao.indexOf(casaOrigem);
                this.situacao = this.situacao.substring(0, i) + casaDestino + this.situacao.substring(i + 1, 8);
                this.passosDados.push(this.situacao);
                this.passosDesfeitos = [];
                this.casaSelecionada = casaDestino;
            }
        }
        this.displayIt();
    }
    solved() {
        return Board.valida4Pares(this.situacao) && (Board.contarJuncoes(this.situacao) == 7);
    }
}