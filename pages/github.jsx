import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} public repos</h3>
        </div>
        <div>
          <h3>{user.owned_private_repos} private repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  const user = await userRes.json();


  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  
  let repos = await repoRes.json();

  // Featured repos to prioritize (from the projects tab)
  const featuredRepoNames = [
    'jarvis',
    'Learnable',
    'phoneagent',
    'utah-road-conditions',
    'wholi',
    'neural-network-bird',
  ];

  // Separate featured repos and others
  const featuredRepos = [];
  const otherRepos = [];

  repos.forEach((repo) => {
    const lowerName = repo.name.toLowerCase();
    const featuredIndex = featuredRepoNames.findIndex(
      (name) => name.toLowerCase() === lowerName
    );
    if (featuredIndex !== -1) {
      featuredRepos.push({ ...repo, featuredIndex });
    } else {
      otherRepos.push(repo);
    }
  });

  // Sort featured repos by their order in the featuredRepoNames array
  featuredRepos.sort((a, b) => a.featuredIndex - b.featuredIndex);

  // Sort other repos by stars
  otherRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);

  // Take featured repos first, then fill remaining slots with top starred repos
  repos = [...featuredRepos, ...otherRepos].slice(0, 6);

  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 10,
  };
}

export default GithubPage;
