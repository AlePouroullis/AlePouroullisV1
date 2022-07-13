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

export default function NavLink({ href, onClick, exact, children, style, ...props }){
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " active";
  }

  return (
    <Link href={href}>
      <li style={style} className="nav-item">
        <a {...props} onClick={() => {
          /* remove the nav link drop down when a new link is pressed */
          if (!props.className.includes("active")){
            onClick();
          }
        }}>
          {children}
        </a>
      </li>
    </Link>
  )
}

