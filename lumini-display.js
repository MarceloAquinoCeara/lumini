class Display {
    constructor(lumini, canvasElementId, callbackClickFunction) {
        this.lumini = lumini;
        this.callbackClickFunction = callbackClickFunction;

        this.orange = '#fdc836';
        this.red = '#ed162a';
        this.blue = '#3e4dc6';
        this.green = '#2bb055';
        this.lightSpace = '#d8d6eb';
        this.darkSpace = '#3c3a56';

        this.pieceRadius = 40;
        this.slotRadius = 60;
        this.spaceRadius = 67;
        this.dx = 40;
        this.dy = -40;

        this.SEN60 = Math.sin(Math.PI / 3);
        this.vertices = [[-1.0, 0.0], [-0.5, this.SEN60], [0.5, this.SEN60], [1.0, 0.0], [0.5, -this.SEN60], [-0.5, -this.SEN60], [-1.0, 0.0], [-0.5, this.SEN60]];

        this.idTimeout = null;

        this.canvas = document.getElementById(canvasElementId);
        this.canvas.display = this;
        this.canvas.addEventListener('click', function (event) {
            let x = (event.pageX - this.displayX0) * this.displayRatioX;
            let y = (event.pageY - this.displayY0) * this.displayRatioY;
            for (let i = 0; i < this.display.posicoes.length; i++) {
                if (Math.hypot(x - this.display.posicoes[i].x, y - this.display.posicoes[i].y) <= this.display.slotRadius) {
                    this.display.callbackClickFunction.call(this.display.lumini, this.display.posicoes[i].nome);
                    console.log(i);
                }
            }
        }, false);
        this.canvasContext = this.canvas.getContext('2d');

        this.posicoes = this.calcularPosicoes(this.dx, this.dy, this.spaceRadius);

        this.inicializarDisplay();
    }

    inicializarDisplay() {
        this.debounceResize(null);
        this.drawBoard();
        window.addEventListener('resize', (event) => {
            this.debounceResize(event);
        }, true);
    }

    debounceResize(event) {
        if (this.idTimeout) clearTimeout(this.idTimeout);
        this.idTimeout = setTimeout(() => {
            this.resize(event)
        }, 200);
    }

    resize(event) {
        var cent = document.getElementById('central');
        const larguraJanela = cent.clientWidth;
        const alturaWindow = window.innerHeight;

        var n2 = Math.min(larguraJanela, Math.trunc(alturaWindow * 0.6));
        var n = `${n2}px`;
        this.canvas.style.width = n;
        this.canvas.style.height = n;
        this.canvas.displayX0 = this.canvas.offsetLeft + this.canvas.clientLeft;
        this.canvas.displayY0 = this.canvas.offsetTop + this.canvas.clientTop;
        this.canvas.displayRatioX = 1000. / this.canvas.clientWidth;
        this.canvas.displayRatioY = 1000. / this.canvas.clientHeight;
        this.drawBoard();
        this.displaySituacao(this.situacao);
    }

    calcularPosicoes(dx, dy, radius) {
        var posicoes = [];
        var i = 0;
        var x = 0;
        var y;
        for (var coluna = 0; coluna < 9; coluna++) {
            y = 0;
            if (coluna % 2 == 1) {
                y = radius;
            }
            for (var linha = 0; linha < 8; linha++) {
                if (((coluna == 1 || coluna == 7) && linha > 1 && linha < 6)
                    || ((coluna == 2 || coluna == 6) && linha > 1 && linha < 7)
                    || ((coluna == 3 || coluna == 5) && linha > 0 && linha < 7)
                    || ((coluna == 4 || coluna == 4) && linha > 0 && linha < 8)) {

                    var nome = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijk'.charAt(i++);
                    posicoes.push({ y: y + dy, x: x + dx, nome: nome });
                }

                y += 2 * radius;
            }
            x += 2 * radius * this.SEN60;
        }
        return posicoes;
    }

    drawBoard() {
        this.canvasContext.lineWidth = 20;
        this.drawSpaces();
        this.drawSlots(this.darkSpace);
    }

    drawSlotNames() {
        this.canvasContext.beginPath();
        for (var position of this.posicoes) {
            this.canvasContext.font = '64px Arial';
            this.canvasContext.textBaseline = 'middle';
            this.canvasContext.textAlign = 'center';
            this.canvasContext.fillStyle = 'black';
            this.canvasContext.fillText(position.nome, position.x, position.y);
            this.canvasContext.fill();
        }
        this.canvasContext.closePath();
    }

    drawSpaces() {
        this.canvasContext.beginPath();
        this.canvasContext.strokeStyle = this.lightSpace;
        this.canvasContext.fillStyle = this.lightSpace;
        for (var position of this.posicoes) {
            this.drawHex(position.x, position.y, this.spaceRadius);
        }
        this.canvasContext.fill();
        this.canvasContext.closePath();
        this.canvasContext.stroke();
    }

    drawSlots(color) {
        this.canvasContext.beginPath();
        this.canvasContext.strokeStyle = color;
        for (var position of this.posicoes) {
            this.drawHex(position.x, position.y, this.slotRadius);
        }
        this.canvasContext.closePath();
        this.canvasContext.stroke();
    }

    drawPiece(position, color) {
        this.canvasContext.beginPath();
        this.canvasContext.strokeStyle = color;
        this.canvasContext.fillStyle = color;
        this.drawHex(position.x, position.y, this.pieceRadius);
        this.canvasContext.fill();
        this.canvasContext.closePath();
        this.canvasContext.stroke();
    }

    drawHex(x0, y0, radius) {
        var p = this.vertices.map(a => { return { x: a[0] * radius + x0, y: a[1] * radius + y0 } });
        this.canvasContext.moveTo(p[0].x, p[0].y);
        for (let i = 1; i < p.length; i++) {
            this.canvasContext.lineTo(p[i].x, p[i].y);
        }
    }

    pintar(casa, cor) {
        let p = this.posicoes.find(p => p.nome == casa);
        this.drawPiece(p, cor);
    }

    displayNave(casa, nave) {
        if (nave >= 6) {
            this.pintar(casa, this.orange);
        } else if (nave >= 4) {
            this.pintar(casa, this.green);
        } else if (nave >= 2) {
            this.pintar(casa, this.red);
        } else {
            this.pintar(casa, this.blue);
        }
    }

    displaySituacao(situacao) {
        this.situacao = situacao;
        this.posicoes.forEach(p => this.drawPiece(p, this.lightSpace))
        for (var i = 0; i < 8; i++) {
            this.displayNave(situacao[i], i);
        }
    }

    displayFinal(situacao) {
        this.situacao = situacao;
        this.posicoes.forEach(p => this.drawPiece(p, 'white'))
        for (var i = 0; i < 8; i++) {
            this.displayNave(situacao[i], i);
        }
    }
}
