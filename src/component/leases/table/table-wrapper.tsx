'use client';

import { use } from 'react';
import { LeaseTable } from './data-table';
import { Lease } from '@/lib/leases/types';

export default function Leases({
  leases,
}: {
  leases: Promise<Lease[]>
}) {
  const allLeases = use(leases);

  return (
    <LeaseTable data={allLeases} />
  );
}
