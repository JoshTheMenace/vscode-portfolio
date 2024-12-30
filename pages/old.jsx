// app/embedded-portfolio/page.tsx

export default function Old() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        width: 'unset',
        height: '100%',
        x: 'hidden',
      }}
    >
      <iframe
        src="/old/index.html"
        style={{
          border: 'none',
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}
        title="Three.js Portfolio"
      />
    </main>
  );
}
