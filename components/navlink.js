import { useRouter } from 'next/router';
import Link from 'next/link';
import propTypes from 'prop-types';

NavLink.propTypes = {
  href: propTypes.string.isRequired,
  exact: propTypes.bool
}

NavLink.defaultProps = {
  exact: false
}

export default function NavLink({ href, exact, children, ...props }){
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " active";
  }

  return (
    <Link href={href}>
      <li className="nav-item">
        <a {...props}>
          {children}
        </a>
      </li>
    </Link>
  )
}

