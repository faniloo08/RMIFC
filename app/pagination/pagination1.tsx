import { 
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

export function PaginationDemo() {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="/exercices/exoprev"/>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/" className='hover:text-blue-500' isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className='hover:text-blue-500'>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className='hover:text-blue-500'>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="/exercices/exonext" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
}