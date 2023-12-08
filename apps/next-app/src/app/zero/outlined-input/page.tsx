import OutlinedInput from '@/components/OutlinedInput';

export default function ZeroOutlinedInputPage() {
  return (
    <div style={{ padding: '2rem' }}>
      {[...Array(1000)].map((_, i) => (
        <OutlinedInput label="Label" placeholder="Placeholder" key={i} />
      ))}
    </div>
  );
}
