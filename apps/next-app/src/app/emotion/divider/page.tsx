import Divider from '@mui/material/Divider';

export default function EmotionPage() {
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
