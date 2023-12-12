'use client';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Box = styled('div')({
  padding: '10px',
  border: '1px dashed grey',
});

export default function ZeroPage() {
  return (
    <>
      {[...Array(500)].map((_, i) => (
        <div style={{ width: '400px' }} key={i}>
          <div>Using plain values for direction & spacing</div>
          <Stack direction="row" spacing={1}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <Stack direction="row-reverse" spacing={1}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <Stack direction="column" spacing={1}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <Stack direction="column-reverse" spacing={1}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <div>
            Using plaing value for direction & breakpoints for spacin
            (useFlexGap = false)
          </div>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          >
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <Stack
            direction="row-reverse"
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          >
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <Stack
            direction="column"
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          >
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <Stack
            direction="column-reverse"
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          >
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <div>
            Using plaing value for direction & breakpoints for spacin
            (useFlexGap = true)
          </div>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            useFlexGap
          >
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <Stack
            direction="row-reverse"
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            useFlexGap
          >
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <Stack
            direction="column"
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            useFlexGap
          >
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <Stack
            direction="column-reverse"
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            useFlexGap
          >
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <div>Using breakpoints value for direction</div>
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
          <div>
            Using breakpoints value for direction & spacing (useFlexGap = false)
          </div>
          <Stack
            direction={{
              xs: 'column',
              sm: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
            }}
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          >
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <Stack
            direction={{
              xs: 'column-reverse',
              sm: 'row-reverse',
              md: 'column-reverse',
              lg: 'row-reverse',
              xl: 'column-reverse',
            }}
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
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
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          >
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <div>
            Using breakpoints value for direction & spacing (useFlexGap = true)
          </div>
          <Stack
            direction={{
              xs: 'column',
              sm: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
            }}
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            useFlexGap
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
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            useFlexGap
          >
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
        </div>
      ))}
    </>
  );
}
