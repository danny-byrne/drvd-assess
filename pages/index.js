import P from '../components/paragraph'
import Post from '../components/post'
import Board from '../components/board'

let input = 8;

export default () => (
  <div className="main">
   

    <Board />



    <style jsx>{`
      .main {
        margin: auto;
        max-width: 420px;
        padding: 10px;
      }

      hr {
        width: 100px;
        border-width: 0;
        margin: 20px auto;
        text-align: center;
      }

      hr::before {
        content: '***';
        color: #ccc;
      }
    `}</style>
  </div>
)
