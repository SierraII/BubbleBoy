var config = {

    "keywords" : [
        "Chinese",
        "Point",
        "Donald Trump",
        "Trump",
        "Kim Kardashian",
        "Kardashian",
        "Honey-G",
        "Kanye West",
        "X-Factor",
        "guitar",
        "Status",
        "RIP"
    ],
    "collections" : [

        {

            "id" : "facebook",
            "name" : "Facebook",
            "trigger" : "Facebook",
            "url" : "http://www.facebook.com",
            "global_selectors" : ["p", "span"],
            "global_parents" : ["[data-testid]", "._427x", "._4-u2", "userContentWrapper", "userContentWrapper _5pcr"],
            "custom_selectors" : [
                {
                    "id" : "._3ekx",
                    "children" : ["a"]
                }
            ],
            "containers" : [
                {
                    "name" : "Timeline",
                    "selector" : "#contentArea"
                },
                {
                    "name" : "Page",
                    "selector" : "#pagelet_timeline_main_column"
                }
            ]

        }

    ]

};
