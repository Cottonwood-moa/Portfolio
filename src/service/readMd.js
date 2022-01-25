class ReadMd {
  async readGithubMd(repository) {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = fetch(
      `https://raw.githubusercontent.com/Cottonwood-moa/${repository}/master/README.md`,
      requestOptions
    )
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
    return res;
  }
}
export default ReadMd;
