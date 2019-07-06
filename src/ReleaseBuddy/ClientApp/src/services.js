const getBranches = function(project, repo) {
  const url = encodeURI(
    `api/bitbucket-server/projects/${project}/repos/${repo}/branches`
  );
  return fetch(url, {
    method: 'get'
  }).then(res => {
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
    return res.json();
  });
};

export { getBranches };
