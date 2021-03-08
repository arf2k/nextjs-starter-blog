import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout, Row, Col } from 'antd';
import { ApolloProvider, useQuery, gql } from '@apollo/client';
import Header from '../../components/PageLayout/Header';
import client from '../../apollo/client';

import SidebarWrapper from '../../components/PageLayout/Sidebar';
import PostCard from '../../components/PostCard';
// import SEO from '../../components/Seo';

const GET_PROFILE = gql`
{
  getProfile (account_id: "${process.env.GATSBY_ACCOUNT_ID}") {
    dev
  }
}
`;

const BlogIndex = () => {
  const { loading, error, data } = useQuery(GET_PROFILE);
  if (loading) return <p>{loading}</p>;
  if (error) return <p>{error}</p>;

  const {
    getProfile: { dev },
  } = data;
  const profile = JSON.parse(dev);
  const { articles, first_name: firstName, last_name: lastName } = profile;
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
          {/* <SEO */}
          {/*  title="Blog" */}
          {/* eslint-disable-next-line max-len */}
          {/*  description="I like blogging about various web technologies and other stuff related to */}
          {/* eslint-disable-next-line max-len */}
          {/*  javascript and other trends like graphql, prisma etc. This blog expresses my views of various technologies */}
          {/*  and scenarios I have come across in realtime." */}
          {/*  path="blog" */}
          {/* /> */}
          <SidebarWrapper profile={profile}>
            <div className="marginTopTitle">
              <h1 className="titleSeparate">Articles</h1>
            </div>
            <Row gutter={[20, 20]}>
              {
                articles.length && articles.map((article, key) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Col key={key} xs={24} sm={24} md={12} lg={8}>
                    <PostCard data={article} />
                  </Col>
                ))
              }
            </Row>
          </SidebarWrapper>
        </Layout>
      </Layout>
    </>
  );
};

// BlogIndex.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
//     }).isRequired,
//   }).isRequired,
// };

// eslint-disable-next-line react/prefer-stateless-function
class Blog extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BlogIndex />
      </ApolloProvider>
    );
  }
}

export default Blog;
