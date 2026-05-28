function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-paper px-page py-section text-ink">
      <section
        className="w-full max-w-[760px] rounded-panel border border-ink/12 bg-surface/85 p-panel shadow-panel"
        aria-labelledby="app-title"
      >
        <p className="mb-4 text-eyebrow uppercase text-accent">
          Vite + React + TypeScript
        </p>
        <h1 id="app-title" className="text-display">
          mike-t-302f-test-website-003
        </h1>
        <p className="mt-6 max-w-[60ch] text-lede text-muted">
          A production-ready frontend scaffold with typed React, Vite build
          tooling, linting, and formatting configured.
        </p>
      </section>
    </main>
  )
}

export default App
