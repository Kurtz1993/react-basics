interface AppProps {
  saludo: string;
  subtitulo?: string;
}

export default function App({ saludo, subtitulo = 'Soy un subtítulo' }: AppProps) {
  return (
    <>
      <h1>{saludo}</h1>;<p>{subtitulo}</p>
    </>
  );
}
