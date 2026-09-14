import { loader } from 'fumadocs-core/source';
import { defineDocs } from 'fumadocs-mdx/macro';
import { blogRoute } from './shared';

export const docs = defineDocs({
  dir: 'content/blog',
});

export const source = loader({
  baseUrl: blogRoute,
  source: docs.toFumadocsSource(),
});
