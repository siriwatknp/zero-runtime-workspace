import InputBase from '@mui/material/InputBase';

export default function EmotionInputBasePage() {
  return (
    <div style={{ padding: '2rem' }}>
      {[...Array(1000)].map((_, i) => (
        <InputBase key={i} />
      ))}
    </div>
  );
}
