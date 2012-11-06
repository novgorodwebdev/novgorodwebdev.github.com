({
    block: 'b-page',
    title: 'Title of Catalog',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content:[
        {
            block: 'b-search',
            attrs: { action: '/search/' },
            input: {
                elem: 'input',
                attrs: { value: 'Компания, продукт, услуга, имя, адрес и тд.' }
            },
            button: {
                elem: 'button',
                attrs: { value: 'Найти!' }
            }
        },
        {
            block: 'b-catalog-alfabet',
            mods: { lang: 'ru' },
            content: {elem: 'letter'}
        },
        {
            block: 'b-catalog-alfabet',
            mods: { lang: 'en' },
            content: {elem: 'letter'}
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
})
