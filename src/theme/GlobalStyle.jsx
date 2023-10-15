export default function GlobalStyle() {
    return (
      <>
        <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap');

          * {
            padding: 0;
            margin: 0;
            max-height: 100%;
            font-family: 'Pixelify Sans';
          }
  
          a {
            text-decoration: none;
          }
  
          body{
            background-color: white;
            font-family: 'Pixelify Sans';
          }
          
        `}</style>
      </>
    )
  }