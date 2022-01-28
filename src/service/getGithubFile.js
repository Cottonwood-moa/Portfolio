class GetGithubFile {
  async getFile(folder) {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = fetch(
      `https://raw.githubusercontent.com/Cottonwood-moa/Portfolio/master/aboutLabs/reactBasicTemplate/README.md`,
      requestOptions
    )
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
    return res;
  }
}
export default GetGithubFile;
