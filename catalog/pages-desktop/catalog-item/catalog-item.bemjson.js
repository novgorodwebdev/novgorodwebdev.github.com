({
    block  :'b-page',
    title  :'catalog item',
    favicon:'/favicon.ico',
    head   :[
        { elem:'css', url:'_catalog-item.css', ie:false },
        { block:'i-jquery', elem:'core' },
        { elem:'js', url:'_catalog-item.js' },
        { elem:'meta', attrs:{ name:'description', content:'' }},
        { elem:'meta', attrs:{ name:'keywords', content:'' }}
    ],
    content:[
        {
            block  :'b-catalog-item',
            content:[
                {
                    elem   :'layout',
                    mods   :{ column:'left' },
                    content:[

                        {
                            block  :'b-title',
                            content:'Название единицы каталога'
                        },
                        {
                            block  :'b-synonyms',
                            content:'Синонимы'
                        },
                        {
                            block  :'b-contacts',
                            content:[
                                {
                                    block  :'b-address',
                                    content:'Город Великий Новгород, улица Первая, дом 1, корпус 2, строение 6, офис 100'
                                },
                                {
                                    block  :'b-phones',
                                    content:[
                                        { block:'b-phone', mods:{type:'reception'}, content:'+ 7 8162 00-00-00' },
                                        { block:'b-phone', mods:{type:'director'}, content:'+ 7 8162 00-00-00' },
                                        { block:'b-phone', mods:{type:'accountant'}, content:'+ 7 8162 00-00-00' }
                                    ]
                                }
                            ]
                        },
                        {
                            block  :'b-timetable',
                            content:'Пн - Пт: 8-20'
                        },
                        {
                            block  :'b-keywords',
                            content:[
                                {
                                    elem   :'word',
                                    content:[
                                        {
                                            block  :'b-link',
                                            url    :'/search',
                                            content:'Первое ключевое слово'
                                        }
                                    ]
                                },
                                {
                                    elem   :'word',
                                    content:[
                                        {
                                            block  :'b-link',
                                            url    :'/search',
                                            content:'Второе ключевое слово'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem   :'layout',
                    mods   :{ column:'right' },
                    content:[
                        {
                            block:'b-map',
                            mods :{
                                'api'        :'dynamic',
                                'geo-objects':'yes'
                            },
                            js   :{
                                'type'  :'yandex#map',
                                'lang'  :'RU-ru',
                                'center':[31.269844291845086, 58.52342351147416],
                                'spn'   :[0.004096, 0.002311 ],
                                'zoom'  :16,
                                'points':[
                                    {
                                        "location"    :{"latitude":58.52278369717714, "longitude":31.270251987615346},
                                        "name"        :"uno", "type":"single",
                                        balloonContent:"Софийская площадь"
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
