import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import type { FC, PropsWithChildren } from 'react';

import Link from '@/components/Link';

import styles from './LinkWithArrow.module.css';

type AccessibleAnchorProps = { href?: string };

const LinkWithArrow: FC<PropsWithChildren<AccessibleAnchorProps>> = ({
  children,
  ...props
}) => (
  <Link {...props}>
    {children}
    <ArrowUpRightIcon className={styles.linkWithArrow} />
  </Link>
);
export default LinkWithArrow;
