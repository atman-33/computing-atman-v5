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

  const handlePageChangeLinkClick = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setPagination({
      currentPage: page,
      totalPages: totalPages,
      itemsPerPage: itemsPerPage,
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChangeLinkClick(currentPage - 1)}
            className="cursor-pointer"
          />
        </PaginationItem>

        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChangeLinkClick(1)} className="cursor-pointer">
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
            <PaginationLink
              onClick={() => handlePageChangeLinkClick(totalPages)}
              className="cursor-pointer"
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => handlePageChangeLinkClick(currentPage + 1)}
            className="cursor-pointer"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
