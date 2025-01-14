import Link from 'next/link'
import { SingleNav } from '@/queries/navigations'

/**
 * Fetches navigation links from Hygraph for a given navigation ID.
 *
 * This function sends a GraphQL query to the Hygraph endpoint to retrieve
 * navigation links associated with the specified navId.
 *
 * @param {string} navId - The ID of the navigation to retrieve links for.
 * @returns {Promise<Array>} A promise that resolves to an array of navigation links.
 * @throws Will throw an error if the fetch request encounters any errors.
 */
async function getNav(navId) {
  const endpoint = process.env.HYGRAPH_ENDPOINT;
  if (!endpoint) {
    throw new Error('HYGRAPH_ENDPOINT is not defined');
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetNavigation($id: ID!) {
          nav(where: { id: $id }) {
            link {
              id
              displayText
              externalUrl
              page {
                slug
              }
            }
          }
        }
      `,
      variables: { id: navId },
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Fetch error:', res.status, res.statusText, errorText);
    throw new Error(`Failed to fetch navigation data: ${res.status} ${res.statusText} - ${errorText}`);
  }

  const data = await res.json();
  if (!data.data || !data.data.nav) {
    throw new Error('Navigation data is undefined');
  }

  console.log(data.data.nav.link);
  return data.data.nav.link;
}

export default async function NavList({ navId }) {
  const navItems = await getNav(navId);
  return (
    <>
      {navItems.map((navItem) => {
        const url = navItem?.externalUrl ? navItem.externalUrl : `/${navItem.page.slug}`;
        return (
          <li key={navItem.id}>
            <Link href={`${url}`}>{navItem.displayText}</Link>
          </li>
        );
      })}
    </>
  );
}