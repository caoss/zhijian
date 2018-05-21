var observer = require('../libs/observer').observer;
Page(
    observer(
        {
            props: {
                homeStore: require('../stores/homeStore').default,
            },
            // your other code below
            onLoad: function(){
                this.props.homeStore.loadCategoryClauseResults()
            }
        }
    ),
    {
        data: {
            list: [
                {
                    id: 'form',
                    name: '表单',
                    open: false,
                    pages: ['button', 'list', 'input', 'slider', 'uploader']
                },
            ],
            name:'122333'
        },
        kindToggle: function (e) {
            var id = e.currentTarget.id, list = this.data.list;
            for (var i = 0, len = list.length; i < len; ++i) {
                if (list[i].id == id) {
                    list[i].open = !list[i].open
                } else {
                    list[i].open = false
                }
            }
            this.setData({
                list: list,
                name: name
            });
        }
    }
);
