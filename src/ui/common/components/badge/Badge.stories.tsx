// mui
import { makeStyles } from '@mui/styles';

// components
import { Badge, badgeType, badgeStyle } from '.';

export default {
  component: Badge,
  title: 'atoms/Badge',
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
});

export const Default = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <Badge variant={badgeType.FILLED} style={badgeStyle.CRITICAL}>
          Critical
        </Badge>
        <Badge variant={badgeType.FILLED} style={badgeStyle.HIGH}>
          High
        </Badge>
        <Badge variant={badgeType.FILLED} style={badgeStyle.MEDIUM}>
          Medium
        </Badge>
        <Badge variant={badgeType.FILLED} style={badgeStyle.LOW}>
          Low
        </Badge>
        <Badge variant={badgeType.FILLED} style={badgeStyle.MISREPORTED}>
          Misreported
        </Badge>
        <Badge variant={badgeType.FILLED} style={badgeStyle.RESOLVED}>
          Resolved
        </Badge>
        <Badge variant={badgeType.FILLED} style={badgeStyle.UNRELATED}>
          Unrelated
        </Badge>
        <Badge variant={badgeType.FILLED} style={badgeStyle.ACTIVE}>
          Active
        </Badge>
        <Badge variant={badgeType.FILLED} style={badgeStyle.INACTIVE}>
          Inactive
        </Badge>
        <Badge variant={badgeType.FILLED} style={badgeStyle.DARK}>
          Dark
        </Badge>
      </div>
      <div className={classes.row}>
        <Badge variant={badgeType.OUTLINED} style={badgeStyle.CRITICAL}>
          Critical
        </Badge>
        <Badge variant={badgeType.OUTLINED} style={badgeStyle.HIGH}>
          High
        </Badge>
        <Badge variant={badgeType.OUTLINED} style={badgeStyle.MEDIUM}>
          Medium
        </Badge>
        <Badge variant={badgeType.OUTLINED} style={badgeStyle.LOW}>
          Low
        </Badge>
        <Badge variant={badgeType.OUTLINED} style={badgeStyle.MISREPORTED}>
          Misreported
        </Badge>
        <Badge variant={badgeType.OUTLINED} style={badgeStyle.RESOLVED}>
          Resolved
        </Badge>
        <Badge variant={badgeType.OUTLINED} style={badgeStyle.UNRELATED}>
          Unrelated
        </Badge>
        <Badge variant={badgeType.OUTLINED} style={badgeStyle.ACTIVE}>
          Active
        </Badge>
        <Badge variant={badgeType.OUTLINED} style={badgeStyle.INACTIVE}>
          Inactive
        </Badge>
        <Badge variant={badgeType.OUTLINED} style={badgeStyle.DARK}>
          Dark
        </Badge>
      </div>
      <div className={classes.row}>
        <Badge icon="check-circle" variant={badgeType.ICON} style={badgeStyle.CRITICAL}>
          Critical
        </Badge>
        <Badge icon="check-circle" variant={badgeType.ICON} style={badgeStyle.HIGH}>
          High
        </Badge>
        <Badge icon="check-circle" variant={badgeType.ICON} style={badgeStyle.MEDIUM}>
          Medium
        </Badge>
        <Badge icon="check-circle" variant={badgeType.ICON} style={badgeStyle.LOW}>
          Low
        </Badge>
        <Badge icon="check-circle" variant={badgeType.ICON} style={badgeStyle.MISREPORTED}>
          Misreported
        </Badge>
        <Badge icon="check-circle" variant={badgeType.ICON} style={badgeStyle.RESOLVED}>
          Resolved
        </Badge>
        <Badge icon="check-circle" variant={badgeType.ICON} style={badgeStyle.UNRELATED}>
          Unrelated
        </Badge>
        <Badge icon="check-circle" variant={badgeType.ICON} style={badgeStyle.DARK}>
          Dark
        </Badge>
      </div>
    </div>
  );
};
