/* eslint-disable @typescript-eslint/ban-ts-comment */
import Grid from '@/components/Unstable_Grid/Grid';
import { styled } from '@mui/zero-runtime';

// @ts-ignore
const Item = styled('div')(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.vars.palette.text.secondary,
}));

export default function ZeroGridPage() {
  return (
    <Grid container spacing={2}>
      <Grid xs={8} sm={2}>
        <Item>xs=8</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  );
}
