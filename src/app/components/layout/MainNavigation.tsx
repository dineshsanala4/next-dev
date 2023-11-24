"use client";
import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Portfolio</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Next JS</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
