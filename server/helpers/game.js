module.exports = function(db) {

  const exampleGameId = "5c197a4b956aa4a4c5851a39";
  // const exampleGame = db.loadGame(exampleGameId);

  return {

    async newGame() {

      const id = exampleGameId;
      const step = await db.loadStep(id, 0);

      return {
        gameid: gameId,
        pageid: step.pageid,
        title: step.title,
        url: step.canonicalurl,
        destinations: step.destinations,
        // clues: step.clues
      };

    },

    async travelTo(gameId, articleId) {

      gameId = exampleGameId;

      const step = await db.findStepByArticle(gameId, articleId);

      return (!step) ? null : {
        gameid: gameId,
        pageid: step.pageid,
        title: step.title,
        url: step.canonicalurl,
        destinations: step.destinations,
      };
    }

  };

};
