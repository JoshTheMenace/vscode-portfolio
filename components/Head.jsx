import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta
        name="description"
        content="Josh Gimenes is an avid full stack web developer and mobile developer."
      />
      <meta
        name="keywords"
        content="Josh Gimenes, JoshTheMenace, Josh The Menace, web developer portfolio, JoshTheMenace web developer, JoshTheMenace developer, Josh Gimenes portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Josh Gimenes Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer and mobile developer."
      />
      <meta property="og:image" content="https://imgur.com/HJTfpN0.png" />
      <meta property="og:url" content="https://thearcher.dev" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Josh Gimenes',
};
