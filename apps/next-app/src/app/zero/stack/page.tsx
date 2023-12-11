import Stack from '@/components/Stack/Stack';
import { styled } from '@mui/zero-runtime';

const Box = styled('div')({
  padding: '10px',
  border: '1px dashed grey',
});

export default function ZeroPage() {
  return (
    <div>
      <Stack direction="row" spacing={1}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Stack>
      <Stack direction="column">
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Stack>
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
          md: 'column',
          lg: 'row',
          xl: 'column',
        }}
      >
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Stack>
      <Stack
        direction={{
          xs: 'row',
          sm: 'column',
          md: 'row',
          lg: 'column',
          xl: 'row',
        }}
      >
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Stack>
      <Stack direction={['row', 'column', 'row', 'column', 'row']}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Stack>
    </div>
  );
}
