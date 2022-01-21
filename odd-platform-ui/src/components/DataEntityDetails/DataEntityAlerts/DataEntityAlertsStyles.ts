import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { propsChecker } from 'lib/helpers';

export type AlertsColType =
  | 'date'
  | 'type'
  | 'description'
  | 'status'
  | 'updatedBy'
  | 'updatedTime'
  | 'actionBtn';

export const alertsColWidthStyles = {
  date: {
    flex: '0 0 12%',
  },
  type: {
    flex: '0 0 12%',
  },
  description: {
    flex: '0 0 43%',
  },
  status: {
    justifyContent: 'center',
    flex: '0 0 8%',
  },
  updatedBy: {
    flex: '0 0 10%',
  },
  updatedTime: {
    flex: '0 0 12%',
  },
  actionBtn: {
    flex: '0 0 3%',
    overflow: 'visible',
  },
};

export const ColContainer = styled(Grid, {
  shouldForwardProp: propsChecker,
})<{
  $colType: AlertsColType;
}>(({ $colType }) => ({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  paddingRight: '8px',
  paddingLeft: '8px',
  '&:last-of-type': {
    paddingRight: 0,
  },
  ...alertsColWidthStyles[$colType],
}));

export const AlertsTableHeader = styled(Grid)(({ theme }) => ({
  color: theme.palette.texts.hint,
  borderBottom: '1px solid',
  borderBottomColor: theme.palette.divider,
}));
