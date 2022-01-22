class ReadMd {
  async readGithubMd() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://raw.githubusercontent.com/Cottonwood-moa/Portfolio/master/README.md",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
}
export default ReadMd;
