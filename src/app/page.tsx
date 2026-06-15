// The eatnaked.co clone is a self-contained static site under public/eatnaked/.
// Serve it full-viewport at the dev-server root so `npm run dev` shows it.
export default function Home() {
  return (
    <iframe
      src="/eatnaked/index.html"
      title="EATnaked"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}
