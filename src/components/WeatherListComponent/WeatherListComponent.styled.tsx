import { Paper, styled } from '@mui/material';
import { colors } from '../../consts/colors';

export const StyledMainPaper = styled(Paper)(() => ({
  backgroundColor: colors.background,
  paddingTop: '16px',
  paddingBottom: '16px',
  paddingLeft: '12px',
  paddingRight: '12px',
}));
