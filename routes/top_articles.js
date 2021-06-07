const { response } = require("express");
const express = require("express");
const router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('cee093b8b40149d7bf314b17e72b00e5');

router.get("/", async(req,res) => {
    try {
       await newsapi.v2.topHeadlines({
            category: 'technology',
            language: 'en',
            sortBy: 'relevancy',
            pageSize: 40,
          }).then(response => {
            res.send(response)
          });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
})

module.exports = router;