import { Link, useLocation } from "react-router-dom";

const BreadcrumbCustom = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  let breadcrumbItems;

  if (pathnames.length === 1) {
    breadcrumbItems = (
      <span key={pathnames[0]}>
        <Link to={`/${pathnames[0]}`} className="capitalize"></Link>
      </span>
    );
  } else {
    const lastTwoSegments = pathnames.slice(-2);
    breadcrumbItems = lastTwoSegments?.map((path, index) => {
      const breadcrumbPath = `/${pathnames
        .slice(0, pathnames.length - 2)
        .join("/")}/${lastTwoSegments.slice(0, index + 1).join("/")}`;

      return (
        <span key={breadcrumbPath} className="c-md:inline c-xsm:hidden">
          <Link to={breadcrumbPath} className={`capitalize c-md:text-base c-xsm:!text-[12px] ${index === lastTwoSegments.length - 1 ? 'text-primary' : ''}`}>{path}</Link>
          {index < lastTwoSegments.length - 1 && " / "}
        </span>
      );
    });
  }

  return <div className="text-sm">{breadcrumbItems}</div>;
};

export default BreadcrumbCustom;
