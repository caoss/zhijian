var extendObservable = require('../libs/mobx').extendObservable;
const http = require("../utils/http.js");
const api = require("../utils/api.js");

 var HomeStore = function () {
     extendObservable(this, {
         // observable data
         todos: [],
         todoText: 'aaa',
         categoryData: {
            data: [],
            total: 0
          },
         // computed data
         get count() {
             return this.todos.length;
         }
     });

     // action
    this.loadCategoryClauseResults = function(params = {}) {
      let { pageNo = 1, pageSize = 10, state = '', type = '', country = '', year = '', week = '', order = '', mode = 'replace' } = params;

      return http.get(api.VIDEO_SEARCH_BY_TAGS, { pageNo, pageSize, state, type, country, year, week, order }).then((res) => {
        console.log(res);
        if (res.code !== 0) {
          this.categoryData = {
            data: [],
            total: 0
          };
          return;
        }

        let data = [];

        for (let r of res.data.list) {
          const imgUrl = JSON.parse(r.photos).large;

          data.push({
            id: r.id,
            title: r.title,
            refreshTag: r.refreshTag,
            state: r.state,
            rating: r.rating,
            hot: r.hot,
            opState: r.opState,
            mainlandPubdate: r.mainlandPubdate,
            countries: r.countries,
            currentSeries: r.currentSeries,
            episodesCount: r.episodesCount,
            watchSeriesNum: r.watchSeriesNum,
            img: imgUrl,
            updateEpisode: r.currentSeries,
            subtype: r.subtype,
            isSubscribing: false
          })
        }
        if (mode === "replace") {
          this.categoryData = {
            data: data,
            total: res.data.total
          }
        } else {
          this.categoryData = {
            data: this.categoryData.data.concat(data),
            total: res.data.total
          }
        }
      }).catch((err) => {
        // console.log(err);
        this.categoryData = {
          data: [],
          total: 0
        };
      })
    },
     this.addTodo = function (title) {
         this.todos.push({
             title: title
         });
     }

     this.removeTodo = function () {
         this.todos.pop();
     }
 }

 module.exports = {
     default: new HomeStore,
 }