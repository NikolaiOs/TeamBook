import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

export const PaginationControl = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    return (
        <Pagination sx={{ display: 'flex', justifyContent: 'center' }}
            page={page}
            count={10}
            renderItem={(item) => (
                <PaginationItem
                    component={Link}
                    to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                    {...item}
                />
            )}
        />
    );
}


