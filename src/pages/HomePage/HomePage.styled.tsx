import { Stack, styled } from '@mui/material';
import { colors } from '../../consts/colors';

export const StyledMainStack = styled(Stack)(() => ({
  backgroundColor: colors.background,
  marginTop: '8px',
  paddingTop: '34px',
  paddingBottom: '34px',
  paddingLeft: '24px',
  paddingRight: '24px',
}));
