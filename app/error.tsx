'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>App Error</h1>
      <pre>{error.message}</pre>
    </div>
  );
}
