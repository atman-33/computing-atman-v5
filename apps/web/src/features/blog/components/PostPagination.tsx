import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@repo/ui';
import { useAtom } from 'jotai';
import { paginationAtom } from '../stores/pagination-atom';

export const PostPagination = () => {
  const [pagination, setPagination] = useAtom(paginationAtom);
  const { currentPage, totalPages, itemsPerPage } = pagination;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setPagination({
      currentPage: page,
      totalPages: totalPages,
      itemsPerPage: itemsPerPage,
    });
  };

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            className="cursor-pointer"
          />
        </PaginationItem>

        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(1)} className="cursor-pointer">
              1
            </PaginationLink>
          </PaginationItem>
        )}

        {currentPage > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink href="/" isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {currentPage < totalPages - 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(totalPages)} className="cursor-pointer">
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            className="cursor-pointer"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
