import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
    makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
    root: {},
    importButton: {
        marginRight: theme.spacing(1)
    },
    exportButton: {
        marginRight: theme.spacing(1)
    }
}));

const Toolbar = ({ className, filterText, onFilterTextChange, ...rest }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const handleFilterTextChange = (event) => {
        onFilterTextChange(event.target.value);
    };

    return (
        <div
            className={clsx(classes.root, className)}
            {...rest}
        >
            <Box
                display="flex"
                justifyContent="flex-end"
            >
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => { navigate('/app/issue', { replace: true }); }}
                >
                    添加召集令
        </Button>
            </Box>
            <Box mt={3}>
                <Card>
                    <CardContent>
                        <Box maxWidth={500}>
                            <TextField
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SvgIcon
                                                fontSize="small"
                                                color="action"
                                            >
                                                <SearchIcon />
                                            </SvgIcon>
                                        </InputAdornment>
                                    )
                                }}
                                placeholder="搜索召集令"
                                variant="outlined"
                                onChange={handleFilterTextChange}
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

Toolbar.propTypes = {
    className: PropTypes.string
};

export default Toolbar;
