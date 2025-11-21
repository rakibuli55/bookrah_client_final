import { useLocation } from "react-router-dom";

const BreadcrumbCustom = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  let breadcrumbItems;

  if (pathnames.length === 1) {
    breadcrumbItems = (
      <span key={pathnames[0]} className="capitalize text-primary">
        {pathnames[0]}
      </span>
    );
  } else {
    const lastTwoSegments = pathnames.slice(-2);

    breadcrumbItems = lastTwoSegments.map((path, index) => {
      const isLast = index === lastTwoSegments.length - 1;

      return (
        <span
          key={index}
          className={`capitalize c-md:inline c-xsm:hidden c-md:text-base c-xsm:!text-[12px] ${
            isLast ? "text-primary" : ""
          }`}
        >
          {path}
          {!isLast && " / "}
        </span>
      );
    });
  }

  return <div className="text-sm">{breadcrumbItems}</div>;
};

export default BreadcrumbCustom;
