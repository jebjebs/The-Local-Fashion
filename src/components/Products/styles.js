import { makeStyles } from '@material-ui/core/styles';
import banner from '../../assets/banner.png';

export default makeStyles((theme) => ({
  // toolbar: theme.mixins.toolbar,
  toolbar: {
    minHeight: 50,
    [theme.breakpoints.up('xs')]: {
      minHeight: 50,
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: 50,
    },
  },
  content: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },

  banner: {
    // minHeight: '100px',
    maxHeight: '291px',
    marginBottom: '20px',
    // backgroundImage: `url(${banner})`,
    // backgroundSize: '100%',
    // backgroundRepeat: 'no-repeat',
  },
}));