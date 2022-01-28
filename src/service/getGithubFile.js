class GetGithubFile {
  async getAboutCode(folder) {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = fetch(
      `https://raw.githubusercontent.com/Cottonwood-moa/Portfolio/master/aboutLabs/${folder}/README.md`,
      requestOptions
    )
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
    return res;
  }
  async getCode(folder) {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = fetch(
      `https://raw.githubusercontent.com/Cottonwood-moa/Portfolio/master/aboutLabs/${folder}/code.md`,
      requestOptions
    )
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
    return res;
  }
  async getPackage(folder) {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = fetch(
      `https://raw.githubusercontent.com/Cottonwood-moa/Portfolio/master/aboutLabs/${folder}/package.md`,
      requestOptions
    )
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
    return res;
  }
}
export default GetGithubFile;
