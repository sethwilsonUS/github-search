// Client ID: 6ee4eed808ef59a9ccbd
// Client Secret: eb7f736ef397a23e4301a53926129b9d82978098

class GitHub {
  constructor() {
    this.client_id = gh_client_id;
    this.client_secret = gh_client_secret;
    this.repoCount = 5;
    this.repoSort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repoCount
      }&sort=${this.repoSort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
