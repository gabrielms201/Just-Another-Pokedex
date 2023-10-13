export default function GlobalStyle() {
    return (
      <>
        <style global jsx>{`
          * {
            padding: 0;
            margin: 0;
          }
  
          a {
            text-decoration: none;
          }
  
          body{
            background-color: white;
            font-family: 'Poppins', sans-serif;
          }
        `}</style>
      </>
    )
  }