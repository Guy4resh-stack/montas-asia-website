import { Link } from 'react-router-dom';

export default function Breadcrumbs({ crumbs }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        {crumbs.map((crumb, i) => (
          <li key={i}>
            {i < crumbs.length - 1 ? (
              <>
                <Link to={crumb.href}>{crumb.label}</Link>
                <span aria-hidden="true" className="sep">›</span>
              </>
            ) : (
              <span aria-current="page">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
