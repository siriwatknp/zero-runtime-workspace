import Paper from '@/components/Paper/Paper';

export default function ZeroPage() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '1rem',
      }}
    >
      {[...Array(1000)].map((_, i) => (
        <Paper
          key={i}
          elevation={2}
          style={{
            width: 128,
            height: 128,
          }}
        />
      ))}
    </div>
  );
}
