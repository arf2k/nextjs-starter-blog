import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from 'antd';
import { ApolloProvider, useQuery, gql } from '@apollo/client';
import client from '../apollo/client';

import Header from '../components/PageLayout/Header';
import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';

const GET_PROFILE = gql`
{
  getProfile (account_id: "${process.env.GATSBY_ACCOUNT_ID}") {
    dev
  }
}
`;

const Index = () => {
  const { loading, error, data } = useQuery(GET_PROFILE);
  if (loading) return <p>{loading}</p>;
  if (error) return <p>{error}</p>;

  const {
    getProfile: { dev },
  } = data;
  const profile = JSON.parse(dev);
  const { first_name: firstName, last_name: lastName } = profile;
  const fullName = `${firstName} ${lastName}`;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{fullName || 'Chrome Theme'}</title>
        <html lang="en" />
        <meta name="description" content={fullName || 'Chrome Theme | Frame Collective'} />
      </Helmet>
      <Layout className="outerPadding">
        <Layout className="container">
          <Header profile={profile} />
          <SidebarWrapper profile={profile}>
            <AboutMe profile={profile} />
          </SidebarWrapper>
        </Layout>
      </Layout>
    </>
  );
};

// eslint-disable-next-line react/prefer-stateless-function
class Root extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Index />
      </ApolloProvider>
    );
  }
}

export default Root;
