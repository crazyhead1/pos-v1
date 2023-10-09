import { makeStyles } from '@mui/styles';

// colors
import { colors } from '../../../colors';
import { fontWeight, textLevel } from '../typography';

interface StyleProps {
  collapsed?: boolean;
  active?: boolean;
}

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    background: ({ active }) => (active ? colors.neutral50 : 'transparent'),
  },
  chevronIcon: {
    width: 24,
    minWidth: 24,
    height: 24,
    objectFit: 'contain',
    transition: '0.4s',
    marginLeft: '12px',
    marginRight: '12px',
    transform: ({ collapsed }: StyleProps) => `rotate(${collapsed ? '180deg' : 0})`,
  },
  label: {
    fontFamily: 'Manrope',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: '22px',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  subLabel: {
    color: colors.neutral600,
    fontSize: textLevel.S,
    fontWeight: fontWeight.LIGHT,
  },
});
