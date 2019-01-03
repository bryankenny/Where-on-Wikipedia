const apiURL = "https://en.wikipedia.org/w/api.php?action=query";

module.exports = function(request) {

  return {

    /*
      Build and send a request to Wikipedia's query api

      Adapted from:
      https://github.com/jtessler/studio-wiki-race/blob/master/src/WikiApi.js

      Note: Article titles
    */
    async wikiQuery(queryParams) {

      const params = [apiURL, "&format=json"];

      if (!queryParams.action) params.push("&action=query");

      // Make sure titles are safely encoded
      (queryParams.titles)
        && (queryParams.titles = encodeURIComponent(queryParams.titles));

      Object.keys(queryParams).forEach((param) => {
        params.push(`&${param}=${queryParams[param]}`);
      });

      const query = params.join("");

      return new Promise((resolve, reject) => {
        request(query,
          ((err, res, body) => {

            if (err) {
              console.log("WikiQuery failed");
              console.log("query:");
              console.log(query);
              console.log("error:");
              console.log(err);

              reject(err);

            } else {

              // Heading off occasional bad responses
              try {
                const parsed = JSON.parse(body);
                resolve(parsed);
              } catch (e) {
                console.log("Bad query response");
                console.log("\nquery:");
                console.log(query);
                console.log("\nresponse:");
                console.log(JSON.stringify(res, null, 2));
                console.log("\nbody:");
                console.log(body);
                console.log("\nerror:");
                console.log(e);

                reject(e);
              }
            }
          })
        );
      });
    },

    async getArticleById(articleId) {
      const data = await this.getArticleData(articleId);
      if (!articleId) return 1 / 0;

      return data;
    },

    async getRandomArticleId() {
      const params = {
        list: "random",
        rnnamespace: 0,
        rnlimit: 1
      };

      const id = await this.wikiQuery(params)
        .then((data) => data.query.random[0].id);

      return id;
    },

    async getArticleParseData(articleId) {
      const params = {
        action: "parse",
        pageid: articleId,
        prop: "images|sections|displaytitle|wikitext"
      };

      const data = this.wikiQuery(params)
        .then((data) => data.parse);

      return data;
    },

    async getArticleData(articleId) {
      const params = {
        action: "query",
        format: "json",
        prop: "links|linkshere|categories|info",
        pageids: articleId,
        plnamespace: "0",
        pllimit: "100",
        pldir: "ascending",
        lhprop: "pageid|title",
        lhnamespace: "0",
        lhshow: "!redirect",
        lhlimit: "100",
        clshow: "!hidden",
        cllimit: "50",
        inprop: "url"
      };

      const data = await this.wikiQuery(params)
        .then((data) => data.query.pages[articleId]);

      return data;
    },

    async getArticleIdFromTitle(title) {
      const params = {
        titles: title
      };

      return this.wikiQuery(params)
        .then((data) => Object.values(data.query.pages)[0].pageid);
    }
  };

};
