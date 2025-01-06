import Page from '@/components/page';
import PageTitle from '@/components/page-title';

export default function Blog() {
  return (
    <Page>
      <PageTitle cursive="Wanna be" remaining="forgotten?" />
      In accordance with applicable data protection laws, users have the right to request the update or deletion of
      their personal data. To exercise this right, please send your request to our support team at{' '}
      <a href="mailto:support@wanna-wanna.com?subject=Data%20Request">support@wanna-wanna.com</a>. We will process your
      request promptly and ensure that your data is handled in compliance with legal requirements.
    </Page>
  );
}
