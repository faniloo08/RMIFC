import { 
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

interface PaginationProps {
  articlesPerPage: number;
  totalArticles: number;
  currentPage : number;
  paginate: (pageNumber: number) => void;
}

export function PaginationDemo({ articlesPerPage, totalArticles, currentPage, paginate }: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
      pageNumbers.push(i);
  }
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => paginate(currentPage - 1)} href="#" className="page-link" />
          </PaginationItem>        
          {pageNumbers.map((number) => ( 
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} href="#" className="page-link">
                <PaginationItem>
                  <PaginationLink href="#">
                    {number}
                  </PaginationLink>
                </PaginationItem>
              </a>
            </li>
          ))}
          <PaginationItem>
            <PaginationNext onClick={() => paginate(currentPage + 1)} href="#" className="page-link" />
          </PaginationItem>
        </PaginationContent>
      </Pagination> 
    )
}