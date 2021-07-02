const Database = require('./db')

Database.then(async db => {
    // inserir dados na tabela
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-27.2244003",
            "-49.660684",
            "Lar dos meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social.",
            "77988885555",
            "https://images.unsplash.com/photo-1599663254500-47f502ca2732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI1MTY2NDQy&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
            "Veja como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horários de visitas Das 18h até 8h",
            "0"
        );
    `)

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    
    //consultar somente um orphanage pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)   
})