const getCDNUrl = (key, type) => {
  if (type !== 'resume') {
    const imageRequest = JSON.stringify({
      bucket: 'cf-simple-s3-origin-cloudfrontfors3-273116933489',
      key,
    });

    // TODO - Use for image CDN URL.
    // const landingRequest = JSON.stringify({
    //   bucket: 'cf-simple-s3-origin-cloudfrontfors3-273116933489',
    //   key: 'landing-min.png'
    // });
    // console.log('Landing PNG', `https://d1kk667yopfgms.cloudfront.net/${btoa(landingRequest)}`);

    // eslint-disable-next-line no-undef
    return `https://d1kk667yopfgms.cloudfront.net/${btoa(imageRequest)}`;
  }
  return `https://pbmgmt-resumes.s3.amazonaws.com/${key}`;
};

export default getCDNUrl;
