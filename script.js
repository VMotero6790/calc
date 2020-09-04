const tic_tac_toe = {
    board: ['','','','','','','','',''],
    valores: {
        options: ['x','o'],
        turno: 0,
        charge: function(){
            this.turno = (this.turno === 0 ? 1 : 0);
        }
    },
    container_element: null,
    gameover: false,
    winner_sequences:[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],
    init: function(container){
        this.container_element = container;
    },
    make_play: function(position){
        if(this.gameover) return false;
        if(this.board[position] === ''){
            this.board[position] = this.valores.options[this.valores.turno];
            this.draw();
            let winning_sequences_index = this.check_winner_sequences(this.valores.options[this.valores.turno]);
            if(winning_sequences_index >=0){
                this.game_is_over();
            }
            else{
                this.valores.charge();
            }
            return true;
        }else{
            return false;
        }
    },
    game_is_over: function(){
        this.gameover = true;
    },
    check_winner_sequences: function(simbol){
        for(i in this.winner_sequences){
            if(this.board[this.winner_sequences[i][0]] == simbol &&
                this.board[this.winner_sequences[i][1]] == simbol &&
                this.board[this.winner_sequences[i][2]] == simbol){
                    return i;
                }
        }
        return -1;
    },
    start: function() {
        this.board.fill('');
        this.draw();
        this.gameover = false;       
    },
    draw: function(){
        let content = '';
        for(var i in this.board){
            content += `<div class="quad" onclick="tic_tac_toe.make_play(${i})">${this.board[i]}</div>`;
        }
        this.container_element.innerHTML = content;
    }
}