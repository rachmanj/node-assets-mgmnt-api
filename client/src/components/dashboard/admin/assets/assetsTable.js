import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@material-ui/core';

import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Loading from 'utils/loader';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const AssetsTable = ({ assets, prev, next }) => {
  const classes = useStyles();

  const goToPrevPage = page => {
    prev(page);
  };

  const goToNextPage = page => {
    next(page);
  };

  return (
    <>
      {assets && assets.docs ? (
        <>
          <TableContainer component={Paper} style={{ marginBottom: '10px' }}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">ID</StyledTableCell>
                  <StyledTableCell align="left">Asset Name</StyledTableCell>
                  <StyledTableCell align="left">Category</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {assets.docs.map(item => (
                  <StyledTableRow key={item._id}>
                    <StyledTableCell component="th" scope="row">
                      {item._id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.assetName}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.category}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination>
            {assets.hasPrevPage ? (
              <>
                <Pagination.Prev
                  onClick={() => goToPrevPage(assets.prevPage)}
                />
                <Pagination.Item onClick={() => goToPrevPage(assets.prevPage)}>
                  {assets.prevPage}
                </Pagination.Item>
              </>
            ) : null}
            <Pagination.Item active>{assets.page}</Pagination.Item>
            {assets.hasNextPage ? (
              <Pagination>
                <Pagination.Item onClick={() => goToNextPage(assets.nextPage)}>
                  {assets.nextPage}
                </Pagination.Item>
                <Pagination.Next
                  onClick={() => goToNextPage(assets.nextPage)}
                />
              </Pagination>
            ) : null}
          </Pagination>
          <Link to="/assets/add_asset">
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '10px' }}
            >
              Tambah Asset
            </Button>
          </Link>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default AssetsTable;
