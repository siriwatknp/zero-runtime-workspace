/* eslint-disable @typescript-eslint/ban-ts-comment */
import Grid from '@/components/Unstable_Grid/Grid';
import { styled } from '@mui/zero-runtime';

// @ts-ignore
const Item = styled('div')(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.vars.palette.text.secondary,
  border: '1px solid',
}));

export default function ZeroGridPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <Grid
        container
        columns={{ sm: 16 }}
        spacing={{ sm: 3 }}
        columnSpacing={{ sm: 1 }}
      >
        <Grid xs={8} sm={2}>
          <Item>xs=8</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={4} xsOffset={2}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={8} sm={6}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </div>
  );
}
