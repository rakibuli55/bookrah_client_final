import ServiceCard from '@/components/common/ServiceCard';
import Container from '@/components/container/Container';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getServicesByLocation } from '@/data/mockServices';

const SearchResultSection = () => {
  return (
    <Container className="c-xxl:mt-34 c-lg:mt-33 c-md:mt-[80px] c-xsm:mt-17 min-h-screen">
      <div className="border-t border-[#D7CBBF] c-md:pt-[44px] c-xsm:pt-10 c-lg:pb-[130px] c-md:pb-20 c-xsm:pb-[60px]">
        <div className="flex items-center gap-2 text-muted font-satoshi font-medium text-sm c-md:mb-7 c-xsm:mb-4">
          <p>Home</p>
          <div className="size-1.5 rounded-full bg-muted" />
          <p>Search</p>
          <div className="size-1.5 rounded-full bg-muted" />
          <p className="text-heading">Search Result</p>
        </div>
        <h1 className="font-semibold c-lg:text-[44px] c-md:text-[30px] c-xsm:text-[24px] c-lg:leading-[52px] mb-5">
          Search Result for Hair & Styling
        </h1>
        <p className="text-base font-satoshi text-muted mb-9">
          1702+ search result showing for "Hair & Style"
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 c-md:mb-16 c-xsm:mb-10">
          {getServicesByLocation().map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>

        <div className="flex c-md:flex-row c-xsm:flex-col items-center justify-between gap-4">
          <div className="text-heading text-lg flex items-center gap-3">
            <span>Show</span>
            <Select>
              <SelectTrigger className="w-auto bg-light rounded-lg text-heading">
                <SelectValue placeholder="12" />
              </SelectTrigger>
              <SelectContent>
                {[12, 24, 36, 48].map((page) => (
                  <SelectItem value={String(page)} key={page}>
                    {page}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span>of 124</span>
          </div>
          <Pagination className="justify-end w-auto mx-0 gap-3">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  className="bg-light hover:bg-light/70 text-heading aspect-square"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive
                  className="bg-primary hover:bg-primary/80 text-heading aspect-square border-none"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="bg-light hover:bg-light/70 text-heading aspect-square"
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="bg-light hover:bg-light/70 text-heading aspect-square"
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  className="bg-light hover:bg-light/70 text-heading aspect-square"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </Container>
  );
};

export default SearchResultSection;
