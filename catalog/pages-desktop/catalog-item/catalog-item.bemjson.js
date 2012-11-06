({
    block: 'b-page',
    title: 'catalog item',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content: {
                block: 'catalog-item',
                content: [
                {
                    block: 'b-title',
                    content: 'Название единицы каталога',
                },
                {
                    block: 'b-synonyms',
                    content: 'Синонимы'
                },
                {
                    block: 'b-keywords',
                    content: [
                    {
                        elem: 'word',
                        content: [
                        {
                            block: 'b-link',
                            url: '/search',
                            content: 'Первое ключевое слово'
                        }
                    ]
                },
                {
                    elem: 'word',
                    content: [
                    {
                        block: 'b-link',
                        url: '/search',
                        content: 'Второе ключевое слово'
                    }
                    ]
                }
                ]
            }
        ]
            }
})
