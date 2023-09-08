var lumini;
window.onload = function() {
    lumini = new Lumini();
    document.getElementById('undo').addEventListener('click', function(event) { lumini.undo() }, false);
    document.getElementById('redo').addEventListener('click', function(event) { lumini.redo() }, false);
    document.getElementById('restart').addEventListener('click', function(event) { lumini.restart() }, false);
    document.getElementById('restart').addEventListener('click', function(event) { lumini.restart() }, false);
    // document.getElementById('rotate_left').addEventListener('click', function(event) { lumini.rotateLeft() }, false);
    // document.getElementById('rotate_right').addEventListener('click', function(event) { lumini.rotateRight() }, false);
    // document.getElementById('move_right').addEventListener('click', function(event) { lumini.moveRight() }, false);
    // document.getElementById('swap_horiz').addEventListener('click', function(event) { lumini.swapHoriz() }, false);

document.getElementById('first_page').addEventListener('click', function(event) { lumini.getFirst() }, false);
document.getElementById('navigate_before').addEventListener('click', function(event) { lumini.getPrev() }, false);
document.getElementById('navigate_next').addEventListener('click', function(event) { lumini.getNext() }, false);
document.getElementById('last_page').addEventListener('click', function(event) { lumini.getLast() }, false);
}
class Lumini {
    constructor() {
        this.biblio = new Biblio();
        this.inicializar();
    }
    inicializar() {
        this.game = new Game('ABCGFELQ', 'inner');
    }
    undo() {
        this.game.undo();
    }
    redo() {
        this.game.redo();
    }
    restart() {
        this.game.restart();
    }
    getFirst() {
        this.game.changeSituacao(this.biblio.getFirst().situacao);
    }
    getLast() {
        this.game.changeSituacao(this.biblio.getLast().situacao);
    }
    getNext() {
        this.game.changeSituacao(this.biblio.getNext().situacao);
    }
    getPrev() {
        this.game.changeSituacao(this.biblio.getPrev().situacao);
    }
}
