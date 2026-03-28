import { useParams } from 'react-router-dom';
import { getGlobalService } from '../data/seoRegistry';
import ContentArticlePage from './ContentArticlePage';
import NotFoundPage from './NotFoundPage';

export default function ServiceDetailRoute() {
  const { slug } = useParams();
  const page = getGlobalService(slug);
  if (!page) return <NotFoundPage />;
  return <ContentArticlePage page={page} />;
}
