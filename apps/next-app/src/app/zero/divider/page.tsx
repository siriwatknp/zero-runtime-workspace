import Divider from '@/components/Divider/Divider';

export default function ZeroPage() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '1rem',
      }}
    >
      {[...Array(10000)].map((_, i) => (
        <Divider key={`text-${i}`} />
      ))}
    </div>
  );
}
