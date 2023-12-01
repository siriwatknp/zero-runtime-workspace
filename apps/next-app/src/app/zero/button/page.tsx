import Button from '@/components/Button';

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
        <Button key={i}>Button</Button>
      ))}
    </div>
  );
}
