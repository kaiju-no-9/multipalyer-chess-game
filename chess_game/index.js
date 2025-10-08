document.addEventListener("DOMContentLoaded", () => {
    var board2 = Chessboard('board2', {
      draggable: true,
      dropOffBoard: 'snapback',
      sparePieces: true,
      pieceTheme: function (piece) {
        switch (piece) {
          case 'wP': return 'chessboardjs-1.0.0/img/chesspieces/wikipedia/wP.png';
          case 'wR': return 'chessboardjs-1.0.0/img/chesspieces/wikipedia/wR.png';
          case 'wN': return 'chessboardjs-1.0.0/img/chesspieces/wikipedia/wN.png';
          case 'wB': return 'chessboardjs-1.0.0/img/chesspieces/wikipedia/wB.png';
          case 'wQ': return 'chessboardjs-1.0.0/img/chesspieces/wikipedia/wQ.png';
          case 'wK': return 'chessboardjs-1.0.0/img/chesspieces/wikipedia/wK.png';
          case 'bP': return 'chessboardjs-1.0.0/img/chesspieces/wikipedia/bP.png';
          case 'bR': return 'chessboardjs-1.0.0/img/chesspieces/wikipedia/bR.png';
          case 'bN': return 'chessboardjs-1.0.0/img/chesspieces/wikipedia/bN.png';
          case 'bB': return 'chessboardjs-1.0.0/img/chesspieces/wikipedia/bB.png';
          case 'bQ': return 'chessboardjs-1.0.0/img/chesspieces/wikipedia/bQ.png';
          case 'bK': return 'chessboardjs-1.0.0/img/chesspieces/wikipedia/bK.png';
          default: return null;
        }
      },
      
    });
  
    // button listeners
    $('#startBtn').on('click', function () {
      board2.start();
    });
  
    $('#clearBtn').on('click', function () {
      board2.clear();
    });
  });
  