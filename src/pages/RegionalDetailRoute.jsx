import { useParams, useLocation } from 'react-router-dom';
import { getRegionalPage, VALID_REGIONS } from '../data/seoRegistry';
import ContentArticlePage from './ContentArticlePage';
import NotFoundPage from './NotFoundPage';

export default function RegionalDetailRoute() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const region = pathname.split('/').filter(Boolean)[0];
  if (!VALID_REGIONS.includes(region)) return <NotFoundPage />;
  const page = getRegionalPage(region, slug);
  if (!page) return <NotFoundPage />;
  return <ContentArticlePage page={page} />;
}
