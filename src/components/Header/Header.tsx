import React from 'react';
import { isConstructorDeclaration } from 'typescript';
import styles from './Header.module.css';

interface HeaderProps {
  startDate?: Date;
}

const Header = ({startDate}: HeaderProps) => {

  const dayOfMonth = startDate?.toLocaleString('en-US', {day: '2-digit'})
  
  return (
    <div className={styles.Header}>
      <h1>Satterfield Dashboard</h1>
      <p>Today is {startDate?.toLocaleString('en-US', {weekday: 'long'})}, {startDate?.toLocaleString('en-US', {month: 'long'})} {dayOfMonth}, {startDate?.getFullYear()}</p>
    </div>
  );
}

export default Header;
