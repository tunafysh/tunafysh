import { BrainDumpTitle } from '@/components/ui/braindumptitle';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <BrainDumpTitle/>
    },
  };
}
